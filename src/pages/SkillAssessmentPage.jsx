// SkillAssessmentPage — 25-question quiz connected to real API
// Developer: Tilak Kumar | BML Munjal University | PS-II Internship

import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../utils/api';
import toast from 'react-hot-toast';

const categoryColors = {
  programming: 'from-blue-500 to-cyan-500',
  leadership: 'from-violet-500 to-purple-500',
  marketing: 'from-pink-500 to-rose-500',
  finance: 'from-emerald-500 to-teal-500',
  communication: 'from-amber-500 to-orange-500',
  riskTaking: 'from-red-500 to-rose-600',
  management: 'from-indigo-500 to-blue-600',
  digitalSkills: 'from-primary-500 to-violet-500',
  businessKnowledge: 'from-teal-500 to-emerald-600',
};

const categoryLabels = {
  programming: 'Programming & Tech',
  leadership: 'Leadership',
  marketing: 'Marketing',
  finance: 'Finance',
  communication: 'Communication',
  riskTaking: 'Risk Taking',
  management: 'Management',
  digitalSkills: 'Digital Skills',
  businessKnowledge: 'Business Knowledge',
};

function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-violet-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm font-display">E</span>
          </div>
          <span className="font-display font-bold text-gray-900 text-base">Entre<span className="gradient-text">Skill</span> Hub</span>
        </Link>
        <Link to="/dashboard" className="btn-ghost text-sm">← Dashboard</Link>
      </div>
    </header>
  );
}

