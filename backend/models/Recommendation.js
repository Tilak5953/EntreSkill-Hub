// Recommendation Model
// Developer: Tilak Kumar | BML Munjal University | PS-II Internship

const mongoose = require('mongoose');

const recommendationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    investment: {
      min: Number,
      max: Number,
      display: String,
    },
    riskLevel: {
      type: String,
      enum: ['Low', 'Medium', 'High'],
    },
    profitPotential: String,
    requiredSkills: [String],
    advantages: [String],
    challenges: [String],
    successTips: [String],
    growthPotential: String,
    futureScope: String,
    suitableFor: {
      education: [String],
      experience: [String],
      budgetRange: [String],
      skillTags: [String],
      interests: [String],
    },
    roadmap: [
      {
        phase: String,
        duration: String,
        tasks: [String]
      }
    ],
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Recommendation', recommendationSchema);
