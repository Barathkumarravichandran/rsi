import React from 'react';
import { Link } from 'react-router-dom';

const Services2 = ({ service_icon1, service_icon2, service_icon3, service_icon4, service_icon5, service_bg5, service_bg2, service_bg3, service_bg4, service_bg6 ,t_logo,passClass}) => {
    const services = [
        { name: 'Digital Strategy', image: service_icon1, bg_icon: `${service_bg6 ? service_bg6 : ''}` },
        { name: 'SEO Optimization', image: service_icon2, bg_icon: `${service_bg2 ? service_bg2 : ''}` },
        { name: 'Brand Identity', image: service_icon3, bg_icon: `${service_bg3 ? service_bg3 : ''}` },
        { name: 'Product Design', image: service_icon1, bg_icon: `${service_bg6 ? service_bg6 : ''}` },
        { name: 'Design & Concept', image: service_icon4, bg_icon: `${service_bg4 ? service_bg4 : ''}` },
        { name: 'Web Development', image: service_icon5, bg_icon: `${service_bg5 ? service_bg5 : ''}` }
    ];
    return (
        <div id="rs-service" className={`${passClass ? passClass  : "rs-service-3 pt-90 pb-120"}`}>
            <div className="container">
                {
                    !passClass === 'rs-service-3 rs-service-grid-2 pt-90 pb-120' &&
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-2">
                            <span><img src={t_logo} alt=""/> Our Services</span>
                            <h2 className="title split-in-fade">We care about your business</h2>
                        </div>
                    </div>
                </div>}
                <div className="row">
                    {
                        services && services.map((service, index) => {
                            return (
                                <div key={index} className="col-lg-4 col-sm-12">
                                    <div className="rs-service-3__item">
                                        <div className="icon">
                                            <img src={service.image} alt="" />
                                        </div>
                                        <h3 className="title"><Link to="/service-details">{service.name}</Link></h3>
                                        <p>Strategies to ensure proactive domination. At the end of the day going forward.</p>
                                        <Link to="/service-details">Read More <i className="ri-arrow-right-fill" /></Link>
                                        <div className="rs-number-box">
                                            <span>0{index + 1}</span>
                                        </div>
                                        {
                                            service.bg_icon &&
                                            <div className="rs-bg-image">
                                                <img src={service.bg_icon} alt="" />
                                            </div>
                                        }
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <div className="rs-background-text">
                <span>SERVICE SERVICE SE</span>
            </div>
        </div>
    );
};

export default Services2;
