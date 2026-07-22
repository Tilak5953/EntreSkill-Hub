// RecommendationDetailPage — Full business detail view with Advanced Analytics
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
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
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 mt-8">
        {/* Premium Dashboard Hero */}
        <div className="bg-gradient-to-br from-gray-900 to-indigo-900 rounded-3xl p-8 sm:p-12 mb-8 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 dot-grid-white" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-primary-200 text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
                {rec.category}
              </span>
              <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white mb-4 tracking-tight leading-tight">
                {rec.name}
              </h1>
              <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-300">
                <span className="flex items-center gap-1.5 bg-gray-800/50 px-3 py-1.5 rounded-lg border border-gray-700">
                  <span>💰</span> Min: {rec.investment?.display || 'Varied'}
                </span>
                <span className="flex items-center gap-1.5 bg-gray-800/50 px-3 py-1.5 rounded-lg border border-gray-700">
                  <span>📈</span> {rec.profitPotential}
                </span>
              </div>
            </div>
            <button 
              onClick={toggleSave} 
              className={`px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg ${saved ? 'bg-emerald-500 text-white hover:bg-emerald-600' : 'bg-white text-gray-900 hover:bg-gray-100'}`}
            >
              {saved ? '★ Saved Business' : '☆ Save Business'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Overview Section */}
            <div className="card">
              <h2 className="text-xl font-display font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span>📋</span> Executive Summary
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">{rec.description}</p>
              
              {rec.marketAnalysis && (
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-2">Market Analysis</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{rec.marketAnalysis}</p>
                </div>
              )}
              {rec.targetAudience && (
                <div className="mt-4 p-4 bg-primary-50 rounded-xl border border-primary-100">
                  <h3 className="font-bold text-primary-900 mb-1 text-sm">Target Audience</h3>
                  <p className="text-primary-700 text-sm">{rec.targetAudience}</p>
                </div>
              )}
            </div>

            {/* NEW: Unit Economics (If available) */}
            {rec.unitEconomics && rec.unitEconomics.length > 0 && (
              <div className="card border-t-4 border-t-emerald-500">
                <h2 className="text-xl font-display font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span>📊</span> Unit Economics (Per Sale Profitability)
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {rec.unitEconomics.map((ue, idx) => (
                    <div key={idx} className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600">{ue.metric}</span>
                      <span className="text-lg font-bold text-gray-900">{ue.value}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-4 text-center">These are estimated benchmarks for the Indian market.</p>
              </div>
            )}

            {/* NEW: CapEx Breakdown (If available) */}
            {rec.capexBreakdown && rec.capexBreakdown.length > 0 && (
              <div className="card">
                <h2 className="text-xl font-display font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span>💸</span> Capital Expenditure (Setup Costs)
                </h2>
                <div className="space-y-3">
                  {rec.capexBreakdown.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg transition-colors border-b border-gray-50 last:border-0">
                      <span className="text-gray-700 font-medium">{item.item}</span>
                      <span className="text-primary-600 font-bold">{item.cost}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Execution Roadmap */}
            {rec.roadmap && rec.roadmap.length > 0 && (
              <div className="card">
                <h2 className="text-xl font-display font-bold text-gray-900 mb-8 flex items-center gap-2">
                  <span>🗺️</span> Execution Roadmap
                </h2>
                <div className="relative border-l-2 border-primary-100 ml-4 space-y-10 pb-4">
                  {rec.roadmap.map((phase, idx) => (
                    <div key={idx} className="relative pl-8">
                      <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary-500 ring-4 ring-white shadow-sm" />
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="font-bold text-gray-900">{phase.phase}</h3>
                          <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded-md">
                            {phase.duration}
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {phase.tasks.map((task, tIdx) => (
                            <li key={tIdx} className="text-sm text-gray-600 flex items-start gap-2">
                              <span className="text-primary-400 mt-0.5">•</span>
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
          </div>

          {/* Sidebar Column */}
          <div className="space-y-6">
            
            {/* Risk & Investment Card */}
            <div className="card bg-gradient-to-b from-white to-gray-50 border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span>⚡</span> Risk Assessment
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span className="text-gray-500 text-sm">Risk Level</span>
                  <RiskBadge level={rec.riskLevel} />
                </div>
                {rec.roiTimeline && (
                  <div className="bg-primary-50 p-4 rounded-xl border border-primary-100">
                    <span className="block text-xs font-bold text-primary-800 uppercase tracking-wide mb-1">ROI Timeline</span>
                    <p className="text-sm text-primary-900 font-medium">{rec.roiTimeline}</p>
                  </div>
                )}
              </div>
            </div>

            {/* NEW: Tech Stack */}
            {rec.techStack && rec.techStack.length > 0 && (
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>💻</span> Recommended Tech Stack
                </h3>
                <div className="space-y-3">
                  {rec.techStack.map((tech, idx) => (
                    <div key={idx} className="bg-gray-900 text-white p-3 rounded-xl flex flex-col">
                      <span className="font-bold text-sm">{tech.tool}</span>
                      <span className="text-xs text-gray-400">{tech.purpose}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* NEW: Success Story */}
            {rec.successStory && (
              <div className="card bg-violet-50 border-violet-100">
                <h3 className="font-bold text-violet-900 mb-3 flex items-center gap-2">
                  <span>🏆</span> Success Story
                </h3>
                <div className="mb-2">
                  <span className="font-bold text-gray-900 block">{rec.successStory.name}</span>
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">{rec.successStory.revenue}</span>
                </div>
                <p className="text-sm text-gray-700 italic leading-relaxed">
                  "{rec.successStory.description}"
                </p>
              </div>
            )}

            {/* Legal Requirements */}
            {rec.legalRequirements && rec.legalRequirements.length > 0 && (
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>⚖️</span> Legal & Compliance
                </h3>
                <div className="flex flex-wrap gap-2">
                  {rec.legalRequirements.map((req, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-lg border border-gray-200 flex items-center gap-1">
                      <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      {req}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Skills */}
            {rec.requiredSkills && rec.requiredSkills.length > 0 && (
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>🧠</span> Core Skills Needed
                </h3>
                <div className="flex flex-wrap gap-2">
                  {rec.requiredSkills.map((skill, idx) => (
                    <span key={idx} className="bg-primary-50 text-primary-700 text-xs font-semibold px-3 py-1.5 rounded-lg border border-primary-100">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </main>
    </div>
  );
}
