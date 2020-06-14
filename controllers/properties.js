// MODELS
const Property = require("../models/Property");

//  @desc     Get all properties
//  @route    GET /properties
//  @access   Public
exports.getProperties = async (req, res, next) => {
	// const properties = await Property.find();
	res.render("properties/properties", {
		data: []
	});
};

//  @desc     Get property by its id
//  @route    GET /properties/:id
//  @access   Public
exports.getProperty = async (req, res, next) => {
	// const property = await Property.findById(req.params.id);
	res.render("properties/property", {
		data: []
	});
};
