// Import packages
import cors from "cors"
import morgan from "morgan"
import express, { Request, Response, NextFunction } from "express"
import mongoose from "mongoose"
import compression from "compression"
import { ExpressJoiError } from "express-joi-validation"

// Import routes
import authRouter from "./routes/auth-router"

// Import utilities
import logger from "./utilities/logger"
import { formatValidationError } from "./utilities/format"
import { loadEnv } from "./utilities/env"

// Import middleware
import { verifyToken } from "./middleware/auth-middleware"

// Import types
import { Env } from "./types/utility-types"
import { RequestWithUser } from "./types/middleware-types"

// Load environment variables
let env: Env
try {
	env = loadEnv()
} catch (error) {
	throw new Error(error as string)
}

// Initialize Express server
const server = express()

//Set stream for logger
const stream = {
	write: (message: string) => {
		logger.http(message.substring(0, message.lastIndexOf("\n")))
	}
}

// Middleware
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(compression())
server.use(cors())
server.use(
	morgan(":remote-addr :method :url :status :res[content-length] - :response-time ms", {
		stream
	})
)

// Routes
server.use("/api/auth", authRouter)

// Test route
server.get("/test", verifyToken, (req: RequestWithUser, res: Response) => {
	res.status(200).json({
		user: req.user,
		message: "success",
		timestamp: new Date().toISOString()
	})
})

// Handle validation errors
/* eslint-disable */
server.use((err: ExpressJoiError, req: Request, res: Response, next: NextFunction) => {
	/* eslint-enable */
	if (err && err.error && err.type) {
		const e: ExpressJoiError = err
		return res.status(400).json(formatValidationError(e))
	} else {
		return res.status(500).json({
			type: "body",
			messages: ["improperly formatted request body"],
			timestamp: new Date().toISOString()
		})
	}
})

// Connect to database
mongoose
	.connect(env.MONGODB_URI)
	.then(() => {
		logger.info("Successfully connected to MongoDB database.")

		//Start server listening on port on successful connection to database
		server.listen(env.PORT, () => {
			logger.info(`Server successfully started up on port ${env.PORT}.`)
		})
	})
	.catch((error) => {
		// Log error if connection to database fails
		logger.error(error)
	})

// Exports
export { env }
