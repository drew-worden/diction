// Import packages
import mongoose from "mongoose"

// User schema
const userSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
			trim: true
		},
		lastName: {
			type: String,
			required: true,
			trim: true
		},
		username: {
			type: String,
			unique: true,
			required: true,
			lowercase: true,
			trim: true
		},
		email: {
			type: String,
			unique: true,
			required: true,
			lowercase: true,
			trim: true
		},
		password: {
			type: String,
			required: true,
			trim: true
		}
	},
	{ timestamps: true }
)

// User model
const User = mongoose.model("User", userSchema)

// Exports
export default User
