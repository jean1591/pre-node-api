// REQUIRES
const express = require("express");

// FILES
const { getHome, getAbout } = require("../controllers/home");

const router = express.Router();

router.route("/").get(getHome);
router.route("/about").get(getAbout);

module.exports = router;
