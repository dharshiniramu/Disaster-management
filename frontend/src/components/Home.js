import React from "react";
import Carousel from "./Carousel";
import DisasterForm from "./DisasterForm";
import FormsSection from "./FormsSection";  // Import FormsSection
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <Carousel />
      <section id="disaster-form">
        <DisasterForm />
      </section>
      <section id="forms-section">
        <FormsSection />
      </section>
    </div>
  );
}

export default Home;
