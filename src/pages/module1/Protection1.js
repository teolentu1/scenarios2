import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import "./Protection1.css";

const Protection1 = () => {
  const [activeMeasure, setActiveMeasure] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const protectionMeasures = [
    {
      id: 'vpn',
      title: 'VPN Protection',
      description: 'Encrypts all internet traffic through a secure tunnel, making your data unreadable to interceptors.',
      icon: '🛡️',
      animation: 'vpn'
    },
    {
      id: 'https',
      title: 'HTTPS Everywhere',
      description: 'Forces encrypted connections to websites, preventing data interception on public networks.',
      icon: '🔐',
      animation: 'https'
    },
    {
      id: 'firewall',
      title: 'Firewall Defense',
      description: 'Monitors and blocks suspicious incoming/outgoing connections to prevent unauthorized access.',
      icon: '🔥',
      animation: 'firewall'
    },
    {
      id: 'updates',
      title: 'System Updates',
      description: 'Patches security vulnerabilities that hackers exploit to gain access to your devices.',
      icon: '🔄',
      animation: 'update'
    }
  ];

  const detectionSigns = [
    {
      id: 'slow',
      title: 'Network Slowdown',
      description: 'Sudden drops in speed may indicate traffic interception',
      icon: '🐢'
    },
    {
      id: 'duplicate',
      title: 'Duplicate Networks',
      description: 'Identically named networks could be evil twins',
      icon: '👯'
    },
    {
      id: 'certificate',
      title: 'Certificate Warnings',
      description: 'Browser warnings about invalid security certificates',
      icon: '⚠️'
    },
    {
      id: 'unprompted',
      title: 'Fake Login Pages',
      description: 'Unexpected authentication requests are likely phishing',
      icon: '🎣'
    }
  ];

  const networkNodes = [
    { id: 'device', type: 'user', icon: '💻', name: 'Your Device', x: 4, y: 35 },
    { id: 'router', type: 'router', icon: '📶', name: 'Secure Router', x: 45, y: 37 },
    { id: 'attacker', type: 'attacker', icon: '👤', name: 'Hacker', x: 85, y: 25 }
  ];

  return (
    <motion.div 
      className="protection-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="cyber-grid-overlay"></div>
      
      <motion.div 
        className="header"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1>Advanced WiFi Protection</h1>
        <p className="subtitle">Defensive strategies and threat detection</p>
      </motion.div>

      <div className="protection-measures">
        <h2>Essential Security Measures</h2>
        <div className="measures-list">
          {protectionMeasures.map((measure) => (
            <motion.div
              key={measure.id}
              className={`measure-item ${activeMeasure === measure.id ? 'active' : ''}`}
              onHoverStart={() => setHoveredItem(measure.id)}
              onHoverEnd={() => setHoveredItem(null)}
              onClick={() => setActiveMeasure(activeMeasure === measure.id ? null : measure.id)}
              whileHover={{ x: 10 }}
              layout
            >
              <div className="measure-header">
                <span className="measure-icon">{measure.icon}</span>
                <h3>{measure.title}</h3>
                <motion.div 
                  className="indicator"
                  animate={{ rotate: activeMeasure === measure.id ? 180 : 0 }}
                >
                  ▼
                </motion.div>
              </div>
              
              <AnimatePresence>
                {activeMeasure === measure.id && (
                  <motion.div
                    className="measure-content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{measure.description}</p>
                    <div className={`measure-animation ${measure.animation}`}></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="network-simulation">
        <h2>Live Security Simulation</h2>
        <div className="simulation-container">
          <svg className="connections" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Secure connection */}
            <motion.path
              d="M15,50 Q32,40 50,50 Q68,60 85,50"
              stroke="#00ff9d"
              strokeWidth="0.5"
              strokeDasharray="5,5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            />
            
            {/* Attack attempt */}
            <motion.path
              d="M85,30 Q70,20 50,50 Q30,80 15,50"
              stroke="#ff2d75"
              strokeWidth="0.3"
              strokeDasharray="2,2"
              fill="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity
              }}
            />
          </svg>

          {networkNodes.map((node) => (
            <motion.div
              key={node.id}
              className={`network-node ${node.type}`}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
              }}
              animate={{
                y: [0, -5, 0],
                transition: { 
                  duration: 2,
                  repeat: Infinity,
                  delay: node.id === 'attacker' ? 0.5 : 0
                }
              }}
              whileHover={{ scale: 1.2 }}
            >
              <div className="node-icon">{node.icon}</div>
              <div className="node-name">{node.name}</div>
              {node.type === 'attacker' && (
                <motion.div
                  className="attack-waves"
                  animate={{
                    scale: [1, 1.5],
                    opacity: [0.7, 0],
                    transition: {
                      duration: 2,
                      repeat: Infinity
                    }
                  }}
                />
              )}
            </motion.div>
          ))}

          <motion.div
            className="encryption-badge"
            animate={{
              scale: [1, 1.05],
              transition: { duration: 1.5, repeat: Infinity, repeatType: "reverse" }
            }}
          >
            🔒 AES-256 Encryption
          </motion.div>
        </div>
        <p className="simulation-caption">
          Your encrypted connection (green) vs. hacker's attempted interception (red)
        </p>
        </div>

      <div className="detection-methods">
        <h2>Threat Detection Signs</h2>
        <p className="prevention-philosophy">
          <strong>Prevention First:</strong> Recognizing these warning signs early helps avoid compromised networks altogether.
        </p>
        
        <div className="detection-grid">
          {detectionSigns.map((sign) => (
            <motion.div
              key={sign.id}
              className="detection-card"
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px rgba(0, 243, 255, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="sign-icon">{sign.icon}</div>
              <h4>{sign.title}</h4>
              <p>{sign.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="navigation">
        <Link to="/modules/unsecured-wifi/caseStudies">
          <motion.button
            className="next-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Next: Real-World Case Studies →
          </motion.button>
        </Link>
      </div>

      <footer className="resources-footer">
        <div className="footer-content">
          <h4>Resources used</h4>
          <div className="footer-links">
            <a href="https://www.cisa.gov/secure-connections" target="_blank" rel="noopener noreferrer">CISA Encryption Guide</a>
            <a href="https://www.eff.org/https-everywhere" target="_blank" rel="noopener noreferrer">EFF Security Tools</a>
            <a href="https://www.vpnmentor.com/privacy-guides/" target="_blank" rel="noopener noreferrer">VPN Security Research</a>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default Protection1;