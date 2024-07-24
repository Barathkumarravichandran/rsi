import React from 'react';
import Common_Testimonial_Iteam from './Common_Testimonial_Iteam';




const ServiceTestimonial2 = ({ heart_pulse_orange,navStyle2, heart_pulse_rate_orange_2, rating_1, quote_white, testi1, flag_1, testi2, flag_2, testi3, flag_3, testi4, flag_4, testi5, flag_5, passClass, mobileItems, mobileLargeItems, smItems, mdItems, items }) => {
    return (
        <div className={`rs-testimonial ${passClass ? passClass : 'pt-110 pb-115'} md-mb-175`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        <div className="rs-section-title black">
                            <div className="top-sub-heading">
                                <img src={heart_pulse_rate_orange_2} alt="icon" />
                                <span>Testimonials</span>
                                <img src={heart_pulse_orange} alt="icon" />
                            </div>
                            <h2 className="title split-in-fade">What Customers Said About Our Rsi</h2>
                        </div>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
                <Common_Testimonial_Iteam
                    previewPhone={mobileItems}
                    previewPhoneExt={mobileLargeItems}
                    previewSM={smItems}
                    previewMd={mdItems}
                    preview={items}
                    rating_1={rating_1}
                    quote_white={quote_white}
                    testi1={testi1}
                    flag_1={flag_1}
                    testi2={testi2}
                    flag_2={flag_2}
                    testi3={testi3}
                    flag_3={flag_3}
                    testi4={testi4}
                    flag_4={flag_4}
                    testi5={testi5}
                    flag_5={flag_5}
                    navStyle2={navStyle2}
                />
            </div>
        </div>
    );
};

export default ServiceTestimonial2;