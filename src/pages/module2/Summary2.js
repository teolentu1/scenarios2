import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Summary2.css';

const Summary2 = () => {
  const keyConcepts = [
    {
      title: "Password Complexity",
      icon: "🔑",
      points: [
        "Mix uppercase, lowercase, numbers, and symbols",
        "Avoid common words and predictable patterns",
        "Ensure diversity in character types"
      ]
    },
    {
      title: "Password Length",
      icon: "📏",
      points: [
        "Use at least 12 characters",
        "Longer passwords add more security",
        "Combine phrases for increased length"
      ]
    },
    {
      title: "Unique Passwords",
      icon: "🆕",
      points: [
        "Use different passwords for each account",
        "Prevent one breach from compromising multiple accounts",
        "Consider a secure password manager"
      ]
    },
    {
      title: "Multi-Factor Authentication",
      icon: "🔒",
      points: [
        "Add a second layer of security",
        "Use SMS, email, or app-based verification",
        "Reduce reliance on just a password"
      ]
    }
  ];

  const caseStudyHighlights = [
    {
      title: "'password123' Dilemma",
      lesson: "A password that seems easy to remember can also be easy for others to guess"
    },
    {
      title: "Shared Family Passwords",
      lesson: "Sharing a weak password can put multiple people in danger"
    }
  ];

  const [checklistItems, setChecklistItems] = useState([
    { id: 'mfa', label: 'Enable Multi-Factor Authentication', checked: false },
    { id: 'length', label: 'Adopt longer passwords (12+ characters)', checked: false },
    { id: 'unique', label: 'Use unique passwords for each account', checked: false },
    { id: 'manager', label: 'Use a password manager to store your passwords', checked: false }
  ]);

  const toggleItem = (id) => {
    setChecklistItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <motion.div 
      className="summary-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="cyber-grid-overlay"></div>

      <div className="summary-header">
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Password Security: Module Summary
        </motion.h1>
        <p className="subtitle">Key takeaways and security recommendations</p>
      </div>

      <div className="knowledge-check">
        <h2>Key Concepts</h2>
        <div className="checkpoint-grid">
          {keyConcepts.map((concept, index) => (
            <motion.div 
              key={index}
              className="concept-card"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="concept-icon">{concept.icon}</div>
              <h3>{concept.title}</h3>
              <ul>
                {concept.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="case-study-review">
        <h2>Case Study Highlights</h2>
        <div className="case-study-grid">
          {caseStudyHighlights.map((study, index) => (
            <motion.div
              key={index}
              className="study-card"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <h3>{study.title}</h3>
              <p className="lesson">{study.lesson}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="security-checklist">
        <h2>Personal Security Checklist</h2>
        <motion.div 
          className="checklist-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {checklistItems.map(item => (
            <div className="checklist-item" key={item.id}>
              <input 
                type="checkbox" 
                id={item.id} 
                checked={item.checked} 
                onChange={() => toggleItem(item.id)} 
              />
              <label htmlFor={item.id}>{item.label}</label>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mod-btn-container">
        <Link to="/modules/password-security/casestudies">
          <motion.button
            className="cyber-btn mod-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.0 }}
          >
            Previous: Case Studies
          </motion.button>
        </Link>
        <Link to="/">
          <motion.button
            className="cyber-btn mod-btn next-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.0 }}
          >
            Next: Home
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Summary2;