// Results view after submission
function Results({ result, onRetake }) {
  const navigate = useNavigate();
  const sorted = Object.entries(result.categoryScores).sort((a, b) => b[1] - a[1]);
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <span className="section-tag mb-3">Assessment Complete</span>
        <h1 className="font-display font-extrabold text-3xl text-gray-900 mb-2">Your Results</h1>
      </div>

      {/* Score circle */}
      <div className="card p-8 text-center mb-6">
        <div className="relative w-36 h-36 mx-auto mb-4">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="52" fill="none" stroke="#f1f5f9" strokeWidth="10" />
            <circle cx="60" cy="60" r="52" fill="none" stroke="url(#grad)" strokeWidth="10" strokeLinecap="round" strokeDasharray={`${(result.overallScore / 100) * 327} 327`} />
            <defs><linearGradient id="grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#6366f1" /><stop offset="100%" stopColor="#8b5cf6" /></linearGradient></defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-display font-extrabold text-3xl text-gray-900">{result.overallScore}</span>
            <span className="text-xs text-gray-400">/ 100</span>
          </div>
        </div>
        <h2 className="font-display font-bold text-xl text-gray-900 mb-1">Overall Score</h2>
        <p className="text-gray-500 text-sm">Based on 25 questions across 9 categories</p>
      </div>

      {/* Category scores */}
      <div className="card p-6 mb-6">
        <h3 className="font-display font-bold text-base text-gray-900 mb-4">Category Breakdown</h3>
        <div className="space-y-3">
          {sorted.map(([cat, score]) => (
            <div key={cat}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-700">{categoryLabels[cat]}</span>
                <span className="font-bold text-gray-500">{score}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className={`h-full rounded-full bg-gradient-to-r ${categoryColors[cat]}`} style={{ width: `${score}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strengths & Weaknesses */}
      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <div className="card p-5">
          <h3 className="font-bold text-sm text-emerald-700 mb-3">💪 Top Strengths</h3>
          <div className="space-y-2">
            {result.strengths.map((s) => (
              <span key={s} className="inline-block bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold px-3 py-1 rounded-full mr-2 mb-1">{s}</span>
            ))}
          </div>
        </div>
        <div className="card p-5">
          <h3 className="font-bold text-sm text-amber-700 mb-3">📈 Areas to Improve</h3>
          <div className="space-y-2">
            {result.weaknesses.map((w) => (
              <span key={w} className="inline-block bg-amber-50 text-amber-700 border border-amber-200 text-xs font-semibold px-3 py-1 rounded-full mr-2 mb-1">{w}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <button onClick={() => navigate('/recommendations')} className="btn-primary flex-1 py-3">
          View Business Recommendations →
        </button>
        <button onClick={onRetake} className="btn-secondary flex-1 py-3">Retake Assessment</button>
      </div>
    </div>
  );
}

export default function SkillAssessmentPage() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    api.get('/assessment/questions')
      .then((res) => setQuestions(res.data.questions))
      .catch(() => toast.error('Failed to load questions. Please try again.'))
      .finally(() => setLoading(false));
  }, []);

  const selectAnswer = (optionIndex) => {
    setAnswers((p) => ({ ...p, [questions[current].id]: optionIndex }));
  };

  const handleSubmit = async () => {
    const answersArray = Object.entries(answers).map(([questionId, selectedOption]) => ({
      questionId: parseInt(questionId),
      selectedOption,
    }));
    if (answersArray.length < questions.length) {
      toast.error('Please answer all questions before submitting');
      return;
    }
    setSubmitting(true);
    try {
      const res = await api.post('/assessment/submit', { answers: answersArray });
      setResult(res.data.assessment);
      toast.success('Assessment submitted! Here are your results 🎯');
    } catch {
      toast.error('Failed to submit assessment. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleRetake = () => { setResult(null); setAnswers({}); setCurrent(0); };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mb-4" />
            <p className="text-gray-500">Loading assessment questions...</p>
          </div>
        </div>
      </div>
    );
  }

  if (result) return <div className="min-h-screen bg-gray-50"><Header /><Results result={result} onRetake={handleRetake} /></div>;

  const q = questions[current];
  const progress = Math.round((current / questions.length) * 100);
  const answered = answers[q?.id] !== undefined;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="section-tag mb-3">Skill Assessment</span>
          <h1 className="font-display font-extrabold text-2xl text-gray-900">
            Question {current + 1} <span className="text-gray-400 font-normal">of {questions.length}</span>
          </h1>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between text-xs text-gray-400 mb-2">
            <span>{current + 1} of {questions.length} questions</span>
            <span>{progress}% complete</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full rounded-full bg-gradient-to-r from-primary-500 to-violet-500 transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Question card */}
        <div className="card p-8 mb-6">
          <div className="flex items-center gap-2 mb-5">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${categoryColors[q?.category]} text-white`}>
              {categoryLabels[q?.category]}
            </span>
          </div>
          <h2 className="font-display font-bold text-lg text-gray-900 mb-6 leading-relaxed">{q?.question}</h2>
          <div className="space-y-3">
            {q?.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => selectAnswer(i)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 text-sm font-medium ${
                  answers[q.id] === i
                    ? 'border-primary-500 bg-primary-50 text-primary-800 shadow-sm'
                    : 'border-gray-100 bg-white text-gray-700 hover:border-gray-200 hover:bg-gray-50'
                }`}
              >
                <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold mr-3 ${answers[q.id] === i ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-500'}`}>{i + 1}</span>
                {opt.text}
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between gap-4">
          <button
            onClick={() => setCurrent((p) => Math.max(0, p - 1))}
            disabled={current === 0}
            className="btn-secondary px-6 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            ← Previous
          </button>
          {current < questions.length - 1 ? (
            <button
              onClick={() => { if (!answered) { toast.error('Please select an answer first'); return; } setCurrent((p) => p + 1); }}
              className="btn-primary px-8"
            >
              Next →
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={submitting || !answered}
              className="btn-primary px-8 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Submitting...</>
              ) : 'Submit Assessment 🎯'}
            </button>
          )}
        </div>

        {/* Answered count */}
        <p className="text-center text-xs text-gray-400 mt-4">{Object.keys(answers).length} of {questions.length} answered</p>
      </main>
    </div>
  );
}
