const mongoose = require("mongoose");

const alertSchema = new mongoose.Schema({
  district: { type: String, required: true },
  place: { type: String, required: true },
  date: { type: Date, required: true },
  disasterType: { type: String, required: true },
  description: { type: String, required: true }
});

const Alert = mongoose.model("Alert", alertSchema);
module.exports = Alert;
