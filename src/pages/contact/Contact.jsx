import React from "react";
import './Contact.scss';
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
                            <span><p>+1 (613) 440-4888</p></span>
                            <span><p>+1 (613) 440-4888</p></span>
                            <span><p>info@conductlaw.com</p></span>

                        </div>
                        <div className="col-lg-7">
                            <form action="
                            ">
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
            {/* Get in touch */}
            <div className="in-touch-section">
                    <section className="section">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="title">
                                    <h1 className="display-2">Start building with Render</h1>
                                </div>

                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <p>
                                    The modern cloud for developers and teams.
                                </p>
                            </div>
                            <div className="col">
                                <button className="secondary-btn">Get Started</button>
                            </div>
                        </div>
                    </section>
                </div>
            {/*<div className="contact-section">
                <section className="section">
                    <div className="row">
                        <div className="col-lg-3">
                            <h1>Contact</h1>
                            <p>
                                Please reach out for assistance with your loan request or other inquiry.
                            </p>

                        </div>
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-lg-3">
                                    <h2>
                                        For Borrowers
                                    </h2>

                                </div>
                                <div className="col-lg-9">
                                    <p>
                                        For loan quotes and related borrower support, please email help@maverickrep.com or call 646-553-4814.                                </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3">
                                    <h2>
                                        For Investors
                                    </h2>
                                </div>
                                <div className="col-lg-9">
                                    <p>
                                        For investor assistance, please email investor.relations@maverickrep.com or call 646-480-2084.
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3">
                                    <h2>
                                        General Inquiries
                                    </h2>
                                </div>
                                <div className="col-lg-9">
                                    <p>
                                        For all other inquiries, please email info@maverickrep.com.
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3">
                                    <h2>
                                        Mailing Address
                                    </h2>
                                </div>
                                <div className="col-lg-9">
                                    <p>
                                        Maverick Real Estate Partners LLC, 100 Park Avenue, Suite 2805, New York NY 10017
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>*/}
        </div>
    );
}

export default Contact;