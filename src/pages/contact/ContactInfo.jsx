// React
import React from 'react';
// Icons
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactInfo = () => {
    return (
        <>
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
        </>

    );
}
export default React.memo(ContactInfo);
