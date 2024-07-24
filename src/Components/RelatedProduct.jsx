import React from 'react';
import { Link } from 'react-router-dom';

const RelatedProduct = ({standaed1,standaed2,standaed3}) => {
    return (
        <div className="rs-related-product pb-120">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="rs-related-title">
                        <h2 className="title">Related products</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-sm-6">
                    <div className="rs-shop-item mt-30">
                        <div className="rs-thumb">
                            <Link to="/product-single">
                                <img src={standaed1} alt=""/>
                                <span className="rs-add-cart">Add To Cart</span>
                            </Link>
                        </div>
                        <div className="rs-content">
                            <Link to="/product-single">Slim Headphone</Link>
                            <h5 className="rs-price">$29.00</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="rs-shop-item mt-30">
                        <div className="rs-thumb">
                            <Link to="/product-single">
                                <img src={standaed2} alt=""/>
                                <span className="rs-add-cart">Add To Cart</span>
                            </Link>
                        </div>
                        <div className="rs-content">
                            <Link to="/product-single">Bluetooth Speaker</Link>
                            <h5 className="rs-price">$42.00</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="rs-shop-item mt-30">
                        <div className="rs-thumb">
                            <Link to="/product-single">
                                <img src={standaed3} alt=""/>
                                <span className="rs-add-cart">Add To Cart</span>
                            </Link>
                        </div>
                        <div className="rs-content">
                            <Link to="/product-single">White Headphone</Link>
                            <h5 className="rs-price">$29.00</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default RelatedProduct;