
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceFeatures = ({heart_pulse_rate_orange_2,heart_pulse_rate_orange,featured_thumb_1,features_icon_1,featured_thumb_2,features_icon_2,featured_thumb_3,features_icon_3,featured_thumb_5,featured_thumb_4,featured_thumb_6}) => {
    return (
        <div id="rs-service" className="rs-featured-2 pt-115 pb-120">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="rs-section-title black">
                        <div className="top-sub-heading">
                            <img src={heart_pulse_rate_orange_2} alt="icon"/>
                            <span>Our Feachered Services</span>
                            <img src={heart_pulse_rate_orange} alt="icon"/>
                        </div>
                        <h2 className="title split-in-fade">We run all kinds of IT services</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-sm-6">
                    <div className="rs-featured-2__item">
                        <div className="rs-thumb">
                            <img src={featured_thumb_1} alt=""/>
                        </div>
                        <div className="rs-content">
                            <div className="rs-icon">
                                <img src={features_icon_1} alt=""/>
                            </div>
                            <h4 className="title"><Link to="/service-details">IT Solutions</Link></h4>
                            <p>Bring to the table win-win survival strategies to ensure proactive domination.</p>
                            <Link className="rs-link" to="/service-details">Read More <i className="ri-arrow-right-fill"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="rs-featured-2__item">
                        <div className="rs-thumb">
                            <img src={featured_thumb_2} alt=""/>
                        </div>
                        <div className="rs-content">
                            <div className="rs-icon">
                                <img src={features_icon_2} alt=""/>
                            </div>
                            <h4 className="title"><Link to="/service-details">Cyber Security</Link></h4>
                            <p>Bring to the table win-win survival strategies to ensure proactive domination.</p>
                            <Link className="rs-link" to="/service-details">Read More <i className="ri-arrow-right-fill"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="rs-featured-2__item last-item">
                        <div className="rs-thumb">
                            <img src={featured_thumb_3} alt=""/>
                        </div>
                        <div className="rs-content">
                            <div className="rs-icon">
                                <img src={features_icon_3} alt=""/>
                            </div>
                            <h4 className="title"><Link to="/service-details">Cloud Services</Link></h4>
                            <p>Bring to the table win-win survival strategies to ensure proactive domination.</p>
                            <Link className="rs-link" to="/service-details">Read More <i className="ri-arrow-right-fill"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-lg-4 col-sm-6">
                    <div className="rs-featured-2__item">
                        <div className="rs-thumb">
                            <img src={featured_thumb_5} alt=""/>
                        </div>
                        <div className="rs-content">
                            <div className="rs-icon">
                                <img src={features_icon_1} alt=""/>
                            </div>
                            <h4 className="title"><Link to="/service-details">UI/UX Design</Link></h4>
                            <p>Bring to the table win-win survival strategies to ensure proactive domination.</p>
                            <Link className="rs-link" to="/service-details">Read More <i className="ri-arrow-right-fill"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="rs-featured-2__item">
                        <div className="rs-thumb">
                            <img src={featured_thumb_6} alt=""/>
                        </div>
                        <div className="rs-content">
                            <div className="rs-icon">
                                <img src={features_icon_2} alt=""/>
                            </div>
                            <h4 className="title"><Link to="/service-details">Digital Marketing</Link></h4>
                            <p>Bring to the table win-win survival strategies to ensure proactive domination.</p>
                            <Link className="rs-link" to="/service-details">Read More <i className="ri-arrow-right-fill"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="rs-featured-2__item last-item">
                        <div className="rs-thumb">
                            <img src={featured_thumb_4} alt=""/>
                        </div>
                        <div className="rs-content">
                            <div className="rs-icon">
                                <img src={features_icon_3} alt=""/>
                            </div>
                            <h4 className="title"><Link to="/service-details">Data Analytics</Link></h4>
                            <p>Bring to the table win-win survival strategies to ensure proactive domination.</p>
                            <Link className="rs-link" to="/service-details">Read More <i className="ri-arrow-right-fill"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    </div>
    );
};
export default ServiceFeatures;