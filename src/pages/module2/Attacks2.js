import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Lottie from "lottie-react";
import threatsAnimation from "../../assets/threatsAnimation.json";
import "./Module2.css";

function Attacks2() {
  const animationRef = useRef(null);
  const lottieRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: animationRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.1, 0.5, 1], [1, 1.05, 1.05, 1]);
  const boxShadow = useTransform(
    scrollYProgress,
    [0, 0.1, 0.5, 1],
    [
      "0 5px 15px rgba(0, 243, 255, 0.1)",
      "0 8px 25px rgba(0, 243, 255, 0.3)",
      "0 8px 25px rgba(0, 243, 255, 0.3)",
      "0 5px 15px rgba(0, 243, 255, 0.1)",
    ]
  );
  const borderColor = useTransform(
    scrollYProgress,
    [0, 0.1, 0.5, 1],
    [
      "rgba(0, 243, 255, 0.2)",
      "rgba(0, 243, 255, 0.5)",
      "rgba(0, 243, 255, 0.5)",
      "rgba(0, 243, 255, 0.2)",
    ]
  );

  return (
    <div className="mod-wrapper">
      <motion.div
        className="cyber-panel mod-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="mod-title">Understanding Threats and Risks</h1>

        <motion.div
          className="anim-container"
          ref={animationRef}
          style={{
            scale,
            boxShadow,
            borderColor,
          }}
        >
          <Lottie
            animationData={threatsAnimation}
            lottieRef={lottieRef}
            className="threat-anim"
            loop={true}
            autoplay={true}
          />
        </motion.div>

        <section className="mod-section">
          <h2 className="mod-heading">What are Cyber Threats?</h2>
          <p className="mod-text">
            Cyber threats are malicious attempts to damage, disrupt, or gain unauthorized access to computer systems,
            networks, or devices. These threats can come in various forms, including viruses, malware, phishing attacks,
            and ransomware. Understanding the nature of these threats is crucial in developing effective strategies to
            protect against them.
          </p>
        </section>

        <section className="mod-section">
          <h2 className="mod-heading">Why are they Dangerous?</h2>
          <p className="mod-text">
            Cyber threats pose significant dangers to individuals and organizations alike. They can lead to data
            breaches, financial loss, and damage to reputation. In severe cases, cyber attacks can disrupt critical
            infrastructure and services, causing widespread harm. Recognizing the potential impact of these threats
            underscores the importance of robust cybersecurity measures.
          </p>
        </section>

        <section className="mod-section">
          <h2 className="mod-heading">Examples of Cyber Risks:</h2>
          <p className="mod-text">
            Cyber risks encompass a wide range of potential issues. For instance, phishing attacks trick individuals
            into revealing sensitive information, while ransomware locks users out of their systems until a ransom is
            paid. Another example is a Distributed Denial of Service (DDoS) attack, which overwhelms a network with
            traffic, rendering it unusable. These examples illustrate the diverse and evolving nature of cyber risks.
          </p>
        </section>

        <div className="mod-btn-container">
          <Link to="/modules/password-security">
            <motion.button
              className="cyber-btn mod-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Previous: Intro
            </motion.button>
          </Link>
          <Link to="/modules/password-security/protection">
            <motion.button
              className="cyber-btn mod-btn next-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Next: Good Practices
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Attacks2;
