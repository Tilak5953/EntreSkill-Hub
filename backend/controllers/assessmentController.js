// Assessment Controller
// Developer: Tilak Kumar | BML Munjal University | PS-II Internship

const Assessment = require('../models/Assessment');
const questions = require('../data/questions');

// @desc    Get all assessment questions
// @route   GET /api/assessment/questions
// @access  Private
const getQuestions = async (req, res) => {
  try {
    res.json({ success: true, count: questions.length, questions });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error fetching questions' });
  }
};

// @desc    Submit assessment answers and compute scores
// @route   POST /api/assessment/submit
// @access  Private
const submitAssessment = async (req, res) => {
  try {
    const { answers } = req.body; // [{ questionId, selectedOption }]

    if (!answers || !Array.isArray(answers) || answers.length === 0) {
      return res.status(400).json({ success: false, message: 'Answers array is required' });
    }

    // Map questionId -> question for quick lookup
    const questionMap = {};
    questions.forEach((q) => { questionMap[q.id] = q; });

    // Build processed answers with category and score
    const processedAnswers = [];
    const categoryTotals = {};
    const categoryCounts = {};

    answers.forEach(({ questionId, selectedOption }) => {
      const question = questionMap[questionId];
      if (!question) return;

      const option = question.options[selectedOption];
      if (!option) return;

      const score = option.score;
      const category = question.category;

      processedAnswers.push({ questionId, category, selectedOption, score });

      if (!categoryTotals[category]) {
        categoryTotals[category] = 0;
        categoryCounts[category] = 0;
      }
      categoryTotals[category] += score;
      categoryCounts[category]++;
    });

    // Calculate average score per category (1–4 scale → convert to 0–100)
    const categoryScores = {};
    const categories = ['programming', 'leadership', 'marketing', 'finance', 'communication', 'riskTaking', 'management', 'digitalSkills', 'businessKnowledge'];

    categories.forEach((cat) => {
      if (categoryTotals[cat] !== undefined) {
        const avg = categoryTotals[cat] / categoryCounts[cat]; // 1–4
        categoryScores[cat] = Math.round(((avg - 1) / 3) * 100); // convert to 0–100
      } else {
        categoryScores[cat] = 0;
      }
    });

    // Overall score (weighted average of all category scores)
    const overallScore = Math.round(
      Object.values(categoryScores).reduce((sum, s) => sum + s, 0) / categories.length
    );

    // Determine strengths (top 3) and weaknesses (bottom 3)
    const sorted = Object.entries(categoryScores).sort((a, b) => b[1] - a[1]);
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

    const strengths = sorted.slice(0, 3).map(([cat]) => categoryLabels[cat]);
    const weaknesses = sorted.slice(-3).map(([cat]) => categoryLabels[cat]);

    // Upsert: update existing or create new assessment for this user
    const assessment = await Assessment.findOneAndUpdate(
      { user: req.user._id },
      {
        user: req.user._id,
        answers: processedAnswers,
        categoryScores,
        overallScore,
        strengths,
        weaknesses,
      },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    res.json({
      success: true,
      message: 'Assessment submitted successfully',
      assessment,
    });
  } catch (error) {
    console.error('Assessment submit error:', error);
    res.status(500).json({ success: false, message: 'Server error while submitting assessment' });
  }
};

// @desc    Get latest assessment result for logged-in user
// @route   GET /api/assessment/result
// @access  Private
const getAssessmentResult = async (req, res) => {
  try {
    const assessment = await Assessment.findOne({ user: req.user._id }).sort({ createdAt: -1 });
    if (!assessment) {
      return res.status(404).json({ success: false, message: 'No assessment found. Please complete the assessment first.' });
    }
    res.json({ success: true, assessment });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error fetching assessment result' });
  }
};

module.exports = { getQuestions, submitAssessment, getAssessmentResult };
