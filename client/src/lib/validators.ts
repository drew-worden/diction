// Import packages
import type { ValidatorMessage } from "../types/validators"

// Form Validators
function validateLoginForm(email: string, password: string): ValidatorMessage {
	const emailValidation = validateEmail(email)
	if (!emailValidation.valid) return emailValidation
	const passwordValidation = validateLoginPassword(password)
	if (!passwordValidation.valid) return passwordValidation
	return { valid: true, message: "Form is valid." }
}

function validateRegisterForm(
	firstName: string,
	lastName: string,
	email: string,
	username: string,
	password: string,
	confirmPassword: string
): ValidatorMessage {
	const firstNameValidation = validateFirstName(firstName)
	if (!firstNameValidation.valid) return firstNameValidation
	const lastNameValidation = validateLastName(lastName)
	if (!lastNameValidation.valid) return lastNameValidation
	const emailValidation = validateEmail(email)
	if (!emailValidation.valid) return emailValidation
	const usernameValidation = validateUsername(username)
	if (!usernameValidation.valid) return usernameValidation
	const passwordValidation = validateRegisterPassword(password)
	if (!passwordValidation.valid) return passwordValidation
	const confirmPasswordValidation = validateConfirmPassword(password, confirmPassword)
	if (!confirmPasswordValidation.valid) return confirmPasswordValidation
	return { valid: true, message: "Form is valid." }
}

// Field Validators
function validateRegisterPassword(password: string): ValidatorMessage {
	if (!password) return { valid: false, message: "Password is required", field: "password" }
	if (password.length < 8)
		return {
			valid: false,
			message: "Password should have a minimum length of 8",
			field: "password"
		}
	if (password.length > 32)
		return {
			valid: false,
			message: "Password should have a maximum length of 32",
			field: "password"
		}
	if (!password.match(/[A-Z]/))
		return {
			valid: false,
			message: "Password should contain at least 1 uppercase character",
			field: "password"
		}
	if (!password.match(/[a-z]/))
		return {
			valid: false,
			message: "Password should contain at least 1 lowercase character",
			field: "password"
		}
	if (!password.match(/[0-9]/))
		return {
			valid: false,
			message: "Password should contain at least 1 numeric character",
			field: "password"
		}
	if (!password.match(/[^A-Za-z0-9]/))
		return {
			valid: false,
			message: "Password should contain at least 1 special character",
			field: "password"
		}
	if (password.match(/\s/))
		return {
			valid: false,
			message: "Password should not contain white spaces",
			field: "password"
		}
	if (!password.match(/^[A-Za-z0-9!@#$%^&*()_]+$/))
		return {
			valid: false,
			message: "Password should contain only latin characters",
			field: "password"
		}
	return { valid: true, message: "Password is valid.", field: "password" }
}

function validateLoginPassword(password: string): ValidatorMessage {
	if (!password) return { valid: false, message: "Password is required", field: "password" }
	return { valid: true, message: "Password is valid.", field: "password" }
}

function validateEmail(email: string): ValidatorMessage {
	if (!email) return { valid: false, message: "Email is required", field: "email" }
	if (
		!email.match(
			/* eslint-disable */
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			/* eslint-enable */
		)
	)
		return { valid: false, message: "Email is invalid", field: "email" }
	return { valid: true, message: "Email is valid.", field: "email" }
}

function validateFirstName(firstName: string): ValidatorMessage {
	if (!firstName) return { valid: false, message: "First name is required", field: "firstName" }
	if (firstName.length < 1)
		return {
			valid: false,
			message: "First name should have a minimum length of 1",
			field: "firstName"
		}
	if (firstName.length > 32)
		return {
			valid: false,
			message: "First name should have a maximum length of 32",
			field: "firstName"
		}
	return { valid: true, message: "First name is valid.", field: "firstName" }
}

function validateLastName(lastName: string): ValidatorMessage {
	if (!lastName) return { valid: false, message: "Last name is required", field: "lastName" }
	if (lastName.length < 1)
		return {
			valid: false,
			message: "Last name should have a minimum length of 1",
			field: "lastName"
		}
	if (lastName.length > 32)
		return {
			valid: false,
			message: "Last name should have a maximum length of 32",
			field: "lastName"
		}
	return { valid: true, message: "Last name is valid.", field: "lastName" }
}

function validateUsername(username: string): ValidatorMessage {
	if (!username) return { valid: false, message: "Username is required", field: "username" }
	if (username.length < 1)
		return {
			valid: false,
			message: "Username should have a minimum length of 1",
			field: "username"
		}
	if (username.length > 16)
		return {
			valid: false,
			message: "Username should have a maximum length of 16",
			field: "username"
		}
	return { valid: true, message: "Username is valid.", field: "username" }
}

function validateConfirmPassword(password: string, confirmPassword: string): ValidatorMessage {
	if (!confirmPassword)
		return { valid: false, message: "Confirm password is required", field: "confirmPassword" }
	if (password !== confirmPassword)
		return {
			valid: false,
			message: "Confirm password should match the password field",
			field: "confirmPassword"
		}
	return { valid: true, message: "Confirm password is valid.", field: "confirmPassword" }
}

// Exports
export { validateLoginForm, validateRegisterForm }
