const LearningResource = require('../models/LearningResource');
const learningResourcesData = require('../data/learningResources');

// @desc    Get all learning resources
// @route   GET /api/learning
// @access  Public
const getLearningResources = async (req, res) => {
  try {
    const resources = await LearningResource.find({ isActive: true });
    res.json({ success: true, count: resources.length, resources });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error fetching learning resources' });
  }
};

// @desc    Seed learning resources into MongoDB
// @route   GET /api/learning/seed
// @access  Public
const seedLearningResources = async (req, res) => {
  try {
    let insertedCount = 0;
    for (const resource of learningResourcesData) {
      const exists = await LearningResource.findOne({ title: resource.title });
      if (!exists) {
        await LearningResource.create(resource);
        insertedCount++;
      }
    }
    res.json({ success: true, message: 'Learning resources seeded', insertedCount });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error while seeding learning resources' });
  }
};

module.exports = { getLearningResources, seedLearningResources };
