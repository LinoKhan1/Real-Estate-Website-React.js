// React
import React from "react";
import './Contact.scss';

// Icons
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// Component
import ContactComponent from "../../components/specific/ContactComponent";

const Contact = () => {
    return (
        <div className="contact-page">
            {/** Hero Section */}
            <div className="hero-section">
                <h1 className="display-1">Contact Us</h1>
            </div>

            {/** Contact Section */}
            <div className="contact-section">
                <section className="section">
                    <div className="row">
                        <div className="col-lg-4">
                            <h1>Get in Touch</h1>
                            <p>Whether you're interested in our investment opportunities or have any questions, we're here to help. Reach out to us by phone, email, or by filling out the contact form below.</p>
                            <div className="contact-info">
                                <div className="contact-item">
                                    <span className="icon-circle"><FaPhone /></span>
                                    <p>+1 (613) 440-4888</p>
                                </div>
                                <div className="contact-item">
                                    <span className="icon-circle"><MdEmail /></span>
                                    <p>info@primestonecapital.com</p>
                                </div>
                                <div className="contact-item">
                                    <span className="icon-circle"><FaMapMarkerAlt /></span>
                                    <p>1234 Investment Lane, Suite 100<br />San Francisco, CA 94105</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <form action="" id="contact-form">
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="first_name">First Name</label>
                                        <input type="text" id="first_name" name="first_name" placeholder="John" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="last_name">Last Name</label>
                                        <input type="text" id="last_name" name="last_name" placeholder="Smith" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="email">Email Address</label>
                                        <input type="email" id="email" name="email" placeholder="johnsmith@gmail.com" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input type="text" id="phone" name="phone" placeholder="+1 (123) 456-7890" />
                                    </div>
                                </div>
                                <div className="row">
                                    <p>Message</p>
                                    <textarea name="message" id="message" placeholder="Hello, I would like to get in touch with you"></textarea>
                                    <input type="submit" value="Submit Request" />
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
            <ContactComponent />
        </div>
    );
}

export default Contact;
