// StatsSection.jsx
// Shows project scope metrics instead of fake user numbers
// Labeled clearly as demo/academic data
// -- Tilak Kumar

import { useRef, useState, useEffect } from 'react';

// These are project-scope metrics, not real user statistics
const stats = [
  {
    id: 'stat-prototype',
    icon: '🖥️',
    label: 'Prototype Platform',
    sublabel: 'Full-stack web application',
    color: 'from-primary-500 to-violet-500',
    tag: 'Live Demo',
  },
  {
    id: 'stat-ideas',
    icon: '💡',
    label: '850+ Business Ideas',
    sublabel: 'Curated startup categories',
    color: 'from-amber-500 to-orange-500',
    tag: 'Database Ready',
  },
  {
    id: 'stat-mentor',
    icon: '🤝',
    label: 'Mentor Module',
    sublabel: 'Expert connect feature',
    color: 'from-emerald-500 to-teal-500',
    tag: 'In Progress',
  },
  {
    id: 'stat-categories',
    icon: '🗂️',
    label: '12 Business Categories',
    sublabel: 'Across industries & skills',
    color: 'from-rose-500 to-pink-500',
    tag: 'Defined',
  },
];

function StatCard({ stat, index, visible }) {
  return (
    <div
      id={stat.id}
      className={`relative group card p-8 text-center overflow-hidden transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Gradient hover overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />

      {/* Tag badge */}
      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${stat.color} text-white text-xs font-semibold mb-4`}>
        {stat.tag}
      </div>

      {/* Icon */}
      <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-3xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        {stat.icon}
      </div>

      <div className={`font-display font-extrabold text-xl lg:text-2xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
        {stat.label}
      </div>

      <div className="text-gray-500 text-sm">{stat.sublabel}</div>
    </div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="py-24 lg:py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-violet-900" />
      <div className="absolute inset-0 dot-grid opacity-5" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary-600/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-white/10 text-primary-200 border border-white/10 mb-4">
            Project Scope
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            What This{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-violet-300">
              Platform Covers
            </span>
          </h2>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto">
            A complete skill-to-startup enablement system with four core functional modules.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} visible={visible} />
          ))}
        </div>

        {/* Demo data disclaimer */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-2.5 px-5 py-3 bg-white/5 border border-white/10 rounded-full">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-white/50 text-xs font-medium">
              Demo Data for Academic Project — PS-II Internship | BML Munjal University
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
