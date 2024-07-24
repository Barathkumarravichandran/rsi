
import React from 'react';
import { Link } from 'react-router-dom';
import Common_Question from './Common_Question';


const Service_Details = ({ service_details_thumb_1, service_details_small_img }) => {

    return (
        <div className="rs-service-details pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="rs-service-details__content">
                            <div className="rs-thumb">
                                <img src={service_details_thumb_1} alt="" />
                            </div>
                            <div className="rs-content">
                                <h3 className="title">Digital Marketing</h3>
                                <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service. Objectively innovate empowered manufactured products whereas parallel platforms.</p>
                                <div className="quote-text">
                                    <p>“Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior.”</p>
                                </div>
                                <p>Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products.</p>
                                <h3 className="title mt-30">Working challenge</h3>
                                <div className="rs-service-list-box">
                                    <div className="rs-thumb">
                                        <img src={service_details_small_img} alt="" />
                                    </div>
                                    <div className="rs-list">
                                        <ul>
                                            <li><i className="ri-share-forward-fill" ></i> Document the short and long term goals.</li>
                                            <li><i className="ri-share-forward-fill" ></i> Automated development pipelines.</li>
                                            <li><i className="ri-share-forward-fill" ></i> Objectively innovate empowered.</li>
                                            <li><i className="ri-share-forward-fill" ></i> Predominate extensible testing procedures.</li>
                                            <li><i className="ri-share-forward-fill" ></i> Phosfluorescently engage worldwide.</li>
                                        </ul>
                                    </div>
                                </div>
                                <h3 className="title pt-40 pb-15">Benefits with our service</h3>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="rs-service-benefit">
                                            <h4 className="title">Flexible Solutions</h4>
                                            <p>Proactively envisioned multimedia based expertise and cross-media growth.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="rs-service-benefit">
                                            <h4 className="title">24/7 Unlimited Support</h4>
                                            <p>Collaboratively administrate empowered markets via plug-and-play networks.</p>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="title pt-40 pb-15">Questions about service</h3>
                                <Common_Question/>
                            </div>
                        </div>
                    </div>
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
                                    <li><Link to="#"><span>Download PDF</span> <i className="ri-download-cloud-2-fill" /></Link></li>
                                    <li><Link className="active" to="#"><span>Download DOC</span> <i className="ri-download-cloud-2-fill" /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service_Details;