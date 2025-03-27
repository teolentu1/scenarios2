import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import securityAnimation from '../../assets/securityAnimation.json';
import './Module2.css';

function Intro2() {
  return (
    <div className="mod-wrapper">
      <motion.div
        className="cyber-panel mod-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="title-cont">
          <h1 className="mod-title">Intro to Password Security</h1>
          <div className="title-anim">
            <Lottie 
              animationData={securityAnimation} 
              loop={false} 
              autoplay={true} 
            />
          </div>
        </div>

        <section className="mod-section">
          <h2 className="mod-heading">What is a strong password?</h2>
          <p className="mod-text">
            Strong passwords are those which are difficult to guess or crack by unauthorized users. Strong passwords
            must follow a specific criteria to be considered secure (we will talk about this criteria in detail in 
            the <a href="/modules/password-security/protection">Good Practices</a> section). 
          </p>
        </section>

        <section className="mod-section">
          <h2 className="mod-heading">Why do they matter?</h2>
          <p className="mod-text">
            The importance of strong passwords cannot be overstated. Weak or common passwords are the primary 
            cause of many security breaches, often leading to account takeovers and significant data theft. 
            When cybercriminals gain access to one account, they may exploit that vulnerability to target 
            additional systems, compromising personal or business data. Hence, maintaining robust password 
            practices is a fundamental step in securing online identities and sensitive information.
          </p>
        </section>

        <section className="mod-section">
          <h2 className="mod-heading">Example:</h2>
          <p className="mod-text">
            To put the risks into perspective, consider a simple digit-only password. Even with a modest length, 
            such passwords can be rapidly guessed using automated tools. For example, a basic four-digit PIN 
            has only 10,000 possible combinations. Modern computers can cycle through these combinations in a 
            matter of seconds, exposing just how vulnerable such simplistic passwords can be. This example 
            highlights the necessity of incorporating letters, numbers, and symbols to create passwords that 
            are both long and complex, thereby enhancing overall security.
          </p>
        </section>

        <Link to="/modules/password-security/attacks">
          <motion.button
            className="cyber-btn mod-btn right-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Next: Threats and Risks
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}

export default Intro2;
