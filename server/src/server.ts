// Import packages
import cors from "cors"
import dotenv from "dotenv"
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

// Load environment variables
dotenv.config()
const port = process.env.PORT || 3000
const mongodbUri = process.env.MONGODB_URI

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

// Check for MongoDB URI and connect to database
if (!mongodbUri) {
	logger.error("No MongoDB URI provided. Please add MONGODB_URI variable to .env file.")
} else {
	mongoose
		.connect(mongodbUri)
		.then(() => {
			logger.info("Successfully connected to MongoDB database.")

			//Start server listening on port on successful connection to database
			server.listen(port, () => {
				logger.info(`Server successfully started up on port ${port}.`)
			})
		})
		.catch((error) => {
			// Log error if connection to database fails
			logger.error(error)
		})
}
