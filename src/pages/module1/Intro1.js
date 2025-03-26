import React from 'react';
import { Link } from 'react-router-dom';
import "./Module1.css";
import routerImage from './router.png'; 

const Intro1 = () => {
  return (
    <div className="cyber-home">
      <div className="cyber-grid"></div>
      <div className="cyber-lines"></div>

      <div className="cyber-content">
        <div className="cyber-hero-container">
          <div className="cyber-hero">
            <h1 className="cyber-title">Introduction to Insecure WiFi</h1>
            <p className="cyber-subtitle">
              Wireless networks offer convenient access to the internet, but insecure WiFi networks pose serious risks, 
              including data theft, unauthorized access, and malware attacks. Understanding these threats is crucial for 
              personal and organizational security.
            </p>
          </div>
          <div className="wifi-animation-container">
            <div className="wifi-animation">
              <div className="wifi-signal signal-1"></div>
              <div className="wifi-signal signal-2"></div>
              <div className="wifi-signal signal-3"></div>
            </div>
            <img src={routerImage} alt="WiFi Router" className="router-image" />
          </div>
        </div>
        
        <div className="cyber-card">
          <h2>Key Risks of Insecure WiFi</h2>
          <ul>
            <li>Man-in-the-Middle Attacks</li>
            <li>Data Interception and Theft</li>
            <li>Unauthorized Network Access</li>
            <li>Injection of Malicious Software</li>
          </ul>
        </div>
        
        <Link to="/modules/unsecured-wifi/attacks">
          <button className="cyber-button">
            Next: How Hackers Exploit WiFi
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Intro1;