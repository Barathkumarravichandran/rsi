import React from 'react';

const ServiceWhyChooseUs = ({ heart_pulse_rate_orange_2, chose_right_left, chose_right_bottom, siblingClass, choose_image, ch_1, ch_2, ch_3 }) => {
    const chooseesData = [
        { title: 'First Growing Process', details: ' Bring to the table win-win survival strategies to ensur.', image: ch_1 },
        { title: 'Clean code', details: ' Leverage agile frameworks to provide a robust.', image: ch_2 },
        { title: 'Well Documentation', details: ' Podcasting operational change management inside.', image: ch_3 },
    ]
    return (
        <div className={`rs-why-choose rs-why-choose-4 service-why-choose ${siblingClass ? siblingClass : 'pt-120 pb-85'}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="rs-why-choose-4__thumb">
                            <div className="rs-thumb-1">
                                <img src={chose_right_left} alt="" />
                            </div>
                            <div className="rs-thumb-2">
                                <img src={choose_image} alt="" />
                                <img src={chose_right_bottom} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="rs-why-choose__content">
                            <div className="section-title-2 section-title-3 black">
                                <div className="top-sub-heading">
                                    <img src={heart_pulse_rate_orange_2} alt="icon" />
                                    <span>Why Choose Us</span>
                                </div>
                                <h2 className="title split-in-fade">35+ Years of delivering custom It solutions services.</h2>
                                <p>Bring to the table win-win survival strategies to ensure proactive domination At the end of the day.</p>
                            </div>
                            <div className="rs-why-choose__item-list">
                                <ul>
                                    {
                                        chooseesData && chooseesData.map((data, index) => {
                                            return (
                                                <li key={index}>
                                                    <div className="thumb">
                                                        <img src={data.image} alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <h4 className="title">{data.title}</h4>
                                                        <p> {data.details}</p>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceWhyChooseUs;