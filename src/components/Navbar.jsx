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
                <span style={{ display: "flex", alignItems: "center" }}><img src='src\assets\images\stacked-logo.ico' className='stacked-icon' alt='books by Andrejs Kirma from Noun Project (CCBY3.0)'></img><span>StackEd</span></span>
            </div>
            <div className="center-content">
                <div
                    className="select-menu"
                    onMouseEnter={toggleMenu}
                    onMouseLeave={toggleMenu}
                >
                    <span className="text">Courses</span>
                    {menuOpen && (
                        <div className="menu-items">
                            <span>Back End</span>
                            <span>Front End</span>
                            <span>Full Stack</span>
                            <span>Devops</span>
                            <span>Scrum</span>
                        </div>
                    )}
                </div>
            </div>
            <div className="right-content">
                <FaUser className="icon" />
            </div>
        </nav>
    );
}
