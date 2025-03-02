import React from "react";

const DonationForm = () => {
    return (
        <form className="form">
            <h3>Donation Fundraising Form</h3>
            <input type="text" placeholder="Full Name" required />
            <input type="text" placeholder="Amount" required />
            <textarea placeholder="Message (Optional)"></textarea>
            <button type="submit">Donate</button>
        </form>
    );
};

export default DonationForm;
