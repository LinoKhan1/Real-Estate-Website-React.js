// React
import React from 'react';
import LazyLoad from 'react-lazyload';

// Images
import WSJ_logo from '../../assets/images/wsj-logo.webp';
import FT_logo from '../../assets/images/Financial_times_logo.webp';
import BBC_logo from '../../assets/images/BBC-logo.webp';
import Bloomberg_logo from '../../assets/images/Bloomberg_logo.webp';


const articles = [
    {
        logo: FT_logo,
        alt: 'Financial Times Logo',
        title: 'Prime Stone Capital Secures $100M Investment in Prime Real Estate Opportunities',
        date: 'April 15, 2023',
        author: 'Matthew Stanley',
    },
    {
        logo: WSJ_logo,
        alt: 'Wall Street Journal Logo',
        title: 'Prime Stone Capital Expands Portfolio with Strategic Acquisitions',
        date: 'July 22, 2023',
        author: 'Jane Smith',
    },
    {
        logo: Bloomberg_logo,
        alt: 'Bloomberg Logo',
        title: 'Prime Stone Capital’s Innovative Strategies Reshape Real Estate Investment Landscape',
        date: 'February 27, 2024',
        author: 'Michael Lee',
    },
    {
        logo: BBC_logo,
        alt: 'BBC Logo',
        title: 'Prime Stone Capital: Leading the Charge in Real Estate Investment',
        date: 'May 10, 2024',
        author: 'Sarah Johnson',
    },
];

const NewsSection = () => {
    return (
        <div className="news-section">
            <section className="section">
                <div className="title-section">
                    <h1 className="display-2">News & Coverage</h1>
                </div>

                {articles.map((article, index) => (
                    <div key={index} className="row">
                        <div className="col-lg-2"></div>
                        <div className="col">
                            <div className="row article">
                                <div className="col">
                                    <div className="title-img">
                                        <LazyLoad height={200} offset={100}>
                                            <img className="img-fluid" src={article.logo} alt={article.alt} />
                                        </LazyLoad>
                                    </div>
                                </div>
                                <div className="col news-preview">
                                    <h3>{article.date}</h3>
                                    <p>{article.title}</p>
                                    <h3>{article.author}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default NewsSection;
