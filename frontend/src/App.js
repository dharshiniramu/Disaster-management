import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import DisasterTracker from "./components/DisasterTracker"; // Import DisasterTracker

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/disaster-tracker" element={<DisasterTracker />} /> {/* New Route */}
      </Routes>
    </Router>
  );
}

export default App;
