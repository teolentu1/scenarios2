import React from 'react';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaLockOpen } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="cyber-navbar">
      <div className="cyber-nav-container">
        <Link to="/" className="cyber-logo">
          <FaShieldAlt className="logo-icon" />
          <span className="logo-text">CyberShield</span>
        </Link>
        
        <ul className="cyber-nav-links">
          <li>
            <Link to="/" className="cyber-nav-link">
              <span className="link-icon">⌂</span>
              <span className="link-text">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/modules" className="cyber-nav-link">
              <span className="link-icon">≡</span>
              <span className="link-text">Modules</span>
            </Link>
          </li>
          <li>
            <Link to="/quizzes" className="cyber-nav-link">
              <span className="link-icon">?</span>
              <span className="link-text">Quizzes</span>
            </Link>
          </li>
          <li>
            <Link to="/login" className="cyber-nav-link login-link">
              <FaLockOpen className="link-icon" />
              <span className="link-text">Login / Signup</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;