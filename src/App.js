import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Modules from './pages/Modules';
import QuizzesList from './pages/QuizzesList';
import Quizzes from './pages/Quizzes';
import QuizReview from './pages/QuizReview';
import Login from './pages/Login';
import UnsecuredWifi from './pages/module1/Intro1';
import Attacks1 from './pages/module1/Attacks1';
import Protection1 from './pages/module1/Protection1';
import CaseStudies1 from './pages/module1/CaseStudies1';
import PasswordSecurity from './pages/PasswordSecurity';
import Attacks2 from './pages/module2/Attacks2';
import Protection2 from './pages/module2/Protection2';
import CaseStudies2 from './pages/module2/CaseStudies2';
import Intro2 from './pages/module2/Intro2';
import Summary2 from './pages/module2/Summary2';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Landing Page - Home (No navbar) */}
        <Route path="/" element={<Home />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/modules/unsecured-wifi" element={<UnsecuredWifi />} />
        <Route path="/modules/unsecured-wifi/attacks" element={<Attacks1 />} />
        <Route path="/modules/unsecured-wifi/protection" element={<Protection1 />} />
        <Route path="/modules/unsecured-wifi/casestudies" element={<CaseStudies1 />} />
        <Route path="/modules/password-security" element={<Intro2 />} />
        <Route path="/modules/password-security/attacks" element={<Attacks2 />} />
        <Route path="/modules/password-security/protection" element={<Protection2 />} />
        <Route path="/modules/password-security/casestudies" element={<CaseStudies2 />} />
        <Route path="/modules/password-security/summary" element={<Summary2 />} />
        <Route path="/quizzesList" element={<QuizzesList />} />
        <Route path="/quiz/:filename" element={<Quizzes />} />
        <Route path="/quiz/:filename/review" element={<QuizReview />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
