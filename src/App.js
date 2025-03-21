import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Navigation bar component
import Home from './pages/Home'; // Landing page
import Intro from './pages/Intro'; // Introduction to Insecure WiFi
import Attacks from './pages/Attacks'; // Attacks on WiFi networks
import Detection from './pages/Detection'; // Detecting insecure networks
import Protection from './pages/Protection'; // Best Practices for WiFi Security
import CaseStudies from './pages/CaseStudies'; // Real-world examples

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page - Home (No navbar) */}
        <Route path="/" element={<Home />} />
        
        {/* Pages with Navbar (all other pages) */}
        <Route path="/intro" element={<><Navbar /><Intro /></>} />
        <Route path="/attacks" element={<><Navbar /><Attacks /></>} />
        <Route path="/detection" element={<><Navbar /><Detection /></>} />
        <Route path="/protection" element={<><Navbar /><Protection /></>} />
        <Route path="/case-studies" element={<><Navbar /><CaseStudies /></>} />
      </Routes>
    </Router>
  );
}

export default App;
