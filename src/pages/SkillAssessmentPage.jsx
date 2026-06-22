// SkillAssessmentPage.jsx
// Skill assessment form - collects user details for business recommendation
// This is a core functional module of EntreSkill Hub
// Built by Tilak Kumar | BML Munjal University | Unified Mentor PS-II

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const skillOptions = [
  'Web Development', 'Graphic Design', 'Content Writing', 'Photography',
  'Cooking / Baking', 'Tailoring / Fashion', 'Teaching / Tutoring',
  'Digital Marketing', 'Video Editing', 'Handicrafts', 'Mobile Repair',
  'Beauty & Salon', 'Farming / Agriculture', 'Accounting', 'Other',
];

const experienceLevels = [
  { value: 'beginner', label: 'Beginner (0-1 years)', desc: 'Just getting started' },
  { value: 'intermediate', label: 'Intermediate (1-3 years)', desc: 'Some practical experience' },
  { value: 'advanced', label: 'Advanced (3-5 years)', desc: 'Experienced professional' },
  { value: 'expert', label: 'Expert (5+ years)', desc: 'Industry-level expertise' },
];

const budgetRanges = [
  { value: 'under-10k', label: 'Under ₹10,000', desc: 'Micro startup' },
  { value: '10k-50k', label: '₹10,000 - ₹50,000', desc: 'Small business' },
  { value: '50k-2l', label: '₹50,000 - ₹2,00,000', desc: 'Medium investment' },
  { value: 'above-2l', label: 'Above ₹2,00,000', desc: 'Larger venture' },
];

const interestAreas = [
  'Food & Beverages', 'Fashion & Lifestyle', 'Education & Training',
  'Technology & IT', 'Health & Wellness', 'Home Services',
  'Creative Arts', 'E-Commerce', 'Agriculture & Organic', 'Consulting',
];

export default function SkillAssessmentPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    primarySkill: '',
    experienceLevel: '',
    budgetRange: '',
    areaOfInterest: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required.';
    if (!form.primarySkill) errs.primarySkill = 'Please select your primary skill.';
    if (!form.experienceLevel) errs.experienceLevel = 'Please select your experience level.';
    if (!form.budgetRange) errs.budgetRange = 'Please select a budget range.';
    if (!form.areaOfInterest) errs.areaOfInterest = 'Please select an area of interest.';
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
    await new Promise((r) => setTimeout(r, 2000));
    setLoading(false);
    navigate('/dashboard');
  };

  // count filled fields for progress
  const filledCount = Object.values(form).filter((v) => v.trim() !== '').length;
  const progressPercent = Math.round((filledCount / 5) * 100);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-violet-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm font-display">E</span>
            </div>
            <span className="font-display font-bold text-gray-900 text-base">
              Entre<span className="gradient-text">Skill</span> Hub
            </span>
          </Link>
          <Link to="/" className="btn-ghost text-sm">
            ← Back to Home
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 lg:py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="section-tag mb-4">Module 1 — Skill Assessment</span>
          <h1 className="font-display font-extrabold text-3xl lg:text-4xl text-gray-900 mb-3">
            Tell Us About Your <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Complete this assessment to get personalised business recommendations
            matched to your skill set, experience, and available resources.
          </p>
        </div>

        {/* Progress bar */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">Form Progress</span>
            <span className="text-sm font-bold text-primary-600">{filledCount} of 5 fields</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary-500 to-violet-500 transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-8 lg:p-10">
            <form onSubmit={handleSubmit} noValidate id="assessment-form" className="space-y-7">

              {/* Name */}
              <div>
                <label htmlFor="assess-name" className="input-label flex items-center gap-2">
                  <span className="text-base">👤</span> Your Name
                </label>
                <input
                  id="assess-name"
                  type="text"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange('name')}
                  className="input-field"
                  required
                />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>

              {/* Primary Skill */}
              <div>
                <label htmlFor="assess-skill" className="input-label flex items-center gap-2">
                  <span className="text-base">🧠</span> Primary Skill
                </label>
                <select
                  id="assess-skill"
                  value={form.primarySkill}
                  onChange={handleChange('primarySkill')}
                  className="input-field appearance-none cursor-pointer"
                  required
                >
                  <option value="">Select your main skill</option>
                  {skillOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.primarySkill && <p className="text-xs text-red-500 mt-1">{errors.primarySkill}</p>}
              </div>

              {/* Experience Level */}
              <div>
                <label className="input-label flex items-center gap-2 mb-3">
                  <span className="text-base">📈</span> Experience Level
                </label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {experienceLevels.map((lvl) => (
                    <label
                      key={lvl.value}
                      className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                        form.experienceLevel === lvl.value
                          ? 'border-primary-500 bg-primary-50 shadow-sm'
                          : 'border-gray-100 hover:border-gray-200 bg-white'
                      }`}
                    >
                      <input
                        type="radio"
                        name="experienceLevel"
                        value={lvl.value}
                        checked={form.experienceLevel === lvl.value}
                        onChange={handleChange('experienceLevel')}
                        className="mt-0.5 text-primary-600 focus:ring-primary-500"
                      />
                      <div>
                        <div className="text-sm font-semibold text-gray-800">{lvl.label}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{lvl.desc}</div>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.experienceLevel && <p className="text-xs text-red-500 mt-1">{errors.experienceLevel}</p>}
              </div>

              {/* Budget Range */}
              <div>
                <label className="input-label flex items-center gap-2 mb-3">
                  <span className="text-base">💰</span> Available Budget
                </label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {budgetRanges.map((b) => (
                    <label
                      key={b.value}
                      className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                        form.budgetRange === b.value
                          ? 'border-primary-500 bg-primary-50 shadow-sm'
                          : 'border-gray-100 hover:border-gray-200 bg-white'
                      }`}
                    >
                      <input
                        type="radio"
                        name="budgetRange"
                        value={b.value}
                        checked={form.budgetRange === b.value}
                        onChange={handleChange('budgetRange')}
                        className="mt-0.5 text-primary-600 focus:ring-primary-500"
                      />
                      <div>
                        <div className="text-sm font-semibold text-gray-800">{b.label}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{b.desc}</div>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.budgetRange && <p className="text-xs text-red-500 mt-1">{errors.budgetRange}</p>}
              </div>

              {/* Area of Interest */}
              <div>
                <label htmlFor="assess-interest" className="input-label flex items-center gap-2">
                  <span className="text-base">🎯</span> Area of Interest
                </label>
                <select
                  id="assess-interest"
                  value={form.areaOfInterest}
                  onChange={handleChange('areaOfInterest')}
                  className="input-field appearance-none cursor-pointer"
                  required
                >
                  <option value="">Select your preferred business area</option>
                  {interestAreas.map((a) => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>
                {errors.areaOfInterest && <p className="text-xs text-red-500 mt-1">{errors.areaOfInterest}</p>}
              </div>

              {/* Submit */}
              <div className="pt-3">
                <button
                  type="submit"
                  id="assessment-submit-btn"
                  disabled={loading}
                  className="btn-primary w-full py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {loading ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Analysing your skills...
                    </>
                  ) : (
                    <>
                      Submit Assessment
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Demo disclaimer */}
          <p className="text-center text-xs text-gray-400 mt-6">
            This is a prototype form for academic demonstration. Backend recommendation engine is under development.
          </p>
        </div>
      </main>
    </div>
  );
}
