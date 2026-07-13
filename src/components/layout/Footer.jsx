// Footer.jsx
// Professional footer with PS-II internship branding
// -- Tilak Kumar

import { Link } from 'react-router-dom';

const FooterSection = ({ title, links }) => (
  <div>
    <h3 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">
      {title}
    </h3>
    <ul className="space-y-2.5">
      {links.map((link) => (
        <li key={link.label}>
          {link.href.startsWith('mailto:') || link.href.startsWith('http') ? (
            <a
              href={link.href}
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-0.5 inline-block"
            >
              {link.label}
            </a>
          ) : (
            <Link
              to={link.href}
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-0.5 inline-block"
            >
              {link.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { label: 'Skill Assessment', href: '/assessment' },
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Business Roadmaps', href: '#' },
      { label: 'Learning Resources', href: '#' },
    ],
    project: [
      { label: 'About the Project', href: '/#about' },
      { label: 'Development Progress', href: '/#progress' },
      { label: 'Project Modules', href: '/#modules' },
      { label: 'Features', href: '/#features' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms & Conditions', href: '#' },
      { label: 'Feedback & Suggestions', href: '/feedback' },
      { label: 'Contact', href: '#' },
    ],
  };

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-violet-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg font-display">E</span>
              </div>
              <span className="font-display font-bold text-white text-lg">
                Entre<span className="text-primary-400">Skill</span> Hub
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-4">
              A skill-to-startup enablement platform helping individuals discover business 
              opportunities and follow structured roadmaps to build sustainable micro-businesses.
            </p>
            {/* Project info badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 mb-5">
              <span className="text-sm">🎓</span>
              <div>
                <div className="text-xs text-gray-500">PS-II Internship Project</div>
                <div className="text-sm font-semibold text-gray-300">Tilak Kumar · BML Munjal University</div>
              </div>
            </div>
          </div>

          {/* Link columns */}
          <FooterSection title="Platform" links={footerLinks.platform} />
          <FooterSection title="Project" links={footerLinks.project} />
          <FooterSection title="Legal" links={footerLinks.legal} />
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} EntreSkill Hub. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm text-center sm:text-right">
            Developed as part of PS-II Internship Program | BML Munjal University
          </p>
        </div>
      </div>
    </footer>
  );
}
