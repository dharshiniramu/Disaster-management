import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Import CSS for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">DSS</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/disaster-tracker">Disaster</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
