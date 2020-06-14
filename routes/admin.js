// REQUIRES
const express = require("express");

// FILES
const { login, dashboard, getProperties, getProperty } = require("../controllers/admin");

const router = express.Router();

router.route("/login").get(login);
router.route("/dashboard").get(dashboard);
router.route("/properties").get(getProperties);
router.route("/properties/:id").get(getProperty);

module.exports = router;
