import React from "react";
import { Link } from "react-router-dom";


// Styles & CSS
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {

    // Home Page
    return (
        <div className="home-page">
            <div className="main">
                {/** Hero Section */}
                <div className="hero-section">
                    <section className="section">
                        <div className="row">
                            <div className="col-lg-5">
                                <h1 className="display-1">
                                    Intelligence. Transparency. Reliability.
                                </h1>
                                <p>
                                    Maverick Real Estate Partners is a private equity fund manager that invests in commercial real estate credit in New York City.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="investment-section">
                                    <h2>
                                        Since 2010
                                    </h2>
                                    <div className="row">
                                        <div className="col">
                                            <h3 className="hero-number">142</h3>
                                            <h3>Loans</h3>
                                        </div>
                                        <div className="col">
                                            <h3 className="hero-humber">$972M</h3>
                                            <h3>Invested</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                {/** Insights Section */}
                <div className="insights-section">
                    <section className="section">
                        <div className="row">
                            <div className="col">
                                <div className="title">
                                    <h1>Latest Insight</h1>
                                </div>

                            </div>
                            <div className="col">
                                <div className="insight-image">
                                    <img src="" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h2>
                                    Rent Statbilization and Regional Banks
                                </h2>
                                <Link className="link" to="/news">
                                    Read our Spring 2024 Report
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>

            </div>

        </div>
    );
}

export default Home;