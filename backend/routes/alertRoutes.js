const express = require("express");
const Alert = require("../models/Alert");
const router = express.Router();

// Fetch all alerts
router.get("/alerts", async (req, res) => {
  try {
    const alerts = await Alert.find(); // Fetch alerts from DB
    res.json(alerts);
  } catch (error) {
    res.status(500).json({ error: "Error fetching alerts" });
  }
});

// Store disaster alert
router.post("/alerts", async (req, res) => {
  try {
    const newAlert = new Alert(req.body);
    await newAlert.save();
    
    // Fetch updated alerts after adding new one
    const updatedAlerts = await Alert.find();
    res.status(201).json(updatedAlerts); // Send updated alerts list
  } catch (error) {
    res.status(500).json({ error: "Error saving alert" });
  }
});

module.exports = router;
