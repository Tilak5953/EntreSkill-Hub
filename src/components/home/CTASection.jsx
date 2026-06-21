import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section id="cta" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-violet-700 to-purple-700" />

      {/* Animated decorations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-white/5 animate-pulse-slow" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white/5 animate-pulse-slow animation-delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full dot-grid opacity-5" />
        {/* Floating icons */}
        {['💡', '🚀', '📈', '🎯', '🤝', '⭐'].map((icon, i) => (
          <div
            key={i}
            className="absolute text-2xl opacity-10 animate-float"
            style={{
              top: `${15 + (i * 15) % 70}%`,
              left: `${5 + (i * 17) % 90}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${6 + i}s`,
            }}
          >
            {icon}
          </div>
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-semibold text-white/90 uppercase tracking-wide">
            Limited Time — Free Access
          </span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
          Ready to Turn Your{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-200">
            Skill into a Business?
          </span>
        </h2>

        <p className="text-white/70 text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Join 12,500+ entrepreneurs who have already taken the first step.
          Get your personalised business roadmap in minutes — completely free.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/register"
            id="cta-register-btn"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-bold text-primary-700 bg-white hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 text-base"
          >
            Create Free Account
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            to="/login"
            id="cta-login-btn"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-bold text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 text-base"
          >
            Sign In
          </Link>
        </div>

        {/* Features checklist */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {[
            'No credit card required',
            'Instant access',
            'Cancel anytime',
            'Expert mentors included',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-white/70 text-sm">
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-emerald-300 fill-current" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
