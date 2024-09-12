'use client';

import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faSquare } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import "../../styles/common/footer.css";

import Image from "next/image";
import Usa_flag from "../../images/usa.svg";
import Gpay from "../../images/Gpay.svg";
import Master from "../../images/master.svg";
import Paypal from "../../images/paypal.svg";
import Amex from "../../images/Amex.svg";
import ApplePay from "../../images/ApplePay.svg";
import Qpay from "../../images/Qpay.svg";

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

function Footer() {
    const [isMuseDropdownOpen, setMuseDropdownOpen] = useState(false);
    const [isQuickDropdownOpen, setQuickDropdownOpen] = useState(false);
    const [issocialDropdownOpen, setIssocialDropdownOpen] = useState(false);

    const togglesocialDropdown = () => {
        setIssocialDropdownOpen(!issocialDropdownOpen);
    };
    const toggleQuickDropdown = () => {
        setQuickDropdownOpen(!isQuickDropdownOpen);
    };

    const toggleMuseDropdown = () => {
        setMuseDropdownOpen(!isMuseDropdownOpen);
    };

    return (
        <div className="footer">
            <div className="class-footer-gap">
                <div>
                    <div className="ft-7 footer-mobile-title">Be the first to know</div>
                    <div className="footer-title-description footer-mobile">Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.</div>
                    <div className="fd-4 signup-text-div">Sign up for updates from mettā muse.</div>
                    <div className="footer-signup">
                        <input type="text" placeholder="Enter Your e-mail..." className="" />
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
                <hr className="footer-mobile" />

                <div className="footer-call-us footer-mobile">CALL US</div>
                <div className="footer-mobile footer-contact-info">
                    <a href="tel:+44 221 133 5360">+44 221 133 5360</a>
                    <span><FontAwesomeIcon icon={faSquare} className="square-icon" /></span>
                    <a href="mailto:customercare@mettamuse.com">customercare@mettamuse.com</a>
                </div>
                <hr className="footer-mobile footer-hr-mobile-div" />

                <div className="footer-mobile">
                    <div className="ft-7 currency-title">CURRENCY</div>
                    <div className="currency-info">
                        <span>
                            <Image src={Usa_flag} alt="Usa flag" className="flag-img" />
                        </span>
                        <span className="currency-detail">
                            <FontAwesomeIcon icon={faSquare} className="square-icon" />
                            <span className="currency-code">USD</span>
                        </span>
                    </div>
                </div>

                <div className="footer-full-screen">
                    <div className="ft-7">CONTACT US</div>
                    <div className="fd-4 contactno">
                        <a href="tel:+44 221 133 5360">+44 221 133 5360</a>
                    </div>
                    <div className="fd-4 contactus-email">
                        <a href="mailto:customercare@mettamuse.com">customercare@mettamuse.com</a>
                    </div>
                    <div className="ft-7 currency-title">CURRENCY</div>
                    <div className="currency-info">
                        <span>
                            <Image src={Usa_flag} alt="Usa flag" className="flag-img" />
                        </span>
                        <span className="currency-detail">
                            <FontAwesomeIcon icon={faSquare} className="square-icon" />
                            <span className="currency-code">USD</span>
                        </span>
                    </div>
                    <div className="currency-transaction-info">Transactions will be completed in Euros and a currency reference is available on hover.</div>
                </div>
            </div>
            <hr className="hr-div" />
            <div className="footer-full-screen">

                <div className="flex flex flex-jc-between">
                    <div>
                        <div className="ft-7 menu-col-title">mettā muse</div>
                        <div className="fdp-menu">
                            <a href="javascript:void(0)">About Us</a>
                            <a href="javascript:void(0)">Stories</a>
                            <a href="javascript:void(0)">Artisans</a>
                            <a href="javascript:void(0)">Boutiques</a>
                            <a href="javascript:void(0)">Contact Us</a>
                            <a href="javascript:void(0)">EU Compliances Docs</a>
                        </div>
                    </div>
                    <div>
                        <div className="ft-7 menu-col-title">Quick Links</div>
                        <div className="fdp-menu">
                            <a href="javascript:void(0)">Orders & Shipping</a>
                            <a href="javascript:void(0)">Join/Login as a Seller</a>
                            <a href="javascript:void(0)">Payment & Pricing</a>
                            <a href="javascript:void(0)">Return & Refunds</a>
                            <a href="javascript:void(0)">FAQs</a>
                            <a href="javascript:void(0)">Privacy Policy</a>
                            <a href="javascript:void(0)">Terms & Conditions</a>
                        </div>
                    </div>
                    <div>
                        <div className="ft-7">FOLLOW US</div>
                        <div className="brand-iconDiv">
                            <a href="https://www.instagram.com/">
                                <span className="icon-circle">
                                    <FontAwesomeIcon icon={faInstagram} className="brand-icon" />
                                </span>
                            </a>
                            <a href="https://linkedin.com/">
                                <span className="icon-circle">
                                    <FontAwesomeIcon icon={faLinkedin} className="brand-icon" />
                                </span>
                            </a>
                        </div>
                        <div className="ft-7 payment-method">mettā muse ACCEPTS</div>
                        <div className="payment-methodDiv">
                            <span>
                                <Image src={Gpay} alt="Gpay" />
                            </span>
                            <span>
                                <Image src={Master} alt="Master" />
                            </span>
                            <span>
                                <Image src={Paypal} alt="Paypal" />
                            </span>
                            <span>
                                <Image src={Amex} alt="Amex" />
                            </span>
                            <span>
                                <Image src={ApplePay} alt="ApplePay" />
                            </span>
                            <span>
                                <Image src={Qpay} alt="Qpay" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-mobile">
                <div>
                    <div className="ft-7 menu-col-title footer-dropdown-mobile-div" onClick={toggleMuseDropdown} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}>
                        mettā muse
                        <FontAwesomeIcon icon={faChevronDown} className={`fa-footer-icon ${isMuseDropdownOpen ? 'rotate' : ''}`} />
                    </div>
                    <div className={`fdp-menu-mobile ${isMuseDropdownOpen ? 'open' : ''}`}>
                        <a href="javascript:void(0)">About Us</a>
                        <a href="javascript:void(0)">Stories</a>
                        <a href="javascript:void(0)">Artisans</a>
                        <a href="javascript:void(0)">Boutiques</a>
                        <a href="javascript:void(0)">Contact Us</a>
                        <a href="javascript:void(0)">EU Compliances Docs</a>
                    </div>
                </div>
                <hr />
                <div>
                    <div className="ft-7 menu-col-title footer-dropdown-mobile-div" onClick={toggleQuickDropdown} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}>
                        Quick Links
                        <FontAwesomeIcon icon={faChevronDown} className={`fa-footer-quick-link-icon ${isQuickDropdownOpen ? 'rotate' : ''}`} />
                    </div>
                    <div className={`fdp-menu-mobile-quick-link ${isQuickDropdownOpen ? 'open' : ''}`}>
                        <a href="javascript:void(0)">Orders & Shipping</a>
                        <a href="javascript:void(0)">Join/Login as a Seller</a>
                        <a href="javascript:void(0)">Payment & Pricing</a>
                        <a href="javascript:void(0)">Return & Refunds</a>
                        <a href="javascript:void(0)">FAQs</a>
                        <a href="javascript:void(0)">Privacy Policy</a>
                        <a href="javascript:void(0)">Terms & Conditions</a>
                    </div>
                </div>
                <hr />
                <div>
                    <div className="ft-7 footer-dropdown-mobile-div" onClick={togglesocialDropdown} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}>
                        FOLLOW US
                        <FontAwesomeIcon icon={faChevronDown} className={`fa-footer-social-icon ${issocialDropdownOpen ? 'rotate' : ''}`} />
                    </div>
                    <div className={`social-links-dropdown ${issocialDropdownOpen ? 'open' : ''}`}>
                        <a href="https://www.instagram.com/">
                            <span className="icon-circle">
                                <FontAwesomeIcon icon={faInstagram} className="brand-icon" />
                            </span>
                        </a>
                        <a href="https://linkedin.com/">
                            <span className="icon-circle">
                                <FontAwesomeIcon icon={faLinkedin} className="brand-icon" />
                            </span>
                        </a>
                    </div>
                </div>
                <hr />
                <div className="footer-mobile-metta-div">mettā muse Accepts</div>
                <div className="payment-methodDiv-mobile">
                    <span>
                        <Image src={Gpay} alt="Gpay" />
                    </span>
                    <span>
                        <Image src={Master} alt="Master" />
                    </span>
                    <span>
                        <Image src={Paypal} alt="Paypal" />
                    </span>
                    <span>
                        <Image src={Amex} alt="Amex" />
                    </span>
                    <span>
                        <Image src={ApplePay} alt="ApplePay" />
                    </span>
                    <span>
                        <Image src={Qpay} alt="Qpay" />
                    </span>
                </div>
            </div>
            <div className="copyright">Copyright © 2023 mettamuse. All rights reserved.</div>
        </div>
    );
}

export default Footer;
