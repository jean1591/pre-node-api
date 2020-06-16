// MODELS
const Property = require("../models/Property");

//  @desc     Get dashboard
//  @route    GET /admin/dahsboard
//  @access   Private
exports.dashboard = async (req, res, next) => {
	res.render("admin/dashboard", {
		data: []
	});
};

//  @desc     Get all properties
//  @route    GET /admin/properties
//  @access   Private
exports.getProperties = async (req, res, next) => {
	let properties = [];
	try {
		properties = await Property.find();
	} catch (error) {}

	res.render("admin/propertiesAdmin", {
		count: properties.length,
		data: properties
	});
};

//  @desc     Get single property
//  @route    GET /admin/properties/:id
//  @access   Private
exports.getProperty = async (req, res, next) => {
	let property = {};
	try {
		property = await Property.findById(req.params.id);
	} catch (error) {}

	res.render("admin/propertyAdmin", {
		data: property
	});
};

//  @desc     Add property
//  @route    GET /admin/properties/add
//  @access   Private
exports.addProperty = async (req, res, next) => {
	res.render("admin/propertyAdd");
};

//  @desc     Edit property
//  @route    GET /admin/properties/edit/:id
//  @access   Private
exports.editProperty = async (req, res, next) => {
	res.render("admin/propertyEdit");
};
