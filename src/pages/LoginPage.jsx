// LoginPage.jsx
// Login screen for EntreSkill Hub
// Split-panel design: left branding, right form
// Built by Tilak Kumar | BML Munjal University | Unified Mentor PS-II

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function InputField({ id, label, type, placeholder, value, onChange, icon, helper, rightElement }) {
  const [showPass, setShowPass] = useState(false);
  const actualType = type === 'password' ? (showPass ? 'text' : 'password') : type;

  return (
    <div>
      <label htmlFor={id} className="input-label">
        {label}
      </label>
      <div className="relative">
        {/* Left icon */}
        {icon && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-base pointer-events-none">
            {icon}
          </span>
        )}
        <input
          id={id}
          type={actualType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`input-field ${icon ? 'pl-10' : ''} ${type === 'password' ? 'pr-12' : ''}`}
          required
          autoComplete={type === 'password' ? 'current-password' : type === 'email' ? 'email' : 'off'}
        />
        {/* Password toggle */}
        {type === 'password' && (
          <button
            type="button"
            tabIndex={-1}
            onClick={() => setShowPass(!showPass)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200 text-base"
            aria-label={showPass ? 'Hide password' : 'Show password'}
          >
            {showPass ? '🙈' : '👁️'}
          </button>
        )}
        {rightElement && !type.includes('password') && (
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2">{rightElement}</div>
        )}
      </div>
      {helper && <p className="text-xs text-gray-400 mt-1.5">{helper}</p>}
    </div>
  );
}

export default function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    // Demo: just navigate to home
    navigate('/');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel — Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-primary-600 via-violet-700 to-purple-800 flex-col justify-between p-12">
        {/* Background decoration */}
        <div className="absolute inset-0 dot-grid opacity-10" />
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-white/5 blur-3xl" />

        {/* Logo */}
        <div className="relative flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <span className="text-white font-bold text-xl font-display">E</span>
          </div>
          <span className="font-display font-bold text-white text-xl">EntreSkill Hub</span>
        </div>

        {/* Center content */}
        <div className="relative space-y-8">
          <div>
            <h2 className="font-display font-extrabold text-white text-4xl leading-tight mb-4">
              Welcome back,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-200">
                Entrepreneur!
              </span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Continue your journey toward building your dream business.
            </p>
          </div>

          {/* Feature list */}
          <div className="space-y-4">
            {[
              { icon: '📊', text: 'Track your business progress' },
              { icon: '🤝', text: 'Connect with your mentors' },
              { icon: '📚', text: 'Access learning resources' },
              { icon: '🚀', text: 'Execute your roadmap' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center text-base flex-shrink-0">
                  {item.icon}
                </div>
                <span className="text-white/80 text-sm">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-5">
            <p className="text-white/80 text-sm italic leading-relaxed mb-3">
              "EntreSkill Hub helped me turn my baking hobby into a ₹3L/month business in just 6 months!"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center text-base">
                👩‍🍳
              </div>
              <div>
                <div className="text-white text-sm font-semibold">Sneha Patel</div>
                <div className="text-white/60 text-xs">Bakery Owner, Pune</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="relative text-white/50 text-xs">
          © {new Date().getFullYear()} EntreSkill Hub. All rights reserved.
        </div>
      </div>

      {/* Right Panel — Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-10 bg-gray-50">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2.5 mb-8">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-violet-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg font-display">E</span>
            </div>
            <span className="font-display font-bold text-gray-900 text-lg">
              Entre<span className="gradient-text">Skill</span> Hub
            </span>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h1 className="font-display font-extrabold text-3xl text-gray-900 mb-2">
              Sign in to your account
            </h1>
            <p className="text-gray-500 text-sm">
              Don't have an account?{' '}
              <Link to="/register" id="login-to-register-link" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                Register now →
              </Link>
            </p>
          </div>

          {/* Form card */}
          <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-8">
            <form onSubmit={handleSubmit} noValidate className="space-y-5" id="login-form">
              <InputField
                id="login-email"
                label="Email Address"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange('email')}
                icon="✉️"
              />
              <InputField
                id="login-password"
                label="Password"
                type="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange('password')}
                icon="🔒"
              />

              {/* Forgot password */}
              <div className="flex justify-end -mt-1">
                <a
                  href="#"
                  id="forgot-password-link"
                  className="text-xs text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  Forgot password?
                </a>
              </div>

              {/* Error message */}
              {error && (
                <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm">
                  <span>⚠️</span>
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                id="login-submit-btn"
                disabled={loading}
                className="btn-primary w-full py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {loading ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </>
                )}
              </button>

              {/* Divider */}
              <div className="flex items-center gap-4 my-2">
                <div className="flex-1 h-px bg-gray-100" />
                <span className="text-xs text-gray-400 font-medium">or continue with</span>
                <div className="flex-1 h-px bg-gray-100" />
              </div>

              {/* Social login */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'login-google', label: 'Google', icon: '🌐' },
                  { id: 'login-github', label: 'GitHub', icon: '🐙' },
                ].map((provider) => (
                  <button
                    key={provider.id}
                    id={provider.id}
                    type="button"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 text-sm font-medium text-gray-700 transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                  >
                    <span>{provider.icon}</span>
                    {provider.label}
                  </button>
                ))}
              </div>
            </form>
          </div>

          {/* Footer note */}
          <p className="text-center text-xs text-gray-400 mt-6">
            By signing in, you agree to our{' '}
            <a href="#" className="text-primary-600 hover:underline">Terms of Service</a>{' '}
            and{' '}
            <a href="#" className="text-primary-600 hover:underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
