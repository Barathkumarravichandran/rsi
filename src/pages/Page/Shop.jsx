import React from 'react';
import Navbar from '../../layout/Navbar';
import Common_Banner from '../../Components/Common_Banner';
import Footer from '../../layout/Footer';
import info_3 from '../../assets/images/footer/info-3.png';
import info_1 from '../../assets/images/footer/info-1.png';
import info_2 from '../../assets/images/footer/info-2.png';
import ShopContent from '../../Components/ShopContent';
import shop1 from '../../assets/images/shop/shop-1.jpg';
import shop2 from '../../assets/images/shop/shop-2.jpg';
import shop3 from '../../assets/images/shop/shop-3.jpg';
import shop4 from '../../assets/images/shop/shop-4.jpg';
import shop5 from '../../assets/images/shop/shop-5.jpg';
import shop6 from '../../assets/images/shop/shop-6.jpg';
import shop7 from '../../assets/images/shop/shop-7.jpg';
import shop8 from '../../assets/images/shop/shop-8.jpg';
import shop9 from '../../assets/images/shop/shop-9.jpg';

const Shop = () => {
    return (
        <>
            <Navbar
                layout={'rs-header-layout2'}
                firstLvlMenu='pages'
                secondLvlMenu='shop'
            />
            <Common_Banner
                pageName={'Shop'}
            />
            <ShopContent
                shop1={shop1}
                shop2={shop2}
                shop3={shop3}
                shop4={shop4}
                shop5={shop5}
                shop6={shop6}
                shop7={shop7}
                shop8={shop8}
                shop9={shop9}
            />
            <Footer
                info_3={info_3}
                info_1={info_1}
                info_2={info_2}
            />
        </>
    );
};

export default Shop;