// REQUIRES
const axios = require("axios");

// MODELS
const Property = require("../models/Property");

//  @desc     Get all properties
//  @route    GET /properties
//  @access   Public
exports.getProperties = async (req, res, next) => {
	let properties = [];
	try {
		properties = await Property.find();
	} catch (error) {}

	res.render("properties/properties", {
		count: properties.length,
		data: properties
	});
};

//  @desc     Get property by its id
//  @route    GET /properties/:id
//  @access   Public
exports.getProperty = async (req, res, next) => {
	let property = {};
	let agent = {};
	try {
		property = await Property.findById(req.params.id);
		agent = await axios.get("https://randomuser.me/api/?inc=name,picture,email,cell&nat=FR");
	} catch (error) {}

	res.render("properties/property", {
		data: property,
		agent: agent.data.results[0]
	});
};
