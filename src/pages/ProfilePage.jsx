// ProfilePage — Edit user profile
// Developer: Tilak Kumar | BML Munjal University | PS-II Internship

import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const INTERESTS = ['Food & Beverages', 'Fashion & Lifestyle', 'Education & Training', 'Technology & IT', 'Health & Wellness', 'Home Services', 'Creative Arts', 'E-Commerce', 'Agriculture & Organic', 'Consulting'];

function Header() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-violet-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm font-display">E</span>
          </div>
          <span className="font-display font-bold text-gray-900 hidden sm:block">Entre<span className="gradient-text">Skill</span> Hub</span>
        </Link>
        <nav className="flex items-center gap-2">
          <Link to="/dashboard" className="btn-ghost text-sm">← Dashboard</Link>
          <button onClick={() => { logout(); navigate('/'); }} className="btn-secondary text-sm px-3 py-2">Logout</button>
        </nav>
      </div>
    </header>
  );
}

export default function ProfilePage() {
  const { user, updateProfile } = useAuth();
  const [form, setForm] = useState({ name: '', mobile: '', education: '', skills: [], interests: [], budget: '', experience: '', location: '' });
  const [skillInput, setSkillInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [profileComplete, setProfileComplete] = useState(false);

  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || '',
        mobile: user.mobile || '',
        education: user.education || '',
        skills: user.skills || [],
        interests: user.interests || [],
        budget: user.budget || '',
        experience: user.experience || '',
        location: user.location || '',
      });
      const filled = [user.education, user.skills?.length, user.interests?.length, user.budget, user.experience, user.location].filter(Boolean).length;
      setProfileComplete(filled >= 5);
    }
  }, [user]);

  const addSkill = () => {
    const trimmed = skillInput.trim();
    if (trimmed && !form.skills.includes(trimmed)) {
      setForm((p) => ({ ...p, skills: [...p.skills, trimmed] }));
    }
    setSkillInput('');
  };

  const removeSkill = (s) => setForm((p) => ({ ...p, skills: p.skills.filter((sk) => sk !== s) }));

  const toggleInterest = (i) => {
    setForm((p) => ({
      ...p,
      interests: p.interests.includes(i) ? p.interests.filter((x) => x !== i) : [...p.interests, i],
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) { toast.error('Name is required'); return; }
    setLoading(true);
    try {
      await updateProfile(form);
      toast.success('Profile updated successfully! ✅');
    } catch {
      toast.error('Failed to update profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-7">
          <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-gray-900">Edit Profile</h1>
          <p className="text-gray-500 text-sm mt-1">A complete profile helps us give you better business recommendations.</p>
        </div>

        {!profileComplete && (
          <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
            <span className="text-xl">⚡</span>
            <div>
              <p className="font-semibold text-amber-800 text-sm">Complete your profile</p>
              <p className="text-amber-700 text-xs mt-0.5">Fill in all sections below to get personalised business recommendations based on your skills, budget, and interests.</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-6">
          {/* Basic Info */}
          <div className="card p-6">
            <h2 className="font-display font-bold text-base text-gray-900 mb-4">Basic Information</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="input-label">👤 Full Name *</label>
                <input type="text" value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} className="input-field" placeholder="Your full name" required />
              </div>
              <div>
                <label className="input-label">✉️ Email Address</label>
                <input type="email" value={user?.email || ''} className="input-field opacity-60 cursor-not-allowed" disabled />
              </div>
              <div>
                <label className="input-label">📱 Mobile Number</label>
                <input type="tel" value={form.mobile} onChange={(e) => setForm((p) => ({ ...p, mobile: e.target.value }))} className="input-field" placeholder="10-digit mobile number" />
              </div>
              <div>
                <label className="input-label">📍 Location (City/State)</label>
                <input type="text" value={form.location} onChange={(e) => setForm((p) => ({ ...p, location: e.target.value }))} className="input-field" placeholder="e.g. Delhi, Haryana" />
              </div>
            </div>
          </div>

          {/* Background */}
          <div className="card p-6">
            <h2 className="font-display font-bold text-base text-gray-900 mb-4">Background</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="input-label">🎓 Education Level</label>
                <select value={form.education} onChange={(e) => setForm((p) => ({ ...p, education: e.target.value }))} className="input-field">
                  <option value="">Select education</option>
                  {['10th', '12th', 'Diploma', 'Graduate', 'Post-Graduate', 'PhD', 'Other'].map((e) => <option key={e} value={e}>{e}</option>)}
                </select>
              </div>
              <div>
                <label className="input-label">📈 Experience Level</label>
                <select value={form.experience} onChange={(e) => setForm((p) => ({ ...p, experience: e.target.value }))} className="input-field">
                  <option value="">Select experience</option>
                  {['Beginner', 'Intermediate', 'Advanced', 'Expert'].map((e) => <option key={e} value={e}>{e}</option>)}
                </select>
              </div>
              <div>
                <label className="input-label">💰 Available Budget</label>
                <select value={form.budget} onChange={(e) => setForm((p) => ({ ...p, budget: e.target.value }))} className="input-field">
                  <option value="">Select budget</option>
                  {['Under ₹10,000', '₹10,000 – ₹50,000', '₹50,000 – ₹2,00,000', 'Above ₹2,00,000'].map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="card p-6">
            <h2 className="font-display font-bold text-base text-gray-900 mb-1">🧠 Your Skills</h2>
            <p className="text-xs text-gray-400 mb-4">Add skills like: Web Development, Cooking, Teaching, Marketing…</p>
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                placeholder="Type a skill and press Enter or Add"
                className="input-field flex-1"
              />
              <button type="button" onClick={addSkill} className="btn-secondary px-4">Add</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {form.skills.map((s) => (
                <span key={s} className="inline-flex items-center gap-1.5 bg-primary-50 text-primary-700 border border-primary-200 text-xs font-semibold px-3 py-1.5 rounded-full">
                  {s}
                  <button type="button" onClick={() => removeSkill(s)} className="hover:text-red-500 transition-colors">✕</button>
                </span>
              ))}
              {form.skills.length === 0 && <p className="text-xs text-gray-400 italic">No skills added yet</p>}
            </div>
          </div>

          {/* Interests */}
          <div className="card p-6">
            <h2 className="font-display font-bold text-base text-gray-900 mb-1">🎯 Business Interests</h2>
            <p className="text-xs text-gray-400 mb-4">Select industries you are interested in building a business in</p>
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map((i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => toggleInterest(i)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium border-2 transition-all duration-200 ${
                    form.interests.includes(i)
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-gray-100 bg-white text-gray-600 hover:border-gray-200'
                  }`}
                >
                  {i}
                </button>
              ))}
            </div>
          </div>

          {/* Save */}
          <div className="flex gap-3">
            <button type="submit" id="profile-save-btn" disabled={loading} className="btn-primary px-10 py-3 disabled:opacity-60 disabled:cursor-not-allowed">
              {loading ? (
                <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Saving...</>
              ) : 'Save Profile ✅'}
            </button>
            <Link to="/dashboard" className="btn-secondary px-6 py-3">Cancel</Link>
          </div>
        </form>
      </main>
    </div>
  );
}
