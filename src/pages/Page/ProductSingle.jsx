import React from 'react';
import Navbar from '../../layout/Navbar';
import Common_Banner from '../../Components/Common_Banner';
import Footer from '../../layout/Footer';
import info_3 from '../../assets/images/footer/info-3.png';
import info_1 from '../../assets/images/footer/info-1.png';
import info_2 from '../../assets/images/footer/info-2.png';
import shop5 from '../../assets/images/shop/shop-5.jpg';
import shop1 from '../../assets/images/shop/shop-1.jpg';
import shop2 from '../../assets/images/shop/shop-2.jpg';
import shop3 from '../../assets/images/shop/shop-3.jpg';
import shop4 from '../../assets/images/shop/shop-4.jpg';
import SingleProduct from '../../Components/SingleProduct';
import ShopDiscription from '../../Components/ShopDiscription';
import standaed1 from '../../assets/images/shop/standaed-1.jpg';
import standaed2 from '../../assets/images/shop/standaed-2.jpg';
import standaed3 from '../../assets/images/shop/standaed-3.jpg';
import RelatedProduct from '../../Components/RelatedProduct';

const ProductSingle = () => {
    return (
        <>
            <Navbar
                layout={'rs-header-layout2'}
                firstLvlMenu='pages'
                secondLvlMenu='shop'
            />
            <Common_Banner
                pageName={'Product Single'}
            />
            <SingleProduct
                shop5={shop5}
                shop1={shop1}
                shop2={shop2}
                shop3={shop3}
                shop4={shop4}
            />
            <ShopDiscription />
            <RelatedProduct
                standaed1={standaed1}
                standaed2={standaed2}
                standaed3={standaed3}
            />
            <Footer
                info_3={info_3}
                info_1={info_1}
                info_2={info_2}
            />
        </>
    );
};

export default ProductSingle;