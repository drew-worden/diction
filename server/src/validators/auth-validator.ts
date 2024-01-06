// Import packages
import Joi from "joi"
import { joiPasswordExtendCore } from "joi-password"

// Password validation
const JoiPassword = Joi.extend(joiPasswordExtendCore)

// Validations
const usernameValidation = Joi.string().min(1).max(16).required().messages({
	"any.required": "{#label} field is required",
	"string.base": "{#label} field should be a string",
	"string.empty": "{#label} field should not be empty",
	"string.min": "{#label} field should have a minimum length of {#limit}",
	"string.max": "{#label} field should have a maximum length of {#limit}"
})
const registerPasswordValidation = JoiPassword.string()
	.min(8)
	.max(32)
	.minOfSpecialCharacters(1)
	.minOfLowercase(1)
	.minOfUppercase(1)
	.minOfNumeric(1)
	.noWhiteSpaces()
	.onlyLatinCharacters()
	.required()
	.messages({
		"any.required": "{#label} field is required",
		"string.base": "{#label} field should be a string",
		"string.empty": "{#label} field should not be empty",
		"string.min": "{#label} field should have a minimum length of {#limit}",
		"string.max": "{#label} field should have a maximum length of {#limit}",
		"password.minOfUppercase":
			"{#label} field should contain at least {#min} uppercase character",
		"password.minOfSpecialCharacters":
			"{#label} field should contain at least {#min} special character",
		"password.minOfLowercase":
			"{#label} field should contain at least {#min} lowercase character",
		"password.minOfNumeric": "{#label} field should contain at least {#min} numeric character",
		"password.noWhiteSpaces": "{#label} field should not contain white spaces",
		"password.onlyLatinCharacters": "{#label} field should contain only latin characters"
	})
const loginPasswordValidation = JoiPassword.string().required().messages({
	"any.required": "{#label} field is required",
	"string.base": "{#label} field should be a string",
	"string.empty": "{#label} field should not be empty"
})
const emailValidation = Joi.string().email().required().messages({
	"any.required": "{#label} field is required",
	"string.base": "{#label} field should be a string",
	"string.empty": "{#label} field should not be empty",
	"string.email": "{#label} field should be a valid email"
})
const nameValidation = Joi.string().min(1).max(32).required().messages({
	"any.required": "{#label} field is required",
	"string.base": "{#label} field should be a string",
	"string.empty": "{#label} field should not be empty",
	"string.min": "{#label} field should have a minimum length of {#limit}",
	"string.max": "{#label} field should have a maximum length of {#limit}"
})
const confirmPasswordValidation = JoiPassword.string()
	.valid(Joi.ref("password"))
	.required()
	.messages({
		"any.required": "{#label} field is required",
		"string.base": "{#label} field should be a string",
		"string.empty": "{#label} field should not be empty",
		"any.only": "{#label} field should match the password field"
	})

// Validation schemas
const registerSchema = Joi.object({
	firstName: nameValidation,
	lastName: nameValidation,
	username: usernameValidation,
	email: emailValidation,
	password: registerPasswordValidation,
	confirmPassword: confirmPasswordValidation
})

const loginSchema = Joi.object({
	email: emailValidation,
	password: loginPasswordValidation
})

// Exports
export { registerSchema, loginSchema }
