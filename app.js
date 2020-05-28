// REQUIRES
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");

// FILES
const connectDB = require("./config/db.js");

// Init app
const app = express();

// Load env variables
dotenv.config({ path: "./config/config.env" });

// Connect DB
connectDB();

// MIDDLEWARE
// Dev logging
app.use(morgan("dev"));

// Routes
const properties = require("./routes/properties");

// Mount Routers
app.use("/api/v1/properties", properties);

app.get("/", (req, res) => res.send("Hello"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`.yellow.bold));
