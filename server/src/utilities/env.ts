// Import packages
import dotenv from "dotenv"

// Import types
import { Env } from "../types/utility-types"

// Load environment variables
dotenv.config()

function loadEnv() {
	// Specify required environment variables
	const loadedEnvKeys = Object.keys(process.env)
	const requiredEnv = ["PORT", "MONGODB_URI", "JWT_SECRET"]
	const env: Env = {
		PORT: "",
		MONGODB_URI: "",
		JWT_SECRET: ""
	}

	// Check if required environment variables are present
	requiredEnv.forEach((envKey) => {
		if (!loadedEnvKeys.includes(envKey)) {
			throw new Error(
				`No ${envKey} provided. Please add a ${envKey} variable to your .env file.`
			)
		} else {
			env[envKey] = process.env[envKey] as string
		}
	})

	return env
}

// Exports
export { loadEnv }
