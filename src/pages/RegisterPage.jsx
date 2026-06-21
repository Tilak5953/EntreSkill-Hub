// RegisterPage.jsx
// Registration screen for new users on EntreSkill Hub
// Has password strength checker and form validation
// Built by Tilak Kumar | BML Munjal University | Unified Mentor PS-II

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function InputField({ id, label, type = 'text', placeholder, value, onChange, icon, helper }) {
  const [showPass, setShowPass] = useState(false);
  const actualType = type === 'password' ? (showPass ? 'text' : 'password') : type;

  return (
    <div>
      <label htmlFor={id} className="input-label">
        {label}
      </label>
      <div className="relative">
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
        />
        {type === 'password' && (
          <button
            type="button"
            tabIndex={-1}
            onClick={() => setShowPass(!showPass)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors text-base"
            aria-label={showPass ? 'Hide password' : 'Show password'}
          >
            {showPass ? '🙈' : '👁️'}
          </button>
        )}
      </div>
      {helper && <p className="text-xs text-gray-400 mt-1.5">{helper}</p>}
    </div>
  );
}

function PasswordStrength({ password }) {
  const checks = [
    { label: '8+ characters', pass: password.length >= 8 },
    { label: 'Uppercase letter', pass: /[A-Z]/.test(password) },
    { label: 'Number', pass: /\d/.test(password) },
    { label: 'Special character', pass: /[!@#$%^&*]/.test(password) },
  ];
  const strength = checks.filter((c) => c.pass).length;
  const colors = ['bg-gray-200', 'bg-red-400', 'bg-amber-400', 'bg-blue-400', 'bg-emerald-500'];
  const labels = ['', 'Weak', 'Fair', 'Good', 'Strong'];

  if (!password) return null;

  return (
    <div className="mt-2">
      <div className="flex gap-1 mb-1">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`flex-1 h-1 rounded-full transition-all duration-300 ${i <= strength ? colors[strength] : 'bg-gray-200'}`}
          />
        ))}
      </div>
      <div className="flex justify-between">
        <span className="text-xs text-gray-400">Password strength</span>
        <span className={`text-xs font-semibold ${strength <= 1 ? 'text-red-400' : strength === 2 ? 'text-amber-500' : strength === 3 ? 'text-blue-500' : 'text-emerald-500'}`}>
          {labels[strength]}
        </span>
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
        {checks.map((c) => (
          <span key={c.label} className={`text-xs flex items-center gap-1 ${c.pass ? 'text-emerald-500' : 'text-gray-400'}`}>
            <span>{c.pass ? '✓' : '○'}</span>
            {c.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);

  const handleChange = (field) => (e) => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [field]: val }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const validate = () => {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = 'Full name is required.';
    if (!form.email.includes('@')) errs.email = 'Enter a valid email address.';
    if (form.password.length < 8) errs.password = 'Password must be at least 8 characters.';
    if (form.password !== form.confirmPassword) errs.confirmPassword = 'Passwords do not match.';
    if (!form.agreeTerms) errs.agreeTerms = 'You must accept the terms to continue.';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1800));
    setLoading(false);
    navigate('/');
  };

  const benefits = [
    { icon: '🎁', text: 'Free forever plan with all core features' },
    { icon: '🧠', text: 'AI-powered business recommendations' },
    { icon: '🗺️', text: 'Personalised startup roadmaps' },
    { icon: '🤝', text: 'Access to 320+ expert mentors' },
    { icon: '📊', text: 'Real-time progress dashboard' },
    { icon: '🏆', text: 'Achievement system & badges' },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Left Panel — Benefits */}
      <div className="hidden lg:flex lg:w-5/12 relative overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-violet-900 flex-col justify-between p-12">
        <div className="absolute inset-0 dot-grid opacity-[0.08]" />
        <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-primary-600/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-violet-600/20 blur-3xl" />

        {/* Logo */}
        <div className="relative flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
            <span className="text-white font-bold text-xl font-display">E</span>
          </div>
          <span className="font-display font-bold text-white text-xl">EntreSkill Hub</span>
        </div>

        {/* Content */}
        <div className="relative">
          <h2 className="font-display font-extrabold text-white text-4xl leading-tight mb-3">
            Start Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-200">
              Entrepreneur Journey
            </span>
          </h2>
          <p className="text-primary-200 text-base mb-8 leading-relaxed">
            Join thousands of entrepreneurs who turned their skills into successful businesses.
          </p>

          <div className="space-y-3">
            {benefits.map((b, i) => (
              <div
                key={b.text}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-200"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="text-xl">{b.icon}</span>
                <span className="text-white/80 text-sm">{b.text}</span>
                <svg className="w-4 h-4 text-emerald-400 ml-auto flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            ))}
          </div>
        </div>

        <div className="relative text-primary-400 text-xs">
          © {new Date().getFullYear()} EntreSkill Hub
        </div>
      </div>

      {/* Right Panel — Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-10 bg-gray-50 overflow-y-auto">
        <div className="w-full max-w-md py-8">
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
              Create your free account
            </h1>
            <p className="text-gray-500 text-sm">
              Already have an account?{' '}
              <Link to="/login" id="register-to-login-link" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                Sign in →
              </Link>
            </p>
          </div>

          {/* Form card */}
          <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-8">
            <form onSubmit={handleSubmit} noValidate id="register-form" className="space-y-5">
              {/* Full Name */}
              <div>
                <InputField
                  id="register-fullname"
                  label="Full Name"
                  type="text"
                  placeholder="John Doe"
                  value={form.fullName}
                  onChange={handleChange('fullName')}
                  icon="👤"
                />
                {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
              </div>

              {/* Email */}
              <div>
                <InputField
                  id="register-email"
                  label="Email Address"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange('email')}
                  icon="✉️"
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>

              {/* Password */}
              <div>
                <InputField
                  id="register-password"
                  label="Password"
                  type="password"
                  placeholder="Create a strong password"
                  value={form.password}
                  onChange={handleChange('password')}
                  icon="🔒"
                />
                <PasswordStrength password={form.password} />
                {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
              </div>

              {/* Confirm Password */}
              <div>
                <InputField
                  id="register-confirm-password"
                  label="Confirm Password"
                  type="password"
                  placeholder="Re-enter your password"
                  value={form.confirmPassword}
                  onChange={handleChange('confirmPassword')}
                  icon="🔒"
                />
                {form.confirmPassword && form.password === form.confirmPassword && (
                  <p className="text-xs text-emerald-500 mt-1 flex items-center gap-1">
                    <span>✓</span> Passwords match
                  </p>
                )}
                {errors.confirmPassword && (
                  <p className="text-xs text-red-500 mt-1">{errors.confirmPassword}</p>
                )}
              </div>

              {/* Terms checkbox */}
              <div>
                <label
                  htmlFor="register-terms"
                  className="flex items-start gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    id="register-terms"
                    checked={form.agreeTerms}
                    onChange={handleChange('agreeTerms')}
                    className="mt-0.5 w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 cursor-pointer"
                  />
                  <span className="text-sm text-gray-600 leading-relaxed">
                    I agree to the{' '}
                    <a href="#" className="text-primary-600 font-semibold hover:underline">Terms & Conditions</a>{' '}
                    and{' '}
                    <a href="#" className="text-primary-600 font-semibold hover:underline">Privacy Policy</a>
                  </span>
                </label>
                {errors.agreeTerms && (
                  <p className="text-xs text-red-500 mt-1">{errors.agreeTerms}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                id="register-submit-btn"
                disabled={loading}
                className="btn-primary w-full py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {loading ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Creating your account...
                  </>
                ) : (
                  <>
                    Create Free Account
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </>
                )}
              </button>

              {/* Social signup */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-gray-100" />
                <span className="text-xs text-gray-400 font-medium">or sign up with</span>
                <div className="flex-1 h-px bg-gray-100" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'register-google', label: 'Google', icon: '🌐' },
                  { id: 'register-github', label: 'GitHub', icon: '🐙' },
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

          {/* Trust row */}
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-gray-400">
            {[
              { icon: '🔒', text: '256-bit SSL encrypted' },
              { icon: '🛡️', text: 'GDPR compliant' },
              { icon: '✅', text: 'No spam guarantee' },
            ].map((item) => (
              <span key={item.text} className="flex items-center gap-1">
                <span>{item.icon}</span>
                {item.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
