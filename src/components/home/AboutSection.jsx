// AboutSection.jsx
// About section rewritten to reflect actual PS-II internship context
// Describes the real objective of this project
// -- Tilak Kumar

import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-gray-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Project info card */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-4 bg-gradient-to-br from-primary-200 to-violet-200 rounded-3xl blur-xl opacity-40 animate-pulse-slow" />

              <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                {/* Top banner */}
                <div className="bg-gradient-to-r from-primary-600 to-violet-600 p-6">
                  <div className="text-white/70 text-xs uppercase tracking-widest mb-1 font-medium">PS-II Internship Project</div>
                  <div className="text-white font-display font-bold text-xl mb-0.5">EntreSkill Hub</div>
                  <div className="text-white/60 text-sm">Skill-to-Startup Enablement Platform</div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-3">
                  {[
                    { label: 'Developer', value: 'Tilak Kumar', icon: '👨‍💻' },
                    { label: 'University', value: 'BML Munjal University', icon: '🏛️' },
                    { label: 'Station', value: 'Unified Mentor', icon: '🏢' },
                    { label: 'Program', value: 'Practice School II (PS-II)', icon: '📋' },
                    { label: 'Tech Stack', value: 'React.js + Tailwind CSS', icon: '⚛️' },
                    { label: 'Status', value: 'Frontend Development Phase', icon: '🔄' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                      <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center text-sm flex-shrink-0">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-gray-400 uppercase tracking-wide font-medium">{item.label}</div>
                        <div className="text-sm font-semibold text-gray-800 truncate">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl border border-gray-100 p-3 flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse flex-shrink-0" />
                <div className="text-xs font-semibold text-gray-700">Frontend Active</div>
              </div>
            </div>
          </div>

          {/* Right — Text content */}
          <div className="order-1 lg:order-2">
            <span className="section-tag mb-6">About This Project</span>
            <h2 className="section-title mb-6">
              A Real{' '}
              <span className="gradient-text">Internship Project</span>
              {' '}in Development
            </h2>

            {/* The actual required paragraph */}
            <div className="bg-primary-50 border-l-4 border-primary-500 rounded-r-2xl p-5 mb-6">
              <p className="text-gray-700 text-base leading-relaxed">
                This platform is being developed as part of my{' '}
                <span className="font-semibold text-primary-700">PS-II Internship</span> at{' '}
                <span className="font-semibold text-primary-700">Unified Mentor</span> under{' '}
                <span className="font-semibold text-primary-700">BML Munjal University</span>.
                The objective is to help skilled individuals discover business opportunities,
                learn entrepreneurship, and follow structured roadmaps to launch sustainable
                micro-businesses.
              </p>
            </div>

            <p className="text-gray-500 leading-relaxed mb-8">
              The platform addresses a real-world gap: millions of individuals have marketable
              skills but lack structured guidance to convert them into income-generating businesses.
              EntreSkill Hub bridges this through AI-assisted recommendations, curated learning,
              and mentor connectivity.
            </p>

            {/* Project metadata */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: '🎯', title: 'Problem Statement', desc: 'Skill holders lack entrepreneurship guidance' },
                { icon: '💡', title: 'Solution', desc: 'Personalised business roadmap platform' },
                { icon: '🛠️', title: 'Methodology', desc: 'Agile + iterative development' },
                { icon: '📅', title: 'Timeline', desc: '14-week PS-II project cycle' },
              ].map((v) => (
                <div key={v.title} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                  <span className="text-xl">{v.icon}</span>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{v.title}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3">
              <Link to="/assessment" id="about-assessment-btn" className="btn-primary text-sm px-6 py-3">
                Try Skill Assessment
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a href="#progress" className="btn-secondary text-sm px-6 py-3">
                View Progress
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
