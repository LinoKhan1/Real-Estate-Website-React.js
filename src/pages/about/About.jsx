// React
import React from "react";
import { Link } from 'react-router-dom';

// Styles && CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.scss';

// Images
import Hero_img from '../../assets/images/hero2.png';
import Team_img1 from '../../assets/images/team1.png';
import Team_img2 from '../../assets/images/team2.png';
import Leader_img1 from '../../assets/images/Martin_profile.png';
import Leader_img2 from '../../assets/images/John_profile.png';
import Leader_img3 from '../../assets/images/Peter_profile.png';
import Leader_img4 from '../../assets/images/leader4.png';
import JP_img from '../../assets/images/JP-Morgan-Chase-Logo.png';
import Investor_img from '../../assets/images/investor.png';

import WSJ_logo from '../../assets/images/wsj-logo.png';
import FT_logo from '../../assets/images/Financial_times_logo.png';
import BBC_logo from '../../assets/images/BBC-logo.png';
import Bloomberg_logo from '../../assets/images/Bloomberg_logo.png';
const About = () => {

    // About Page
    return (
        <div className="about-page">
            <div className="main">
                {/** Hero Section */}
                <div className="hero-section">

                    <div className="row">
                        <div className="col-lg-5 text">
                            <h1 className="display-3">We build accessible and reliable cloud infrastructure.</h1>
                            <div className="hero-text">
                                <p>Render helps software teams ship products fast and at any scale. We host everything from hundred-line prototypes to applications with hundreds of services, all with a relentless commitment to reliability and uptime.</p>
                            </div>
                            <button className="primary-btn">Contact us</button>
                        </div>
                        <div className="col square">
                        </div>
                        <div className="col-lg-5">
                            <img className="img-fluid" src={Hero_img} alt="" />
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
                                    Render is headquartered in San Francisco, California, with remote team members distributed across the globe. We’re always on the lookout to add kind, thoughtful, and exceptionally talented individuals to our team. Drop us a line if you're motivated by the intersection of individual developer experience and global scale.
                                </p>
                                <button className="primary-btn">Explore our team</button>
                            </div>
                            <div className="col-lg-6">
                                <div className="row image-row">
                                    <div className="col larger-image">
                                        <img className="img-fluid" src={Team_img2} alt="Team Image 2" />
                                    </div>
                                    <div className="col smaller-image">
                                        <img className="img-fluid" src={Team_img1} alt="Team Image 1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/** Investor Section */}
                {/*<div className="investor-section">
                    <section className="section">
                        <div className="row">
                            <div className="col investor-text">
                                <h1 className="display-2">Our Backers</h1>
                                <p>
                                    We have raised over $75M from world-class investors. Their support of Render's mission helps us to support yours.
                                </p>
                            </div>
                            <div className="col investors">
                                <img className="img-fluid" src={Investor_img} alt="" />

                            </div>
                        </div>
                    </section>
                </div>*/}
                {/** Leadership Section */}
                <div className="leadership-section">
                    <section className="section">
                        <div className="title">
                            <h1 className="display-2">Our Leadership</h1>
                        </div>
                        <div className="row">
                            <div className="col">
                                <img className="img-fluid" src={Leader_img1} alt="Profile picture" />
                                <h2>John Doe</h2>
                                <h3>Job Title</h3>
                            </div>
                            <div className="col">
                                <img className="img-fluid" src={Leader_img2} alt="Profile picture" />
                                <h2>John Doe</h2>
                                <h3>Job Title</h3>
                            </div>
                            <div className="col">
                                <img className="img-fluid" src={Leader_img3} alt="Profile picture" />
                                <h2>John Doe</h2>
                                <h3>Job Title</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <img className="img-fluid" src={Leader_img1} alt="Profile picture" />
                                <h2>John Doe</h2>
                                <h3>Job Title</h3>
                            </div>
                            <div className="col">
                                <img className="img-fluid" src={Leader_img2} alt="Profile picture" />
                                <h2>John Doe</h2>
                                <h3>Job Title</h3>
                            </div>
                            <div className="col">
                                <img className="img-fluid" src={Leader_img3} alt="Profile picture" />
                                <h2>John Doe</h2>
                                <h3>Job Title</h3>
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
                                            <img className="img-fluid" src={FT_logo} alt="" />
                                        </div>
                                    </div>
                                    <div className="col news-preview">
                                        <h3>Date released</h3>
                                        <p>Maverick Nabs $247M in Signature CRE Loans – Blackstone, Rialto Entity Sell Debt Backed by Office, Multifamily, Retail</p>
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
                                            <img className="img-fluid" src={WSJ_logo} alt="" />
                                        </div>
                                    </div>
                                    <div className="col news-preview">
                                        <h3>Date released</h3>
                                        <p>Maverick Nabs $247M in Signature CRE Loans – Blackstone, Rialto Entity Sell Debt Backed by Office, Multifamily, Retail</p>
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
                                            <img className="img-fluid" src={Bloomberg_logo} alt="" />
                                        </div>
                                    </div>
                                    <div className="col news-preview">
                                        <h3>Date released</h3>
                                        <p>Maverick Nabs $247M in Signature CRE Loans – Blackstone, Rialto Entity Sell Debt Backed by Office, Multifamily, Retail</p>
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
                                            <img className="img-fluid" src={BBC_logo} alt="" />
                                        </div>
                                    </div>
                                    <div className="col news-preview">
                                        <h3>Date released</h3>
                                        <p>Maverick Nabs $247M in Signature CRE Loans – Blackstone, Rialto Entity Sell Debt Backed by Office, Multifamily, Retail</p>
                                        <h3>Article Author</h3>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
                {/** Contact Section */}
                <div className="in-touch-section">
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
            </div>
        </div>
    );
}

export default About;