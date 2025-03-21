import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Modules from './pages/Modules';
import PasswordSecurity from './pages/PasswordSecurity';
import UnsecuredWifi from './pages/module1/UnsecuredWifi';
import Quizzes from './pages/Quizzes';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Landing Page - Home (No navbar) */}
        <Route path="/" element={<Home />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/modules/password-security" element={<PasswordSecurity />} />
        <Route path="/modules/unsecured-wifi" element={<UnsecuredWifi />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
