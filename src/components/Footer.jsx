import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className='social-media'>
                {/* <span>Find StackEd on</span> */}
                <ul>
                    <li><FaFacebook className="icon" /></li>
                    <li><FaInstagram className="icon" /></li>
                    <li><FaYoutube className="icon" /></li>
                    <li><FaTwitter className="icon" /></li>
                    <li><FaLinkedin className="icon" /></li>
                </ul>
            </div>
            <div className='address'>
                <span>Praça Frei Baraúna, 18035-170, Sorocaba - SP / Brazil</span>
            </div>
            <div className="container">
                <span className="text-muted">© StackEd 2023</span>
            </div>
        </footer>
    );
}
