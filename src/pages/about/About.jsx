// React
import React from "react";
import { Link } from 'react-router-dom';
import LazyLoad from "react-lazyload";
// Styles && CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRavelry, faAtlassian, faAmazon, faYCombinator } from '@fortawesome/free-brands-svg-icons';

// Components 
import ContactComponent from "../../components/specific/ContactComponent";

// Images
import Hero_img from '../../assets/images/hero2.webp';
import Team_img1 from '../../assets/images/team1.webp';
import Team_img2 from '../../assets/images/team2.webp';
import Leader_img1 from '../../assets/images/Martin_profile.webp';
import Leader_img2 from '../../assets/images/John_profile.webp';
import Leader_img3 from '../../assets/images/Peter_profile.webp';

import WSJ_logo from '../../assets/images/wsj-logo.webp';
import FT_logo from '../../assets/images/Financial_times_logo.webp';
import BBC_logo from '../../assets/images/BBC-logo.webp';
import Bloomberg_logo from '../../assets/images/Bloomberg_logo.webp';

const About = () => {
    return (
        <div className="about-page">
            <div className="main">
                {/** Hero Section */}
                <div className="hero-section">
                    <div className="row">
                        <div className="col-lg-5 hero-text">
                            <h1 className="display-5">Prime Stone Capital: Your Partner in Strategic Real Estate Investments</h1>
                            <p>At Prime Stone Capital, we provide expert guidance and innovative solutions for real estate investment. Whether you're looking to invest in high-growth opportunities or manage diverse property portfolios, our dedicated team is committed to maximizing your returns and ensuring long-term success.</p>
                            <Link to="/contact">
                                <button className="primary-btn">Contact us</button>
                            </Link>
                        </div>
                        <div className="col square">
                        </div>
                        <div className="col-lg-5">
                            <LazyLoad height={200} offset={100}>
                                <img className="img-fluid" src={Hero_img} alt="Hero Image" />
                            </LazyLoad>

                        </div>
                    </div>
                </div>
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
                <div className="leadership-section" id="leadership-section">
                    <section className="section">
                        <div className="title">
                            <h1 className="display-2">Our Leadership</h1>
                        </div>
                        <div className="row">
                            <div className="col">
                                <LazyLoad height={200} offset={100}>
                                    <img className="img-fluid" src={Leader_img1} alt="Profile picture" />

                                </LazyLoad>
                                <h2>John Davies</h2>
                                <h3>Chief Executive Officer</h3>
                            </div>
                            <div className="col">
                                <LazyLoad height={200} offset={100}>
                                    <img className="img-fluid" src={Leader_img2} alt="Profile picture" />

                                </LazyLoad>
                                <h2>Rob Mayer</h2>
                                <h3>Chief Investment Officer</h3>
                            </div>
                            <div className="col">
                                <LazyLoad height={200} offset={100}>
                                    <img className="img-fluid" src={Leader_img3} alt="Profile picture" />

                                </LazyLoad>
                                <h2>Peter Thiel</h2>
                                <h3>Senior Vice President</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <LazyLoad height={200} offset={100}>
                                    <img className="img-fluid" src={Leader_img1} alt="Profile picture" />

                                </LazyLoad>
                                <h2>Matt Davidson</h2>
                                <h3>Sales Lead</h3>
                            </div>
                            <div className="col">
                                <LazyLoad height={200} offset={100}>
                                    <img className="img-fluid" src={Leader_img2} alt="Profile picture" />

                                </LazyLoad>
                                <h2>John Doe</h2>
                                <h3>[Job Title]</h3>
                            </div>
                            <div className="col">
                                <LazyLoad height={200} offset={100}>
                                    <img className="img-fluid" src={Leader_img3} alt="Profile picture" />

                                </LazyLoad>
                                <h2>Jane Doe</h2>
                                <h3>[Job Title]</h3>
                            </div>
                        </div>
                    </section>
                </div>
                {/** News Section */}
                <div className="news-section">
                    <section className="section">
                        <div className="title-section">
                            <h1 className="display-2">News & Coverage</h1>
                        </div>
                        <div className="row">
                            <div className="col-lg-2">
                            </div>
                            <div className="col">
                                <div className="row article">
                                    <div className="col">
                                        <div className="title-img">
                                            <LazyLoad height={200} offset={100}>
                                                <img className="img-fluid" src={FT_logo} alt="Financial Times Logo" />

                                            </LazyLoad>
                                        </div>
                                    </div>
                                    <div className="col news-preview">
                                        <h3>Date released</h3>
                                        <p>Prime Stone Capital Secures $100M Investment in Prime Real Estate Opportunities</p>
                                        <h3>Article Author</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-2">
                            </div>
                            <div className="col">
                                <div className="row article">
                                    <div className="col">
                                        <div className="title-img">
                                            <LazyLoad height={200} offset={100}>
                                                <img className="img-fluid" src={WSJ_logo} alt="Wall Street Jouranl Logo" />

                                            </LazyLoad>
                                        </div>
                                    </div>
                                    <div className="col news-preview">
                                        <h3>Date released</h3>
                                        <p>Prime Stone Capital Expands Portfolio with Strategic Acquisitions</p>
                                        <h3>Article Author</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2">
                            </div>
                            <div className="col">
                                <div className="row article">
                                    <div className="col">
                                        <div className="title-img">
                                            <LazyLoad height={200} offset={100}>
                                                <img className="img-fluid" src={Bloomberg_logo} alt="Bloomberg Logo" />

                                            </LazyLoad>
                                        </div>
                                    </div>
                                    <div className="col news-preview">
                                        <h3>Date released</h3>
                                        <p>Prime Stone Capital’s Innovative Strategies Reshape Real Estate Investment Landscape</p>
                                        <h3>Article Author</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2">
                            </div>
                            <div className="col">
                                <div className="row article">
                                    <div className="col">
                                        <div className="title-img">
                                            <LazyLoad height={200} offset={100}>
                                                <img className="img-fluid" src={BBC_logo} alt="BBL Logo" />

                                            </LazyLoad>
                                        </div>
                                    </div>
                                    <div className="col news-preview">
                                        <h3>Date released</h3>
                                        <p>Prime Stone Capital: Leading the Charge in Real Estate Investment</p>
                                        <h3>Article Author</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <ContactComponent />
        </div>
    );
};

export default About;
