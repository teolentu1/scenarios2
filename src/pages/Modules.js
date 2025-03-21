import React from 'react';
import { Link } from 'react-router-dom';

const Modules = () => {
  return (
    <div className="modules-container">
      <h1>Learning Modules</h1>
      <ul className="module-list">
        <li><Link to="/modules/password-security">Password Security</Link></li>
        <li><Link to="/modules/unsecured-wifi">Unsecured Wi-Fi Risks</Link></li>
      </ul>
    </div>
  );
};

export default Modules;
