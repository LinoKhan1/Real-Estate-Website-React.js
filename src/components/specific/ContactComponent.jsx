import React from "react";

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
        </>
    );
}
export default ContactComponent;