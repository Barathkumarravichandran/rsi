import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetails2_Devlopment = ({ heart_pulse_orange2, faq_left_img, couple_ball_layer }) => {
    return (
        <div className="rs-service-details-about pt-120 pb-145">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="rs-section-title black">
                            <div className="top-sub-heading">
                                <img src={heart_pulse_orange2} alt="" />
                                <span> Software Development</span>
                            </div>
                            <h2 className="title split-in-fade">We Help to Implement Your Ideas into Automation</h2>
                            <p className="mb-20">We donec pulvinar magna id leoersi pellentesque impered dignissim rhoncus euismod euismod eros vitae best consulting & financial services theme .</p>
                            <p>Business ipsum dolor sit amet nsectetur cing elit. Suspe ndisse suscipit sagittis leo sit met entum is not estibulum dignity sim posuere cubilia durae. Leo sit met entum cubilia crae. At vero eos accusamus et iusto odio dignissimos provident nam libero tempore, cum soluta.</p>
                            <Link to="/contact" className="main-btn mt-40"> Contact Us <i className="ri-arrow-right-fill"></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="rs-thumb">
                            <img src={faq_left_img} alt="" />
                            <div className="rs-shape">
                                <img src={couple_ball_layer} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails2_Devlopment;