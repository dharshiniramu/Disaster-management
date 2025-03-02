import React, { useState } from "react";
import "../styles/DisasterForm.css";

const districts = [
  "Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem",
  "Erode", "Thanjavur", "Vellore", "Tirunelveli", "Kanyakumari"
];

const disasterTypes = [
  "Flood", "Earthquake", "Cyclone", "Landslide", "Tsunami",
  "Drought", "Wildfire", "Pandemic", "Thunderstorm", "Heatwave"
];

function DisasterForm() {
  const [formData, setFormData] = useState({
    district: "",
    place: "",
    date: "",
    disasterType: "",
    description: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("http://localhost:5000/api/alerts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const updatedAlerts = await response.json(); // Get updated alerts list
        setFormData({ district: "", place: "", date: "", disasterType: "", description: "" });
        updateTracker(updatedAlerts); // Update tracker page
        alert("Alert sent successfully!");
      } else {
        alert("Failed to send alert");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  

  return (
    <div className="form-container">
      <h2>Report a Disaster</h2>
      <form onSubmit={handleSubmit}>
        <label>District*</label>
        <select name="district" value={formData.district} onChange={handleChange} required>
          <option value="">Select District</option>
          {districts.map((district, index) => (
            <option key={index} value={district}>{district}</option>
          ))}
        </select>

        <label>Place*</label>
        <input type="text" name="place" value={formData.place} onChange={handleChange} required />

        <label>Date*</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />

        <label>Disaster Type*</label>
        <select name="disasterType" value={formData.disasterType} onChange={handleChange} required>
          <option value="">Select Disaster Type</option>
          {disasterTypes.map((type, index) => (
            <option key={index} value={type}>{type}</option>
          ))}
        </select>

        <label>Description*</label>
        <textarea name="description" value={formData.description} onChange={handleChange} required />

        <button type="submit">Send Alert</button>
      </form>
    </div>
  );
}

export default DisasterForm;
