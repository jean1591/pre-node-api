// MODELS
const User = require("../models/User");

//  @desc     Register user
//  @route    GET /auth/register
//  @access   Public
exports.getRegister = async (req, res, next) => {
	res.render("auth/register");
};

//  @desc     Get login page
//  @route    GET /auth/login
//  @access   Public
exports.getLogin = async (req, res, next) => {
	res.render("auth/login");
};

//  @desc     Register user
//  @route    POST /auth/register
//  @access   Public
exports.register = async (req, res, next) => {
	const { name, email, password } = req.body;

	// Create user
	const user = await User.create({ name, email, password });

	// Create token
	const token = user.getSignedJwtToken();

	res.status(200).json({ success: true, token });

	// res.redirect("/admin/dashboard");
};

//  @desc     Login user
//  @route    POST /auth/login
//  @access   Public
exports.login = async (req, res, next) => {
	const { email, password } = req.body;

	// Validate email & password
	if (!email || !password) {
		res.redirect("/auth/login");
	}

	// Check for user
	const user = await User.findOne({ email }).select("+password");

	// Invalid credentials (401)
	if (!user) {
		res.redirect("/auth/login");
	}

	// Check if passwords match
	const isMatch = await user.matchPassword(password);

	// Invalid credentials (401)
	if (!isMatch) {
		res.redirect("/auth/login");
	}

	// Create token
	const token = user.getSignedJwtToken();

	res.status(200).json({ success: true, token });
};
