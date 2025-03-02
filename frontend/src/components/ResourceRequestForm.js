import React from "react";

const ResourceRequestForm = () => {
    return (
        <form className="form">
            <h3>Resource Request Form</h3>
            <input type="text" placeholder="Full Name" required />
            <input type="text" placeholder="Required Resource" required />
            <textarea placeholder="Details"></textarea>
            <button type="submit">Request Resource</button>
        </form>
    );
};

export default ResourceRequestForm;
