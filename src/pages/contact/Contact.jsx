import React from 'react';
import ContactUs from '../../Components/ContactUs';
import Navbar from '../../layout/Navbar';
import Common_Banner from '../../Components/Common_Banner';
import partner1 from '../../assets/images/rsi/client/client-1.png';
import partner2 from '../../assets/images/rsi/client/client-2.png';
import partner3 from '../../assets/images/rsi/client/client-3.png';
import partner4 from '../../assets/images/rsi/client/client-4.png';
import partner5 from '../../assets/images/rsi/client/client-5.png';
import heart_pulse_rate_orange_2 from '../../assets/images/heart-pulse-rate-orange-2.svg';
import heart_pulse_rate_orange from '../../assets/images/heart-pulse-rate-orange.svg';
import Footer from '../../layout/Footer';
import info_3 from '../../assets/images/footer/info-3.png';
import info_1 from '../../assets/images/footer/info-1.png';
import info_2 from '../../assets/images/footer/info-2.png';
import techzen_logo_home_2 from "../../assets/images/techzen_logo_home_2.png";
import GoogleMap from '../../Components/GoogleMap';
import BrandContact from '../../Components/BrandContact';

const Contact = () => {
    return (
        <>
            <Navbar
                layout={'rs-header-layout2'}
            />
            <Common_Banner pageName={'Contact'} />
            <ContactUs />
            <BrandContact
                heart_pulse_rate_orange_2={heart_pulse_rate_orange_2}
                heart_pulse_rate_orange={heart_pulse_rate_orange}
                partner1={partner1}
                partner2={partner2}
                partner3={partner3}
                partner4={partner4}
                partner5={partner5}
            />
            <GoogleMap />
            <Footer
                info_3={info_3}
                info_1={info_1}
                info_2={info_2}
                techzen_logo_home_2={techzen_logo_home_2}
            />
        </>
    );
};

export default Contact;