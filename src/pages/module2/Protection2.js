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

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const getPasswordErrors = (pwd) => {
    const errorList = [];
    if (pwd.length < 8) {
      errorList.push("Password must be at least 8 characters long.");
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
          <h2 className="mod-heading">Test Your Password</h2>
          <p className="mod-text">
            Good practices for creating a strong password include using a mix of uppercase, lowercase, numbers, and
            special characters. Your password should be at least 8 characters long. Enter your password below to see if
            it meets these standards.
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
