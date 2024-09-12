// React
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// Icons
import { FaArrowRight } from 'react-icons/fa';

// Styles & CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.scss';
import ContactComponent from "../../components/specific/ContactComponent"; '../../components/specific/ContactComponent.jsx';


// Images
import Insight_img from '../../assets/images/rent-stabilization-img.webp';

const Home = () => {
    useEffect(() => {
        // Function to animate numbers
        const animateNumbers = () => {
            const numbers = document.querySelectorAll('.hero-number');
            numbers.forEach(number => {
                const target = parseInt(number.getAttribute('data-target'));
                let count = 0;
                const increment = Math.ceil(target / 100);

                const updateNumber = () => {
                    if (count < target) {
                        count += increment;
                        number.textContent = `${Math.min(count, target)}`;
                        setTimeout(updateNumber, 10);
                    }
                };

                updateNumber();
            });
        };

        // Use Intersection Observer to trigger animation when in view
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateNumbers();
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(document.querySelector('.investment-section'));
    }, []);

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
                                    <p>
                                        Since 2010
                                    </p>
                                    <div className="row">
                                        <div className="col">
                                            <h3 className="hero-number" data-target="142">0</h3>
                                            <h3>Loans</h3>
                                        </div>
                                        <div className="col">
                                            <h3 className="hero-number" data-target="972">$0</h3>
                                            <h3>Invested</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="map-background">
                        {/* Google Map iframe */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.308594940228!2d-74.00601548459411!3d40.71277577932962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a2f19d1a8a5%3A0x2e5b6182b2d2a95d!2sOne%20World%20Trade%20Center!5e0!3m2!1sen!2sus!4v1639168567617!5m2!1sen!2sus"
                            style={{ border: 0, width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>

                {/** Insights Section */}
                <div className="insights-section">
                    <section className="section">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="title">
                                    <h1 className="display-1">Latest Insight</h1>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="insight-image">
                                    <img className="img-fluid" src={Insight_img} alt="Rent Stabilization Image" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 insight-preview">
                                <h2>
                                    Rent Stabilization and Regional Banks
                                </h2>
                                <Link className="link" to="/news">
                                    Read our Spring 2024 Report <FaArrowRight />
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
                <ContactComponent/>


            </div>
        </div>
    );
}

export default Home;
