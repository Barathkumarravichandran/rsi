import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const Project = ({ heart_pulse_rate_orange_2, heart_pulse_rate_orange, project_1, project_2, project_3, project_4, project_5, port_cube, addclass, previewPhone, previewPhoneExt, previewSM, previewMd, preview }) => {
    const projects = [
        { image: project_1, name: 'Fuel Cell Test Station' },
        { image: project_2, name: 'RFB Test Station' },
        { image: project_3, name: 'Electrolyser Test Station' }
    ];

    return (
        <div id="rs-portfolios" className={`rs-project ${addclass ? addclass : ''}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="rs-top-line mb-110"></div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="rs-section-title black">
                            <div className="top-sub-heading">
                                <img src={heart_pulse_rate_orange_2} alt="icon" />
                                <span>Our Projects</span>
                                <img src={heart_pulse_rate_orange} alt="icon" />
                            </div>
                            <h2 className="title split-in-fade">Lorem ipsum dolor sit amet</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="rs-project__btn">
                            <Link className="main-btn" to="/products">View Products <i className="ri-arrow-right-fill"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <Swiper
                            className="rs-carousel owl-carousel rs-project__slider mt-30"
                            spaceBetween={30}
                            slidesPerView={preview || 3}
                            pagination={{ clickable: true }}
                            modules={[Pagination]}
                            breakpoints={{
                                0: {
                                    slidesPerView: previewPhone || 1,
                                    spaceBetween: 30,
                                },
                                576: {
                                    slidesPerView: previewPhoneExt || 1,
                                    spaceBetween: 30,
                                },
                                768: {
                                    slidesPerView: previewSM || 2,
                                    spaceBetween: 30,
                                },
                                992: {
                                    slidesPerView: previewMd || 2,
                                    spaceBetween: 30,
                                },
                                1200: {
                                    slidesPerView: preview || 3,
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            {
                                projects.map((p, i) => (
                                    <SwiperSlide key={i + 1}>

                                        <div className="rs-project__items">
                                            <div className="wrapping">
                                                <img src={p.image} alt="project_image" />
                                                <div className="rs-project__content">
                                                    <h3 className="title"><Link to="/pem-fuel-cell">{p.name}</Link></h3>
                                                    <div className="rs-link">
                                                        <Link to="/product-details">View Details <i className="ri-arrow-right-fill" ></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="rs-shape">
                <img src={port_cube} alt="" />
            </div>
        </div>
    );
};

export default Project;
