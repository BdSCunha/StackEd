import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import './Navbar.css'

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="top-navbar">
            <div className="left-content">
                <span style={{ display: "flex", alignItems: "center" }}><img src='src\assets\images\stacked-logo.png' className='stacked-icon' alt='Books by Freepik'></img><span style={{paddingLeft: "16px"}}>StackEd</span></span>
            </div>
            <div className="right-content">
                <FaUser className="icon" />
            </div>
        </nav>
    );
}
