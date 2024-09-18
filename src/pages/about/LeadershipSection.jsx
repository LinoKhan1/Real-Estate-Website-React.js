// React
import React from 'react';
import LazyLoad from 'react-lazyload';

// Images
import Leader_img1 from '../../assets/images/Martin_profile.webp';
import Leader_img2 from '../../assets/images/John_profile.webp';
import Leader_img3 from '../../assets/images/Peter_profile.webp';

const leaders = [
    { name: 'John Davies', title: 'Chief Executive Officer', imgSrc: Leader_img1, altText: 'Profile picture of John' },
    { name: 'Rob Mayer', title: 'Chief Investment Officer', imgSrc: Leader_img2, altText: 'Profile picture of Rob' },
    { name: 'Peter Jones', title: 'Chief Investment Officer', imgSrc: Leader_img3, altText: 'Profile picture of Peter' },
];

const LeadershipSection = () => {
    return (
        <div className="leadership-section" id="leadership-section">
            <section className="section">
                <div className="title">
                    <h1 className="display-2">Our Leadership</h1>
                </div>
                <div className="row ">
                    {leaders.map((leaders, index) => (
                        <div className="col" key={index}>
                            <LazyLoad height={200} offset={100}>
                                <img className="img-fluid" src={leaders.imgSrc} alt={leaders.altText} />
                            </LazyLoad>
                            <h2>{leaders.name}</h2>
                            <h3>{leaders.title}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </div>

    );

}
export default React.memo(LeadershipSection);