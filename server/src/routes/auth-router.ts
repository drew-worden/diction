// Import packages
import express from "express"
import validator from "express-joi-validation"

// Import validators
import { registerSchema, loginSchema } from "../validators/auth-validator"

// Import controllers
import registerController from "../controllers/auth/register-controller"
import loginController from "../controllers/auth/login-controller"

// Router
const router = express.Router()

// Validator
const routeValidator = validator.createValidator({ passError: true })

// Register route
router.post("/register", routeValidator.body(registerSchema), registerController)

// Login route
router.post("/login", routeValidator.body(loginSchema), loginController)

// Exports
export default router
