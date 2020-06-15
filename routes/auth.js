// REQUIRES
const express = require("express");

// FILES
const { register, login, getRegister, getLogin } = require("../controllers/auth");

// MODELS
const User = require("../models/User");

const router = express.Router();

router.route("/register").get(getRegister).post(register);
router.route("/login").get(getLogin).post(login);

module.exports = router;
