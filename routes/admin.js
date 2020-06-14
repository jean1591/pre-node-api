// REQUIRES
const express = require("express");

// FILES
const {
	login,
	dashboard,
	getProperties,
	getProperty,
	addProperty,
	editProperty
} = require("../controllers/admin");

const router = express.Router();

router.route("/login").get(login);
router.route("/dashboard").get(dashboard);
router.route("/properties").get(getProperties);
router.route("/properties/add").get(addProperty);
router.route("/properties/edit/:id").get(editProperty);
router.route("/properties/:id").get(getProperty);

module.exports = router;
