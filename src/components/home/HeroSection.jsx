// HeroSection.jsx
// Main hero / banner section of the landing page
// Includes animated background, floating cards, and CTA buttons
// -- Tilak Kumar

import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg pt-20"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Large gradient orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-primary-200/40 to-violet-200/40 blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-cyan-200/30 to-primary-200/30 blur-3xl animate-pulse-slow animation-delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-violet-100/20 to-primary-100/20 blur-3xl" />

        {/* Dot grid pattern */}
        <div className="absolute inset-0 dot-grid opacity-[0.03]" />

        {/* Floating shapes */}
        <div className="absolute top-24 left-16 w-8 h-8 rounded-lg bg-primary-400/20 rotate-12 animate-float" />
        <div className="absolute top-40 right-20 w-6 h-6 rounded-full bg-violet-400/30 animate-float animation-delay-300" />
        <div className="absolute bottom-32 left-32 w-10 h-10 rounded-xl bg-cyan-400/20 -rotate-12 animate-float animation-delay-500" />
        <div className="absolute bottom-48 right-40 w-5 h-5 rounded-full bg-emerald-400/30 animate-float animation-delay-200" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-primary-100 rounded-full px-4 py-2 mb-8 shadow-sm animate-fade-up">
              <span className="w-2 h-2 rounded-full animated-gradient" />
              <span className="text-xs font-semibold text-primary-700 uppercase tracking-wide">
                Skill-to-Startup Enablement Platform
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-[1.08] tracking-tight mb-6 animate-fade-up stagger-1">
              Transform Your{' '}
              <span className="relative">
                <span className="gradient-text">Skills</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10 C75 2, 225 2, 298 10"
                    stroke="url(#underline-grad)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="underline-grad" x1="0" y1="0" x2="300" y2="0">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>{' '}
              Into{' '}
              <br className="hidden sm:block" />
              Successful Businesses
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-500 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 animate-fade-up stagger-2">
              Discover business ideas, follow structured roadmaps, learn from experts, and build 
              sustainable micro-businesses with personalised guidance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up stagger-3">
              <Link
                to="/assessment"
                id="hero-get-started-btn"
                className="btn-primary text-base px-8 py-4"
              >
                Take Skill Assessment
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href="#features"
                id="hero-explore-btn"
                className="btn-secondary text-base px-8 py-4"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Explore Platform
              </a>
            </div>

            {/* Project indicators */}
            <div className="mt-10 flex flex-wrap items-center gap-6 justify-center lg:justify-start animate-fade-up stagger-4">
              {[
                { icon: '✓', text: 'PS-II Internship Project' },
                { icon: '✓', text: 'React + Tailwind CSS' },
                { icon: '✓', text: 'BML Munjal University' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {item.icon}
                  </span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Hero visual */}
          <div className="relative flex items-center justify-center animate-fade-up stagger-2 lg:stagger-1">
            <HeroVisual />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-60">
          <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Scroll</span>
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  const cards = [
    {
      icon: '🧠',
      label: 'Skill Assessment',
      value: 'Module 1',
      color: 'from-primary-500 to-violet-500',
      position: 'top-0 left-4',
    },
    {
      icon: '📚',
      label: 'Learning Resources',
      value: 'Curated',
      color: 'from-emerald-500 to-cyan-500',
      position: 'bottom-8 left-0',
    },
    {
      icon: '🗺️',
      label: 'Roadmap Engine',
      value: 'Planned',
      color: 'from-amber-500 to-orange-500',
      position: 'top-12 right-0',
    },
  ];

  return (
    <div className="relative w-full max-w-sm lg:max-w-md aspect-square">
      {/* Central dashboard card */}
      <div className="absolute inset-8 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col">
        {/* Card header */}
        <div className="p-4 bg-gradient-to-r from-primary-600 to-violet-600 text-white">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center">
                <span className="text-xs">E</span>
              </div>
              <span className="text-sm font-semibold">EntreSkill Hub</span>
            </div>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-white/40" />
              <div className="w-2 h-2 rounded-full bg-white/40" />
              <div className="w-2 h-2 rounded-full bg-white/40" />
            </div>
          </div>
          <p className="text-xs text-white/80">Your startup journey dashboard</p>
        </div>

        {/* Card body */}
        <div className="flex-1 p-4 space-y-3">
          {/* Progress items */}
          {[
            { label: 'Business Plan', progress: 85, color: 'bg-primary-500' },
            { label: 'Skill Assessment', progress: 100, color: 'bg-emerald-500' },
            { label: 'Mentor Sessions', progress: 60, color: 'bg-violet-500' },
            { label: 'Market Research', progress: 45, color: 'bg-amber-500' },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-600 font-medium">{item.label}</span>
                <span className="text-gray-500">{item.progress}%</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                  style={{ width: `${item.progress}%` }}
                />
              </div>
            </div>
          ))}

          {/* Mentor row */}
          <div className="pt-2 flex items-center justify-between border-t border-gray-100">
            <div className="flex -space-x-2">
              {['🧑‍💼', '👩‍💻', '👨‍🎓'].map((emoji, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full bg-gradient-to-br from-primary-100 to-violet-100 border-2 border-white flex items-center justify-center text-sm"
                >
                  {emoji}
                </div>
              ))}
            </div>
            <span className="text-xs text-primary-600 font-semibold">3 Mentors Active</span>
          </div>
        </div>
      </div>

      {/* Floating stat cards */}
      {cards.map((card) => (
        <div
          key={card.label}
          className={`absolute ${card.position} bg-white rounded-2xl shadow-xl border border-gray-100 p-3 animate-float`}
          style={{ animationDelay: `${Math.random() * 2}s` }}
        >
          <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-sm mb-1.5`}>
            {card.icon}
          </div>
          <div className={`font-display font-bold text-sm bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}>
            {card.value}
          </div>
          <div className="text-xs text-gray-500 whitespace-nowrap">{card.label}</div>
        </div>
      ))}

      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-100/50 via-violet-100/30 to-cyan-100/50 rounded-full blur-2xl scale-110" />
    </div>
  );
}
