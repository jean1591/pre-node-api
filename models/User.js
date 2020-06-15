const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

// Sign JWT & return
UserSchema.methods.getSignedJwtToken = function() {
	return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRE
	});
};

// Match user entered password to hashed password in DB
UserSchema.methods.matchPassword = async function(enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", UserSchema);
