import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "./Home.css";
import shieldLogo from "./Cybersecurity_Hero.svg";
import { motion } from "framer-motion";
import { FaLock, FaShieldAlt, FaChartBar, FaQuestionCircle, FaChevronRight } from "react-icons/fa";

const tempModules = [
  { id: 1, title: "Unsecure WiFi Networks", completed: true },
  { id: 2, title: "Password Security", completed: false },
];


const Home = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [quizzes, setQuizzes] = useState([]);
  const [completedQuizzes, setCompletedQuizzes] = useState({});
  const [quizDetails, setQuizDetails] = useState({}); 
  
  useEffect(() => {
    const completedCount = tempModules.filter(m => m.completed).length;
    const newProgress = Math.round((completedCount / tempModules.length) * 100);
    setProgress(newProgress);

        // Load quiz list
        fetch('/quizzesList.json')
        .then((response) => response.json())
        .then((data) => {
          setQuizzes(data);
          // Fetch details for each quiz
          data.forEach((quiz) => {
            fetch(`/quizzes/${quiz.filename}`)
              .then((res) => res.json())
              .then((quizData) => {
                setQuizDetails((prev) => ({
                  ...prev,
                  [quiz.filename]: quizData,
                }));
              })
              .catch((error) => console.error(`Error fetching ${quiz.filename}:`, error));
          });
        })
        .catch((error) => console.error('Error loading quizzes:', error));
  
      // Load completed quizzes
      const storedResults = {};
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith('quizResult_')) {
          const filename = key.replace('quizResult_', '');
          storedResults[filename] = JSON.parse(localStorage.getItem(key));
        }
      });
      setCompletedQuizzes(storedResults);
  }, []);

    // Check if a quiz's dependencies are met
    const areDependenciesMet = (dependencies) => {
      if (!dependencies || dependencies.length === 0) return true;
      return dependencies.every((dep) => completedQuizzes[dep]); 
    };
  
    // Get titles of dependency quizzes
    const getDependencyTitles = (dependencies) => {
      if (!dependencies || dependencies.length === 0) return '';
      return dependencies
        .map((dep) => {
          const depQuiz = quizzes.find((q) => q.filename === dep);
          return depQuiz ? depQuiz.title : dep; 
        })
        .join(', ');
    };

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
              {quizzes.map((quiz) => {
                const result = completedQuizzes[quiz.filename];
                const quizData = quizDetails[quiz.filename];
                const isUnlocked = quizData ? areDependenciesMet(quizData.dependencies) : false;

                return (
                  <motion.div 
                    key={quiz.id} 
                    className="quiz-item"
                    whileHover={{ x: 5 }}
                  >
                    <div className="quiz-info">
                      <h3>{quiz.title}</h3>
                      {result ? (
                        <p>
                          Score: {result.score}/{result.total} (
                          {((result.score / result.total) * 100).toFixed(1)}%)
                        </p>
                      ) : quizData ? (
                        !isUnlocked && (
                          <p>Locked: Complete {getDependencyTitles(quizData.dependencies)}</p>
                        )
                      ) : (
                        <p>Loading...</p>
                      )}
                    </div>
                    {result ? (
                      <div className="quiz-actions">
                        <button 
                          className="quiz-button review-btn"
                          onClick={() => navigate(`/quiz/${quiz.filename}/review`)}
                        >
                          Review <FaChevronRight />
                        </button>
                        <button 
                          className="quiz-button retake-btn"
                          onClick={() => navigate(`/quiz/${quiz.filename}`)}
                        >
                          Retake <FaChevronRight />
                        </button>
                      </div>
                    ) : quizData ? (
                      isUnlocked ? (
                        <button 
                          className="quiz-button start-btn"
                          onClick={() => navigate(`/quiz/${quiz.filename}`)}
                        >
                          Start <FaChevronRight />
                        </button>
                      ) : null
                    ) : null}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;