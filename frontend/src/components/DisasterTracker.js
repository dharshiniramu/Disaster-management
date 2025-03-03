import React, { useEffect, useState } from "react";
import "../styles/DisasterTracker.css";

const DisasterTracker = () => {
  const [disasters, setDisasters] = useState([]);
  const [filteredDisasters, setFilteredDisasters] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");

  // Fetch alerts from backend
  const fetchAlerts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/alerts");
      const data = await response.json();
      setDisasters(data);
      setFilteredDisasters(data);
    } catch (error) {
      console.error("Error fetching alerts:", error);
    }
  };

  useEffect(() => {
    fetchAlerts(); // Fetch alerts when component loads
  }, []);

  // Function to categorize disaster (Past, Ongoing, Upcoming)
  const categorizeDisaster = (dateString) => {
    const today = new Date();
    const disasterDate = new Date(dateString);
    today.setHours(0, 0, 0, 0);
    disasterDate.setHours(0, 0, 0, 0);

    if (disasterDate.getTime() === today.getTime()) return "Ongoing";
    return disasterDate.getTime() < today.getTime() ? "Past" : "Upcoming";
  };

  // **Filter, Search & Sort Function**
  useEffect(() => {
    let updatedDisasters = [...disasters];

    // **1. Apply Filter**
    if (filter !== "all") {
      updatedDisasters = updatedDisasters.filter(
        (disaster) => categorizeDisaster(disaster.date).toLowerCase() === filter
      );
    }

    // **2. Apply Search**
    if (searchTerm.trim() !== "") {
      updatedDisasters = updatedDisasters.filter(
        (disaster) =>
          disaster.disasterType.toLowerCase().includes(searchTerm.toLowerCase()) ||
          disaster.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
          disaster.place.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // **3. Apply Sorting**
    if (sortBy === "date") {
      updatedDisasters.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortBy === "type") {
      updatedDisasters.sort((a, b) => a.disasterType.localeCompare(b.disasterType));
    }

    setFilteredDisasters(updatedDisasters);
  }, [filter, searchTerm, sortBy, disasters]);

  return (
    <div className="disaster-tracker-container">
      <h2 className="title">Disaster Tracker</h2>

      {/* Filters and Search */}
      <div className="filters-container">
        <div className="filter-group">
          <label>Filter by Category:</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="ongoing">Ongoing</option>
            <option value="past">Past</option>
            <option value="upcoming">Upcoming</option>
          </select>
        </div>

        <div className="search-group">
          <label>Search:</label>
          <input
            type="text"
            placeholder="Search by disaster type or location"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="sort-group">
          <label>Sort by:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
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
          {filteredDisasters.length === 0 ? (
            <tr>
              <td colSpan="5" className="empty-message">No disaster reports found.</td>
            </tr>
          ) : (
            filteredDisasters.map((disaster, index) => (
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
