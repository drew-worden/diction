// Import packages
import { Request, Response } from "express"

// Register controller
function registerController(req: Request, res: Response) {
	res.send("Register")
}

// Exports
export default registerController
