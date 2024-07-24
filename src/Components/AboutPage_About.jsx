
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VideoPopup from '../layout/VideoPopUp';

const AboutPage_About = ({ about_image, count_down_experience_icon, heart_pulse_rate_orange_2, heart_pulse_rate_orange, arrow_purple, passClass }) => {

    const [isVideoOpen, setVideoOpen] = useState(false);
    const openVideoPopup = () => setVideoOpen(true);
    const closeVideoPopup = () => setVideoOpen(false);

    return (
        <div id="rs-about" className={`${passClass ? passClass : 'rs-about rs-about-page'} pb-120 pt-120`}>
            {
                passClass &&
                <div className="rs-about__shape">
                    <img className="gsap-move down-200 start-91" src={arrow_purple} alt=""/>
                </div>
            }
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="rs-about__thumb-box">
                            <img src={about_image} alt="" />
                            <div className="rs-about__play-box">
                                <span>Intro</span>
                                <div className="play-icon">
                                    <Link className='rs-popup-videos' to='#' onClick={openVideoPopup}>
                                        <i className="ri-play-fill"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="rs-about__countdown-box">
                                <div className="icon">
                                    <img src={count_down_experience_icon} alt="" />
                                </div>
                                <div className="coundown-text">
                                    <span><span className="rs-count">25</span>+</span>
                                    <h4 className="title"> Years Experience</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="rs-about__box">
                            <div className="top-sub-heading">
                                <img src={heart_pulse_rate_orange_2} alt="icon" />
                                <span>Who We Are</span>
                                <img src={heart_pulse_rate_orange} alt="icon" />
                            </div>
                            <h2 className="title split-in-fade">We provide perfect it solutions &amp; technology for any startups.</h2>
                            <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day going forward, a new normal that has evolved from operational X is on the runway.</p>
                            <ul>
                                <li>
                                    <div className="icon">
                                        <svg height="60" width="60" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60 60" style={{ enableBackground: "new 0 0 60 60" }} xmlSpace="preserve">
                                            <style type="text/css">
                                                {`.st0 { fill: #F1EEE9; } .st1 { fill: url(#SVGID_1_); }`}
                                            </style>
                                            <path className="st0" d="M6,0h48c3.3,0,6,2.7,6,6v48c0,3.3-2.7,6-6,6H6c-3.3,0-6-2.7-6-6V6C0,2.7,2.7,0,6,0z" />
                                            <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="19.7027" y1="746.4139" x2="40.3165" y2="767.0276" gradientTransform="matrix(1 0 0 1 0 -730)">
                                                <stop offset="0" style={{ stopColor: `${passClass ? '#4B63FC' : '#F24E1A'}`}} />
                                                <stop offset="1" style={{ stopColor: `${passClass ? '#B32AF3' : '#F28D26'}`}} />
                                            </linearGradient>
                                            <path className="st1" d="M30,15l11,2.4c0.6,0.1,1,0.7,1,1.3V32c0,2.7-1.3,5.2-3.6,6.7L30,44.3l-8.4-5.6c-2.2-1.5-3.6-4-3.6-6.7V18.7 c0-0.6,0.4-1.2,1-1.3L30,15z M35.9,24.6l-6.6,6.6l-3.8-3.8l-1.9,1.9l5.7,5.7l8.5-8.5L35.9,24.6z" />
                                        </svg>
                                    </div>
                                    <span>Internal Networking</span>
                                </li>
                                <li>
                                    <div className="icon">
                                        <svg height="60" width="60" version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60 60" style={{ enableBackground: "new 0 0 60 60" }} xmlSpace="preserve">
                                            <style type="text/css">
                                                {`.st0 { fill: #F1EEE9; } .st1 { fill: url(#SVGID_2_); }`}
                                            </style>
                                            <path className="st0" d="M6,0h48c3.3,0,6,2.7,6,6v48c0,3.3-2.7,6-6,6H6c-3.3,0-6-2.7-6-6V6C0,2.7,2.7,0,6,0z" />
                                            <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="19.7027" y1="746.4139" x2="40.3165" y2="767.0276" gradientTransform="matrix(1 0 0 1 0 -730)">
                                                <stop offset="0" style={{ stopColor: `${passClass ? '#4B63FC' : '#F24E1A'}` }} />
                                                <stop offset="1" style={{ stopColor: `${passClass ? '#B32AF3' : '#F28D26'}` }} />
                                            </linearGradient>
                                            <path className="st1" d="M30,15l11,2.4c0.6,0.1,1,0.7,1,1.3V32c0,2.7-1.3,5.2-3.6,6.7L30,44.3l-8.4-5.6c-2.2-1.5-3.6-4-3.6-6.7V18.7 c0-0.6,0.4-1.2,1-1.3L30,15z M35.9,24.6l-6.6,6.6l-3.8-3.8l-1.9,1.9l5.7,5.7l8.5-8.5L35.9,24.6z" />
                                        </svg>
                                    </div>
                                    <span>Tech Services</span>
                                </li>
                            </ul>
                            <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day going forward.</p>
                            <Link className="main-btn" to="/about"> Discover More <i className="ri-arrow-right-fill"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <VideoPopup isOpen={isVideoOpen} onRequestClose={closeVideoPopup} videoUrl="https://www.youtube.com/embed/5CLmRIHR5Zw" />
        </div>
    );
};

export default AboutPage_About;