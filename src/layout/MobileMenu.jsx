import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import MenuItemsSingle from './MenuItemsSingle';

const MobileMenu = ({ canvasLogo, isOnepage }) => {
    const menuRef = useRef(null);
    const [dummyState, setDummyState] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    const handleToggle = () => {
        if (document.body.classList.contains('menu-is-open')) {
            document.body.classList.remove('menu-is-open');
        } else {
            document.body.classList.add('menu-is-open');
        }
        setDummyState(!dummyState);
    };

    const handleCloseMenu = (event) => {
        const target = event.currentTarget;
        const parent = target.parentElement;

        // Check if the parent element has a child with class 'sub-menu'
        if (!parent.querySelector('.sub-menu')) {
            document.body.classList.remove('menu-is-open');
            setDummyState(!dummyState);
        }
    };

    useEffect(() => {
        const handleClick = (event) => {
            event.preventDefault();
            const target = event.currentTarget;
            target.parentElement.classList.toggle("highlight");
        };

        const menuItems = menuRef.current.querySelectorAll(".has-clid > a");

        menuItems.forEach(item => {
            item.addEventListener('click', handleClick);
        });

        return () => {
            menuItems.forEach(item => {
                item.removeEventListener('click', handleClick);
            });
        };
    }, []);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="offcanvas-menu offcanvas-menu-2">
            <div className="menu-canvas-close" onClick={handleToggle}><i className="ri-close-line"></i></div>
            <div className="offcanvas-menu-inner">
                <div className="offc-logo mb-40">
                    <Link to="/" className='mb-2 p-2 rounded-2 shadow'>
                        <img src={canvasLogo} alt="RSI Logo" />
                        <p className='logo-content'>supports research</p>
                    </Link>
                </div>
                <ul ref={menuRef} className="nav-menu">
                    {isOnepage ? (
                        <MenuItemsSingle />
                    ) : (
                        <>
                            <li>
                                <Link to="/" className={location.pathname === '/' ? "active" : ""}>Home</Link>
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
                    )}
                </ul>
            </div>
        </div>
    );
};

export default MobileMenu;
