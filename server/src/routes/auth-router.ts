// Import packages
import express from "express"

// Import controllers
import registerController from "../controllers/auth/register-controller"
import loginController from "../controllers/auth/login-controller"

// Router
const router = express.Router()

// Register route
router.post("/register", registerController)

// Login route
router.post("/login", loginController)

// Exports
export default router
