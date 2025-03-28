import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import elderlyAnimation from "../../assets/elderlyAnimation.json";
import birthdayAnimation from "../../assets/birthdayAnimation.json";
import familyAnimation from "../../assets/familyAnimation.json";
import "./Module2.css";

function CaseStudies2() {
  const [hoverStates, setHoverStates] = useState({
    elderly: false,
    birthday: false,
    family: false,
  });

  return (
    <div className="mod-wrapper">
      <motion.div
        className="cyber-panel mod-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mod-header">
          <h1 className="mod-title">Case Studies: Everyday Weak Passwords</h1>
        </div>

        <section
          className="mod-section with-anim"
          onMouseEnter={() => setHoverStates((prev) => ({ ...prev, elderly: true }))}
          onMouseLeave={() => setHoverStates((prev) => ({ ...prev, elderly: false }))}
        >
          <div className="sect-content">
            <h2 className="mod-heading">Case Study 1: "password123" Dilemma</h2>
            <p className="mod-text">
              Many people, including grandparents and even kids, sometimes choose very simple passwords like "password123".
            </p><br></br>
            <p className="mod-text">
              For example, let's say an elderly man used this common password for his online accounts. It would be quick and easy for 
              a hacker to guess.
            </p><br></br>
            <p><strong>This shows that a password that seems easy to remember can also be easy for others to guess.</strong></p>
          </div>
          <div className="sect-anim">
            <Lottie
              key={`elderly-${hoverStates.elderly}`}
              animationData={elderlyAnimation}
              autoplay={hoverStates.elderly}
              loop={true}
              className="case-anim"
            />
          </div>
        </section>

        <section
          className="mod-section with-anim"
          onMouseEnter={() => setHoverStates((prev) => ({ ...prev, birthday: true }))}
          onMouseLeave={() => setHoverStates((prev) => ({ ...prev, birthday: false }))}
        >
          <div className="sect-content">
            <h2 className="mod-heading">Case Study 2: Birthday Passwords</h2>
            <p className="mod-text">
            It is common practice for families to use birthdays as their passwords. Although it seems 
            like it'd be a secure password, it actually isn't.
            </p><br></br>
            <p className="mod-text">
            Take the example of a mother who named her password after the name of her child, and 
            someone who knew the family well was able to uncover what it was.
            </p><br></br>
            <p><strong>
              This example reminds us that even though a birthday is special, it does not make a strong password.
            </strong>
            </p>
          </div>
          <div className="sect-anim">
            <Lottie
              key={`birthday-${hoverStates.birthday}`}
              animationData={birthdayAnimation}
              autoplay={hoverStates.birthday}
              loop={true}
              className="case-anim"
            />
          </div>
        </section>

        <section
          className="mod-section with-anim"
          onMouseEnter={() => setHoverStates((prev) => ({ ...prev, family: true }))}
          onMouseLeave={() => setHoverStates((prev) => ({ ...prev, family: false }))}
        >
          <div className="sect-content">
            <h2 className="mod-heading">Case Study 3: Shared Family Passwords</h2>
            <p className="mod-text">
            In some families, everyone uses the same simple password for convenience—especially among older 
            adults who might find it hard to remember many different passwords.
            </p><br></br>
            <p className="mod-text">
            Additionally, in a community, several neighbors may share a common password for their online 
            services, and when that password gets guessed, many accounts became at risk.
            </p><br></br>
            <p><strong>
            This case shows that sharing a weak password can put multiple people in danger.
            </strong>
            </p>
          </div>
          <div className="sect-anim">
            <Lottie
              key={`family-${hoverStates.family}`}
              animationData={familyAnimation}
              autoplay={hoverStates.family}
              loop={true}
              className="case-anim"
            />
          </div>
        </section>

        <div className="mod-btn-container">
          <Link to="/modules/password-security/protection">
            <motion.button
              className="cyber-btn mod-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.0 }}
            >
              Previous: Good Practices
            </motion.button>
          </Link>
          <Link to="/modules/password-security/summary">
            <motion.button
              className="cyber-btn mod-btn next-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.0 }}
            >
              Next: Summary
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default CaseStudies2;
