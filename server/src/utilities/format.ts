// Import packages
import { ExpressJoiError } from "express-joi-validation"

// Import types
import { FormattedValidationError } from "../types/utility-types"

// Format validation error
function formatValidationError(error: ExpressJoiError) {
	const errorMessages: string[] = []
	if (error.error?.details) {
		error.error.details.forEach((detail) => {
			errorMessages.push(detail.message.replace(/"/g, ""))
		})
	} else {
		errorMessages.push("improperly formatted request body")
	}

	const formattedError: FormattedValidationError = {
		type: error.type,
		messages: errorMessages,
		timestamp: new Date().toISOString()
	}

	return formattedError
}

// Exports
export { formatValidationError }
