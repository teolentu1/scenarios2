import React from 'react';
import { Link } from 'react-router-dom';
import "./Modules.css";
import routerImage from './wifi.png'; 
import attackImage from './psw.png';

const Intro1 = () => {
  return (
    <div className="cyber-home">
      <div className="cyber-grid"></div>
      <div className="cyber-lines"></div>
      <h1 className="title">Available Modules</h1>
      <div className="module-container">
        {/* Module 1 Card */}
        <div className="module-card">
          <div className="module-image white-bg">
            <img src={routerImage} alt="WiFi Security" className="card-image" />
          </div>
          <div className="module-content">
            <h2 className="module-title">Unsecure WiFi Networks</h2>
            <p className="module-description">
              Learn the essential principles of securing wireless networks, 
              including encryption methods, authentication protocols, and 
              common vulnerabilities in modern WiFi systems.
            </p>
            <Link to="/modules/unsecured-wifi" className="cyber-button module-button">
              Start Learning
            </Link>
          </div>
        </div>

        {/* Module 2 Card */}
        <div className="module-card">
          <div className="module-image white-bg">
            <img src={attackImage} alt="Password Security" className="card-image" />
          </div>
          <div className="module-content">
            <h2 className="module-title">Password Security</h2>
            <p className="module-description">
              Explore password vulnerabilities, brute force attacks, 
              and best practices for creating and managing secure 
              passwords in personal and professional environments.
            </p>
            <Link to="/modules/password-security" className="cyber-button module-button">
              Start Learning
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro1;