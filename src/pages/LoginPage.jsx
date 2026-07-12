// LoginPage — connected to real auth API
// Developer: Tilak Kumar | BML Munjal University | PS-II Internship

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

function InputField({ id, label, icon, type = 'text', placeholder, value, onChange, extra }) {
  const [show, setShow] = useState(false);
  const isPassword = type === 'password';
  return (
    <div>
      <label htmlFor={id} className="input-label">{icon} {label}</label>
      <div className="relative">
        <input
          id={id}
          type={isPassword ? (show ? 'text' : 'password') : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="input-field pr-10"
          required
        />
        {isPassword && (
          <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
            {show ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            )}
          </button>
        )}
      </div>
      {extra}
    </div>
  );
}

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({ email: '', password: '', remember: false });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setForm((p) => ({ ...p, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) { setError('Please fill in all fields'); return; }
    setLoading(true);
    setError('');
    try {
      await login(form.email, form.password);
      toast.success('Welcome back! 🎉');
      navigate('/dashboard');
    } catch (err) {
      const msg = err.response?.data?.message || 'Login failed. Please try again.';
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left branding panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary-600 via-violet-700 to-purple-700 flex-col justify-between p-12 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full dot-grid opacity-5" />
        </div>
        <div className="relative">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <span className="text-white font-bold text-xl font-display">E</span>
            </div>
            <span className="font-display font-bold text-white text-xl">EntreSkill Hub</span>
          </Link>
        </div>
        <div className="relative">
          <h2 className="font-display font-extrabold text-4xl text-white leading-tight mb-4">
            Welcome back to your <span className="text-yellow-300">startup journey</span>
          </h2>
          <p className="text-white/70 text-lg mb-8">Continue where you left off.</p>
          {[
            { icon: '📊', text: 'View your personalised dashboard' },
            { icon: '🗺️', text: 'Continue your business roadmap' },
            { icon: '🎯', text: 'Explore new recommendations' },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-3 text-white/80 mb-3">
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>
        <p className="relative text-white/40 text-xs">PS-II Internship Project | BML Munjal University</p>
      </div>

      {/* Right form panel */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-8 flex items-center gap-2.5">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-violet-600 flex items-center justify-center">
                <span className="text-white font-bold font-display">E</span>
              </div>
              <span className="font-display font-bold text-gray-900">Entre<span className="gradient-text">Skill</span> Hub</span>
            </Link>
          </div>
          <div className="mb-8">
            <h1 className="font-display font-extrabold text-3xl text-gray-900 mb-2">Sign in</h1>
            <p className="text-gray-500">New here? <Link to="/register" className="text-primary-600 font-semibold hover:underline">Create an account</Link></p>
          </div>

          {error && (
            <div className="mb-5 p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-2 text-red-600 text-sm">
              <span>⚠️</span> {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <InputField id="login-email" label="Email Address" icon="✉️" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange('email')} />
            <InputField
              id="login-password"
              label="Password"
              icon="🔒"
              type="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange('password')}
              extra={
                <div className="flex items-center justify-between mt-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" id="remember-me" checked={form.remember} onChange={(e) => setForm((p) => ({ ...p, remember: e.target.checked }))} className="w-4 h-4 text-primary-600 rounded" />
                    <span className="text-xs text-gray-500">Remember me</span>
                  </label>
                  <a href="#" className="text-xs text-primary-600 hover:underline">Forgot password?</a>
                </div>
              }
            />
            <button type="submit" id="login-submit-btn" disabled={loading} className="btn-primary w-full py-3.5 text-base mt-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0">
              {loading ? (
                <><svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Signing in...</>
              ) : 'Sign In →'}
            </button>
          </form>
          <p className="text-center text-xs text-gray-400 mt-6">Demo account: demo@entreskill.com / password123</p>
        </div>
      </div>
    </div>
  );
}
