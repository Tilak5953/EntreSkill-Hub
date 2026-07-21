// Updated App.jsx with auth, protected routes, and all new pages
// Developer: Tilak Kumar | BML Munjal University | PS-II Internship

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import ScrollToTop from './components/common/ScrollToTop';
import ProtectedRoute from './components/common/ProtectedRoute';

// Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SkillAssessmentPage from './pages/SkillAssessmentPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import RecommendationsPage from './pages/RecommendationsPage';
import RecommendationDetailPage from './pages/RecommendationDetailPage';
import FeedbackPage from './pages/FeedbackPage';
import MentorPage from './pages/MentorPage';
import LearningResourcesPage from './pages/LearningResourcesPage';
import ProgressPage from './pages/ProgressPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3500,
            style: { fontFamily: 'Inter, sans-serif', fontSize: '14px', borderRadius: '12px' },
            success: { iconTheme: { primary: '#6366f1', secondary: '#fff' } },
          }}
        />
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/assessment" element={<SkillAssessmentPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/recommendations" element={<RecommendationsPage />} />
            <Route path="/recommendations/:id" element={<RecommendationDetailPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/mentors" element={<MentorPage />} />
            <Route path="/learning" element={<LearningResourcesPage />} />
            <Route path="/progress" element={<ProgressPage />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
