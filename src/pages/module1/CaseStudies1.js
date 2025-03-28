import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './CaseStudies1.css';

const CaseStudies1 = () => {
  const caseStudies = [
    {
      id: 1,
      title: "The Starbucks WiFi Hack",
      date: "2015",
      summary: "Hackers exploited unsecured WiFi to steal customer data",
      details: [
        "Attackers set up rogue access points in Starbucks locations mimicking legitimate Starbucks WiFi",
        "Used packet sniffing to intercept unencrypted data from customers",
        "Compromised login credentials, credit card information, and personal data",
        "Affected hundreds of customers across multiple locations",
        "Starbucks responded by implementing mandatory HTTPS and improving network monitoring"
      ],
      impact: "Estimated $250,000 in damages from identity theft and fraud",
      lesson: "Always verify network names and use VPNs on public WiFi"
    },
    {
      id: 2,
      title: "The Hotel Data Breach",
      date: "2016-2018",
      summary: "Malware installed through hotel WiFi compromised payment systems",
      details: [
        "Attackers infiltrated hotel WiFi networks through unsecured administrator portals",
        "Installed malware that spread to point-of-sale systems",
        "Collected payment card data from thousands of guests",
        "Went undetected for nearly 2 years across multiple hotel chains",
        "Compromised over 100,000 payment cards before discovery",
        "Required complete network overhaul to eliminate"
      ],
      impact: "10 million dollars in fraudulent charges and remediation costs",
      lesson: "Businesses must segment guest networks from critical systems"
    }
  ];

  return (
    <motion.div 
      className="case-studies-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="cyber-grid-overlay"></div>
      
      <div className="case-studies-header">
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          WiFi Security Case Studies
        </motion.h1>
        <p className="subtitle">Real-world incidents showing the dangers of unsecured networks</p>
      </div>

      <div className="case-studies-container">
        {caseStudies.map((study) => (
          <motion.div 
            key={study.id}
            className="case-study-card"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="case-study-header">
              <h2>{study.title}</h2>
              <span className="case-study-date">{study.date}</span>
            </div>
            <p className="case-study-summary">{study.summary}</p>
            
            <div className="case-study-details">
              <h3>Attack Details:</h3>
              <ul>
                {study.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
            
            <div className="case-study-impact">
              <h3>Impact:</h3>
              <p>{study.impact}</p>
            </div>
            
            <div className="case-study-lesson">
              <h3>Key Lesson:</h3>
              <p>{study.lesson}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="centered-navigation">
        <Link to="/modules/unsecured-wifi/summary">
          <button className="next-button">
            Next: Summary →
          </button>
        </Link>
      </div>

    </motion.div>
  );
};

export default CaseStudies1;