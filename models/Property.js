const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema({
	_id: mongoose.Types.ObjectId,
	title: String,
	desc: String,
	price: Number,
	surface: Number,
	nbRoom: Number,
	phone: String,
	contact: String,
	createdAt: Date,
	updatedAt: Date,
	deletedAt: Date,
	online: Boolean,
	streetAddress: String,
	city: String,
	postal: String,
	coordinates: String,
	imgId: String,
	imgOriginal: String,
	imgPortrait: String
});

module.exports = mongoose.model("Property", PropertySchema);
