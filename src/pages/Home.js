import React from 'react';
import { useNavigate } from "react-router-dom";
import "./Home.css";
import shieldLogo from "./Cybersecurity_Hero.svg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <img src={shieldLogo} alt="Cybersecurity Shield" className="home-logo" />
      <h1>CyberShield</h1>
      <p>Your gateway to cybersecurity knowledge and protection.</p>
      <button className="home-button" onClick={() => navigate("/main")}>
        Get Started
      </button>
    </div>
  );
};

export default Home;

