
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const SingleProduct = ({ shop5, shop1, shop2, shop3, shop4 }) => {
    const images = [shop5, shop1, shop2, shop3, shop4];
    const [quantity, setQuantity] = useState(1); // State to manage quantity

    // Handle input change
    const handleChange = (e) => {
        const value = Math.max(1, e.target.value); // Ensure the value is at least 1
        setQuantity(value);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Add to cart:', quantity); // Add to cart logic here
    };

    // Handle quantity increase
    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    // Handle quantity decrease
    const handleDecrease = () => {
        setQuantity(prevQuantity => Math.max(1, prevQuantity - 1));
    };

    // Slick
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);
    
    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);

    return (
        <div className="rs-shop-single pt-120">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 pr-115 md-pr-13">
                        {/* Main product image */}
                        <Slider
                            asNavFor={nav2}
                            dots= {false}
                            arrows= {false}
                            className={"product-carousel-main"}
                            ref={slider => (sliderRef1 = slider)}>
                            {images.map((img, index) => (
                                <div className="rs-thumb" key={index}>
                                    <img src={img} alt={`Product ${index + 1}`} />
                                </div>
                            ))}
                        </Slider>
                        
                        {/* Thumbnail */}
                        <Slider
                            asNavFor={nav1}
                            ref={slider => (sliderRef2 = slider)}
                            slidesToShow={4}
                            swipeToSlide={true}
                            focusOnSelect={true}
                            dots= {false}
                            arrows= {false}
                            infinite= {true}
                            className="product-thumb mt-15"
                        >
                            {images.map((img, index) => (
                                <div className="rs-thumb" key={index}>
                                    <img src={img} alt={`Thumbnail ${index + 1}`} />
                                </div>
                            ))}
                        </Slider>
                    </div>

                    <div className="col-lg-6">
                        <div className="rs-shop-single__content">
                            <h3 className="title">Purifier Sharp</h3>
                            <span className="rs-price">$22.00</span>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                            <div className="rs-shop-btns">
                                <form onSubmit={handleSubmit} className="quantity-form">
                                    <div className="quantity-controls mt-30 mb-30">
                                        <button type="button" onClick={handleDecrease} className="decrease-btn">-</button>
                                        <input
                                            type="number"
                                            value={quantity}
                                            onChange={handleChange}
                                            min={1} // Ensure the minimum value is 1
                                            className="quantity-input" // Add a class for potential styling
                                        />
                                        <button type="button" onClick={handleIncrease} className="increase-btn">+</button>
                                    </div>
                                    <button className="main-btn " type="submit">Add to cart</button>
                                </form>
                            </div>

                            <div className="rs-category">
                                <span>Category: </span>
                                <ul>
                                    <li><Link to="#">Technology</Link></li>
                                    <li><Link to="#">Rsi</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
