// Recommendation Controller
// Developer: Tilak Kumar | BML Munjal University | PS-II Internship

const Recommendation = require('../models/Recommendation');
const Assessment = require('../models/Assessment');
const User = require('../models/User');
const { getRecommendations } = require('../utils/recommendationEngine');
const businessesData = require('../data/businesses');

// @desc    Get personalised recommendations for logged-in user
// @route   GET /api/recommendations
// @access  Private
const getPersonalisedRecommendations = async (req, res) => {
  try {
    const userProfile = await User.findById(req.user._id);
    const assessmentResult = await Assessment.findOne({ user: req.user._id }).sort({ createdAt: -1 });
    const allBusinesses = await Recommendation.find({ isActive: true });

    if (allBusinesses.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No businesses found. Please seed the database first via GET /api/recommendations/seed',
      });
    }

    const recommendations = getRecommendations(userProfile, assessmentResult, allBusinesses);

    res.json({
      success: true,
      count: recommendations.length,
      hasAssessment: !!assessmentResult,
      recommendations,
    });
  } catch (error) {
    console.error('Recommendations error:', error);
    res.status(500).json({ success: false, message: 'Server error fetching recommendations' });
  }
};

// @desc    Get single recommendation by ID
// @route   GET /api/recommendations/:id
// @access  Private
const getRecommendationById = async (req, res) => {
  try {
    const recommendation = await Recommendation.findById(req.params.id);
    if (!recommendation || !recommendation.isActive) {
      return res.status(404).json({ success: false, message: 'Business recommendation not found' });
    }
    res.json({ success: true, recommendation });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// @desc    Seed all 25 businesses into MongoDB (admin utility)
// @route   GET /api/recommendations/seed
// @access  Public (admin utility — no auth required)
const seedRecommendations = async (req, res) => {
  try {
    let insertedCount = 0;
    let skippedCount = 0;

    for (const business of businessesData) {
      const exists = await Recommendation.findOne({ name: business.name });
      if (!exists) {
        await Recommendation.create(business);
        insertedCount++;
      } else {
        skippedCount++;
      }
    }

    res.json({
      success: true,
      message: `Database seeded successfully`,
      insertedCount,
      skippedCount,
      total: businessesData.length,
    });
  } catch (error) {
    console.error('Seed error:', error);
    res.status(500).json({ success: false, message: 'Server error while seeding' });
  }
};

module.exports = { getPersonalisedRecommendations, getRecommendationById, seedRecommendations };
