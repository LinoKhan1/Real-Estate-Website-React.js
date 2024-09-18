// React
import React, { useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
// Icons
import { FaArrowRight } from 'react-icons/fa';  // Import only needed icon

// Styles & CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.scss';

// Lazy load ContactComponent
const ContactComponent = React.lazy(() => import("../../components/specific/ContactComponent"));

// Images
import Insight_img from '../../assets/images/rent-stabilization-img.webp';

const Home = () => {

    // Memoizing animateNumbers to avoid recreating it on every render
    const animateNumbers = useCallback(() => {
        const numbers = document.querySelectorAll('.hero-number');
        numbers.forEach(number => {
            const target = parseInt(number.getAttribute('data-target'), 10);
            let count = 0;
            const increment = Math.ceil(target / 100);

            const updateNumber = () => {
                if (count < target) {
                    count += increment;
                    number.textContent = `${Math.min(count, target)}`;
                    requestAnimationFrame(updateNumber);  // Use requestAnimationFrame for smoother animations
                }
            };
            updateNumber();
        });
    }, []);

    useEffect(() => {
        // Intersection Observer to animate numbers when in view
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateNumbers();
                    observer.unobserve(entry.target);
                }
            });
        });

        const investmentSection = document.querySelector('.investment-section');
        if (investmentSection) observer.observe(investmentSection);

        return () => {
            if (investmentSection) observer.unobserve(investmentSection);
        };
    }, [animateNumbers]);

    return (
        <div className="home-page">
            <div className="main">
                {/** Hero Section */}
                <div className="hero-section">
                    <section className="section">
                        <div className="row">
                            <div className="col-lg-5">
                                <h1 className="display-1">
                                    Invest with Confidence. Grow with Us.
                                </h1>
                                <p>
                                    Prime Stone Capital specializes in high-growth real estate investments, offering unparalleled transparency and strategic insights into the New York City real estate market.
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
                                            <h3 className="hero-number" data-target="45">0</h3>
                                            <h3>Projects</h3>
                                        </div>
                                        <div className="col">
                                            <h3 className="hero-number" data-target="65000000">$0</h3>
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
                            <div className="col-lg-6">
                                <div className="title">
                                    <h1 className="display-1">Latest Insights</h1>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="insight-image">
                                    <LazyLoad height={200} offset={100}>
                                        <img className="img-fluid" src={Insight_img} alt="Real Estate Investment Insights" />
                                    </LazyLoad>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 insight-preview">
                                <h2>
                                    Navigating the NYC Real Estate Market
                                </h2>
                                <Link className="link" to="/insights">
                                    Explore Our Latest Market Report <FaArrowRight />
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>

                {/** Contact Section - Lazy-loaded */}
                <React.Suspense fallback={<div>Loading...</div>}>
                    <ContactComponent />
                </React.Suspense>
            </div>
        </div>
    );
}

export default Home;
