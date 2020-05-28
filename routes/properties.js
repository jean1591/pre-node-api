// REQUIRES
const express = require("express");

// FILES
const { getProperties, getProperty } = require("../controllers/properties");

// MODELS
const Property = require("../models/Property");

const router = express.Router();

router.route("/").get(getProperties);
router.route("/:id").get(getProperty);

module.exports = router;
