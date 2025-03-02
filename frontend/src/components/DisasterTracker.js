import React, { useEffect, useState } from "react";
import "../styles/DisasterTracker.css";

const DisasterTracker = () => {
  const [disasters, setDisasters] = useState([]);

  // Fetch alerts from backend
  const fetchAlerts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/alerts");
      const data = await response.json();
      setDisasters(data);
    } catch (error) {
      console.error("Error fetching alerts:", error);
    }
  };

  useEffect(() => {
    fetchAlerts(); // Fetch alerts when component loads
  }, []);

  const categorizeDisaster = (dateString) => {
    const today = new Date(); // Get current date (Date object)
    const disasterDate = new Date(dateString); // Convert input date to Date object
  
    // Remove time part from both dates
    today.setHours(0, 0, 0, 0);
    disasterDate.setHours(0, 0, 0, 0);
  
    if (disasterDate.getTime() === today.getTime()) return "Ongoing";
    return disasterDate.getTime() < today.getTime() ? "Past" : "Upcoming";
  };
  

  return (
    <div className="disaster-tracker-container">
      <h2 className="title">Disaster Tracker</h2>

      {/* Filters and Search */}
      <div className="filters-container">
        <div className="filter-group">
          <label>Filter by Category:</label>
          <select>
            <option value="all">All</option>
            <option value="ongoing">Ongoing</option>
            <option value="past">Past</option>
            <option value="upcoming">Upcoming</option>
          </select>
        </div>

        <div className="search-group">
          <label>Search:</label>
          <input type="text" placeholder="Search by disaster type or location" />
        </div>

        <div className="sort-group">
          <label>Sort by:</label>
          <select>
            <option value="default">Default</option>
            <option value="date">Date</option>
            <option value="type">Type</option>
          </select>
        </div>
      </div>

      {/* Disaster Table */}
      <table className="disaster-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Location</th>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {disasters.length === 0 ? (
            <tr>
              <td colSpan="5" className="empty-message">No disaster reports yet.</td>
            </tr>
          ) : (
            disasters.map((disaster, index) => (
              <tr key={index}>
                <td>{disaster.disasterType}</td>
                <td>{`${disaster.district}, ${disaster.place}`}</td> {/* Merge district + place */}
                <td>{disaster.date.split("T")[0]}</td>

                <td>{disaster.description}</td>
                <td className={`category ${categorizeDisaster(disaster.date).toLowerCase()}`}>
                  {categorizeDisaster(disaster.date)}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DisasterTracker;
