import { useRef, useState, useEffect } from 'react';

const steps = [
  {
    step: '01',
    icon: '🧠',
    title: 'Assess Your Skills',
    description:
      'Complete our smart skills assessment quiz. Tell us what you know, your passions, and resources available.',
    color: 'from-primary-500 to-violet-500',
    bg: 'bg-primary-50',
  },
  {
    step: '02',
    icon: '🎯',
    title: 'Get Business Ideas',
    description:
      'Receive personalised business recommendations matched to your skills, budget, and local market conditions.',
    color: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-50',
  },
  {
    step: '03',
    icon: '🗺️',
    title: 'Follow Your Roadmap',
    description:
      'Execute a structured, step-by-step roadmap from business planning to launch with expert guidance.',
    color: 'from-emerald-500 to-teal-500',
    bg: 'bg-emerald-50',
  },
  {
    step: '04',
    icon: '🚀',
    title: 'Launch & Scale',
    description:
      'Go live with confidence. Access ongoing mentorship, resources, and a community of fellow entrepreneurs.',
    color: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-50',
  },
];

export default function HowItWorksSection() {
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
    <section id="how-it-works" className="py-24 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-tag mb-4">Simple Process</span>
          <h2 className="section-title mb-4">
            From Skill to Startup in{' '}
            <span className="gradient-text">4 Steps</span>
          </h2>
          <p className="section-subtitle">
            Our proven framework has helped thousands of people transform their expertise into
            thriving businesses.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-violet-200 to-amber-200 mx-24" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className={`relative text-center group transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Step number circle */}
                <div className="relative flex justify-center mb-6">
                  <div
                    className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-3xl shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300`}
                  >
                    {step.icon}
                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white border-2 border-gray-100 shadow flex items-center justify-center">
                      <span className={`text-xs font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                        {step.step}
                      </span>
                    </div>
                  </div>
                </div>

                <h3 className="font-display font-bold text-xl text-gray-900 mb-3 group-hover:text-primary-700 transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="/register"
            id="how-it-works-cta"
            className="btn-primary text-base px-10 py-4 inline-flex"
          >
            Start Your Journey Today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
