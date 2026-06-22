// DashboardPage.jsx
// Placeholder dashboard showing user's skill profile and recommendations
// This is a demo/prototype for PS-II presentation
// Built by Tilak Kumar | BML Munjal University | Unified Mentor PS-II

import { Link } from 'react-router-dom';

// Demo data - will come from backend later
const dashboardData = {
  user: 'Tilak Kumar',
  selectedSkill: 'Web Development',
  experienceLevel: 'Intermediate',
  budget: '₹10,000 - ₹50,000',
  interestArea: 'Technology & IT',
  overallProgress: 35,
  recommendedBusiness: {
    title: 'Freelance Web Development Agency',
    category: 'Technology & IT',
    investment: '₹15,000 - ₹30,000',
    timeline: '2-3 months to first client',
    potential: '₹30,000 - ₹1,00,000/month',
    match: 92,
  },
  savedRoadmaps: [
    { id: 1, title: 'Freelance Agency Setup', steps: 12, completed: 4, color: 'from-primary-500 to-violet-500' },
    { id: 2, title: 'Portfolio Website Launch', steps: 8, completed: 6, color: 'from-emerald-500 to-teal-500' },
    { id: 3, title: 'Client Acquisition Plan', steps: 10, completed: 2, color: 'from-amber-500 to-orange-500' },
  ],
  learningResources: [
    { id: 1, title: 'Business Plan Writing 101', type: 'Article', duration: '15 min read', icon: '📄' },
    { id: 2, title: 'How to Price Your Services', type: 'Video', duration: '22 min watch', icon: '🎬' },
    { id: 3, title: 'Legal Basics for Freelancers', type: 'Guide', duration: '10 min read', icon: '📋' },
    { id: 4, title: 'Building a Client Portfolio', type: 'Course', duration: '2 hours', icon: '🎓' },
  ],
};

function StatCard({ icon, label, value, sub, color }) {
  return (
    <div className="card p-5 group hover:border-primary-200">
      <div className="flex items-start justify-between mb-3">
        <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-xl shadow-md group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        {sub && <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded-lg">{sub}</span>}
      </div>
      <div className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-0.5">{label}</div>
      <div className="text-base font-bold text-gray-900">{value}</div>
    </div>
  );
}

export default function DashboardPage() {
  const d = dashboardData;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-violet-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm font-display">E</span>
            </div>
            <span className="font-display font-bold text-gray-900 text-base">
              Entre<span className="gradient-text">Skill</span> Hub
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/assessment" className="btn-ghost text-sm">Retake Assessment</Link>
            <Link to="/" className="btn-ghost text-sm">← Home</Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
        {/* Welcome header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700 border border-amber-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                  Demo Dashboard
                </span>
              </div>
              <h1 className="font-display font-extrabold text-2xl lg:text-3xl text-gray-900">
                Welcome back, <span className="gradient-text">{d.user}</span>
              </h1>
              <p className="text-gray-500 text-sm mt-1">Here's your skill-to-startup journey overview</p>
            </div>
            <Link to="/assessment" className="btn-primary text-sm px-5 py-2.5 self-start">
              Take New Assessment
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard icon="🧠" label="Selected Skill" value={d.selectedSkill} sub={d.experienceLevel} color="from-primary-500 to-violet-500" />
          <StatCard icon="💰" label="Budget Range" value={d.budget} color="from-emerald-500 to-teal-500" />
          <StatCard icon="🎯" label="Interest Area" value={d.interestArea} color="from-amber-500 to-orange-500" />
          <StatCard icon="📊" label="Overall Progress" value={`${d.overallProgress}%`} sub="In Progress" color="from-rose-500 to-pink-500" />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left column — Recommendation + Roadmaps */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recommended Business */}
            <div className="card p-6 border-primary-100">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <div className="text-xs font-semibold text-primary-600 uppercase tracking-wider mb-1">Top Recommendation</div>
                  <h2 className="font-display font-bold text-xl text-gray-900">{d.recommendedBusiness.title}</h2>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold border border-emerald-200">
                  {d.recommendedBusiness.match}% Match
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-5">
                {[
                  { label: 'Category', value: d.recommendedBusiness.category, icon: '🏷️' },
                  { label: 'Investment', value: d.recommendedBusiness.investment, icon: '💰' },
                  { label: 'Timeline', value: d.recommendedBusiness.timeline, icon: '⏱️' },
                  { label: 'Earning Potential', value: d.recommendedBusiness.potential, icon: '📈' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <span className="text-lg">{item.icon}</span>
                    <div>
                      <div className="text-xs text-gray-400">{item.label}</div>
                      <div className="text-sm font-semibold text-gray-800">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="btn-primary text-sm px-5 py-2.5">
                View Full Roadmap →
              </button>
            </div>

            {/* Saved Roadmaps */}
            <div className="card p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-display font-bold text-lg text-gray-900">Saved Roadmaps</h2>
                <span className="text-xs font-medium text-gray-400 bg-gray-50 px-3 py-1 rounded-lg">{d.savedRoadmaps.length} roadmaps</span>
              </div>
              <div className="space-y-4">
                {d.savedRoadmaps.map((r) => {
                  const pct = Math.round((r.completed / r.steps) * 100);
                  return (
                    <div key={r.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${r.color} flex items-center justify-center text-lg shadow-sm flex-shrink-0`}>
                        🗺️
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-gray-800 mb-1">{r.title}</div>
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div className={`h-full rounded-full bg-gradient-to-r ${r.color}`} style={{ width: `${pct}%` }} />
                          </div>
                          <span className="text-xs font-semibold text-gray-500">{r.completed}/{r.steps}</span>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-gray-400">{pct}%</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right column — Learning Resources + Progress */}
          <div className="space-y-6">
            {/* Progress circle */}
            <div className="card p-6 text-center">
              <h3 className="font-display font-bold text-base text-gray-900 mb-4">Journey Progress</h3>
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="52" fill="none" stroke="#f1f5f9" strokeWidth="10" />
                  <circle
                    cx="60" cy="60" r="52" fill="none"
                    stroke="url(#progress-grad)"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={`${(d.overallProgress / 100) * 327} 327`}
                  />
                  <defs>
                    <linearGradient id="progress-grad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-display font-extrabold text-2xl text-gray-900">{d.overallProgress}%</span>
                  <span className="text-xs text-gray-400">Complete</span>
                </div>
              </div>
              <p className="text-xs text-gray-500">Keep going! You're making great progress.</p>
            </div>

            {/* Learning Resources */}
            <div className="card p-6">
              <h3 className="font-display font-bold text-base text-gray-900 mb-4">Learning Resources</h3>
              <div className="space-y-3">
                {d.learningResources.map((res) => (
                  <div key={res.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                    <span className="text-xl">{res.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-gray-800 truncate">{res.title}</div>
                      <div className="text-xs text-gray-400">{res.type} · {res.duration}</div>
                    </div>
                    <svg className="w-4 h-4 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick note */}
            <div className="bg-primary-50 border border-primary-100 rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <span className="text-lg">💡</span>
                <div>
                  <div className="text-sm font-semibold text-primary-800 mb-1">Demo Dashboard</div>
                  <p className="text-xs text-primary-600 leading-relaxed">
                    This dashboard shows sample data for demonstration. Real data will be populated
                    once backend and database modules are integrated.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
