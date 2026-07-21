// RecommendationDetailPage — Full business detail view
// Developer: Tilak Kumar | BML Munjal University | PS-II Internship

import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../utils/api';
import toast from 'react-hot-toast';

function RiskBadge({ level }) {
  const color = level === 'Low' ? 'bg-emerald-100 text-emerald-700 border-emerald-200' : level === 'Medium' ? 'bg-amber-100 text-amber-700 border-amber-200' : 'bg-red-100 text-red-700 border-red-200';
  return <span className={`text-sm font-semibold px-3 py-1 rounded-full border ${color}`}>{level} Risk</span>;
}

function Header() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-violet-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm font-display">E</span>
          </div>
          <span className="font-display font-bold text-gray-900 hidden sm:block">Entre<span className="gradient-text">Skill</span> Hub</span>
        </Link>
        <nav className="flex items-center gap-2">
          <Link to="/recommendations" className="btn-ghost text-sm">← All Businesses</Link>
          <button onClick={() => { logout(); navigate('/'); }} className="btn-secondary text-sm px-3 py-2">Logout</button>
        </nav>
      </div>
    </header>
  );
}

export default function RecommendationDetailPage() {
  const { id } = useParams();
  const [rec, setRec] = useState(null);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [rRes, sRes] = await Promise.allSettled([
          api.get(`/recommendations/${id}`),
          api.get('/saved'),
        ]);
        if (rRes.status === 'fulfilled') setRec(rRes.value.data.recommendation);
        else toast.error('Business not found');
        if (sRes.status === 'fulfilled') {
          setSaved(sRes.value.data.saved.some((s) => s.recommendation?._id === id || s.recommendation === id));
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const toggleSave = async () => {
    try {
      if (saved) {
        await api.delete(`/saved/${id}`);
        setSaved(false);
        toast.success('Removed from saved list');
      } else {
        await api.post(`/saved/${id}`);
        setSaved(true);
        toast.success('Business saved! 🔖');
      }
    } catch {
      toast.error('Failed to update saved list');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  if (!rec) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="text-center py-20">
          <p className="text-5xl mb-4">🔍</p>
          <h2 className="font-display font-bold text-xl text-gray-900">Business not found</h2>
          <Link to="/recommendations" className="btn-primary mt-6 inline-flex">← Back to Businesses</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {/* Hero header */}
        <div className="rounded-2xl bg-gradient-to-r from-primary-600 to-violet-700 p-6 sm:p-10 mb-8 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 dot-grid" />
          <div className="relative">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">{rec.category}</span>
                <h1 className="font-display font-extrabold text-2xl sm:text-4xl mb-3">{rec.name}</h1>
                <div className="flex flex-wrap items-center gap-3">
                  <RiskBadge level={rec.riskLevel} />
                  <span className="text-white/80 text-sm">💰 {rec.investment?.display}</span>
                  <span className="text-white/80 text-sm">📈 {rec.profitPotential}</span>
                </div>
              </div>
              <button
                onClick={toggleSave}
                className={`flex-shrink-0 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${saved ? 'bg-white text-primary-700 hover:bg-gray-100' : 'bg-white/20 text-white border border-white/30 hover:bg-white/30'}`}
              >
                {saved ? '🔖 Saved' : '📌 Save Business'}
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-5">
            {/* Overview */}
            <div className="card p-6">
              <h2 className="font-display font-bold text-lg text-gray-900 mb-3">📋 Overview & Market Analysis</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{rec.description}</p>
              
              {rec.marketAnalysis && (
                <>
                  <h3 className="font-semibold text-gray-900 text-sm mb-2 mt-4">Market Potential</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{rec.marketAnalysis}</p>
                </>
              )}
              
              {rec.targetAudience && (
                <>
                  <h3 className="font-semibold text-gray-900 text-sm mb-2 mt-4">Target Audience</h3>
                  <p className="text-gray-600 text-sm leading-relaxed bg-primary-50 p-4 rounded-xl border border-primary-100">{rec.targetAudience}</p>
                </>
              )}
            </div>

            {/* Business Roadmap */}
            {rec.roadmap && rec.roadmap.length > 0 && (
              <div className="card p-6">
                <h2 className="font-display font-bold text-lg text-gray-900 mb-6">🗺️ Execution Roadmap</h2>
                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                  {rec.roadmap.map((phase, index) => (
                    <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary-100 text-primary-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                        <span className="font-bold text-sm">{index + 1}</span>
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-gray-100 shadow-sm bg-white hover:border-primary-200 transition-colors">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-bold text-gray-900">{phase.phase}</h3>
                          <span className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-600 rounded-full">{phase.duration}</span>
                        </div>
                        <ul className="space-y-1">
                          {phase.tasks.map((task, tIdx) => (
                            <li key={tIdx} className="text-sm text-gray-600 flex items-start gap-2">
                              <span className="text-primary-500 mt-0.5">•</span>
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Advantages */}
            <div className="card p-6">
              <h2 className="font-display font-bold text-lg text-gray-900 mb-4">✅ Advantages</h2>
              <ul className="space-y-2">
                {rec.advantages?.map((a, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">✓</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Compliance */}
            {rec.legalRequirements && rec.legalRequirements.length > 0 && (
              <div className="card p-6 border-l-4 border-l-blue-500">
                <h2 className="font-display font-bold text-lg text-gray-900 mb-4">⚖️ Legal & Compliance Requirements</h2>
                <div className="flex flex-wrap gap-2">
                  {rec.legalRequirements.map((req, i) => (
                    <span key={i} className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-2 rounded-lg border border-blue-100">
                      🏛️ {req}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Marketing Strategy */}
            {rec.marketingStrategy && rec.marketingStrategy.length > 0 && (
              <div className="card p-6">
                <h2 className="font-display font-bold text-lg text-gray-900 mb-4">📢 Suggested Marketing Channels</h2>
                <div className="grid grid-cols-2 gap-3">
                  {rec.marketingStrategy.map((strat, i) => (
                    <div key={i} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <span className="text-primary-500">↗</span>
                      <span className="text-sm text-gray-700 font-medium">{strat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Challenges & Pitfalls */}
            <div className="card p-6">
              <h2 className="font-display font-bold text-lg text-gray-900 mb-4">⚠️ Challenges & Common Pitfalls</h2>
              <ul className="space-y-3 mb-4">
                {rec.challenges?.map((c, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">!</span>
                    {c}
                  </li>
                ))}
              </ul>
              {rec.commonPitfalls && rec.commonPitfalls.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <h3 className="text-sm font-bold text-red-600 mb-3">Red Flags to Avoid:</h3>
                  <ul className="space-y-2">
                    {rec.commonPitfalls.map((pitfall, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                        <span className="text-red-500 mt-0.5">✕</span>
                        {pitfall}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Success Tips */}
            <div className="card p-6">
              <h2 className="font-display font-bold text-lg text-gray-900 mb-4">🚀 Success Tips</h2>
              <ol className="space-y-3">
                {rec.successTips?.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="w-7 h-7 rounded-full bg-gradient-to-br from-primary-500 to-violet-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                    {tip}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Investment & Profit */}
            <div className="card p-6">
              <h2 className="font-display font-bold text-base text-gray-900 mb-4">💰 Investment Details</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-50">
                  <span className="text-xs text-gray-400">Investment Range</span>
                  <span className="font-semibold text-gray-900 text-sm">{rec.investment?.display}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-50">
                  <span className="text-xs text-gray-400">Profit Potential</span>
                  <span className="font-semibold text-emerald-600 text-sm">{rec.profitPotential}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-xs text-gray-400">Risk Level</span>
                  <RiskBadge level={rec.riskLevel} />
                </div>
              </div>
              {rec.roiTimeline && (
                <div className="mt-4 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                  <h3 className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">ROI Timeline</h3>
                  <p className="text-xs text-emerald-700 leading-relaxed">{rec.roiTimeline}</p>
                </div>
              )}
            </div>

            {/* Required Skills */}
            <div className="card p-6">
              <h2 className="font-display font-bold text-base text-gray-900 mb-4">🧠 Required Skills</h2>
              <div className="flex flex-wrap gap-2">
                {rec.requiredSkills?.map((s) => (
                  <span key={s} className="bg-primary-50 text-primary-700 border border-primary-200 text-xs font-semibold px-3 py-1.5 rounded-full">{s}</span>
                ))}
              </div>
            </div>

            {/* Growth Potential */}
            <div className="card p-6">
              <h2 className="font-display font-bold text-base text-gray-900 mb-3">📈 Growth Potential</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{rec.growthPotential}</p>
            </div>

            {/* Future Scope */}
            <div className="card p-6">
              <h2 className="font-display font-bold text-base text-gray-900 mb-3">🔮 Future Scope</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{rec.futureScope}</p>
            </div>

            {/* Save CTA */}
            <button
              onClick={toggleSave}
              className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all ${saved ? 'bg-primary-600 text-white hover:bg-primary-700' : 'btn-primary'}`}
            >
              {saved ? '🔖 Saved to Your List' : '📌 Save This Business'}
            </button>
            <Link to="/recommendations" className="btn-secondary w-full text-center block py-3">← Back to All Businesses</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
