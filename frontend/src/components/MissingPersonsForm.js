import React from "react";

const MissingPersonsForm = () => {
    return (
        <form className="form">
            <h3>Missing Persons Report</h3>
            <input type="text" placeholder="Full Name" required />
            <input type="text" placeholder="Last Seen Location" required />
            <input type="text" placeholder="Contact No." required />
            <textarea placeholder="Description" required></textarea>
            <input type="file" />
            <button type="submit">Submit Report</button>
        </form>
    );
};

export default MissingPersonsForm;
