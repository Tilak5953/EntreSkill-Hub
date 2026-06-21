// ProjectProgressSection.jsx
// Shows the actual development progress of the PS-II project
// Acts as a professional timeline/tracker for evaluation presentation
// -- Tilak Kumar

const phases = [
  {
    id: 'phase-1',
    phase: 'Phase 1',
    title: 'Requirement Analysis',
    description: 'Identified problem statement, target users, core features, and technology stack through research and mentor discussions.',
    status: 'completed',
    date: 'Week 1–2',
    deliverables: ['SRS Document', 'Use Case Diagrams', 'Tech Stack Decision'],
  },
  {
    id: 'phase-2',
    phase: 'Phase 2',
    title: 'UI/UX Design',
    description: 'Designed wireframes and high-fidelity mockups for all pages. Established design system, color palette, and component library.',
    status: 'completed',
    date: 'Week 3–4',
    deliverables: ['Wireframes', 'Design System', 'Page Mockups'],
  },
  {
    id: 'phase-3',
    phase: 'Phase 3',
    title: 'Frontend Development',
    description: 'Building responsive React components with Tailwind CSS. Implementing all pages, routing, and interactive UI elements.',
    status: 'active',
    date: 'Week 5–7',
    deliverables: ['React Components', 'Routing', 'Responsive UI'],
  },
  {
    id: 'phase-4',
    phase: 'Phase 4',
    title: 'Backend Development',
    description: 'Will implement REST APIs, user authentication (JWT), business recommendation logic, and all server-side operations.',
    status: 'pending',
    date: 'Week 8–10',
    deliverables: ['REST APIs', 'Auth System', 'Business Logic'],
  },
  {
    id: 'phase-5',
    phase: 'Phase 5',
    title: 'Database Integration',
    description: 'Will design and integrate the database schema for users, skills, business ideas, roadmaps, and mentor data.',
    status: 'pending',
    date: 'Week 11–12',
    deliverables: ['DB Schema', 'Data Models', 'CRUD Operations'],
  },
  {
    id: 'phase-6',
    phase: 'Phase 6',
    title: 'Testing & Deployment',
    description: 'Will perform unit testing, integration testing, bug fixing, and final deployment on a cloud hosting platform.',
    status: 'pending',
    date: 'Week 13–14',
    deliverables: ['Test Cases', 'Bug Fixes', 'Live Deployment'],
  },
];

const statusConfig = {
  completed: {
    icon: '✓',
    label: 'Completed',
    ringColor: 'ring-emerald-500',
    bgColor: 'bg-emerald-500',
    textColor: 'text-emerald-700',
    badgeBg: 'bg-emerald-100',
    lineColor: 'bg-emerald-400',
  },
  active: {
    icon: '◉',
    label: 'In Progress',
    ringColor: 'ring-primary-500',
    bgColor: 'bg-primary-500',
    textColor: 'text-primary-700',
    badgeBg: 'bg-primary-100',
    lineColor: 'bg-primary-300',
  },
  pending: {
    icon: '⏳',
    label: 'Pending',
    ringColor: 'ring-gray-300',
    bgColor: 'bg-gray-200',
    textColor: 'text-gray-500',
    badgeBg: 'bg-gray-100',
    lineColor: 'bg-gray-200',
  },
};

export default function ProjectProgressSection() {
  const completedCount = phases.filter((p) => p.status === 'completed').length;
  const progressPercent = Math.round((completedCount / phases.length) * 100);

  return (
    <section id="progress" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="section-tag mb-4">PS-II Project Timeline</span>
          <h2 className="section-title mb-4">
            Project Development{' '}
            <span className="gradient-text">Progress</span>
          </h2>
          <p className="section-subtitle">
            Tracking the iterative development of EntreSkill Hub across the PS-II internship period
            at Unified Mentor, BML Munjal University.
          </p>
        </div>

        {/* Overall progress bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-gray-700">Overall Project Progress</span>
            <span className="text-sm font-bold text-primary-600">{progressPercent}% Complete</span>
          </div>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary-500 to-violet-500 transition-all duration-1000"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="flex justify-between mt-1.5">
            <span className="text-xs text-gray-400">{completedCount} of {phases.length} phases done</span>
            <span className="text-xs text-gray-400">Frontend phase active</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gray-100 lg:-translate-x-px" />

          <div className="space-y-10">
            {phases.map((phase, index) => {
              const cfg = statusConfig[phase.status];
              const isRight = index % 2 === 0;

              return (
                <div
                  key={phase.id}
                  id={phase.id}
                  className={`relative flex gap-6 lg:gap-0 ${
                    isRight ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content card */}
                  <div className={`flex-1 lg:max-w-[45%] ${isRight ? 'lg:pr-10' : 'lg:pl-10'} ml-14 lg:ml-0`}>
                    <div className={`card p-5 ${phase.status === 'active' ? 'border-primary-200 shadow-glow' : ''}`}>
                      {/* Top row */}
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                            {phase.phase} · {phase.date}
                          </div>
                          <h3 className="font-display font-bold text-gray-900 text-base">
                            {phase.title}
                          </h3>
                        </div>
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${cfg.badgeBg} ${cfg.textColor} border-current/20 flex-shrink-0 ml-3`}>
                          {cfg.label}
                        </span>
                      </div>

                      <p className="text-gray-500 text-sm leading-relaxed mb-4">
                        {phase.description}
                      </p>

                      {/* Deliverables */}
                      <div className="flex flex-wrap gap-2">
                        {phase.deliverables.map((d) => (
                          <span key={d} className={`text-xs px-2.5 py-1 rounded-lg font-medium ${cfg.badgeBg} ${cfg.textColor}`}>
                            {phase.status === 'completed' ? '✓ ' : ''}
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot — desktop center, mobile left */}
                  <div className="absolute left-6 lg:left-1/2 lg:-translate-x-1/2 top-5">
                    <div className={`w-5 h-5 rounded-full ${cfg.bgColor} ring-4 ring-white flex items-center justify-center shadow-md ${phase.status === 'active' ? 'ring-primary-100 animate-pulse-slow' : ''}`}>
                      {phase.status === 'completed' && (
                        <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                      {phase.status === 'active' && (
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      )}
                    </div>
                  </div>

                  {/* Spacer for opposite side on desktop */}
                  <div className="hidden lg:block flex-1 lg:max-w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="flex items-center gap-4 flex-wrap justify-center text-sm">
            {Object.entries(statusConfig).map(([key, val]) => (
              <div key={key} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${val.bgColor}`} />
                <span className="text-gray-600">{val.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
