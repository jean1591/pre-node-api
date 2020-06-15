// MODELS
const User = require("../models/User");

//  @desc     Register user
//  @route    GET /admin/register
//  @access   Public
exports.getRegister = async (req, res, next) => {
	res.render("auth/register");
};

//  @desc     Get login page
//  @route    GET /admin/login
//  @access   Public
exports.getLogin = async (req, res, next) => {
	res.render("auth/login");
};

//  @desc     Register user
//  @route    POST /admin/register
//  @access   Public
exports.register = async (req, res, next) => {
	const { name, email, password } = req.body;

	// Create user
	const user = await User.create({ name, email, password });

	res.redirect("/admin/dashboard");
};

//  @desc     Login user
//  @route    POST /admin/login
//  @access   Public
exports.login = async (req, res, next) => {
	const { name, email, password } = req.body;

	// Create user
	const user = await User.create({ name, email, password });

	res.status(200).json({ success: true });
};
