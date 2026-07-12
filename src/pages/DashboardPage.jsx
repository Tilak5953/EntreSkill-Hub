// DashboardPage — connected to real API data
// Developer: Tilak Kumar | BML Munjal University | PS-II Internship

import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../utils/api';

const categoryLabels = {
  programming: 'Programming', leadership: 'Leadership', marketing: 'Marketing',
  finance: 'Finance', communication: 'Communication', riskTaking: 'Risk Taking',
  management: 'Management', digitalSkills: 'Digital Skills', businessKnowledge: 'Business Knowledge',
};

function StatCard({ icon, label, value, sub, color }) {
  return (
    <div className="card p-5">
      <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center text-xl mb-3`}>{icon}</div>
      <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{label}</p>
      <p className="font-display font-extrabold text-2xl text-gray-900 mt-0.5">{value}</p>
      {sub && <p className="text-xs text-gray-400 mt-1">{sub}</p>}
    </div>
  );
}

function MatchBadge({ pct }) {
  const color = pct >= 80 ? 'bg-emerald-100 text-emerald-700' : pct >= 60 ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-600';
  return <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${color}`}>{pct}% match</span>;
}

function RiskBadge({ level }) {
  const color = level === 'Low' ? 'bg-emerald-100 text-emerald-700' : level === 'Medium' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700';
  return <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${color}`}>{level} Risk</span>;
}

function Header({ user, onLogout }) {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-violet-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm font-display">E</span>
          </div>
          <span className="font-display font-bold text-gray-900 hidden sm:block">Entre<span className="gradient-text">Skill</span> Hub</span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          <Link to="/assessment" className="btn-ghost text-xs sm:text-sm">📊 Assessment</Link>
          <Link to="/recommendations" className="btn-ghost text-xs sm:text-sm">💼 Businesses</Link>
          <Link to="/profile" className="btn-ghost text-xs sm:text-sm">👤 Profile</Link>
          <button onClick={onLogout} className="btn-secondary text-xs sm:text-sm px-3 py-2">Logout</button>
        </nav>
      </div>
    </header>
  );
}

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [assessment, setAssessment] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [saved, setSaved] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleLogout = () => { logout(); navigate('/'); };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [aRes, rRes, sRes] = await Promise.allSettled([
          api.get('/assessment/result'),
          api.get('/recommendations'),
          api.get('/saved'),
        ]);
        if (aRes.status === 'fulfilled') setAssessment(aRes.value.data.assessment);
        if (rRes.status === 'fulfilled') setRecommendations(rRes.value.data.recommendations.slice(0, 5));
        if (sRes.status === 'fulfilled') setSaved(sRes.value.data.saved);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header user={user} onLogout={handleLogout} />
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mb-4" />
            <p className="text-gray-500">Loading your dashboard...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} onLogout={handleLogout} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Welcome banner */}
        <div className="rounded-2xl bg-gradient-to-r from-primary-600 to-violet-700 p-6 sm:p-8 mb-8 text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative">
            <p className="text-white/70 text-sm font-medium mb-1">Welcome back,</p>
            <h1 className="font-display font-extrabold text-2xl sm:text-3xl mb-2">{user?.name} 👋</h1>
            <p className="text-white/70 text-sm">{assessment ? `Your overall score is ${assessment.overallScore}/100` : 'Complete your skill assessment to get started'}</p>
          </div>
        </div>

        {/* No assessment CTA */}
        {!assessment && (
          <div className="card p-8 text-center mb-8 border-2 border-dashed border-primary-200">
            <div className="text-5xl mb-4">📊</div>
            <h2 className="font-display font-bold text-xl text-gray-900 mb-2">Take the Skill Assessment</h2>
            <p className="text-gray-500 mb-6">Answer 25 questions to get personalised business recommendations tailored to your skills and budget.</p>
            <Link to="/assessment" className="btn-primary">Start Assessment →</Link>
          </div>
        )}

        {/* Stats row */}
        {assessment && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatCard icon="🎯" label="Overall Score" value={`${assessment.overallScore}/100`} color="bg-primary-50" />
            <StatCard icon="💪" label="Top Strength" value={assessment.strengths[0]?.split(' & ')[0] || '—'} color="bg-violet-50" />
            <StatCard icon="💼" label="Businesses Matched" value={recommendations.length > 0 ? '25' : '0'} sub="Personalised for you" color="bg-emerald-50" />
            <StatCard icon="🔖" label="Saved Businesses" value={saved.length} color="bg-amber-50" />
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-6">

            {/* Assessment summary */}
            {assessment && (
              <div className="card p-6">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="font-display font-bold text-lg text-gray-900">Assessment Summary</h2>
                  <Link to="/assessment" className="text-xs text-primary-600 font-semibold hover:underline">Retake</Link>
                </div>
                <div className="space-y-3">
                  {Object.entries(assessment.categoryScores).slice(0, 5).map(([cat, score]) => (
                    <div key={cat}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-600 font-medium">{categoryLabels[cat]}</span>
                        <span className="text-gray-500 font-bold">{score}%</span>
                      </div>
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-to-r from-primary-500 to-violet-500 transition-all" style={{ width: `${score}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3 mt-4">
                  <div className="flex-1">
                    <p className="text-xs text-gray-400 mb-2">Strengths</p>
                    <div className="flex flex-wrap gap-1">
                      {assessment.strengths.map((s) => <span key={s} className="bg-emerald-50 text-emerald-700 text-xs px-2 py-0.5 rounded-full font-medium">{s}</span>)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-400 mb-2">To Improve</p>
                    <div className="flex flex-wrap gap-1">
                      {assessment.weaknesses.map((w) => <span key={w} className="bg-amber-50 text-amber-700 text-xs px-2 py-0.5 rounded-full font-medium">{w}</span>)}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Top recommendations */}
            {recommendations.length > 0 && (
              <div className="card p-6">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="font-display font-bold text-lg text-gray-900">Top Business Matches</h2>
                  <Link to="/recommendations" className="text-xs text-primary-600 font-semibold hover:underline">View all →</Link>
                </div>
                <div className="space-y-3">
                  {recommendations.map((rec) => (
                    <Link key={rec._id} to={`/recommendations/${rec._id}`} className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-gray-100 group">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-100 to-violet-100 flex items-center justify-center text-lg flex-shrink-0">💼</div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 text-sm group-hover:text-primary-600 transition-colors truncate">{rec.name}</p>
                        <p className="text-xs text-gray-400">{rec.investment?.display}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1 flex-shrink-0">
                        <MatchBadge pct={rec.matchPercentage} />
                        <RiskBadge level={rec.riskLevel} />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Profile card */}
            <div className="card p-6">
              <h2 className="font-display font-bold text-base text-gray-900 mb-4">Your Profile</h2>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-400 to-violet-500 flex items-center justify-center text-white font-display font-bold text-2xl mb-3">
                {user?.name?.charAt(0)?.toUpperCase()}
              </div>
              <p className="font-semibold text-gray-900">{user?.name}</p>
              <p className="text-sm text-gray-400 mb-4">{user?.email}</p>
              <div className="space-y-2 text-sm">
                {user?.education && <div className="flex justify-between"><span className="text-gray-400">Education</span><span className="font-medium text-gray-700">{user.education}</span></div>}
                {user?.experience && <div className="flex justify-between"><span className="text-gray-400">Experience</span><span className="font-medium text-gray-700">{user.experience}</span></div>}
                {user?.budget && <div className="flex justify-between"><span className="text-gray-400">Budget</span><span className="font-medium text-gray-700">{user.budget}</span></div>}
                {user?.location && <div className="flex justify-between"><span className="text-gray-400">Location</span><span className="font-medium text-gray-700">{user.location}</span></div>}
              </div>
              <Link to="/profile" className="btn-secondary w-full text-center mt-4 text-sm py-2">Edit Profile</Link>
            </div>

            {/* Saved businesses */}
            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display font-bold text-base text-gray-900">Saved Businesses</h2>
                <span className="text-xs bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full font-bold">{saved.length}</span>
              </div>
              {saved.length === 0 ? (
                <div className="text-center py-6">
                  <p className="text-3xl mb-2">🔖</p>
                  <p className="text-sm text-gray-400">No saved businesses yet</p>
                  <Link to="/recommendations" className="text-xs text-primary-600 hover:underline mt-1 block">Browse businesses →</Link>
                </div>
              ) : (
                <div className="space-y-2">
                  {saved.slice(0, 4).map((s) => (
                    <Link key={s._id} to={`/recommendations/${s.recommendation?._id}`} className="block p-3 rounded-xl hover:bg-gray-50 border border-gray-100 transition-colors">
                      <p className="font-semibold text-sm text-gray-900 truncate">{s.recommendation?.name}</p>
                      <p className="text-xs text-gray-400">{s.recommendation?.category}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Quick links */}
            <div className="card p-5">
              <h2 className="font-display font-bold text-base text-gray-900 mb-3">Quick Actions</h2>
              <div className="space-y-2">
                <Link to="/assessment" className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary-50 hover:text-primary-700 transition-colors text-sm font-medium text-gray-700">📊 Take/Retake Assessment</Link>
                <Link to="/recommendations" className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary-50 hover:text-primary-700 transition-colors text-sm font-medium text-gray-700">💼 View All Recommendations</Link>
                <Link to="/profile" className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary-50 hover:text-primary-700 transition-colors text-sm font-medium text-gray-700">👤 Edit Profile</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
