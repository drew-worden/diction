// Import packages
import axios from "axios"

// Import environment variables
import { PUBLIC_API_SERVER_URL } from "$env/static/public"

// Initialize api client
const apiClient = axios.create({
	baseURL: PUBLIC_API_SERVER_URL + "/api",
	timeout: 1000
})

// Define login request
function login(username: string, password: string) {
	try {
		return apiClient.post("/auth/login", { username, password })
	} catch (error) {
		return {
			error: true,
			exception: error
		}
	}
}

// Define register request
function register(
	firstName: string,
	lastName: string,
	email: string,
	username: string,
	password: string,
	confirmPassword: string
) {
	try {
		return apiClient.post("/auth/register", {
			firstName,
			lastName,
			email,
			username,
			password,
			confirmPassword
		})
	} catch (error) {
		return {
			error: true,
			exception: error
		}
	}
}

// Exports
export { login, register }
