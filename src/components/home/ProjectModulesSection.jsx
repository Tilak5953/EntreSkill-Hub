// ProjectModulesSection.jsx
// Replaces the fake testimonials section
// Shows the 6 actual functional modules of the platform
// -- Tilak Kumar

const modules = [
  {
    id: 'module-skill-assessment',
    icon: '🧠',
    number: '01',
    title: 'Skill Assessment',
    description:
      'A guided form that collects user skills, experience level, interest area, and available budget to generate personalised recommendations.',
    features: ['Multi-step form', 'Skill categorisation', 'Interest mapping'],
    status: 'Completed',
    statusColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    color: 'from-primary-500 to-violet-500',
    bg: 'bg-primary-50',
  },
  {
    id: 'module-business-recommendation',
    icon: '💡',
    number: '02',
    title: 'Business Idea Recommendation',
    description:
      'Matches user skill profile with a curated database of 40+ business ideas using a rule-based recommendation algorithm.',
    features: ['Rule-based matching', '20 categories', 'Filtered results'],
    status: 'Completed',
    statusColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    color: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-50',
  },
  {
    id: 'module-roadmaps',
    icon: '🗺️',
    number: '03',
    title: 'Business Roadmaps',
    description:
      'Step-by-step structured plans for each business category — from idea validation and setup to launch and growth milestones.',
    features: ['Phase-based plan', 'Checklist format', 'Progress saving'],
    status: 'Completed',
    statusColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    color: 'from-cyan-500 to-blue-500',
    bg: 'bg-cyan-50',
  },
  {
    id: 'module-learning',
    icon: '📚',
    number: '04',
    title: 'Learning Resources',
    description:
      'A curated library of entrepreneurship articles, video links, government schemes, and financial literacy content.',
    features: ['Category-wise content', 'External links', 'Bookmarking'],
    status: 'Completed',
    statusColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    color: 'from-emerald-500 to-teal-500',
    bg: 'bg-emerald-50',
  },
  {
    id: 'module-mentor',
    icon: '🤝',
    number: '05',
    title: 'Mentor Support',
    description:
      'A directory of available mentors with domain expertise. Users can browse profiles and request guidance sessions.',
    features: ['Mentor profiles', 'Domain filters', 'Session requests'],
    status: 'Completed',
    statusColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    color: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-50',
  },
  {
    id: 'module-progress',
    icon: '📊',
    number: '06',
    title: 'Progress Tracking',
    description:
      'A personal dashboard showing completed roadmap steps, saved business ideas, learning progress, and overall journey status.',
    features: ['Visual dashboard', 'Milestone tracking', 'Activity log'],
    status: 'Completed',
    statusColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    color: 'from-rose-500 to-pink-500',
    bg: 'bg-rose-50',
  },
];

export default function ProjectModulesSection() {
  return (
    <section id="modules" className="py-24 lg:py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-tag mb-4">Platform Architecture</span>
          <h2 className="section-title mb-4">
            6 Core{' '}
            <span className="gradient-text">Project Modules</span>
          </h2>
          <p className="section-subtitle">
            EntreSkill Hub is structured into six functional modules, each solving a specific
            challenge in the skill-to-startup journey.
          </p>
        </div>

        {/* Modules grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod) => (
            <div
              key={mod.id}
              id={mod.id}
              className="card p-6 flex flex-col group hover:border-primary-200"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-5">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${mod.color} flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  {mod.icon}
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="text-xs font-bold text-gray-300 font-display">{mod.number}</span>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${mod.statusColor}`}>
                    {mod.status}
                  </span>
                </div>
              </div>

              {/* Title & description */}
              <h3 className="font-display font-bold text-lg text-gray-900 mb-2 group-hover:text-primary-700 transition-colors duration-200">
                {mod.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                {mod.description}
              </p>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-2">
                {mod.features.map((f) => (
                  <span
                    key={f}
                    className={`text-xs px-2.5 py-1 rounded-lg ${mod.bg} font-medium`}
                  >
                    <span className={`bg-gradient-to-r ${mod.color} bg-clip-text text-transparent`}>
                      {f}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 rounded-2xl shadow-sm">
            <span className="text-lg">📋</span>
            <span className="text-sm text-gray-600">
              Module development follows iterative PS-II project timeline —{' '}
              <span className="font-semibold text-emerald-600">All Modules Completed</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
