import React from 'react';
import { Link } from 'react-router-dom';

const Featureses = ({ service_icon1, service_icon2, service_icon3, }) => {
    const bannerData = [
        { title: 'Up to 1KW or More', image: service_icon1, linkUrl: '#' },
        { title: '10+ Voltage & Temp sensors', image: service_icon2, linkUrl: '#' },
        { title: 'Exported to UAE Countries', image: service_icon3, linkUrl: '#' },
        { title: 'Make in INDIA', image: service_icon3, linkUrl: '#' },
    ]
    return (
        <div className="rs-service-2 pt-90 pb-120">
            <div className="container">
                <div className="row">
                    {
                        bannerData && bannerData.map((data, index) => {
                            return (
                                <div key={index} className='col-lg-3 col-md-6'>
                                    <div className="rs-service-2__item">
                                        <div className="rs-service-2__icon">
                                            <img src={service_icon1} alt="" />
                                        </div>
                                        <h5 className="title"><Link to={data.linkUrl}>{data.title}</Link></h5>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Featureses;