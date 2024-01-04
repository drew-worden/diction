// Import packages
import { Request } from "express"
import { JwtPayload } from "jsonwebtoken"

// Interfaces
interface RequestWithUser extends Request {
	user?: string | JwtPayload
}

// Exports
export { RequestWithUser }
