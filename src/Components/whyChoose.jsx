import React from 'react';
import ProgressBar from '../layout/ProgressBar';


const whyChoose = ({ heart_pulse_rate_orange_2, heart_pulse_rate_orange, chose_right_left, chose_right_right, chose_right_bottom, spacingClass }) => {

    return (
        <div className={`rs-why-choose-2 ${spacingClass ? spacingClass : 'pb-85'}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 md-mb-40">
                        <div className="why-choose-2__content">
                            <div className="rs-section-title black mb-36">
                                <div className="top-sub-heading">
                                    <img src={heart_pulse_rate_orange_2} alt="icon" />
                                    <span>Why Choose Us</span>
                                    <img src={heart_pulse_rate_orange} alt="icon" />
                                </div>
                                <h2 className="title split-in-fade">Lorem ipsum dolor sit amet</h2>
                                <p>Aenean porttitor nibh turpis, accumsan interdum mauris posuere eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className="skill-bars" >
                                <ProgressBar duration={2000} targetProgress={80} title={'Lacinia ipsum'}/>
                                <ProgressBar duration={2000} targetProgress={75} title={'Elementum ipsum'}/>
                                <ProgressBar duration={2000} targetProgress={95} title={'Sapien ullamcorper'}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="rs-why-choose-2__thumb wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="0.4s">
                            <div className="rs-thumb-1">
                                <img src={chose_right_left} alt="" />
                            </div>
                            <div className="rs-thumb-2">
                                <img src={chose_right_right} alt="" />
                                <img src={chose_right_bottom} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default whyChoose;
