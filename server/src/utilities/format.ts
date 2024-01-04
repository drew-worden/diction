// Import packages
import { ExpressJoiError } from "express-joi-validation"

// Import types
import { FormattedValidationError } from "../types/utility-types"

// Format validation error
function formatValidationError(error: ExpressJoiError) {
	// Check for error details, replace quotes, and push to array
	const errorMessages: string[] = []
	if (error.error?.details) {
		error.error.details.forEach((detail) => {
			errorMessages.push(detail.message.replace(/"/g, ""))
		})
	} else {
		errorMessages.push("improperly formatted request body")
	}

	// Create formatted error object
	const formattedError: FormattedValidationError = {
		type: error.type,
		messages: errorMessages,
		timestamp: new Date().toISOString()
	}

	return formattedError
}

// Exports
export { formatValidationError }
