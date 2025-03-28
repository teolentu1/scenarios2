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
          <div className="mod-text">
          <p>  Cyber threats are malicious attempts to get access to data, damage dasta, or just interfere with 
            digital processes.
            (<a href="https://www.upguard.com/blog/cyber-threat"
               target="_blank" rel="noreferrer">
                Upguard</a>)
          </p><br></br>
            <p>Some examples of this include:</p>
            <ul className="mod-list">
              <li>Viruses: A software that spreads between computers and causes data damage.
                (<a href="https://www.fortinet.com/resources/cyberglossary/computer-virus"
               target="_blank" rel="noreferrer">
                Fortinet</a>)
              </li>
              <li>Phishing Attacks: An attack where cybercriminals use deceptive techniques to get sensitive data 
                from users like passwords.
                (<a href="https://www.ncsc.gov.uk/collection/phishing-scams#"
               target="_blank" rel="noreferrer">
                National Cyber Security Centre</a>)</li>
              <li>A DDoS attack is when many devices flood a website or server with traffic, making it unavailable.
                (<a href="https://www.fortinet.com/resources/cyberglossary/ddos-attack"
               target="_blank" rel="noreferrer">
                Fortinet</a>)
              </li>
            </ul>  
          </div>
        </section>

        <section className="mod-section">
          <h2 className="mod-heading">Why are People with Unsecure Passwords at Risk?</h2>
          <p className="mod-text">
            Think of having an unsecure password as the front door of your home having a flimsy lock, one
            that can easily be picked, making it easy for thieves to get into your home. This is the same 
            as having an unsecure password, it makes your data vulnerable to cyber threats and attacks.
          </p><br></br>
          <p>
            Meanwhile, having a secure password can be likened to having a very strong lock on your front door
            that no one is able to bypass except you. Secure passwords make you no longer vulnerable to such threats. 
          </p>
          <h3 className="mod-subheading">Putting this into Perspective:</h3>
          <p className="mod-text">
          Consider a simple four-digit password consisting only of numbers. This type of password has a maximum of 
          10,000 possible combinations. Although this may sound like a lot, automated tools can process this amount of 
          data in seconds. It doesn't seem strong enough to protect your private personal information, does it?
          </p><br></br>
          <p className="mod-text">
          Well, not to worry because we will address this issue in the next section by delving deeper into how to create 
          a secure password!
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
