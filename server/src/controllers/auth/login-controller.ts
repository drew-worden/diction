// Import packages
import { Request, Response } from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

// Import models
import User from "../../models/user-model"

// Import utilities
import logger from "../../utilities/logger"

// Get environment variables
import { env } from "../../server"

// Login controller
async function loginController(req: Request, res: Response) {
	try {
		// Get data from request body
		const { email, password } = req.body

		// Check if user exists
		const user = await User.findOne({ email: email.toLowerCase().trim() })
		if (!user) {
			logger.warn(`User doesn't exist: ${email}.`)
			return res
				.status(409)
				.json({ message: "Invalid credentials.", timestamp: new Date().toISOString() })
		}

		// Check if password is correct
		const passwordMatch = await bcrypt.compare(password, user.password)
		if (!passwordMatch) {
			logger.warn(`Password entered incorrectly: ${email}.`)
			return res
				.status(409)
				.json({ message: "Invalid credentials.", timestamp: new Date().toISOString() })
		}

		// Create JWT token
		const token = jwt.sign(
			{
				userId: user._id,
				email: user.email
			},
			env.JWT_SECRET as string,
			{
				expiresIn: "24h"
			}
		)

		// Send response
		logger.info(`User logged in: ${user.email}.`)
		return res.status(201).json({
			message: "user logged in",
			user: {
				username: user.username,
				email: user.email,
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
export default loginController
