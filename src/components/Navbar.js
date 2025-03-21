import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">CyberShield</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/modules">Modules</Link></li>
        <li><Link to="/quizzes">Quizzes</Link></li>
        <li><Link to="/login">Login / Signup</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;


