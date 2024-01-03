// Import packages
import { ExpressJoiError } from "express-joi-validation"

// Interfaces
interface FormattedValidationError {
	type: ExpressJoiError["type"]
	messages: string[],
	timestamp: string
}

// Exports
export { FormattedValidationError }
