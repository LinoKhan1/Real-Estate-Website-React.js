import React from "react";
import './layout.scss';
import LazyLoad from "react-lazyload";

import PrimeStoneCapital_logo from "../../assets/images/PrimeStone-Logo.webp";

const Footer = () => {
    return (
        <div className="footer-component">
            {/** Footer Section */}
            <div className="footer-section">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="logo">
                            <LazyLoad height={200} offset={100}>
                                <img src={PrimeStoneCapital_logo} alt="Prime Stone Capital Logo" />
                            </LazyLoad>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <h2>Company</h2>
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
                {/** Top Arrow */}
                <a href="#top" className="top-arrow">↑</a>
            </div>

            {/** Copyright Section */}
            <div className="copyright-section">
                <div className="copyright-links">
                    <ul>
                        <li>Terms and Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="copyright-info">
                    <span>© 2024</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
