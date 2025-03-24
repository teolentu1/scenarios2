import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "./Home.css";
import shieldLogo from "./Cybersecurity_Hero.svg";
import { motion } from "framer-motion";
import { FaLock, FaShieldAlt, FaChartBar, FaQuestionCircle, FaChevronRight } from "react-icons/fa";

const tempModules = [
  { id: 1, title: "Introduction to Cybersecurity", completed: true },
  { id: 2, title: "Network Security Fundamentals", completed: true },
  { id: 3, title: "Cryptography Basics", completed: false },
  { id: 4, title: "Ethical Hacking", completed: false },
];

const tempQuizzes = [
  { id: 1, title: "Module 1 Quiz", dueDate: "2023-12-15", completed: true },
  { id: 2, title: "Module 2 Quiz", dueDate: "2023-12-22", completed: false },
  { id: 3, title: "Final Assessment", dueDate: "2024-01-10", completed: false },
];

const Home = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const completedCount = tempModules.filter(m => m.completed).length;
    const newProgress = Math.round((completedCount / tempModules.length) * 100);
    setProgress(newProgress);
  }, []);

  return (
    <div className="cyber-home">
      {/* Animated Background Elements */}
      <div className="cyber-grid"></div>
      <div className="cyber-lines"></div>
      
      {/* Main Content */}
      <motion.div 
        className="cyber-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Hero Section */}
        <motion.div 
          className="cyber-hero"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img 
            src={shieldLogo} 
            alt="CyberShield" 
            className="hero-logo"
            animate={{
              scale: [1, 1.03, 1],
              rotate: [0, 2, -2, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "mirror"
            }}
          />
          <h1 className="cyber-title">
            <span className="cyber-text">Cyber</span>
            <span className="shield-text">Shield</span>
          </h1>
          <p className="cyber-subtitle">Your gateway to cybersecurity knowledge and protection</p>
          <motion.button 
            className="cyber-button"
            onClick={() => navigate("/main")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started <FaChevronRight className="button-icon" />
          </motion.button>
        </motion.div>

        {/* Dashboard Sections */}
        <div className="cyber-dashboard">
          {/* Progress Card */}
          <motion.div 
            className="cyber-card progress-card"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="card-header">
              <FaChartBar className="card-icon" />
              <h2>Your Cyber Progress</h2>
            </div>
            <div className="progress-container">
              <div className="progress-track">
                <div 
                  className="progress-fill"
                  style={{ width: `${progress}%` }}
                >
                  <span>{progress}% Secured</span>
                </div>
              </div>
            </div>
            <div className="module-tracker">
              {tempModules.map(module => (
                <div key={module.id} className="module-item">
                  {module.completed ? (
                    <FaShieldAlt className="module-icon completed" />
                  ) : (
                    <FaLock className="module-icon" />
                  )}
                  <span className="module-title">{module.title}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quizzes Card */}
          <motion.div 
            className="cyber-card quizzes-card"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="card-header">
              <FaQuestionCircle className="card-icon" />
              <h2>Security Challenges</h2>
            </div>
            <div className="quiz-list">
              {tempQuizzes.filter(q => !q.completed).map(quiz => (
                <motion.div 
                  key={quiz.id} 
                  className="quiz-item"
                  whileHover={{ x: 5 }}
                >
                  <div className="quiz-info">
                    <h3>{quiz.title}</h3>
                    <p>Locked until: {quiz.dueDate}</p>
                  </div>
                  <button className="quiz-button">
                    Attempt <FaChevronRight />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;