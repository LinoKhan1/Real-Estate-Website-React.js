// React
import React, { useState } from 'react';

const ContactForm = () => {

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        message: ''
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Handle form submission, e.g., send to API
    };

    return (
        <form onSubmit={handleSubmit} id="contact-form">
            <div className="row">
                <div className="col">
                    <label htmlFor="first_name">First Name</label>
                    <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        placeholder="John"
                        value={formData.first_name}
                        onChange={handleChange}
                    />
                </div>
                <div className="col">
                    <label htmlFor="last_name">Last Name</label>
                    <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        placeholder="Smith"
                        value={formData.last_name}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="johnsmith@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="col">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="+1 (123) 456-7890"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="row">
                <p>Message</p>
                <textarea
                    name="message"
                    id="message"
                    placeholder="Hello, I would like to get in touch with you"
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
                <input type="submit" value="Submit Request" />
            </div>
        </form>
    );
}
export default React.memo(ContactForm);
