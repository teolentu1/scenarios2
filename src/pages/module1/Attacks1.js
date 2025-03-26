import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import "./Attacks1.css";

const Attacks1 = () => {
  const [flippedCards, setFlippedCards] = useState({
    mitm: false,
    evilTwin: false,
    packetSniffing: false,
    malware: false
  });

  const [showAttack, setShowAttack] = useState(null);

  const toggleCard = (card) => {
    setFlippedCards(prev => ({...prev, [card]: !prev[card]}));
  };

  const attackTypes = {
    mitm: {
      name: "Man-in-the-Middle",
      description: "Intercepting communications between devices and router",
      color: "#ff2d75"
    },
    evilTwin: {
      name: "Evil Twin",
      description: "Fake access point mimicking legitimate network",
      color: "#7b2dff"
    },
    packetSniffing: {
      name: "Packet Sniffing",
      description: "Capturing unencrypted data transmissions",
      color: "#00f3ff"
    }
  };

  const attackMethods = [
    {
      id: 'mitm',
      title: 'Man-in-the-Middle (MitM) Attacks',
      description: 'Attackers intercept communications between two parties to eavesdrop or alter data. This is particularly prevalent in public Wi-Fi settings where encryption is weak or nonexistent.',
      prevention: 'Use VPNs, enable HTTPS everywhere, and verify network authenticity.',
      icon: '👥',
      resources: [
        { name: 'Pera Prometheus Consulting', url: '#' },
        { name: 'Arizona Repository', url: '#' }
      ]
    },
    {
      id: 'evilTwin',
      title: 'Evil Twin Attacks',
      description: 'Cybercriminals set up fraudulent Wi-Fi access points that mimic legitimate networks. Unsuspecting users connect to these malicious networks.',
      prevention: 'Verify network names with staff, use enterprise authentication when available.',
      icon: '👯',
      resources: [
        { name: 'Pera Prometheus Consulting', url: '#' },
        { name: 'Wikipedia', url: '#' }
      ]
    },
    {
      id: 'packetSniffing',
      title: 'Packet Sniffing',
      description: 'In unsecured networks, data transmitted between devices and routers can be captured, leading to unauthorized access to sensitive information.',
      prevention: 'Use encrypted protocols (HTTPS, SSH), avoid transmitting sensitive data on public WiFi.',
      icon: '👂',
      resources: [
        { name: 'TechRadar', url: '#' }
      ]
    },
    {
      id: 'malware',
      title: 'Malware Distribution',
      description: 'Attackers exploit WiFi vulnerabilities to inject malware into connected devices, compromising data and system functionality.',
      prevention: 'Keep systems updated, use firewalls, disable file sharing on public networks.',
      icon: '🦠',
      resources: [
        { name: 'IJSER', url: '#' }
      ]
    }
  ];

  return (
    <motion.div 
      className="attacks-page"
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
        <h1>How Hackers Exploit WiFi Networks</h1>
        <p className="subtitle">Interactive guide to common wireless attack vectors</p>
      </motion.div>

      <div className="attack-cards-container">
        {attackMethods.map((attack) => (
          <div 
            key={attack.id}
            className={`attack-card ${flippedCards[attack.id] ? 'flipped' : ''}`}
            onClick={() => toggleCard(attack.id)}
          >
            <div className="card-front">
              <div className="attack-icon">{attack.icon}</div>
              <h3>{attack.title}</h3>
              <p>{attack.description}</p>
              <button className="flip-button">Learn Prevention →</button>
            </div>
            <div className="card-back">
              <h3>How to Prevent</h3>
              <p>{attack.prevention}</p>
              <div className="resources">
                <h4>Resources:</h4>
                <ul>
                  {attack.resources.map((resource, index) => (
                    <li key={index}>
                      <a href={resource.url} target="_blank" rel="noopener noreferrer">
                        {resource.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="flip-button">← Back</button>
            </div>
          </div>
        ))}
      </div>

      {/* Network Simulation Section */}
      <motion.div 
        className="simulation-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        <h2>Network Attack Simulation</h2>
        <p className="simulation-instructions">Click on attacker nodes to see how different attacks work</p>
        
        <div className="network-diagram">
          {/* Legitimate Device */}
          <motion.div 
            className="network-node legitimate-device"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="device-icon">💻</div>
            <p>Your Device</p>
          </motion.div>

          {/* Legitimate Router */}
          <motion.div 
            className="network-node legitimate-router"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="router-icon">📶</div>
            <p>Legitimate Router</p>
          </motion.div>

          {/* Attacker Nodes */}
          {/* Attacker Nodes */}
          <motion.div 
          className="network-node attacker"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => setShowAttack('mitm')}
          >
          <div className="attacker-icon">👤</div>
          <p>Man-in-the-Middle</p>
          </motion.div>

          <motion.div 
          className="network-node evil-twin"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => setShowAttack('evilTwin')}
          >
          <div className="router-icon">👿</div>
          <p>Evil Twin</p>
          </motion.div>

          {/* Connection Lines */}
          <svg className="connection-lines" width="100%" height="100%">
            {/* Legitimate connection */}
            <motion.line
              x1="20%" y1="40%"
              x2="50%" y2="50%"
              stroke="#00ff9d"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1 }}
            />
            
            {/* Attack connections */}
            {showAttack === 'mitm' && (
              <>
                <motion.line
                  x1="50%" y1="50%"
                  x2="80%" y2="30%"
                  stroke={attackTypes.mitm.color}
                  strokeWidth="3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.line
                  x1="80%" y1="30%"
                  x2="20%" y2="40%"
                  stroke={attackTypes.mitm.color}
                  strokeWidth="3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                />
              </>
            )}

            {showAttack === 'evilTwin' && (
              <motion.line
                x1="20%" y1="40%"
                x2="80%" y2="60%"
                stroke={attackTypes.evilTwin.color}
                strokeWidth="3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 0.5 }}
              />
            )}
          </svg>
        </div>

        {/* Attack Description Panel */}
        {showAttack && (
          <motion.div 
            className="attack-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 style={{ color: attackTypes[showAttack].color }}>
              {attackTypes[showAttack].name} Attack
            </h3>
            <p>{attackTypes[showAttack].description}</p>
            <p>This is how the {attackTypes[showAttack].name.toLowerCase()} attack works in practice.</p>
            <button 
              className="cyber-button close-button"
              onClick={() => setShowAttack(null)}
            >
              Close Simulation
            </button>
          </motion.div>
        )}
      </motion.div>

      <motion.div 
        className="navigation"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.7 }}
      >
        <Link to="/modules/unsecured-wifi/protection">
          <button className="next-button">
            Next: Protection measures →
          </button>
        </Link>
      </motion.div>

      <div className="footer">
        <p>Educational content compiled from various cybersecurity resources</p>
      </div>
    </motion.div>
  );
};

export default Attacks1;