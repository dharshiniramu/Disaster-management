import React from "react";

const VolunteerRegistrationForm = () => {
    return (
        <form className="form">
            <h3>Volunteer Registration Form</h3>
            <input type="text" placeholder="Full Name" required />
            <input type="text" placeholder="Contact No." required />
            <textarea placeholder="Why do you want to volunteer?"></textarea>
            <button type="submit">Register</button>
        </form>
    );
};

export default VolunteerRegistrationForm;
