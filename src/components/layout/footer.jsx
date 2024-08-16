import React from "react";

import './layout.scss';

const Footer = () => {
    /* Footer Component */
    return (
        <div className="footer-component" >
            {/** Footer Section */}
            <div className="footer-section">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="logo">
                            <h1>
                                Company Name
                            </h1>
                        </div>

                    </div>
                    <div className="col-lg-3">
                        <h2>
                            Company
                        </h2>
                        <ul>
                            <li>About</li>
                            <li>News</li>
                        </ul>

                    </div>
                    <div className="col-lg-3">
                        <h2>Get in touch</h2>
                        <ul>
                            <li>Contact us</li>
                            <li>LinkedIn</li>
                        </ul>

                    </div>
                </div>

            </div>
            {/** Copyright Section */}
            <div className="copyright-section">

            </div>


        </div>
    );

}
export default Footer