// MODELS
const Property = require("../models/Property");

//  @desc     Get all properties
//  @route    GET /api/v1/properties
//  @access   Public
exports.getProperties = async (req, res, next) => {
	const properties = await Property.find();
	res.status(200).json({ success: true, count: properties.length, data: properties });
};

//  @desc     Get property by its id
//  @route    GET /api/v1/properties/:id
//  @access   Public
exports.getProperty = async (req, res, next) => {
	const property = await Property.findById(req.params.id);
	res.status(200).json({ success: true, data: property });
};
