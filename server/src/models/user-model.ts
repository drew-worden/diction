// Import packages
import mongoose from "mongoose"

// User schema
const userSchema = new mongoose.Schema({
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
		trim: true,
		minlength: 8,
		maxlength: 32
	}
})

// User model
const User = mongoose.model("User", userSchema)

// Exports
export default User
