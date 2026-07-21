// Recommendation Engine — Improved Rule-Based Matching Algorithm
// Developer: Tilak Kumar | BML Munjal University | PS-II Internship
// Matches user profile + assessment strengths against business requirements

/**
 * Score a single business against the user's profile
 * Returns a matchPercentage (0–100)
 */
function scoreBusiness(business, userProfile, assessmentResult) {
  let totalScore = 0;
  let maxPossible = 0;
  let matchedCriteria = 0;
  let totalCriteria = 0;

  // ── 1. SKILL MATCH (30 points) ──────────────────────────────────────────
  const userSkills = (userProfile.skills || []).map((s) => s.toLowerCase().trim());
  const businessSkillTags = (business.suitableFor?.skillTags || []).map((s) =>
    s.toLowerCase().trim()
  );
  const requiredSkills = (business.requiredSkills || []).map((s) => s.toLowerCase().trim());

  const allBusinessSkills = [...new Set([...businessSkillTags, ...requiredSkills])];
  if (allBusinessSkills.length > 0 && userSkills.length > 0) {
    maxPossible += 30;
    totalCriteria++;
    // Check both exact and partial (substring) matching
    const matches = userSkills.filter((skill) =>
      allBusinessSkills.some((bs) => {
        // Exact match
        if (bs === skill) return true;
        // Partial match (one contains the other)
        if (bs.includes(skill) || skill.includes(bs)) return true;
        // Word-level match (e.g., "web development" matches "web")
        const bsWords = bs.split(/\s+/);
        const skillWords = skill.split(/\s+/);
        return bsWords.some((bw) => skillWords.some((sw) => bw === sw && sw.length > 3));
      })
    ).length;
    const ratio = Math.min(matches / Math.min(allBusinessSkills.length, 3), 1);
    const skillScore = ratio * 30;
    totalScore += skillScore;
    if (skillScore >= 15) matchedCriteria++;
  } else if (userSkills.length === 0) {
    // No skills declared — give generous neutral score
    totalScore += 18;
    maxPossible += 30;
    totalCriteria++;
  }

  // ── 2. BUDGET MATCH (20 points) ─────────────────────────────────────────
  const userBudget = userProfile.budget || '';
  const suitableBudgets = business.suitableFor?.budgetRange || [];
  maxPossible += 20;
  totalCriteria++;
  if (suitableBudgets.includes(userBudget)) {
    totalScore += 20;
    matchedCriteria++;
  } else if (suitableBudgets.length === 0 || !userBudget) {
    totalScore += 12; // generous neutral
  } else {
    // Partial credit — check investment range overlap
    const budgetMap = {
      'Under ₹10,000': 10000,
      '₹10,000 – ₹50,000': 50000,
      '₹50,000 – ₹2,00,000': 200000,
      'Above ₹2,00,000': 500000,
    };
    const userBudgetVal = budgetMap[userBudget] || 0;
    const minInvest = business.investment?.min || 0;
    const maxInvest = business.investment?.max || Infinity;

    if (userBudgetVal >= minInvest && userBudgetVal <= maxInvest * 1.5) {
      totalScore += 15; // good partial match
      matchedCriteria++;
    } else if (userBudgetVal >= minInvest * 0.5) {
      totalScore += 10; // reasonable partial match
    } else {
      totalScore += 5;
    }
  }

  // ── 3. EDUCATION MATCH (15 points) ──────────────────────────────────────
  const userEdu = userProfile.education || '';
  const suitableEdu = business.suitableFor?.education || [];
  maxPossible += 15;
  totalCriteria++;
  if (suitableEdu.includes(userEdu)) {
    totalScore += 15;
    matchedCriteria++;
  } else if (suitableEdu.length === 0 || !userEdu) {
    totalScore += 10; // generous neutral
  } else {
    // Partial credit for higher education
    const eduRank = { '10th': 1, '12th': 2, Diploma: 3, Graduate: 4, 'Post-Graduate': 5, PhD: 6, Other: 2 };
    const userRank = eduRank[userEdu] || 0;
    const maxRequired = Math.max(...suitableEdu.map((e) => eduRank[e] || 0));
    if (userRank >= maxRequired) {
      totalScore += 15;
      matchedCriteria++;
    } else if (userRank >= maxRequired - 1) {
      totalScore += 10;
    } else {
      totalScore += 5;
    }
  }

  // ── 4. EXPERIENCE MATCH (15 points) ─────────────────────────────────────
  const userExp = userProfile.experience || '';
  const suitableExp = business.suitableFor?.experience || [];
  maxPossible += 15;
  totalCriteria++;
  if (suitableExp.includes(userExp)) {
    totalScore += 15;
    matchedCriteria++;
  } else if (suitableExp.length === 0 || !userExp) {
    totalScore += 10; // generous neutral
  } else {
    // Give partial credit based on proximity
    const expRank = { Beginner: 1, Intermediate: 2, Advanced: 3, Expert: 4 };
    const userExpRank = expRank[userExp] || 0;
    const expRanks = suitableExp.map((e) => expRank[e] || 0);
    const minExpRequired = Math.min(...expRanks);
    if (userExpRank >= minExpRequired) {
      totalScore += 12;
      matchedCriteria++;
    } else {
      totalScore += 7;
    }
  }

  // ── 5. INTEREST MATCH (10 points) ───────────────────────────────────────
  const userInterests = (userProfile.interests || []).map((i) => i.toLowerCase().trim());
  const businessCategory = (business.category || '').toLowerCase().trim();
  const businessInterests = (business.suitableFor?.interests || []).map((i) => i.toLowerCase().trim());
  maxPossible += 10;
  totalCriteria++;

  if (businessInterests.length > 0 && userInterests.length > 0) {
    const interestMatch = userInterests.some((ui) =>
      businessInterests.some((bi) => bi.includes(ui) || ui.includes(bi))
    );
    // Also check if user interest matches business category
    const categoryMatch = userInterests.some((ui) =>
      businessCategory.includes(ui) || ui.includes(businessCategory)
    );
    if (interestMatch || categoryMatch) {
      totalScore += 10;
      matchedCriteria++;
    } else {
      totalScore += 3;
    }
  } else {
    totalScore += 6; // neutral
  }

  // ── 6. ASSESSMENT STRENGTH MATCH (10 points) ────────────────────────────
  maxPossible += 10;
  totalCriteria++;
  if (assessmentResult) {
    const strengths = (assessmentResult.strengths || []).map((s) => s.toLowerCase().trim());
    const categoryMap = {
      'Food & Beverages': ['management', 'marketing', 'cooking', 'food'],
      'Technology & IT': ['programming', 'digitalskills', 'management', 'technology', 'coding'],
      'Education & Training': ['communication', 'leadership', 'businessknowledge', 'teaching'],
      'Creative Arts': ['communication', 'marketing', 'digitalskills', 'creativity', 'design'],
      Retail: ['management', 'finance', 'communication', 'sales'],
      'Agriculture & Organic': ['management', 'businessknowledge', 'farming'],
      'Home Services': ['communication', 'management', 'technical'],
      'Fashion & Lifestyle': ['marketing', 'communication', 'fashion', 'design'],
      'E-Commerce': ['digitalskills', 'marketing', 'finance', 'ecommerce'],
      Consulting: ['communication', 'leadership', 'businessknowledge', 'negotiation'],
      'Health & Wellness': ['fitness', 'health', 'management', 'coaching'],
    };
    const relevantCategories = categoryMap[business.category] || [];
    const strengthMatch = strengths.some((s) =>
      relevantCategories.some((rc) => rc.includes(s) || s.includes(rc))
    );
    if (strengthMatch) {
      totalScore += 10;
      matchedCriteria++;
    } else if (strengths.length === 0) {
      totalScore += 6;
    } else {
      totalScore += 3;
    }
  } else {
    totalScore += 6; // no assessment — generous neutral
  }

  // Calculate final percentage
  let percentage = Math.round(totalScore);

  // Boost: if user matched on 3+ criteria, add a small bonus
  if (matchedCriteria >= 4) percentage = Math.min(percentage + 10, 100);
  else if (matchedCriteria >= 3) percentage = Math.min(percentage + 5, 100);

  // Ensure minimum spread — add slight randomness based on business name hash
  const hash = business.name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const jitter = (hash % 11) - 5; // -5 to +5
  percentage = Math.max(25, Math.min(percentage + jitter, 100));

  return percentage;
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
