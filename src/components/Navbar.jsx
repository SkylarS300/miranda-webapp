import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/globals.css';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <div className="logo-circle">
                    <img src="/images/miranda-logo.png" alt="Miranda Logo" />
                </div>
                <ul className="navbar-links">
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
