import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetailsPricing2 = ({ heart_pulse_rate_orange_2, heart_pulse_rate_orange, price_icon1, price_icon2, price_icon3 }) => {
    const pricingData = [
        {
            packageName: 'Silver',
            price: 29.00,
            image: price_icon1,
            limit: 'Monthly Package',
            list1: '30 Days Trial Features',
            list2: 'Unlimited Features',
            list3: 'Multi-Language Content',
            list4: 'Data backup and recovery',
            list5: 'Synced To Cloud Database',
            linkItem: 'Buy Now',
            linkUrl: '/contact'
        },
        {
            packageName: 'Gold',
            price: 39.00,
            image: price_icon2,
            limit: 'Monthly Package',
            list1: '30 Days Trial Features',
            list2: 'Unlimited Features',
            list3: 'Multi-Language Content',
            list4: 'Data backup and recovery',
            list5: 'Synced To Cloud Database',
            linkItem: 'Buy Now',
            linkUrl: '/contact'
        },
        {
            packageName: 'Platinum',
            price: 79.00,
            image: price_icon3,
            limit: 'Monthly Package',
            list1: '30 Days Trial Features',
            list2: 'Unlimited Features',
            list3: 'Multi-Language Content',
            list4: 'Data backup and recovery',
            list5: 'Synced To Cloud Database',
            linkItem: 'Buy Now',
            linkUrl: '/contact'
        },
    ];

    return (
        <div className="rs-service-details-pricing pt-110 pb-50">
            <div className="container custom-container-2">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="rs-section-title black">
                            <div className="top-sub-heading">
                                <img src={heart_pulse_rate_orange_2} alt="" />
                                <span> Pricing</span>
                                <img src={heart_pulse_rate_orange} alt="" />
                            </div>
                            <h2 className="title split-in-fade">Our Pricing Plan</h2>
                        </div>

                    </div>
                </div>
                <div className="row">
                    {
                        pricingData.map((data, index) => {
                            return (
                                <div key={index} className="col-lg-4">
                                    <div className={`rs-service-details-pricing__item ${index === 1 ? 'item-2' : '' } mt-30`}>
                                        <div className="rs-batch">
                                            <span>{data.packageName}</span>
                                        </div>
                                        <div className="rs-icon">
                                            <img src={data.image} alt="" />
                                        </div>
                                        <div className="pricing-content">
                                            <h3 className="title"><span>$</span>{data.price}</h3>
                                            <span>{data.limit}</span>
                                            <ul>
                                                <li>{data.list1} <i className="ri-check-fill"></i></li>
                                                <li>{data.list2} <i className="ri-check-fill"></i></li>
                                                <li>{data.list3} <i className="ri-close-fill"></i></li>
                                                <li>{data.list4} <i className="ri-close-fill"></i></li>
                                            </ul>
                                            <Link className="main-btn" to={data.linkUrl}>{data.linkItem}</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsPricing2;