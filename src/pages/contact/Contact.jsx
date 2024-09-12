import React from "react";
import './Contact.scss';

// Icons
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import ContactComponent from "../../components/specific/ContactComponent"; '../../components/specific/ContactComponent.jsx';


const Contact = () => {
    return (
        <div className="contact-page">
            {/** Hero Section */}
            <div className="hero-section">
                <h1 className="display-1">Contact</h1>
            </div>
            {/** Contact Section */}
            <div className="contact-section">
                <section className="section">
                    <div className="row">
                        <div className="col-lg-4">
                            <h1>Get in touch</h1>
                            <p>We're here to be helpful. Give us a call, an email, or drop a message in the contact form.</p>
                            <div className="contact-info">
                                <div className="contact-item">
                                    <span className="icon-circle"><FaPhone /></span>
                                    <p>+1 (613) 440-4888</p>
                                </div>
                                <div className="contact-item">
                                    <span className="icon-circle"><FaPhone /></span>
                                    <p>+1 (613) 440-4888</p>
                                </div>
                                <div className="contact-item">
                                    <span className="icon-circle"><MdEmail /></span>
                                    <p>info@conductlaw.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <form action="" id="contact-form">
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="user_name">First name</label>
                                        <input type="text" id="user_name" name="user_name" placeholder="John" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="lastName">Last name</label>
                                        <input type="text" id="lastName" name="lastName" placeholder="Smith" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="user_email">Email address</label>
                                        <input type="email" id="user_email" name="user_email" placeholder="johnsmith@gmail.com" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="phone">Phone number</label>
                                        <input type="text" id="phone" name="phone" placeholder="+27765905100" />
                                    </div>
                                </div>
                                <div className="row">
                                    <p>Leave a Message</p>
                                    <textarea name="message" id="message" placeholder="Hello, I would like to get in touch with you"></textarea>
                                    <input type="submit" value="Submit request" />
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
            <ContactComponent/>
        </div>
    );
}

export default Contact;
