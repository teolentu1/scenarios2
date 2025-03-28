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
  };

  const attackMethods = [
    {
      id: 'mitm',
      title: 'Man-in-the-Middle (MitM)',
      definition: 'Cybercriminals set up fake public Wi-Fi to intercept and manipulate traffic, positioning themselves between users and applications.',
      icon: '👬',
      examples: [
        'E-commerce platforms',
        'Software as a Service apps',
        'Banking apps'
      ]
    },
    {
      id: 'evilTwin',
      title: 'Evil Twin Attacks',
      definition: 'Cybercriminals set up fraudulent Wi-Fi access points that mimic legitimate networks to capture sensitive data.',
      icon: '😈',
      examples: [
        'Corporate networks',
        'Hotel WiFi',
        'Airport hotspots'
      ]
    },
    {
      id: 'packetSniffing',
      title: 'Packet Sniffing',
      definition: 'Attackers passively intercept data on unsecured Wi-Fi networks, allowing them to monitor traffic and steal sensitive information.',
      icon: '👃',
      examples: [
        'HTTP traffic',
        'FTP logins',
        'Unencrypted emails'
      ]
    },
    {
      id: 'malware',
      title: 'Malware Distribution',
      definition: 'Attackers inject malicious software through network vulnerabilities.',
      icon: '🦠',
      examples: [
        'Ransomware',
        'Keyloggers',
        'Spyware'
      ]
    }
  ];

  const resources = [
    { name: 'Checkpoint Research', url: 'https://www.checkpoint.com/cyber-hub/cyber-security/what-is-hacking/wi-fi-hacking-how-it-works-and-how-to-stay-secure/#6CommonTechniques' },
    { name: 'OWASP Guidelines', url: 'https://owasp.org/' },
    { name: 'NIST Standards', url: 'https://www.nist.gov/' }
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

      <div className="attack-cards-grid">
        {attackMethods.map((attack) => (
          <div 
            key={attack.id}
            className={`attack-card ${flippedCards[attack.id] ? 'flipped' : ''}`}
            onClick={() => toggleCard(attack.id)}
          >
            <div className="card1-front">
              <div className="attack-icon">{attack.icon}</div>
              <h3>{attack.title}</h3>
              <button className="flip-button">View Details →</button>
            </div>
            <div className="card1-back">
              <h3>{attack.title}</h3>
              <p className="definition">{attack.definition}</p>
              <div className="examples">
                <h4>Example Targets:</h4>
                <ul>
                  {attack.examples.map((example, index) => (
                    <li key={index}>{example}</li>
                  ))}
                </ul>
              </div>
              <button className="flip-button">← Back</button>
            </div>
          </div>
        ))}
      </div>

      <motion.div 
        className="simulation-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        <h2>Network Attack Simulation</h2>
        <p className="simulation-instructions">Click on attacker nodes to see how different attacks work</p>
        
        <div className="network-diagram">
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

          <motion.div 
            className="network-node attacker"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setShowAttack('mitm')}
          >
            <div className="attacker-icon">👬</div>
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
            <div className="router-icon">😈</div>
            <p>Evil Twin</p>
          </motion.div>

          <svg className="connection-lines" width="100%" height="100%">
            <motion.line
              x1="20%" y1="40%"
              x2="50%" y2="55%"
              stroke="#00ff9d"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1 }}
            />
            
            {showAttack === 'mitm' && (
              <>
                <motion.line
                  x1="50%" y1="55%"
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
                x2="80%" y2="70%"
                stroke={attackTypes.evilTwin.color}
                strokeWidth="3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 0.5 }}
              />
            )}
          </svg>
        </div>

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

      <div className="centered-navigation">
        <Link to="/modules/unsecured-wifi/protection">
          <button className="next-button">
            Next: Protection measures →
          </button>
        </Link>
      </div>

      <footer className="resources-footer">
        <ul>
          {resources.map((resource, index) => (
            <li key={index}>
              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                {resource.name}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </motion.div>
  );
};

export default Attacks1;