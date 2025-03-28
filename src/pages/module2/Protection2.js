import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import correctAnimation from "../../assets/correctAnimation.json";
import incorrectAnimation from "../../assets/incorrectAnimation.json";
import "./Module2.css";

function Protection2() {
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  
  // state for toggling list subheadings in the Additional Tips section
  const [expandedTips, setExpandedTips] = useState({
    tip1: false,
    tip2: false,
    tip3: false
  });

  const toggleTip = (tip) => {
    setExpandedTips({
      ...expandedTips,
      [tip]: !expandedTips[tip]
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const getPasswordErrors = (pwd) => {
    const errorList = [];
    if (pwd.length < 12) {
      errorList.push("Password must be at least 12 characters long.");
    }
    if (!/[A-Z]/.test(pwd)) {
      errorList.push("Password must contain at least one uppercase letter.");
    }
    if (!/[a-z]/.test(pwd)) {
      errorList.push("Password must contain at least one lowercase letter.");
    }
    if (!/\d/.test(pwd)) {
      errorList.push("Password must contain at least one digit.");
    }
    if (!/[@$!%*?&_\-.]/.test(pwd)) {
      errorList.push("Password must contain at least one special character (@, $, !, %, *, ?, &, _, -, .).");
    }
    return errorList;
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorList = getPasswordErrors(password);
    setErrors(errorList);
    setSubmitted(true);
  };

  return (
    <div className="mod-wrapper">
      <motion.div
        className="cyber-panel mod-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mod-header">
          <h1 className="mod-title">Good Password Practices</h1>
        </div>

        <section className="mod-section">
          <h2 className="mod-heading">What Makes a Strong Password?</h2>
          <p className="mod-text">
            To create a strong password, you must follow the criteria below 
            (<a href="https://support.microsoft.com/en-gb/windows/create-and-use-strong-passwords-c5cebb49-8c53-4f5e-2bc4-fe357ca048eb"
            target="_blank" rel="noreferrer">
              Microsoft
            </a>): 
          </p>
          <br />
          <ol className="mod-ordered-list">
            <li>The password must contain at least 12 characters (more is preferable).</li>
            <li>The password must contain a mix of upper and lowercase letters.</li>
            <li>The password must contain at least one number.</li>
            <li>The password must contain at least one symbol.</li>
          </ol>
        </section>

        <section className="mod-section">
          <h2 className="mod-heading">Exercise: Test Your Password</h2>
          <p className="mod-text">
            Use the below input field to test if your current password/s meet the aforementioned criteria.
          </p>
          <br />
          <p>
            If not, try editing your password/s to meet the criteria. The edited password/s should be what 
            you use to secure your online accounts.
          </p>

          <form onSubmit={handleSubmit} className="pwd-form">
            <div className="pwd-container">
              <div className="inp-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                  className="pwd-input"
                  placeholder="Enter a strong password"
                />
                <button type="button" className="toggle-pwd-btn" onClick={togglePasswordVisibility}>
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {submitted && (
                <div className="anim-inline">
                  <Lottie
                    animationData={errors.length === 0 ? correctAnimation : incorrectAnimation}
                    loop={false}
                    autoplay={true}
                  />
                </div>
              )}
            </div>

            <motion.button
              type="submit"
              className="cyber-submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="cyber-submit-label">Submit Password</span>
              <span className="cyber-submit-shine"></span>
            </motion.button>
          </form>

          {submitted && errors.length > 0 && (
            <div className="invalid-msg">
              <p>Your password does not meet the following requirements:</p>
              <ul>
                {errors.map((err, index) => (
                  <li key={index}>{err}</li>
                ))}
              </ul>
            </div>
          )}
          {submitted && errors.length === 0 && (
            <p className="valid-msg">Great! Your password meets all the requirements.</p>
          )}
        </section>

        <section className="mod-section">
          <h2 className="mod-heading">Additional Tips to be Safe from Cyber Threats:</h2>
          <ol className="mod-ordered-list">
            <li>
              <div className="list-subheading clickable" onClick={() => toggleTip('tip1')}>
                Use different passwords for different accounts {expandedTips.tip1 ? '▼' : '▶'}
              </div>
              {expandedTips.tip1 && (
                <p className="mod-text">
                  To avoid all accounts with the same password being compromised.
                </p>
              )}
            </li>
            <li>
              <div className="list-subheading clickable" onClick={() => toggleTip('tip2')}>
                Enable multi-factor authentication (MFA) where possible {expandedTips.tip2 ? '▼' : '▶'}
              </div>
              {expandedTips.tip2 && (
                <p className="mod-text">
                  MFA is a security method which requires users to provide multiple ways
                  of verifying their account when accessing it (e.g. a password and a fingerprint).
                </p>
              )}
            </li>
            <li>
              <div className="list-subheading clickable" onClick={() => toggleTip('tip3')}>
                Immediately Change Passwords After a Breach {expandedTips.tip3 ? '▼' : '▶'}
              </div>
              {expandedTips.tip3 && (
                <p className="mod-text">
                  In the case that an online account of yours has been breached, change its password as soon as possible
                  to prevent further unauthorized access.
                </p>
              )}
            </li>
            <li>
              <div className="list-subheading clickable" onClick={() => toggleTip('tip4')}>
                Use a password manager to store all your passwords {expandedTips.tip4 ? '▼' : '▶'}
              </div>
              {expandedTips.tip4 && (
                <p className="mod-text">
                  Password managers are tools which give you the ability to store all your passwords securely without having 
                  to remember them.
                </p>
              )}
            </li>
          </ol>
        </section>

        <div className="mod-btn-container">
          <Link to="/modules/password-security/attacks">
            <motion.button
              className="cyber-btn mod-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.0 }}
            >
              Previous: Threats and Risks
            </motion.button>
          </Link>
          <Link to="/modules/password-security/casestudies">
            <motion.button
              className="cyber-btn mod-btn next-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.0 }}
            >
              Next: Case Studies
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Protection2;
