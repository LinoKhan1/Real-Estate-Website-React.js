import React from "react";
import { Link } from "react-router-dom";
import './Component.scss';

const ContactComponent = () => {
    return (
        <>
            {/* Contact Component */}
            <div className="contact-component">
                <section className="section">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="title">
                                <h1 className="display-2">Start Your Investment Journey with Us</h1>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <p>
                                Discover how Prime Stone Capital can help you maximize your returns with strategic real estate investments. Our team of experts is here to guide you every step of the way.
                            </p>
                        </div>
                        <div className="col">
                            <button className="secondary-btn">
                                <Link className="link" to="/contact">
                                    Contact Us
                                </Link>
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default ContactComponent;
