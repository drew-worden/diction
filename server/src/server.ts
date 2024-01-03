// Import packages
import express, { Request, Response } from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import compression from "compression"
import cors from "cors"
import mongoose from "mongoose"

// Import utilities
import logger from "./utilities/logger"

// Load environment variables
dotenv.config()
const port = process.env.PORT || 3000
const mongodbUri = process.env.MONGODB_URI

// Initialize Express server
const server = express()

//Set stream for logger
const stream = {
	write: (message: string) => logger.http(message)
}

// Middleware
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(compression())
server.use(cors())
server.use(
	morgan(":remote-addr :method :url :status :res[content-length] - :response-time ms", {
		stream,
		skip: () => false
	})
)

// Routes
server.get("/", (req: Request, res: Response) => {
	res.send("Welcome to Express & TypeScript Server")
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
