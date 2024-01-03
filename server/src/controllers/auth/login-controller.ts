// Import packages
import { Request, Response } from "express"

// Login controller
function loginController(req: Request, res: Response) {
	res.send("Login")
}

// Exports
export default loginController
