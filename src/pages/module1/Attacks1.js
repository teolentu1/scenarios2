import React from 'react';
import { Link } from 'react-router-dom';

const Attacks1 = () => {
  return (
    <div>
      <h1>How Hackers Exploit WiFi Networks</h1>
      <p>Here are some common attacks...</p>
      
      {/* Button to navigate to the Detection page */}
      <Link to="/detection">
        <button>Next: Detecting Insecure Networks</button>
      </Link>
    </div>
  );
};

export default Attacks;