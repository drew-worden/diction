// Import packages
import { Request, Response } from "express"
import bcrypt from "bcrypt"
// import jwt from "jsonwebtoken"

// Import models
import User from "../../models/user-model"

// Import utilities
import logger from "../../utilities/logger"

// Register controller
async function registerController(req: Request, res: Response) {
	try {
		// Get data from request body
		const { username, email, password } = req.body

		// Check if user exists
		const userExists = await User.exists({ email, username })
		if (userExists) {
			logger.warn(`User already exists: ${email}.`)
			return res
				.status(409)
				.json({ message: "user already exists", timestamp: new Date().toISOString() })
		}

		// Hash password
		const hashedPassword = await bcrypt.hash(password, 10)

		// Create user
		const newUser = await User.create({
			username: username,
			email: email,
			password: hashedPassword
		})

		// Create JWT token
		const token = "JWT_TOKEN"

		// Send response
		logger.info(`User created: ${newUser.email}.`)
		return res.status(201).json({
			message: "user created",
			user: {
				username: newUser.username,
				email: newUser.email,
				createdAt: newUser.createdAt,
				updatedAt: newUser.updatedAt,
				token
			},
			timestamp: new Date().toISOString()
		})
	} catch (error) {
		logger.error(error)
		return res
			.status(500)
			.json({ message: "internal server error", timestamp: new Date().toISOString() })
	}
}

// Exports
export default registerController
