/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useLocation } from "react-router-dom";

const MenuItems = ({ firstLvlMenu, secondLvlMenu }) => {
    const location = useLocation();

    return (
        <>
            <li>
                <Link to="/" className={firstLvlMenu === 'home' ? "active" : ""}>Home</Link>
            </li>
            <li>
                <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link>
            </li>
            <li>
                <Link to="/products" className={location.pathname === "/products" ? "active" : ""}>Products</Link>
            </li>
            <li>
                <Link to="/" className={location.pathname === "/gallery" ? "active" : ""}>Gallery</Link>
            </li>
            <li>
                <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link>
            </li>
        </>
    );
};

export default MenuItems;
