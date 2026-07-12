// RegisterPage — connected to real auth API with password strength
// Developer: Tilak Kumar | BML Munjal University | PS-II Internship

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

function PasswordStrength({ password }) {
  const checks = [
    password.length >= 8,
    /[A-Z]/.test(password),
    /[0-9]/.test(password),
    /[!@#$%^&*]/.test(password),
  ];
  const score = checks.filter(Boolean).length;
  const levels = [
    { label: 'Weak', color: 'bg-red-500' },
    { label: 'Fair', color: 'bg-amber-500' },
    { label: 'Good', color: 'bg-blue-500' },
    { label: 'Strong', color: 'bg-emerald-500' },
  ];
  if (!password) return null;
  const level = levels[score - 1] || levels[0];
  return (
    <div className="mt-2">
      <div className="flex gap-1 mb-1">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${i <= score ? level.color : 'bg-gray-200'}`} />
        ))}
      </div>
      <p className={`text-xs font-medium ${score >= 4 ? 'text-emerald-600' : score >= 2 ? 'text-amber-600' : 'text-red-500'}`}>{level.label} password</p>
    </div>
  );
}

export default function RegisterPage() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [form, setForm] = useState({ fullName: '', email: '', mobile: '', password: '', confirmPassword: '' });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPw, setShowPw] = useState(false);
  const [showCpw, setShowCpw] = useState(false);

  const handleChange = (field) => (e) => {
    setForm((p) => ({ ...p, [field]: e.target.value }));
    setErrors((p) => ({ ...p, [field]: '' }));
  };

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = 'Name is required';
    if (!form.email || !form.email.includes('@')) e.email = 'Valid email is required';
    if (form.mobile && !/^\d{10}$/.test(form.mobile)) e.mobile = 'Enter a valid 10-digit mobile number';
    if (form.password.length < 8) e.password = 'Password must be at least 8 characters';
    if (form.password !== form.confirmPassword) e.confirmPassword = 'Passwords do not match';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    try {
      await register({ name: form.fullName, email: form.email, password: form.password, mobile: form.mobile });
      toast.success('Account created! Complete your profile for better recommendations 🎉');
      navigate('/profile');
    } catch (err) {
      const msg = err.response?.data?.message || 'Registration failed. Please try again.';
      toast.error(msg);
      setErrors({ form: msg });
    } finally {
      setLoading(false);
    }
  };

  const field = (id, label, icon, type, ph, value, field_, extra) => (
    <div>
      <label htmlFor={id} className="input-label">{icon} {label}</label>
      <div className="relative">
        <input id={id} type={type} placeholder={ph} value={value} onChange={handleChange(field_)} className="input-field" />
      </div>
      {errors[field_] && <p className="text-xs text-red-500 mt-1">{errors[field_]}</p>}
      {extra}
    </div>
  );

  return (
    <div className="min-h-screen flex">
      {/* Left branding */}
      <div className="hidden lg:flex lg:w-5/12 bg-gradient-to-br from-primary-600 via-violet-700 to-purple-700 flex-col justify-between p-12 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
        </div>
        <Link to="/" className="relative flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
            <span className="text-white font-bold text-xl font-display">E</span>
          </div>
          <span className="font-display font-bold text-white text-xl">EntreSkill Hub</span>
        </Link>
        <div className="relative">
          <h2 className="font-display font-extrabold text-4xl text-white leading-tight mb-4">
            Start your <span className="text-yellow-300">entrepreneurship journey</span> today
          </h2>
          <p className="text-white/70 mb-8">Join and discover the right business for your skills.</p>
          {['Take a skill assessment', 'Get personalised business recommendations', 'Follow a step-by-step roadmap'].map((t) => (
            <div key={t} className="flex items-center gap-3 text-white/80 mb-3">
              <div className="w-5 h-5 rounded-full bg-emerald-400/30 flex items-center justify-center text-emerald-300 text-xs font-bold">✓</div>
              <span className="text-sm font-medium">{t}</span>
            </div>
          ))}
        </div>
        <p className="relative text-white/40 text-xs">PS-II Internship | BML Munjal University</p>
      </div>

      {/* Right form */}
      <div className="flex-1 flex items-start justify-center p-6 sm:p-10 bg-gray-50 overflow-y-auto">
        <div className="w-full max-w-lg py-6">
          <div className="lg:hidden mb-6">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-violet-600 flex items-center justify-center">
                <span className="text-white font-bold font-display">E</span>
              </div>
              <span className="font-display font-bold text-gray-900">Entre<span className="gradient-text">Skill</span> Hub</span>
            </Link>
          </div>
          <div className="mb-7">
            <h1 className="font-display font-extrabold text-3xl text-gray-900 mb-2">Create your account</h1>
            <p className="text-gray-500">Already have an account? <Link to="/login" className="text-primary-600 font-semibold hover:underline">Sign in</Link></p>
          </div>

          {errors.form && <div className="mb-5 p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm">⚠️ {errors.form}</div>}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="register-fullname" className="input-label">👤 Full Name</label>
              <input id="register-fullname" type="text" placeholder="Tilak Kumar" value={form.fullName} onChange={handleChange('fullName')} className="input-field" />
              {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
            </div>
            <div>
              <label htmlFor="register-email" className="input-label">✉️ Email Address</label>
              <input id="register-email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange('email')} className="input-field" />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="register-mobile" className="input-label">📱 Mobile Number</label>
              <input id="register-mobile" type="tel" placeholder="10-digit mobile number" value={form.mobile} onChange={handleChange('mobile')} className="input-field" />
              {errors.mobile && <p className="text-xs text-red-500 mt-1">{errors.mobile}</p>}
            </div>
            <div>
              <label htmlFor="register-password" className="input-label">🔒 Password</label>
              <div className="relative">
                <input id="register-password" type={showPw ? 'text' : 'password'} placeholder="Min 8 characters" value={form.password} onChange={handleChange('password')} className="input-field pr-10" />
                <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showPw ? "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" : "M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"} /></svg>
                </button>
              </div>
              <PasswordStrength password={form.password} />
              {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
            </div>
            <div>
              <label htmlFor="register-confirm-password" className="input-label">🔒 Confirm Password</label>
              <div className="relative">
                <input id="register-confirm-password" type={showCpw ? 'text' : 'password'} placeholder="Repeat your password" value={form.confirmPassword} onChange={handleChange('confirmPassword')} className="input-field pr-10" />
                <button type="button" onClick={() => setShowCpw(!showCpw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                </button>
              </div>
              {form.confirmPassword && (
                <p className={`text-xs mt-1 font-medium ${form.password === form.confirmPassword ? 'text-emerald-600' : 'text-red-500'}`}>
                  {form.password === form.confirmPassword ? '✓ Passwords match' : '✗ Passwords do not match'}
                </p>
              )}
              {errors.confirmPassword && <p className="text-xs text-red-500 mt-1">{errors.confirmPassword}</p>}
            </div>
            <button type="submit" id="register-submit-btn" disabled={loading} className="btn-primary w-full py-3.5 text-base mt-2 disabled:opacity-60 disabled:cursor-not-allowed">
              {loading ? (
                <><svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Creating account...</>
              ) : 'Create Account →'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
