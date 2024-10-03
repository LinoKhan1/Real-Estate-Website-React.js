import React, { useState } from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import './layout.scss'; // Import the updated stylesheet

import PrimeStoneCapital_logo from "../../assets/images/PrimeStone-logo.webp";

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand link text-light" to="/">
                    <LazyLoad height={200} offset={100}>
                        <img className="img-fluid" src={PrimeStoneCapital_logo} alt="Prime Stone Capital Logo" />
                    </LazyLoad>
                </Link>
                <button className="navbar-toggler" type="button" onClick={toggleNav} aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-white" aria-current="page" to="/" onClick={toggleNav}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/about" onClick={toggleNav}>About</Link>
                        </li>
                        <li className="nav-item">
                            <button className="primary-btn">
                                <Link className="link" to="/contact">Contact us</Link>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
