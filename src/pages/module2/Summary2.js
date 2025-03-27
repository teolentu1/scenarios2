import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Module2.css';

function Summary2() {
  return (
    <div className="mod-wrapper">
      <motion.div 
        className="cyber-panel mod-card" 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        <div className="mod-header">
          <h1 className="mod-title">Summary of Password Security</h1>
        </div>
        
        <section className="mod-section summary-sec">
          <h2 className="mod-heading">Key Takeaways</h2>
          <p className="mod-text">
            Throughout this module, we explored the importance of strong, unique, and complex passwords. We examined real-life examples where weak passwords led to security breaches, and discussed practical methods to create secure passwords. 
            Remember: using a mix of uppercase and lowercase letters, numbers, and special characters—while avoiding common words and easily guessable dates—is crucial for protecting your personal information. 
            By adopting these best practices, you can significantly reduce the risk of unauthorized access to your online accounts.
          </p>
        </section>
        
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
    </div>
  );
}

export default Summary2;
