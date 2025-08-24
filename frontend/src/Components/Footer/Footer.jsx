import React from 'react';
import './Footer.css';
import logo from '../Assets/Logo1.jpeg';
import insta_icon from '../Assets/instagram_icon.png';
import pint_icon from '../Assets/pintester_icon.png';
import whats_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
    const page = '/coming-soon';

    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={logo} alt="Logo" />
                <div className='brand-name'>
                    <p>Code</p>
                    <p>Krafted</p>
                    <p>Closet</p>
                </div>
            </div>
            <ul className="footer-link">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icon-container">
                    <img src={insta_icon} alt="Instagram" />
                </div>

                <div className="footer-icon-container">
                    <img src={pint_icon} alt="Pinterest" />
                </div>

                <div className="footer-icon-container">
                    <img src={whats_icon} alt="WhatsApp" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @2024 - All Rights Reserved</p>
            </div>
        </div>
    );
}

export default Footer;
