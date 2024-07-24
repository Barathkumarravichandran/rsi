import React, { useState } from 'react';
import { Nav, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import VideoPopup from '../layout/VideoPopUp';

const About = ({ about_img, about_shape, heart_pulse_rate_orange_2, heart_pulse_rate_orange }) => {
    const [isVideoOpen, setVideoOpen] = useState(false);
    const openVideoPopup = () => setVideoOpen(true);
    const closeVideoPopup = () => setVideoOpen(false);

    const tabItem = [
        {
            tabTitle: 'Our Mission',
            eventKeys: 'mission',
            details: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.',
            item1: 'Document the short and long term goals.',
            item2: 'Your product vision',
            link1: 'Know More About Us',
            link1Url: '/about',
            link2Url: 'https://www.youtube.com/watch?v=5CLmRIHR5Zw'
        },
        {
            tabTitle: 'Our Vision',
            eventKeys: 'vision',
            details: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.',
            item1: 'Document the short and long term goals.',
            item2: 'Your product vision',
            link1: 'Know More About Us',
            link1Url: '/about',
            link2Url: 'https://www.youtube.com/watch?v=5CLmRIHR5Zw'
        },
        {
            tabTitle: 'Core Value',
            eventKeys: 'value',
            details: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.',
            item1: 'Document the short and long term goals.',
            item2: 'Your product vision',
            link1: 'Know More About Us',
            link1Url: '/about',
            link2Url: 'https://www.youtube.com/watch?v=5CLmRIHR5Zw'
        },
    ];

    return (
        <div id="rs-about" className="rs-about-2 pt-120 pb-30">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="rs-about-2__thumb">
                            <img src={about_img} alt="" />
                            <div className="rs-shape">
                                <img className="gsap-move left-100 start-91" src={about_shape} alt="" />
                            </div>
                            <div className="rs-counter-content">
                                <h3 className="title"><span className="rs-count">30</span>+</h3>
                                <span>Years of Experience</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="rs-about-2__main-content">
                            <div className="rs-section-title black">
                                <div className="top-sub-heading">
                                    <img src={heart_pulse_rate_orange_2} alt="icon" />
                                    <span>About Company</span>
                                    <img src={heart_pulse_rate_orange} alt="icon" />
                                </div>
                                <h2 className="title split-in-fade">We believe that every problem has a solution</h2>
                                <p>Fully customizable test station with user friendly indigenous software  made rsi Energy test station series makes one of the most powerful and versatile also unique features like "in-situ impedance" available for energy researchers</p>
                                <div id="rs-tabs" className="skltbs-theme-light">
                                    <Tab.Container defaultActiveKey="mission">
                                        <Nav justify variant="tabs">
                                            {
                                                tabItem && tabItem.map((item, index) => (
                                                    <Nav.Item key={index}>
                                                        <Nav.Link eventKey={item.eventKeys} className="skltbs-tab">{item.tabTitle}</Nav.Link>
                                                    </Nav.Item>
                                                ))
                                            }
                                        </Nav>
                                        <Tab.Content>
                                            {
                                                tabItem && tabItem.map((item, index) => (
                                                    <Tab.Pane eventKey={item.eventKeys} key={index} className="skltbs-panel">
                                                        <p>{item.details}</p>
                                                        <ul>
                                                            <li><i className="ri-share-forward-fill"></i>{item.item1}</li>
                                                            <li><i className="ri-share-forward-fill"></i>{item.item2}</li>
                                                        </ul>
                                                        <Link className="main-btn" to={item.link1Url}>
                                                            {item.link1}
                                                            <i className="ri-arrow-right-fill"></i>
                                                        </Link>
                                                        <div className="play-icon">
                                                            <Link className='rs-popup-videos' to='#' onClick={openVideoPopup}>
                                                                <i className="ri-play-fill"></i>
                                                            </Link>
                                                        </div>
                                                    </Tab.Pane>
                                                ))
                                            }
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <VideoPopup isOpen={isVideoOpen} onRequestClose={closeVideoPopup} videoUrl="https://www.youtube.com/embed/5CLmRIHR5Zw" />
        </div>
    );
};

export default About;
