import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/globals.css';

const Navbar = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Close menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <button
                    className="logo-button"
                    onClick={() => setMobileMenuOpen(prev => !prev)}
                    aria-label="Toggle menu"
                >
                    <div className="logo-circle">
                        <img src="/images/miranda-logo.png" alt="Miranda Logo" />
                    </div>
                </button>

                <ul className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
                    <li className={location.pathname === '/' ? 'active' : ''}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={location.pathname === '/ask' ? 'active' : ''}>
                        <Link to="/ask">Ask Miranda</Link>
                    </li>
                    <li className={location.pathname === '/rights' ? 'active' : ''}>
                        <Link to="/rights">Know Your Rights</Link>
                    </li>
                    <li className={location.pathname === '/resources' ? 'active' : ''}>
                        <Link to="/resources">Resources</Link>
                    </li>
                    <li className={location.pathname === '/about' ? 'active' : ''}>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
