import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // <-- 1. IMPORT LINK
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import './navbar.css';

const Navbar = () => {
  // State for light/dark mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Effect to apply the theme to the <html> element
  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* --- Logo/Brand Name (CHANGED to Link) --- */}
        <Link to="/" className="navbar-logo" onClick={() => setIsMenuOpen(false)}>
          RealtyFind
        </Link>

        {/* --- Mobile Menu Icon --- */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* --- Navigation Links (UNCHANGED) --- */}
        {/* These <a> tags are correct for in-page scrolling (hash links) */}
        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="#buy" className="nav-link" onClick={toggleMenu}>
              Buy
            </a>
          </li>
          <li className="nav-item">
            <a href="#rent" className="nav-link" onClick={toggleMenu}>
              Rent
            </a>
          </li>
          <li className="nav-item">
            <a href="#sell" className="nav-link" onClick={toggleMenu}>
              Sell
            </a>
          </li>
          <li className="nav-item">
            <a href="#agents" className="nav-link" onClick={toggleMenu}>
              Agents
            </a>
          </li>
          
          {/* --- Mobile-only action buttons (CHANGED to Link) --- */}
          <li className="nav-item-mobile">
            <Link to="/login" className="btn btn-secondary" onClick={toggleMenu}>
              Login
            </Link>
          </li>
          <li className="nav-item-mobile">
            <Link to="/signup" className="btn btn-primary" onClick={toggleMenu}>
              Sign Up
            </Link>
          </li>
        </ul>

        {/* --- Right-side Actions (Desktop) --- */}
        <div className="navbar-actions">
          {/* --- (CHANGED to Link) --- */}
          <Link to="/login" className="btn btn-secondary btn-desktop">
            Login
          </Link>
          <Link to="/signup" className="btn btn-primary btn-desktop">
            Sign Up
          </Link>
          
          {/* --- Theme Toggle Button --- */}
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;