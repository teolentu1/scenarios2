import React from 'react';
import { Link } from 'react-router-dom';

const Intro1 = () => {
  return (
    <div>
      <h1>Introduction to Insecure WiFi</h1>
      <p>Learn about the risks of using insecure WiFi networks...</p>
      
      {/* Button to navigate to the Attacks page */}
      <Link to="/attacks">
        <button>Next: How Hackers Exploit WiFi</button>
      </Link>
    </div>
  );
};

export default Intro1; // Use Intro instead of UnsecuredWifi
