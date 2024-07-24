import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Our_Projects = ({ portfolio_item_1, portfolio_item_2, passClass,passClassContainer,previewPhone,previewPoneExt,previewSM,previewMd,preview }) => {
    const projectsData = [
        {
            image: portfolio_item_1,
            name: 'AEM-AEL Electrolyser',
            category: 'AEM-AEL',
            thumbData:"Introducing the AEM-AEL Electrolyser Test Station 1850W..."
        },
        {
            image: portfolio_item_2,
            name: 'PEM Electrolyser',
            category: 'PEM',
            thumbData:"The ultimate tool for pioneering research and development..."
        }
    ];

    return (
        <div id="rs-portfolios" className={`${passClassContainer ? passClassContainer : "rs-project-3 rs-project-grid pt-115" }`}>
            <div className="rs-project-3__slider">
                <div className={`${passClass ? passClass : "container"}`}>
                    {
                        passClass ?
                            <div className="row">
                                <div className="col-lg-12">
                                    <Swiper
                                        spaceBetween={0}
                                        slidesPerView={preview || 3}
                                        autoplay={{
                                            delay: 3500,
                                            disableOnInteraction: false,
                                        }}

                                        pagination={{
                                            clickable: true,
                                        }}

                                        navigation={true}
                                        modules={[Autoplay, Pagination, Navigation]}

                                        breakpoints={{
                                            0: {
                                                slidesPerView: previewPhone || 1,
                                                spaceBetween: 0,
                                            },
                                            576: {
                                                slidesPerView: previewPhoneExt || 1,
                                                spaceBetween: 0,
                                            },
                                            768: {
                                                slidesPerView: previewSM || 2,
                                                spaceBetween: 0,
                                            },
                                            992: {
                                                slidesPerView: previewMd || 3,
                                                spaceBetween: 0,
                                            },
                                            1200: {
                                                slidesPerView: preview || 3,
                                                spaceBetween: 0,
                                            },
                                        }}
                                        
                                    >

                                        {
                                            projectsData && projectsData.map((project, index) => {
                                                return (
                                                    <SwiperSlide key={index} className="rs-project-3__item">
                                                        <div className="rs-thumb">
                                                            <img src={project.image} alt="" />
                                                        </div>
                                                        <div className="rs-project-overlay">
                                                            <div className="rs-project-content">
                                                                <div className="rs-title">
                                                                    <Link to="/product-details">{project.name}</Link>
                                                                </div>
                                                                <div className="rs-category">
                                                                    <span><i className="ri-price-tag-3-line"></i><Link to="#">{project.category}</Link></span>
                                                                </div>
                                                                <div className="rs-text">
                                                                    <p>{project.thumbData}</p>
                                                                </div>
                                                            </div>
                                                            <div className="rs-link">
                                                                <Link to="/product-details"><i className="ri-arrow-right-up-line"></i></Link>
                                                            </div>,
                                                            thumbData:"the ultimate tool for pioneering research and development"
                                                        </div>
                                                    </SwiperSlide>
                                                );
                                            })
                                        }

                                    </Swiper>

                                </div>
                            </div> :

                            <div className="row">
                                {projectsData && projectsData.map((project, index) => (
                                    <div className="col-lg-4" key={index}>
                                        <div className="rs-project-3__item">
                                            <div className="rs-thumb">
                                                <img src={project.image} alt={project.name} />
                                            </div>
                                            <div className="rs-project-overlay">
                                                <div className="rs-project-content">
                                                    <div className="rs-title">
                                                        <Link to="/product-details">{project.name}</Link>
                                                    </div>
                                                    <div className="rs-category">
                                                        <span><i className="ri-price-tag-3-line"></i><Link to="#">{project.category}</Link></span>
                                                    </div>
                                                    <div className="rs-text">
                                                        <p>{project.thumbData}</p>
                                                    </div>
                                                </div>
                                                <div className="rs-link">
                                                    <Link to="/product-details"><i className="ri-arrow-right-up-line"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Our_Projects;
