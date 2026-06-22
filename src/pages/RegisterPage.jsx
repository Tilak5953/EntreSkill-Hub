// RegisterPage.jsx
// Registration screen for new users on EntreSkill Hub
// Includes Mobile Number field and password strength checker
// Built by Tilak Kumar | BML Munjal University | Unified Mentor PS-II

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function InputField({ id, label, type = 'text', placeholder, value, onChange, icon }) {
  const [showPass, setShowPass] = useState(false);
  const actualType = type === 'password' ? (showPass ? 'text' : 'password') : type;

  return (
    <div>
      <label htmlFor={id} className="input-label">{label}</label>
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
    </div>
  );
}

export default function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const validate = () => {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = 'Full name is required.';
    if (!form.email.includes('@')) errs.email = 'Enter a valid email address.';
    if (!/^\d{10}$/.test(form.mobile)) errs.mobile = 'Enter a valid 10-digit mobile number.';
    if (form.password.length < 8) errs.password = 'Password must be at least 8 characters.';
    if (form.password !== form.confirmPassword) errs.confirmPassword = 'Passwords do not match.';
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
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-5/12 relative overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-violet-900 flex-col justify-between p-12">
        <div className="absolute inset-0 dot-grid opacity-[0.08]" />
        <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-primary-600/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-violet-600/20 blur-3xl" />

        <Link to="/" className="relative flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
            <span className="text-white font-bold text-xl font-display">E</span>
          </div>
          <span className="font-display font-bold text-white text-xl">EntreSkill Hub</span>
        </Link>

        <div className="relative">
          <h2 className="font-display font-extrabold text-white text-4xl leading-tight mb-3">
            Start Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-200">
              Entrepreneur Journey
            </span>
          </h2>
          <p className="text-primary-200 text-base mb-8 leading-relaxed">
            Create an account to take your skill assessment and get personalised business recommendations.
          </p>

          <div className="space-y-3">
            {[
              { icon: '🧠', text: 'Take a personalised skill assessment' },
              { icon: '💡', text: 'Get matched business recommendations' },
              { icon: '🗺️', text: 'Follow a structured startup roadmap' },
              { icon: '📊', text: 'Track your progress on the dashboard' },
              { icon: '📚', text: 'Access curated learning resources' },
              { icon: '🤝', text: 'Connect with domain mentors' },
            ].map((b) => (
              <div key={b.text} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-lg">{b.icon}</span>
                <span className="text-white/80 text-sm">{b.text}</span>
                <svg className="w-4 h-4 text-emerald-400 ml-auto flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            ))}
          </div>
        </div>

        <div className="relative text-primary-400 text-xs">
          © {new Date().getFullYear()} EntreSkill Hub — PS-II Academic Project
        </div>
      </div>

      {/* Right Panel — Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-10 bg-gray-50 overflow-y-auto">
        <div className="w-full max-w-md py-8">
          <Link to="/" className="lg:hidden flex items-center gap-2.5 mb-8">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-violet-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg font-display">E</span>
            </div>
            <span className="font-display font-bold text-gray-900 text-lg">
              Entre<span className="gradient-text">Skill</span> Hub
            </span>
          </Link>

          <div className="mb-8">
            <h1 className="font-display font-extrabold text-3xl text-gray-900 mb-2">
              Create your account
            </h1>
            <p className="text-gray-500 text-sm">
              Already have an account?{' '}
              <Link to="/login" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                Sign in →
              </Link>
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-8">
            <form onSubmit={handleSubmit} noValidate id="register-form" className="space-y-4">
              {/* Full Name */}
              <div>
                <InputField id="register-fullname" label="Full Name" placeholder="Tilak Kumar" value={form.fullName} onChange={handleChange('fullName')} icon="👤" />
                {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
              </div>

              {/* Email */}
              <div>
                <InputField id="register-email" label="Email Address" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange('email')} icon="✉️" />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>

              {/* Mobile Number */}
              <div>
                <InputField id="register-mobile" label="Mobile Number" type="tel" placeholder="9876543210" value={form.mobile} onChange={handleChange('mobile')} icon="📱" />
                {errors.mobile && <p className="text-xs text-red-500 mt-1">{errors.mobile}</p>}
              </div>

              {/* Password */}
              <div>
                <InputField id="register-password" label="Password" type="password" placeholder="Create a strong password" value={form.password} onChange={handleChange('password')} icon="🔒" />
                <PasswordStrength password={form.password} />
                {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
              </div>

              {/* Confirm Password */}
              <div>
                <InputField id="register-confirm-password" label="Confirm Password" type="password" placeholder="Re-enter your password" value={form.confirmPassword} onChange={handleChange('confirmPassword')} icon="🔒" />
                {form.confirmPassword && form.password === form.confirmPassword && (
                  <p className="text-xs text-emerald-500 mt-1 flex items-center gap-1"><span>✓</span> Passwords match</p>
                )}
                {errors.confirmPassword && <p className="text-xs text-red-500 mt-1">{errors.confirmPassword}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                id="register-submit-btn"
                disabled={loading}
                className="btn-primary w-full py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 mt-2"
              >
                {loading ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Creating account...
                  </>
                ) : (
                  <>
                    Create Account
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          <p className="text-center text-xs text-gray-400 mt-6">
            This is a demo registration for academic purposes. No real data is stored.
          </p>
        </div>
      </div>
    </div>
  );
}
