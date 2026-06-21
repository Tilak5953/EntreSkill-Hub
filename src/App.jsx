// EntreSkill Hub - Main App Component
// Developer: Tilak Kumar
// Course: PS-II Internship | BML Munjal University
// Station: Unified Mentor
// Project: Skill-to-Startup Enablement Platform

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ScrollToTop from './components/common/ScrollToTop';

// Main App - sets up routing for all 3 pages
function App() {
  return (
    <Router>
      {/* ScrollToTop makes sure page starts from top on route change */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
