import React from 'react';
import { Link } from 'react-router-dom';

const BrandContact = ({ heart_pulse_rate_orange_2, heart_pulse_rate_orange, partner1, partner2, partner3, partner4, partner5, brandClass }) => {
    const brandLogo = [
        {
            linkUrl: '#',
            logo1: partner1,
        },
        {
            linkUrl: '#',
            logo1: partner2,
        },
        {
            linkUrl: '#',
            logo1: partner3,
        },
        {
            linkUrl: '#',
            logo1: partner4,
        },
        {
            linkUrl: '#',
            logo1: partner5,
        },
    ];

    return (
        <div className='rs-contact-brand pt-115 pb-90'>
            <div className="container">
                {!brandClass &&
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="rs-brand__top-title">
                                <img src={heart_pulse_rate_orange_2} alt="" />
                                <span>More than 5K+ Brands with work Rsi</span>
                                <img src={heart_pulse_rate_orange} alt="" />
                            </div>
                        </div>
                    </div>
                }
                <div className='rs-contact-brand__box mb-30'>
                    {brandLogo.map((logo, index) => (
                        <div key={index} className='brand-item'>
                            <Link to={logo.linkUrl}>
                                <>
                                    <img src={logo.logo1} alt="" />
                                    <img className="item-2" src={logo.logo2} alt="" />
                                </>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrandContact;
