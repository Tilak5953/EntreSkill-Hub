// Assessment Model
// Developer: Tilak Kumar | BML Munjal University | PS-II Internship

const mongoose = require('mongoose');

const assessmentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    answers: [
      {
        questionId: Number,
        category: String,
        selectedOption: Number,
        score: Number,
      },
    ],
    categoryScores: {
      programming: { type: Number, default: 0 },
      leadership: { type: Number, default: 0 },
      marketing: { type: Number, default: 0 },
      finance: { type: Number, default: 0 },
      communication: { type: Number, default: 0 },
      riskTaking: { type: Number, default: 0 },
      management: { type: Number, default: 0 },
      digitalSkills: { type: Number, default: 0 },
      businessKnowledge: { type: Number, default: 0 },
    },
    overallScore: { type: Number, default: 0 },
    strengths: [String],
    weaknesses: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Assessment', assessmentSchema);
