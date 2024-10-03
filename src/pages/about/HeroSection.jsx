// React
import React from 'react';
import { Link } from 'react-router-dom';

// Images
import Hero_img from '../../assets/images/hero2.webp';
import './About.scss';

const HeroSection = () => {

    return (

        <div className="hero-section">
            <div className="row">
                <div className="col-lg-5 hero-text">
                    <h1 className="display-5">
                        Prime Stone Capital: Your Partner in Strategic Real Estate Investments
                    </h1>
                    <p>
                        At Prime Stone Capital, we provide expert guidance and innovative solutions
                        for real estate investment and wealth management.
                    </p>
                    <Link to="/contact">
                        <button className="primary-btn">Contact us</button>
                    </Link>
                </div>
                <div className="col square">
                </div>
                <div className="col-lg-5">
                        <img className="img-fluid" src={Hero_img} alt="Hero Image" />
                </div>
            </div>
        </div>
    );

}
export default React.memo(HeroSection);