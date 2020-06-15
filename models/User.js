const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
	name: String,
	email: String,
	password: {
		type: String,
		select: false
	},
	resetPasswordToken: String,
	resetPasswordExpire: Date,
	createAt: {
		type: Date,
		default: Date.now
	}
});

// Encrypt password using bcrypt
UserSchema.pre("save", async function(next) {
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(String(this.password), salt);
});

module.exports = mongoose.model("User", UserSchema);
