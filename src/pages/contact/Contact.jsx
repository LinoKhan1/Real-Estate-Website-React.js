// React
import React from "react";
import './Contact.scss';

// Lazy load ContactComponent
const ContactComponent = React.lazy(() => import("../../components/specific/ContactComponent"));
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

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
                            <ContactInfo />
                        </div>
                        <div className="col-lg-7">
                            <ContactForm />
                        </div>
                    </div>
                </section>
            </div>
            <ContactComponent />
        </div>
    );
}

export default Contact;
