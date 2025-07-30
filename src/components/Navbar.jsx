import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import '../styles/globals.css';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((u) => {
            setUser(u);
        });
        return () => unsubscribe();
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    const handleLogout = async () => {
        await auth.signOut();
        navigate('/login');
    };

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

                    {/* ✅ Auth logic here */}
                    <li className="auth-link">
                        {user ? (
                            <div className="user-controls">
                                <span className="user-email">{user.email}</span>
                                <button className="logout-btn" onClick={handleLogout}>Logout</button>
                            </div>
                        ) : (
                            <div className="auth-buttons">
                                <Link to="/login">Login</Link> / <Link to="/signup">Sign Up</Link>
                            </div>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
