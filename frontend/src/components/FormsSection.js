import React, { useState } from "react";
import MissingPersonsForm from "./MissingPersonsForm";
import DonationForm from "./DonationForm";
import ResourceRequestForm from "./ResourceRequestForm";
import VolunteerRegistrationForm from "./VolunteerRegistrationForm";
import "../styles/FormsSection.css";

const FormsSection = () => {
    const [activeForm, setActiveForm] = useState("missing");

    return (
        <div className="forms-container">
            <div className="form-tabs">
                <button className={activeForm === "missing" ? "active" : ""} onClick={() => setActiveForm("missing")}>
                    Missing Persons Form
                </button>
                <button className={activeForm === "donation" ? "active" : ""} onClick={() => setActiveForm("donation")}>
                    Donation Fundraising Form
                </button>
                <button className={activeForm === "resource" ? "active" : ""} onClick={() => setActiveForm("resource")}>
                    Resource Request Form
                </button>
                <button className={activeForm === "volunteer" ? "active" : ""} onClick={() => setActiveForm("volunteer")}>
                    Volunteer Registration Form
                </button>
            </div>

            <div className="form-content">
                {activeForm === "missing" && <MissingPersonsForm />}
                {activeForm === "donation" && <DonationForm />}
                {activeForm === "resource" && <ResourceRequestForm />}
                {activeForm === "volunteer" && <VolunteerRegistrationForm />}
            </div>
        </div>
    );
};

export default FormsSection;
