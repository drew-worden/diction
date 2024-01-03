// Import packages
import { ExpressJoiError } from "express-joi-validation"

// Interfaces
interface FormattedValidationError {
	type: ExpressJoiError["type"]
	messages: string[]
	timestamp: string
}

interface Env {
	PORT: string
	MONGODB_URI: string
	JWT_SECRET: string
	[key: string]: string
}

// Exports
export { FormattedValidationError, Env }
