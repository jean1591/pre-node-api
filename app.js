// REQUIRES
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const path = require("path");
const bodyParser = require("body-parser");

// FILES
const connectDB = require("./config/db.js");

// Init app
const app = express();

// View engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Public folder
app.use(express.static(path.join(__dirname, "public")));

// Load env variables
dotenv.config({ path: "./config/config.env" });

// Connect DB
connectDB();

// MIDDLEWARE
// Dev logging
app.use(morgan("dev"));

// Routes
const home = require("./routes/home");
const properties = require("./routes/properties");
const admin = require("./routes/admin");
const auth = require("./routes/auth");

// Mount Routers
app.use("/", home);
app.use("/properties", properties);
app.use("/admin", admin);
app.use("/auth", auth);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`.yellow.bold));
