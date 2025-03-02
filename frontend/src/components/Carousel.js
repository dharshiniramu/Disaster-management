import React from "react";
import "../styles/Carousel.css";

function Carousel() {
  return (
    <div className="carousel">
      <div className="carousel-container">
        <img src="/assets/image1.jpg" alt="Disaster 1" />
        <img src="/assets/image2.jpg" alt="Disaster 2" />
      </div>
    </div>
  );
}

export default Carousel;
