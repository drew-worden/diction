// Import packages
import { Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

// Import utilities
import logger from "../utilities/logger"

// Import types
import { RequestWithUser } from "../types/middleware-types"

// Get environment variables
import { env } from "../server"

// Verify token
function verifyToken(req: RequestWithUser, res: Response, next: NextFunction) {
	// Get token from request
	let token = req.body.token || req.query.token || req.headers["authorization"]

	// Check if token exists
	if (!token) {
		logger.warn("A token is required for authentication.")
		return res.status(403).json({
			message: "token is required for authentication",
			timestamp: new Date().toISOString()
		})
	}

	// Verify token
	try {
		token = token.replace(/^Bearer\s+/, "")
		const decoded = jwt.verify(token, env.JWT_SECRET)
		req.user = decoded
	} catch (error) {
		// Log error and return response
		logger.error("Authorization token is invalid.")
		return res.status(401).json({
			message: "authorization token is invalid",
			timestamp: new Date().toISOString()
		})
	}

	// Move to next middleware
	next()
}

// Exports
export { verifyToken }
