// RecommendationsPage — Business listings with filters
// Developer: Tilak Kumar | BML Munjal University | PS-II Internship

import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../utils/api';
import toast from 'react-hot-toast';

function MatchBadge({ pct }) {
  const color = pct >= 80 ? 'bg-emerald-100 text-emerald-700' : pct >= 60 ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-600';
  return <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${color}`}>{pct}% match</span>;
}

function RiskBadge({ level }) {
  const color = level === 'Low' ? 'bg-emerald-100 text-emerald-700' : level === 'Medium' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700';
  return <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${color}`}>{level} Risk</span>;
}

function Header() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-violet-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm font-display">E</span>
          </div>
          <span className="font-display font-bold text-gray-900 hidden sm:block">Entre<span className="gradient-text">Skill</span> Hub</span>
        </Link>
        <nav className="flex items-center gap-2">
          <Link to="/dashboard" className="btn-ghost text-sm">← Dashboard</Link>
          <button onClick={() => { logout(); navigate('/'); }} className="btn-secondary text-sm px-3 py-2">Logout</button>
        </nav>
      </div>
    </header>
  );
}

export default function RecommendationsPage() {
  const [recommendations, setRecommendations] = useState([]);
  const [savedIds, setSavedIds] = useState(new Set());
  const [loading, setLoading] = useState(true);
  const [hasAssessment, setHasAssessment] = useState(true);
  const [filterCategory, setFilterCategory] = useState('');
  const [filterRisk, setFilterRisk] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [rRes, sRes] = await Promise.allSettled([api.get('/recommendations'), api.get('/saved')]);
        if (rRes.status === 'fulfilled') {
          setRecommendations(rRes.value.data.recommendations);
          setHasAssessment(rRes.value.data.hasAssessment);
        }
        if (sRes.status === 'fulfilled') {
          setSavedIds(new Set(sRes.value.data.saved.map((s) => s.recommendation?._id)));
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const toggleSave = async (id) => {
    const alreadySaved = savedIds.has(id);
    try {
      if (alreadySaved) {
        await api.delete(`/saved/${id}`);
        setSavedIds((p) => { const n = new Set(p); n.delete(id); return n; });
        toast.success('Removed from saved list');
      } else {
        await api.post(`/saved/${id}`);
        setSavedIds((p) => new Set([...p, id]));
        toast.success('Business saved! 🔖');
      }
    } catch {
      toast.error('Failed to update saved list');
    }
  };

  const categories = [...new Set(recommendations.map((r) => r.category))];
  const filtered = recommendations.filter((r) => {
    if (filterCategory && r.category !== filterCategory) return false;
    if (filterRisk && r.riskLevel !== filterRisk) return false;
    return true;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mb-4" />
            <p className="text-gray-500">Finding your best business matches...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page header */}
        <div className="mb-7">
          <span className="section-tag mb-3">Business Recommendations</span>
          <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-gray-900">
            Your Business Matches <span className="gradient-text">({filtered.length})</span>
          </h1>
          {!hasAssessment && (
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl flex items-start gap-3">
              <span className="text-xl">📊</span>
              <div>
                <p className="font-semibold text-blue-800 text-sm">Complete the assessment for personalised results</p>
                <p className="text-blue-700 text-xs mt-0.5">Currently showing general recommendations. <Link to="/assessment" className="font-bold underline">Take assessment →</Link></p>
              </div>
            </div>
          )}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className="input-field !w-auto !py-2 text-sm">
            <option value="">All Categories</option>
            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <select value={filterRisk} onChange={(e) => setFilterRisk(e.target.value)} className="input-field !w-auto !py-2 text-sm">
            <option value="">All Risk Levels</option>
            <option value="Low">Low Risk</option>
            <option value="Medium">Medium Risk</option>
            <option value="High">High Risk</option>
          </select>
          {(filterCategory || filterRisk) && (
            <button onClick={() => { setFilterCategory(''); setFilterRisk(''); }} className="btn-ghost text-sm text-red-500 hover:text-red-700">✕ Clear filters</button>
          )}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">🔍</p>
            <h2 className="font-display font-bold text-xl text-gray-900 mb-2">No businesses match your filters</h2>
            <button onClick={() => { setFilterCategory(''); setFilterRisk(''); }} className="btn-secondary mt-4">Clear filters</button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((rec) => (
              <div key={rec._id} className="card p-5 flex flex-col">
                {/* Top row */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <span className="inline-block bg-primary-50 text-primary-700 text-xs font-semibold px-2.5 py-1 rounded-full mb-2">{rec.category}</span>
                    <h3 className="font-display font-bold text-base text-gray-900 leading-tight">{rec.name}</h3>
                  </div>
                  <button
                    onClick={() => toggleSave(rec._id)}
                    className={`ml-2 flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${savedIds.has(rec._id) ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-400 hover:bg-primary-50 hover:text-primary-500'}`}
                    title={savedIds.has(rec._id) ? 'Remove from saved' : 'Save this business'}
                  >
                    {savedIds.has(rec._id) ? '🔖' : '📌'}
                  </button>
                </div>

                {/* Badges */}
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <MatchBadge pct={rec.matchPercentage} />
                  <RiskBadge level={rec.riskLevel} />
                </div>

                {/* Description */}
                <p className="text-xs text-gray-500 line-clamp-2 mb-3 leading-relaxed">{rec.description}</p>

                {/* Investment */}
                <div className="flex items-center gap-1.5 text-xs text-gray-600 mb-3">
                  <span>💰</span>
                  <span className="font-medium">{rec.investment?.display}</span>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {rec.requiredSkills?.slice(0, 3).map((s) => (
                    <span key={s} className="bg-gray-50 text-gray-600 text-xs px-2 py-0.5 rounded-md border border-gray-100">{s}</span>
                  ))}
                  {rec.requiredSkills?.length > 3 && <span className="text-xs text-gray-400">+{rec.requiredSkills.length - 3} more</span>}
                </div>

                {/* CTA */}
                <Link to={`/recommendations/${rec._id}`} className="btn-secondary text-center text-sm py-2 mt-auto">
                  View Details →
                </Link>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
