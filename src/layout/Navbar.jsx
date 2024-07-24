import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import MenuItems from './MenuItems';
import MobileMenu from './MobileMenu';
import MenuItemsSingle from './MenuItemsSingle';
import defaultLightLogo from '../assets/images/rsi/logo.png'
import defaultDarkLogo from '../assets/images/rsi/logo.png'

const Navbar = ({ normalLogo, stickyLogo, canvasLogo, layout, phone, container, firstLvlMenu, secondLvlMenu, isOnepage }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const [dummyState, setDummyState] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);


    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };
    const handleToggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    const handleToggle = () => {
        if (document.body.classList.contains('menu-is-open')) {
            document.body.classList.remove('menu-is-open');
        } else {
            document.body.classList.add('menu-is-open');
        }
        setDummyState(!dummyState);
    };

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
        <>
            <div className={`full-width-header ${layout || 'rs-header-layout2'}`}>
                <header id="rs-header" className="rs-header">
                    {layout === 'rs-header-layout2' && (
                        <div className="rs-header-topber">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="rs-flex-box">
                                            <div className="rs-header-topber-contact">
                                                <ul>
                                                    <li>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                                            <path d="M11 17.9381C7.05369 17.446 4 14.0796 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 14.0796 16.9463 17.446 13 17.9381V20.0116C16.9463 20.1039 20 20.7351 20 21.5C20 22.3284 16.4183 23 12 23C7.58172 23 4 22.3284 4 21.5C4 20.7351 7.05369 20.1039 11 20.0116V17.9381ZM12 16C15.3137 16 18 13.3137 18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10C6 13.3137 8.68629 16 12 16ZM12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10C14 11.1046 13.1046 12 12 12Z" fill="#000"></path>
                                                        </svg>
                                                        <span>MANUFACTURING AND R&D HQ, Hosur, Tamilnadu - 635109</span>
                                                    </li>
                                                    <li>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                                            <path d="M16 12.3687C15.9987 12.5597 15.9223 12.7425 15.7873 12.8777C15.6523 13.0128 15.4695 13.0894 15.2785 13.0909H2.176C1.98459 13.0907 1.80109 13.0145 1.66581 12.8791C1.53053 12.7437 1.45455 12.5601 1.45455 12.3687V11.6364H14.5455V3.12727L8.72727 8.36364L1.45455 1.81818V0.727273C1.45455 0.534388 1.53117 0.349403 1.66756 0.213013C1.80395 0.0766231 1.98893 0 2.18182 0H15.2727C15.4656 0 15.6506 0.0766231 15.787 0.213013C15.9234 0.349403 16 0.534388 16 0.727273V12.3687ZM3.22473 1.45455L8.72727 6.40727L14.2298 1.45455H3.22473ZM0 8.72727H5.81818V10.1818H0V8.72727ZM0 5.09091H3.63636V6.54545H0V5.09091Z" fill="#1A73E9"></path>
                                                        </svg>
                                                        <span>Email: <Link to="mailto:sales@rsindia.net">sales@rsindia.net</Link></span>
                                                    </li>
                                                    <li>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                                        </svg>
                                                        <span>+91-81482 74261</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="rs-header-topber-social">
                                                <span>Follow Us :</span>
                                                <ul>
                                                    <li><Link to="#"><i className="ri-facebook-fill" size={20} /></Link></li>
                                                    <li><Link to="#"><i className="ri-twitter-fill" size={20} /></Link></li>
                                                    <li><Link to="#"><i className="ri-linkedin-fill" size={20} /></Link></li>
                                                    <li><Link to="#"><i className="ri-pinterest-fill" size={20} /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}


                    <div className={isVisible ? 'menu-area menu-sticky sticky' : 'menu-area menu-sticky'}>
                        <div className={container ? container : 'container'}>
                            <div className="rs-menu-area">
                                <div className="logo-area text-center">

                                    <Link to="/"><img src={normalLogo ? normalLogo : defaultLightLogo} alt="Logo" />
                                        {defaultLightLogo && <p className='logo-content text-white'>supports research</p>}
                                    </Link>
                                    <Link to="/"><img src={stickyLogo ? stickyLogo : defaultLightLogo} alt="Logo" />
                                        {defaultLightLogo && <p className='logo-content'>supports research</p>}
                                    </Link>

                                </div>
                                <div className="rs-header-rightside">
                                    <div className="main-menu hidden-md">
                                        <ul className='nav-menu'>
                                            <MenuItems
                                                firstLvlMenu={firstLvlMenu}
                                                secondLvlMenu={secondLvlMenu}
                                            />
                                        </ul>
                                    </div>

                                    <div className="rs-search-box">
                                        <div className={`search_icons ${isSearchOpen ? 'open_add_class' : ''}`}>
                                            {
                                                !isSearchOpen ?
                                                    <i className="ri-search-line" onClick={handleToggleSearch}></i> :
                                                    <i className="ri-close-line" onClick={handleToggleSearch}></i>
                                            }
                                            <div className='sticky_form'>
                                                <form role="search" className="bs-search search-form">
                                                    <div className="search-wrap">
                                                        <label className="screen-reader-text active">Search for:</label>
                                                        <input
                                                            type="search"
                                                            placeholder="Searching..."
                                                            name="s"
                                                            className="search-input"
                                                            value={searchQuery}
                                                            onChange={handleChange}
                                                        />
                                                        <button type="submit" value="Search">
                                                            <i className="ri-search-line" />
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                    {layout === 'rs-header-layout-3' ? (
                                        <div className="rs-header-contct">
                                            <Link to="tel:+85526691234">
                                                <p><img src={`${phone ? phone : ''}`} alt="Phone Icon" /><span>Call any time</span> 855 2669 1234</p>
                                            </Link>
                                        </div>
                                    ) : (
                                        <div className="header-btn">
                                            <Link className="main-btn" to="/appointment">Get a Quote <i className="ri-arrow-right-fill" /></Link>
                                        </div>
                                    )}

                                    <div className="canvasmenu-trigger view-md">
                                        <i className="ri-menu-2-line" onClick={handleToggle}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
            <MobileMenu
                canvasLogo={canvasLogo ? canvasLogo : defaultDarkLogo}
                isOnepage={isOnepage}
            />
        </>
    );
};

export default Navbar;
