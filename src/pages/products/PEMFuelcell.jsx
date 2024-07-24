import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VideoPopup from '../../layout/VideoPopUp';
import Navbar from '../../layout/Navbar';
import PEMFuelImg from '../../assets/images/rsi/products/FUELCELL.png'
import info_3 from '../../assets/images/footer/info-3.png';
import info_1 from '../../assets/images/footer/info-1.png';
import info_2 from '../../assets/images/footer/info-2.png';
import Footer from '../../layout/Footer';
import Common_Banner from '../../Components/Common_Banner'
import phone_white from '../../assets/images/project/phone-white.png';
import PDF from '../../assets/files/PEM FUEL CELL DATA SHEET.pdf'

const PEMFuelcell = () => {
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
                pageName={'PEM Fuel Cell'}
            />
            <div className="rs-project-details pt-90 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="rs-project-details__content mt-30 ">
                                <div className="rs-thumb">
                                    <img src={PEMFuelImg} alt="Project Thumbnail" />
                                </div>
                                <div className="rs-project-content">
                                    <h2 className="title">Product Information</h2>
                                    <div className="rs-list-box">
                                        <ul>
                                            <li><i className="ri-share-forward-fill"></i> A fuel cellis anelectrochemical cellthat converts thechemical energyof a fuel oftenhydrogen and anoxidizing agent often oxygen into electricity through a pair ofredoxreactions.</li>
                                            <li><i className="ri-share-forward-fill"></i> RSI make fuel cell is mainly used for research purposes. The user can easily dismantle the cell & replace their own membrane Testing involves evaluating the membrane's performance within a fuel cell setup. This includes measuring the fuel cell's voltage-current characteristics, which provide insights into the membrane's overall efficiency and performance.</li>
                                            <li><i className="ri-share-forward-fill"></i> RSI make fuel cell equipped with cell heater and cell temperature monitoring facilities.</li>
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
                                                <h5>Membrane</h5>
                                                <span>PEM based(Proton exchange membrane )</span>
                                            </div>
                                        </div>
                                        <div className="sidebar-category-item">
                                            <div className="rs-content">
                                                <h5>Material</h5>
                                                <span>Aluminium</span>
                                            </div>
                                        </div>
                                        <div className="sidebar-category-item">
                                            <div className="rs-content">
                                                <h5>Gasket</h5>
                                                <span>Non contact layer</span>
                                            </div>
                                        </div>
                                        <div className="sidebar-category-item">
                                            <div className="rs-content">
                                                <h5>Bipolar plate</h5>
                                                <span>Graphite</span>
                                            </div>
                                        </div>
                                        <div className="sidebar-category-item">
                                            <div className="rs-content">
                                                <h5>Flow pattern</h5>
                                                <span>Serpentine Pattern</span>
                                            </div>
                                        </div>
                                        <div className="sidebar-category-item">
                                            <div className="rs-content">
                                                <h5>Working area</h5>
                                                <span>3 x 3 cm , 5 x 5 cm</span>
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
                                                <h5>Current collector</h5>
                                                <span>copper</span>
                                            </div>
                                        </div>
                                        <div className="sidebar-category-item">
                                            <div className="rs-content">
                                                <h5>Cell heater</h5>
                                                <span>Yes</span>
                                            </div>
                                        </div>
                                        <div className="sidebar-category-item">
                                            <div className="rs-content">
                                                <h5>Cell Temperature Monitoring</h5>
                                                <span>Yes</span>
                                            </div>
                                        </div>
                                        <div className="sidebar-category-item">
                                            <div className="rs-content">
                                                <h5>Safety Insulated</h5>
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
    );
};

export default PEMFuelcell;
