import React from 'react';
import { Link } from 'react-router-dom';


const Features = ({ heart_pulse_rate_orange_2, heart_pulse_rate_orange, featured_thumb_1, features_icon_1, featured_thumb_2, features_icon_2, featured_thumb_3, features_icon_3 }) => {
    const featureData = [
        { thumb: featured_thumb_1, icon: features_icon_1, title: 'IT Solutions', details: 'Bring to the table win-win survival strategies to ensure proactive domination.', link: '/service-details' },
        { thumb: featured_thumb_2, icon: features_icon_2, title: 'Cyber Security', details: 'Bring to the table win-win survival strategies to ensure proactive domination.', link: '/service-details' },
        { thumb: featured_thumb_3, icon: features_icon_3, title: 'Cloud Services', details: 'Bring to the table win-win survival strategies to ensure proactive domination.', link: '/service-details' },
    ]

    return (
        <div id="rs-service" className="rs-featured-2 pt-115 pb-120">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="rs-section-title black">
                            <div className="top-sub-heading">
                                <img src={heart_pulse_rate_orange_2} alt="icon" />
                                <span>Our Feachered Products</span>
                                <img src={heart_pulse_rate_orange} alt="icon" />
                            </div>
                            <h2 className="title split-in-fade">We run all kinds of Products</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        featureData && featureData.map((data, index) => {
                            return (
                                <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="rs-featured-2__item">
                                        <div className="rs-thumb">
                                            <img src={data.thumb} alt="" />
                                        </div>
                                        <div className="rs-content">
                                            <div className="rs-icon">
                                                <img src={data.icon} alt="" />
                                            </div>
                                            <h4 className="title"><Link to={data.link}>{data.title}</Link></h4>
                                            <p>{data.details}</p>
                                            <Link className="rs-link" to={data.link}>Read More <i className="ri-arrow-right-fill"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="rs-featured-2__btn">
                            <Link className="main-btn" to="/services"> View All Services <i className="ri-arrow-right-fill"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;