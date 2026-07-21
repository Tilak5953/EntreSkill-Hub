// Updated Navbar — auth-aware with login/logout states
// Developer: Tilak Kumar | BML Munjal University | PS-II Internship

import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Logo = () => (
  <Link to="/" id="navbar-logo" className="flex items-center gap-2.5 group">
    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-violet-600 flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-shadow duration-300">
      <span className="text-white font-bold text-lg font-display">E</span>
    </div>
    <span className="font-display font-bold text-gray-900 text-lg leading-tight">
      Entre<span className="gradient-text">Skill</span> Hub
    </span>
  </Link>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, logout } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const authLinks = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Progress', href: '/progress' },
    { label: 'Assessment', href: '/assessment' },
    { label: 'Businesses', href: '/recommendations' },
    { label: 'Mentors', href: '/mentors' },
    { label: 'Resources', href: '/learning' },
    { label: 'Profile', href: '/profile' },
  ];

  const publicLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about', anchor: true },
    { label: 'Feedback', href: '/feedback' },
  ];

  const links = user ? authLinks : publicLinks;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {links.map((link) =>
              link.external ? (
                <a key={link.label} href={link.href} className="nav-link text-primary-600 font-semibold">{link.label}</a>
              ) : link.anchor ? (
                <a key={link.label} href={link.href} className="nav-link">{link.label}</a>
              ) : (
                <Link key={link.label} to={link.href} className={`nav-link ${pathname === link.href ? 'nav-link-active' : ''}`}>{link.label}</Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <>
                <span className="text-sm text-gray-500 font-medium">Hi, {user.name?.split(' ')[0]}</span>
                <button onClick={handleLogout} id="nav-logout-btn" className="btn-ghost text-sm">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" id="nav-login-btn" className="btn-ghost">Login</Link>
                <Link to="/register" id="nav-register-btn" className="btn-primary text-sm px-5 py-2.5">
                  Get Started
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </>
            )}
          </div>

          {/* Hamburger */}
          <button className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl hover:bg-gray-100 transition-colors duration-200" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            <span className={`w-5 h-0.5 bg-gray-700 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-5 h-0.5 bg-gray-700 transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`w-5 h-0.5 bg-gray-700 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white/98 backdrop-blur-xl border-t border-gray-100 px-4 py-4 space-y-1">
          {links.map((link) =>
            link.external ? (
              <a key={link.label} href={link.href} className="block px-4 py-3 rounded-xl font-semibold text-primary-600 hover:bg-primary-50 transition-all">{link.label}</a>
            ) : link.anchor ? (
              <a key={link.label} href={link.href} className="block px-4 py-3 rounded-xl font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-all">{link.label}</a>
            ) : (
              <Link key={link.label} to={link.href} className="block px-4 py-3 rounded-xl font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-all">{link.label}</Link>
            )
          )}
          <div className="pt-3 flex flex-col gap-2 border-t border-gray-100 mt-2">
            {user ? (
              <button onClick={handleLogout} className="btn-secondary w-full text-center">Logout</button>
            ) : (
              <>
                <Link to="/login" className="btn-secondary w-full text-center">Login</Link>
                <Link to="/register" className="btn-primary w-full text-center">Get Started</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
