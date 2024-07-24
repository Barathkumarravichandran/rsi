import React from 'react';
import { Link } from 'react-router-dom';
import bgImg from '../assets/images/banner/home-banner-bg-2.jpg';


const bgStyle = {
    backgroundImage:`url(${bgImg})`
}

const Banner1 = ({heart_pulse_orange2, img_year,heart_pulse_orange}) => {
    return (
        <div className="rs-banner-2" style={bgStyle}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                        <div className="rs-banner-2__content">
                            <img className="wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0s" src={img_year} alt=""/>
                            <div className="rs-sub-heading wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.4s">
                                <img src={heart_pulse_orange2} alt=""/>
                                    <span> Welcome To RSI </span>
                                    <img src={heart_pulse_orange} alt=""/>
                                    </div>
                                    <h1 className="title wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.8s">High current <span>Voltage</span></h1>
                                    <p className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.2s">Fuelcell / RFB/Battery Test station. </p>
                                    <Link className="main-btn wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.6s" to="/about">View Catalog <i className="ri-arrow-right-fill"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-2"></div>
                    </div>
                </div>
            </div>
            );
};

export default Banner1;