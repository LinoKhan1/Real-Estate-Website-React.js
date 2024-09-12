import React from "react";
import { Link } from "react-router-dom";
import './layout.scss'; // Import the updated stylesheet

import Capital_logo from "../../assets/images/PrimeStone-Logo.png";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand link text-light" to="/"><img className="img-fluid" src={Capital_logo}/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-light active" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/news">Insights</Link>
                        </li>
                        <li className="nav-item">
                            <button className="primary-btn">
                                <Link className="link" to="/contact">
                                    Contact us
                                </Link>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
