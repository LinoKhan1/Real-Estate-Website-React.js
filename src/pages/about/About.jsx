// React
import React from "react";
import { Link } from 'react-router-dom';
import LazyLoad from "react-lazyload";
// Styles && CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.scss';
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRavelry, faAtlassian, faAmazon, faYCombinator } from '@fortawesome/free-brands-svg-icons';

// Components 
import ContactComponent from "../../components/specific/ContactComponent";
import HeroSection from "./HeroSection";
import LeadershipSection from "./LeadershipSection";
import NewsSection from "./NewsSection.JSX";
// Images
import Team_img1 from '../../assets/images/team1.webp';
import Team_img2 from '../../assets/images/team2.webp';



const About = () => {
    return (
        <div className="about-page">
            <div className="main">
                {/** Hero Section */}
                <HeroSection />
                {/** Team Section */}
                <div className="team-section">
                    <section className="section">
                        <div className="row">
                            <div className="col-lg-5">
                                <h1 className="display-2">Our Team</h1>
                                <p>
                                    At Prime Stone Capital, headquartered in San Francisco with a global network of experts, our team is our greatest asset. We are continually seeking driven, talented individuals who are passionate about transforming real estate investment. If you’re motivated by the opportunity to make a significant impact in the real estate sector, we invite you to connect with us.
                                </p>
                                <button onClick={() => document.getElementById('leadership-section').scrollIntoView({ behavior: 'smooth' })} className="primary-btn">Explore our team</button>
                            </div>
                            <div className="col-lg-6">
                                <div className="row image-row">
                                    <div className="col larger-image">
                                        <LazyLoad height={200} offset={100}>
                                            <img className="img-fluid" src={Team_img2} alt="Prime stone Capital Team" />
                                        </LazyLoad>
                                    </div>
                                    <div className="col smaller-image">
                                        <LazyLoad height={200} offset={100}>
                                            <img className="img-fluid" src={Team_img1} alt="Prime Stone Capital Team" />
                                        </LazyLoad>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/** Investor Section */}
                <div className="investor-section">
                    <section className="section">
                        <div className="title">
                            <h1 className="display-2">
                                Our Backers
                            </h1>
                        </div>
                        <div className="backers">
                            <p>
                                With over $75M raised from top-tier investors, Prime Stone Capital is well-positioned to deliver exceptional real estate investment opportunities. Our investors' trust and support empower us to offer innovative solutions and strategic guidance, ensuring we meet and exceed your investment objectives.
                            </p>
                            <span>
                                <div className="icons">
                                    <FontAwesomeIcon className="brand" icon={faRavelry} size="3x" />
                                    <FontAwesomeIcon className="brand" icon={faAtlassian} size="3x" />
                                    <FontAwesomeIcon className="brand" icon={faAmazon} size="3x" />
                                    <FontAwesomeIcon className="brand" icon={faYCombinator} size="3x" />
                                </div>
                            </span>
                        </div>
                    </section>
                </div>
                {/** Leadership Section */}
                <LeadershipSection />

                {/** News Section */}
                <NewsSection/>
                
            </div>
            <ContactComponent />
        </div>
    );
};

export default About;
