require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Alert = require("./models/Alert"); // Import the Alert model

// Initialize Express App
const app = express();
app.use(cors());
app.use(express.json()); // To parse JSON data
const alertRoutes = require("./routes/alertRoutes");
app.use("/api", alertRoutes); // Use alert routes

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/DisasterAlertsDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
