const Assessment = require('../models/Assessment');
const SavedRecommendation = require('../models/SavedRecommendation');
const User = require('../models/User');

// @desc    Get user progress summary
// @route   GET /api/progress
// @access  Private
const getUserProgress = async (req, res) => {
  try {
    const userId = req.user._id;

    const user = await User.findById(userId);
    const assessment = await Assessment.findOne({ user: userId });
    const savedIdeas = await SavedRecommendation.countDocuments({ user: userId });

    let completionPercentage = 20; // 20% for creating an account
    
    if (user.skills && user.skills.length > 0) completionPercentage += 10;
    if (assessment) completionPercentage += 30; // 30% for doing assessment
    if (savedIdeas > 0) completionPercentage += 20; // 20% for saving ideas
    // The last 20% is for interacting with mentors or roadmaps (which we'll just mock or leave as 80% if they haven't)
    
    res.json({
      success: true,
      progress: {
        profileCompleted: !!(user.skills && user.skills.length > 0),
        assessmentCompleted: !!assessment,
        savedBusinesses: savedIdeas,
        completionPercentage,
        milestones: [
          { title: 'Account Created', status: 'completed' },
          { title: 'Profile Setup', status: (user.skills && user.skills.length > 0) ? 'completed' : 'pending' },
          { title: 'Skill Assessment', status: assessment ? 'completed' : 'pending' },
          { title: 'Save Business Ideas', status: savedIdeas > 0 ? 'completed' : 'pending' },
          { title: 'Start a Business Roadmap', status: 'pending' },
          { title: 'Connect with a Mentor', status: 'pending' }
        ]
      }
    });

  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error fetching progress' });
  }
};

module.exports = { getUserProgress };
