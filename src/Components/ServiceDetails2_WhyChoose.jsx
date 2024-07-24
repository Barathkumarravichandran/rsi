import React from 'react';
import ProgressBar from '../layout/ProgressBar';

const ServiceDetails2_WhyChoose = ({banner_thumb_1,heart_pulse_orange2}) => {
    return (
        <div className="rs-service-details-why-Choose pt-120 pb-120">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="rs-service-details-why-Choose__thumb">
                        <img src={banner_thumb_1} alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 md-mb-40">
                    <div className="rs-section-title black">
                        <div className="top-sub-heading">
                            <img src={heart_pulse_orange2} alt=""/>
                            <span> Why Choose Us</span>
                        </div>
                        <h2 className="title split-in-fade">We Worked With Reputed Companies in The World</h2>
                        <p className="mb-20">We donec pulvinar magna id leoersi pellentesque impered dignissim rhoncus euismod euismod eros vitae.</p>
                    </div>
                    <div className="rs-service-details-why-Choose__skill">
                        <div className="skill-bars">
                            <ProgressBar duration={2000} targetProgress={80} title={'Software Development'}/>
                            <ProgressBar duration={2000} targetProgress={75} title={'Web Development'}/>
                            <ProgressBar duration={2000} targetProgress={95} title={'SEO Analysis'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ServiceDetails2_WhyChoose;