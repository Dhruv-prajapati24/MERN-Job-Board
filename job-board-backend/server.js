const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Routes
const jobRoutes = require("./routes/jobRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes Middleware
app.use("/api/jobs", jobRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

console.log("MONGO_URI =", process.env.MONGO_URI);

// MongoDB Connect
mongoose
  .connect(process.env.MONGO_URI, {
  family: 4
})
  .then(() => {
    console.log("MongoDB Connected ✅");

    app.listen(5000, () => {
      console.log("Server running on port 5000 🚀");
    });
  })
  .catch((err) => {
  console.error(err);
});