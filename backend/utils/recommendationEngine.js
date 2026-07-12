// Recommendation Engine — Rule-Based Matching Algorithm
// Developer: Tilak Kumar | BML Munjal University | PS-II Internship
// Matches user profile + assessment strengths against business requirements

/**
 * Score a single business against the user's profile
 * Returns a matchPercentage (0–100)
 */
function scoreBusiness(business, userProfile, assessmentResult) {
  let totalScore = 0;

  // ── 1. SKILL MATCH (30 points) ──────────────────────────────────────────
  const userSkills = (userProfile.skills || []).map((s) => s.toLowerCase());
  const businessSkillTags = (business.suitableFor?.skillTags || []).map((s) =>
    s.toLowerCase()
  );
  const requiredSkills = (business.requiredSkills || []).map((s) => s.toLowerCase());

  const allBusinessSkills = [...new Set([...businessSkillTags, ...requiredSkills])];
  if (allBusinessSkills.length > 0 && userSkills.length > 0) {
    const matches = userSkills.filter((skill) =>
      allBusinessSkills.some((bs) => bs.includes(skill) || skill.includes(bs))
    ).length;
    const skillScore = Math.min(matches / allBusinessSkills.length, 1) * 30;
    totalScore += skillScore;
  } else {
    totalScore += 10; // neutral if no skills declared
  }

  // ── 2. BUDGET MATCH (20 points) ─────────────────────────────────────────
  const userBudget = userProfile.budget || '';
  const suitableBudgets = business.suitableFor?.budgetRange || [];
  if (suitableBudgets.includes(userBudget)) {
    totalScore += 20;
  } else if (suitableBudgets.length === 0) {
    totalScore += 10; // neutral
  } else {
    // Partial credit — check investment range overlap
    const budgetMap = {
      'Under ₹10,000': 10000,
      '₹10,000 – ₹50,000': 50000,
      '₹50,000 – ₹2,00,000': 200000,
      'Above ₹2,00,000': 500000,
    };
    const userBudgetVal = budgetMap[userBudget] || 0;
    if (userBudgetVal >= (business.investment?.min || 0)) {
      totalScore += 10; // partial match
    }
  }

  // ── 3. EDUCATION MATCH (15 points) ──────────────────────────────────────
  const userEdu = userProfile.education || '';
  const suitableEdu = business.suitableFor?.education || [];
  if (suitableEdu.includes(userEdu)) {
    totalScore += 15;
  } else if (suitableEdu.length === 0) {
    totalScore += 7; // neutral
  } else {
    // Partial credit for higher education
    const eduRank = { '10th': 1, '12th': 2, Diploma: 3, Graduate: 4, 'Post-Graduate': 5, PhD: 6, Other: 2 };
    const userRank = eduRank[userEdu] || 0;
    const maxRequired = Math.max(...suitableEdu.map((e) => eduRank[e] || 0));
    if (userRank >= maxRequired) totalScore += 15;
    else if (userRank >= maxRequired - 1) totalScore += 8;
  }

  // ── 4. EXPERIENCE MATCH (15 points) ─────────────────────────────────────
  const userExp = userProfile.experience || '';
  const suitableExp = business.suitableFor?.experience || [];
  if (suitableExp.includes(userExp)) {
    totalScore += 15;
  } else if (suitableExp.length === 0) {
    totalScore += 7;
  } else {
    totalScore += 5; // small credit even if not ideal
  }

  // ── 5. INTEREST MATCH (10 points) ───────────────────────────────────────
  const userInterests = (userProfile.interests || []).map((i) => i.toLowerCase());
  const businessInterests = (business.suitableFor?.interests || []).map((i) => i.toLowerCase());
  if (businessInterests.length > 0 && userInterests.length > 0) {
    const interestMatch = userInterests.some((ui) =>
      businessInterests.some((bi) => bi.includes(ui) || ui.includes(bi))
    );
    if (interestMatch) totalScore += 10;
  } else {
    totalScore += 5;
  }

  // ── 6. ASSESSMENT STRENGTH MATCH (10 points) ────────────────────────────
  if (assessmentResult) {
    const strengths = (assessmentResult.strengths || []).map((s) => s.toLowerCase());
    const categoryMap = {
      'Food & Beverages': ['management', 'marketing'],
      'Technology & IT': ['programming', 'digitalskills', 'management'],
      'Education & Training': ['communication', 'leadership', 'businessknowledge'],
      'Creative Arts': ['communication', 'marketing', 'digitalskills'],
      Retail: ['management', 'finance', 'communication'],
      'Agriculture & Organic': ['management', 'businessknowledge'],
      'Home Services': ['communication', 'management'],
      'Fashion & Lifestyle': ['marketing', 'communication'],
      'E-Commerce': ['digitalskills', 'marketing', 'finance'],
      Consulting: ['communication', 'leadership', 'businessknowledge'],
    };
    const relevantCategories = categoryMap[business.category] || [];
    const strengthMatch = strengths.some((s) =>
      relevantCategories.some((rc) => rc.includes(s) || s.includes(rc))
    );
    if (strengthMatch) totalScore += 10;
    else if (strengths.length === 0) totalScore += 5;
  } else {
    totalScore += 5;
  }

  return Math.min(Math.round(totalScore), 100);
}

/**
 * Main recommendation engine function
 * @param {Object} userProfile - User document from MongoDB
 * @param {Object|null} assessmentResult - Latest assessment or null
 * @param {Array} allBusinesses - All active Recommendation documents
 * @returns {Array} Sorted businesses with matchPercentage
 */
function getRecommendations(userProfile, assessmentResult, allBusinesses) {
  const scored = allBusinesses.map((business) => {
    const matchPercentage = scoreBusiness(business, userProfile, assessmentResult);
    return {
      ...business.toObject(),
      matchPercentage,
    };
  });

  // Sort by matchPercentage descending
  scored.sort((a, b) => b.matchPercentage - a.matchPercentage);

  return scored;
}

module.exports = { getRecommendations };
