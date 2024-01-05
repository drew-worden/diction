// Interfaces
interface ValidatorMessage {
	valid: boolean
	message: string
	field?: ValidatorFields
}

type ValidatorFields =
	| "firstName"
	| "lastName"
	| "username"
	| "email"
	| "password"
	| "confirmPassword"
	| null

// Exports
export type { ValidatorMessage, ValidatorFields }
