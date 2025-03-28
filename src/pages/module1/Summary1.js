import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Summary1.css';

const Summary1 = () => {
  const keyConcepts = [
    {
      title: "WiFi Vulnerabilities",
      icon: "📶",
      points: [
        "Public WiFi networks often lack encryption",
        "Attackers can intercept unsecured traffic",
        "Evil twin attacks mimic legitimate networks"
      ]
    },
    {
      title: "Common Attacks",
      icon: "🛑",
      points: [
        "Man-in-the-Middle (MitM) interception",
        "Packet sniffing of unencrypted data",
        "Malware distribution through fake updates",
        "Credential theft via fake login pages"
      ]
    },
    {
      title: "Protection Measures",
      icon: "🛡️",
      points: [
        "Always use a reputable VPN service",
        "Enable HTTPS Everywhere in your browser",
        "Keep all devices and software updated",
        "Verify network names with staff"
      ]
    },
    {
      title: "Detection Signs",
      icon: "🔍",
      points: [
        "Unexpected certificate warnings",
        "Duplicate network names",
        "Unusually slow connections",
        "Unprompted login requests"
      ]
    }
  ];

  const caseStudyHighlights = [
    {
      title: "Starbucks WiFi Hack",
      lesson: "Verified networks and VPNs prevent credential theft"
    },
    {
      title: "Hotel Data Breach", 
      lesson: "Network segmentation protects critical systems"
    }
  ];

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
          Unsecured WiFi: Module Summary
        </motion.h1>
        <p className="subtitle">Key takeaways and security recommendations</p>
      </div>

      <div className="knowledge-check">
        <h2>Knowledge Checkpoint</h2>
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
          <div className="checklist-item">
            <input type="checkbox" id="vpn" />
            <label htmlFor="vpn">Use VPN on public networks</label>
          </div>
          <div className="checklist-item">
            <input type="checkbox" id="https" />
            <label htmlFor="https">Enable HTTPS Everywhere</label>
          </div>
          <div className="checklist-item">
            <input type="checkbox" id="updates" />
            <label htmlFor="updates">Keep devices updated</label>
          </div>
          <div className="checklist-item">
            <input type="checkbox" id="verify" />
            <label htmlFor="verify">Verify network names</label>
          </div>
          <div className="checklist-item">
            <input type="checkbox" id="sensitive" />
            <label htmlFor="sensitive">Avoid sensitive transactions</label>
          </div>
        </motion.div>
      </div>

      <div className="next-steps">
        <h2>Continue Your Learning</h2>
        <div className="steps-grid">
          <Link to="/modules/password-security" className="step-card">
            <div className="step-icon">🔑</div>
            <h3>Password Security</h3>
            <p>Learn about strong authentication practices</p>
          </Link>
          <a href="https://www.ncsc.gov.uk" target="_blank" rel="noopener noreferrer" className="step-card">
            <div className="step-icon">🇬🇧</div>
            <h3>National Cyber Security Centre</h3>
            <p>Official government security recommendations</p>
          </a>
        </div>
      </div>

      <div className="centered-navigation">
        <Link to="/">
          <button className="next-button">
            Back to Home
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Summary1;