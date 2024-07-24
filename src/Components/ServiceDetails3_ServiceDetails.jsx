import React from 'react';
import { Link } from 'react-router-dom';
import Common_Testimonial_Iteam from './Common_Testimonial_Iteam';
import Common_Question from './Common_Question';
import Home1and2Counter from './Home1and2Counter';

const ServiceDetails3_ServiceDetails = ({ service_details_thumb_2, counter_icon_1, counter_icon_2, counter_icon_3, counter_icon_4, rating_1, quote_white, testi1, testi2, testi3, testi4, testi5, flag_1, flag_2, flag_3, flag_4, flag_5, mobileItems, mobileLargeItems, smItems, mdItems, items }) => {
    return (
        <div className="rs-service-details rs-service-details-3 pt-120 pb-95">
            <div className="container">
                <div className="row column-reverse">
                    <div className="col-lg-4">
                        <div className="rs-service-details__sidebar">
                            <div className="category-box sidebar-common">
                                <div className="sidebar-top-title">
                                    <h3 className="title">Categories</h3>
                                </div>
                                <ul>
                                    <li><Link to="/service-details"><span>IT Solutions</span> <i className="ri-arrow-right-fill"></i></Link></li>
                                    <li><Link to="/service-details"><span>Cyber Security</span> <i className="ri-arrow-right-fill"></i></Link></li>
                                    <li><Link to="/service-details"><span>Cloud Services</span> <i className="ri-arrow-right-fill"></i></Link></li>
                                    <li><Link to="/service-details"><span>Digital Strategy</span> <i className="ri-arrow-right-fill"></i></Link></li>
                                    <li><Link to="/service-details"><span>SEO Optimization</span> <i className="ri-arrow-right-fill"></i></Link></li>
                                    <li><Link to="/service-details"><span>Brand Identity</span> <i className="ri-arrow-right-fill"></i></Link></li>
                                </ul>
                            </div>
                            <div className="solution-box sidebar-common mt-40">
                                <h4 className="title">Do you have a Technical Issues?</h4>
                                <Link className="main-btn" to="/contact">Find Solution <i className="ri-arrow-right-fill"></i></Link>
                            </div>
                            <div className="download-box sidebar-common mt-40">
                                <div className="sidebar-top-title">
                                    <h3 className="title">Download Brochure</h3>
                                </div>
                                <ul>
                                    <li><Link to="#"><span>Download PDF</span> <i className="ri-download-cloud-2-fill"></i></Link></li>
                                    <li><Link className="active" to="#"><span>Download DOC</span> <i className="ri-download-cloud-2-fill"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="rs-service-details__content">
                            <div className="rs-thumb">
                                <img src={service_details_thumb_2} alt="" />
                            </div>
                            <div className="rs-content">
                                <h3 className="title">Cyber Security</h3>
                                <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service. Objectively innovate empowered manufactured products whereas parallel platforms.</p>
                                <div className="quote-text">
                                    <p>“Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior.”</p>
                                </div>
                                <p>Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products.</p>

                                <Home1and2Counter
                                    counter_icon_1={counter_icon_1}
                                    counter_icon_2={counter_icon_2}
                                    counter_icon_3={counter_icon_3}
                                    counter_icon_4={counter_icon_4}
                                    passClass ={'service-details-3'}
                                />

                                <div className="rs-carousel owl-carousel nav-style1 mt-15" data-loop="true" data-items="2" data-margin="30" data-autoplay="true" data-hoverpause="false" data-autoplay-timeout="5000" data-smart-speed="800" data-dots="false" data-nav="false" data-nav-speed="false" data-center-mode="false" data-mobile-device="1" data-mobile-device-nav="false" data-mobile-device-dots="false" data-ipad-device="1" data-ipad-device-nav="false" data-ipad-device-dots="false" data-ipad-device2="1" data-ipad-device-nav2="false" data-ipad-device-dots2="false" data-md-device="1" data-lg-device="2" data-md-device-nav="false" data-md-device-dots="false" data-doteach="false">
                                    <Common_Testimonial_Iteam
                                        rating_1={rating_1}
                                        quote_white={quote_white}
                                        testi1={testi1}
                                        flag_1={flag_1}
                                        testi2={testi2}
                                        flag_2={flag_2}
                                        testi3={testi3}
                                        flag_3={flag_3}
                                        testi4={testi4}
                                        flag_4={flag_4}
                                        testi5={testi5}
                                        flag_5={flag_5}

                                        previewPhone={mobileItems}
                                        previewPhoneExt={mobileLargeItems}
                                        previewSM={smItems}
                                        previewMd={mdItems}
                                        preview={items}
                                    />
                                </div>

                                <h3 className="title pt-40 pb-15">Questions about service</h3>
                                <Common_Question />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails3_ServiceDetails;