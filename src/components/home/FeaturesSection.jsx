// FeaturesSection.jsx
// Shows the 6 core features of EntreSkill Hub
// Each card appears with a scroll animation using IntersectionObserver
// -- Tilak Kumar

import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const features = [
  {
    id: 'business-recommendations',
    icon: '💡',
    title: 'Business Recommendations',
    description:
      'Get AI-powered business ideas tailored to your unique skills, interests, and local market opportunities.',
    color: 'from-primary-500 to-violet-500',
    bg: 'bg-primary-50',
    border: 'border-primary-100',
    tag: 'AI-Powered',
    link: '/recommendations',
  },
  {
    id: 'business-roadmaps',
    icon: '🗺️',
    title: 'Business Roadmaps',
    description:
      'Follow step-by-step structured roadmaps from idea validation to launch and scale — no experience needed.',
    color: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
    tag: 'Structured',
    link: '/recommendations',
  },
  {
    id: 'learning-resources',
    icon: '📚',
    title: 'Learning Resources',
    description:
      'Access curated courses, tutorials, and industry insights from top entrepreneurship educators worldwide.',
    color: 'from-cyan-500 to-blue-500',
    bg: 'bg-cyan-50',
    border: 'border-cyan-100',
    tag: 'Expert Curated',
    link: '/learning',
  },
  {
    id: 'mentor-support',
    icon: '🤝',
    title: 'Mentor Support',
    description:
      'Connect one-on-one with experienced entrepreneurs and industry mentors who guide you through challenges.',
    color: 'from-emerald-500 to-teal-500',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    tag: 'Live Sessions',
    link: '/mentors',
  },
  {
    id: 'progress-tracking',
    icon: '📊',
    title: 'Progress Tracking',
    description:
      'Monitor your entrepreneurship journey with detailed dashboards, milestones, and achievement badges.',
    color: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    tag: 'Real-time',
    link: '/progress',
  },
  {
    id: 'entrepreneurship-guidance',
    icon: '🎯',
    title: 'Entrepreneurship Guidance',
    description:
      'Receive personalised coaching on mindset, strategy, and execution from successful startup founders.',
    color: 'from-rose-500 to-pink-500',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
    tag: 'Personalised',
    link: '/mentors',
  },
];

function FeatureCard({ feature, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Link
      to={feature.link}
      ref={ref}
      id={feature.id}
      className={`card p-6 group cursor-pointer transition-all duration-500 block text-left ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl mb-5 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}
      >
        {feature.icon}
      </div>

      {/* Tag */}
      <span
        className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${feature.bg} border ${feature.border} mb-3`}
        style={{ color: 'inherit' }}
      >
        <span className={`bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
          {feature.tag}
        </span>
      </span>

      {/* Content */}
      <h3 className="font-display font-bold text-lg text-gray-900 mb-2 group-hover:text-primary-700 transition-colors duration-200">
        {feature.title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>

      {/* Arrow */}
      <div className="mt-4 flex items-center gap-1 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className={`bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
          Learn more
        </span>
        <svg
          className={`w-4 h-4 bg-gradient-to-r ${feature.color} bg-clip-text`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>
    </Link>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-tag mb-4">Everything You Need</span>
          <h2 className="section-title mb-4">
            Your Complete{' '}
            <span className="gradient-text">Entrepreneurship</span>
            <br className="hidden sm:block" /> Toolkit
          </h2>
          <p className="section-subtitle">
            Six powerful features designed to take you from skill-holder to successful business owner,
            no matter where you&apos;re starting from.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-6 py-4 shadow-card">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-violet-500 flex items-center justify-center text-xl">
              🎁
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-gray-900">Start for Free Today</div>
              <div className="text-xs text-gray-500">No credit card • Full access • Cancel anytime</div>
            </div>
            <a href="/register" className="btn-primary text-sm px-5 py-2.5 ml-2">
              Join Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
