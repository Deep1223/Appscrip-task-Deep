'use client'; // This directive makes the component a Client Component

import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../images/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faLock, faUser, faChevronDown, faBars } from '@fortawesome/free-solid-svg-icons';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='header-container'>
            <header className="header">
                <div className="container">
                    <div className="logo">
                        <div className='menu-icon-flex'>
                            <div className="menu-icon" onClick={toggleMenu}>
                                <FontAwesomeIcon icon={faBars} className='menu-icon-bars' />
                            </div>
                            <a href='#'>
                                <Image
                                    src={logo}
                                    alt="Logo"
                                    className='logo-div'
                                />
                            </a>
                        </div>
                    </div>
                    <div className='main-title'>LOGO</div>
                    <div className="icons">
                        <FontAwesomeIcon icon={faSearch} className="fa-icon" />
                        <FontAwesomeIcon icon={faHeart} className="fa-icon" />
                        <FontAwesomeIcon icon={faLock} className="fa-icon" />
                        <FontAwesomeIcon icon={faUser} className="fa-icon menu-icon-div" />
                        <span className="language menu-icon-div">ENG <FontAwesomeIcon icon={faChevronDown} className="fa-icon" /></span>
                    </div>
                </div>
                <div className={`nav ${menuOpen ? 'nav-open' : ''}`}>
                    <a href="javascript:void(0)">SHOP</a>
                    <a href="javascript:void(0)">SKILLS</a>
                    <a href="javascript:void(0)">STORIES</a>
                    <a href="javascript:void(0)">ABOUT</a>
                    <a href="javascript:void(0)">CONTACT US</a>
                </div>
            </header>
            <div className='header-menu-div'>
                <div className='header-menu-home'>HOME</div>
                <hr />
                <div className='header-menu-shop'>SHOP</div>
            </div>
        </div>
    );
};

export default Header;
