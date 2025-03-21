import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Modules from './pages/Modules';
import Quizzes from './pages/Quizzes';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>

  );
  {/* Main Content */}
    <header className="App-header">
      <div className="title-container">
        <img src={shieldLogo} alt="Cybersecurity Shield" className="logo" />
        <h1>CyberShield</h1>
      </div>
      <p>Your gateway to cybersecurity knowledge and protection.</p>
      <button className="cta-button">Learn More</button>
    </header>

}

export default App;
