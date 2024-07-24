import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VideoPopup from '../../layout/VideoPopUp';
import Navbar from '../../layout/Navbar';
import ProductImage from '../../assets/images/rsi/products/redox_flow.jpg'
import info_3 from '../../assets/images/footer/info-3.png';
import info_1 from '../../assets/images/footer/info-1.png';
import info_2 from '../../assets/images/footer/info-2.png';
import Footer from '../../layout/Footer';
import Common_Banner from '../../Components/Common_Banner'
import phone_white from '../../assets/images/project/phone-white.png';
import PDF from '../../assets/files/redox flow battery datasheet.pdf'
const RedoxFlowCell = () => {
    const [isVideoOpen, setVideoOpen] = useState(false);

    const openVideoPopup = () => setVideoOpen(true);
    const closeVideoPopup = () => setVideoOpen(false);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = PDF;
        link.download = 'datasheet.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <Navbar
                layout={'rs-header-layout2'}
                firstLvlMenu='pages'
            />
            <Common_Banner
                pageName={'Redox Flow Cell'}
            />
            <div className="rs-project-details pt-90 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="rs-project-details__content mt-30 ">
                                <div className="rs-thumb">
                                    <img src={ProductImage} alt="Project Thumbnail" />
                                </div>
                                <div className="rs-project-content">
                                    <h2 className="title">Product Information</h2>
                                    <div className="rs-list-box">
                                        <ul>
                                            <li><i className="ri-share-forward-fill"></i>RSI make REDOX FLOW BATTERY TEST STATION is fully
                                                designed and integrated with software controlled (Made in
                                                India) to meet complex research needs of the researchers.</li>
                                            <li><i className="ri-share-forward-fill"></i>RFB focussed to provide modularity in design and also
                                                complies with international standards from every aspect.</li>
                                            <li><i className="ri-share-forward-fill"></i> Critical components in the system like E-Load, Peristaltic
                                                Pump, Controllers are supplied from a world class
                                                manufacturer to ensure the precision & safe work
                                                environment.</li>
                                            <li><i className="ri-share-forward-fill"></i> Send us your requirements and we will prepare a detailed
                                                offer for your turn-key project.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="rs-project-details__sidebar mt-30">
                                <button className='main-btn border shadow w-100 mb-3 justify-content-center' onClick={handleDownload}>Download Datasheet</button>
                                <div className="project-sidebar-category">
                                    <h4 className="title">Product Specification</h4>
                                    <div className="sidebar-category-box">
                                        <div className="sidebar-category-item">
                                            <div className="rs-content">
                                                <h5>Electrolyteflow–anode</h5>
                                                <span>100 mL to 500 mLPM</span>
                                            </div>
                                        </div>
                                        <div className="sidebar-category-item">
                                            <div className="rs-content">
                                                <h5>Electrolyteflow -cathode</h5>
                                                <span>100 mL to 500 mLPM</span>
                                            </div>
                                        </div>
                                        <div className="sidebar-category-item">
                                            <div className="rs-content">
                                                <h5>Speed variation facility</h5>
                                                <span>Yes</span>
                                            </div>
                                        </div>
                                        <div className="sidebar-category-item">
                                            <div className="rs-content">
                                                <h5>Suitable for Vanadium</h5>
                                                <span>yes</span>
                                            </div>
                                        </div>
                                        <div className="sidebar-category-item">
                                            <div className="rs-content">
                                                <h5>Set Flow/ Volume and time</h5>
                                                <span>Yes</span>
                                            </div>
                                        </div>
                                        <div className="sidebar-category-item">
                                            <div className="rs-content">
                                                <h5>Forward and reverse control</h5>
                                                <span>Yes</span>
                                            </div>
                                        </div>
                                        <div className="sidebar-category-item">
                                            <div className="rs-content">
                                                <h5>Ports</h5>
                                                <span>H2 Inlet, O2 Outlet, H2O Outlet</span>
                                            </div>
                                        </div>
                                        <div className="sidebar-category-item">
                                            <div className="rs-content">
                                                <h5>N2 purge</h5>
                                                <span>Yes</span>
                                            </div>
                                        </div>
                                        <div className="sidebar-category-item">
                                            <div className="rs-content">
                                                <h5>Software controlled flow range selection</h5>
                                                <span>Yes</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-category-contact mt-40">
                                    <h4 className="title">Get Professional Help</h4>
                                    <span>Contact Us</span>
                                    <img src={phone_white} alt="Phone Icon" />
                                    <div className="rs-link">
                                        <Link to="tel:+85526691234">+855 (2669) 1234</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <VideoPopup isOpen={isVideoOpen} onRequestClose={closeVideoPopup} videoUrl="https://www.youtube.com/embed/5CLmRIHR5Zw" />
            </div>
            <Footer
                info_3={info_3}
                info_1={info_1}
                info_2={info_2}
            />
        </>
    )
}

export default RedoxFlowCell