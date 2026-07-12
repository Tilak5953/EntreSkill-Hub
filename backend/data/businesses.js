// Business Recommendations Data — 25 entries
// Developer: Tilak Kumar | BML Munjal University | PS-II Internship
// Realistic Indian market data for the recommendation engine

const businesses = [
  {
    name: 'Grocery Store',
    description:
      'A neighbourhood grocery store selling daily essentials like grains, spices, dairy, and household items. With the right location and a loyal customer base, this is one of the most stable businesses in India.',
    category: 'Retail',
    investment: { min: 100000, max: 500000, display: '₹1,00,000 – ₹5,00,000' },
    riskLevel: 'Low',
    profitPotential: '₹20,000 – ₹80,000/month',
    requiredSkills: ['Inventory Management', 'Customer Service', 'Basic Accounting'],
    advantages: [
      'Consistent daily demand',
      'Relatively low startup risk',
      'Easy to scale by adding more products',
      'Can add home delivery to increase sales',
    ],
    challenges: [
      'High competition from supermarkets and quick-commerce apps',
      'Thin profit margins on individual items',
      'Requires long working hours',
    ],
    successTips: [
      'Choose a location in a densely populated area with less competition',
      'Offer home delivery via WhatsApp orders',
      'Maintain a credit register for regular customers to build loyalty',
    ],
    growthPotential:
      'Can grow into a supermarket, add private-label products, or partner with Jiomart/Blinkit.',
    futureScope:
      'The Indian grocery retail market is expected to reach ₹60 lakh crore by 2025. Online integration offers huge scope.',
    suitableFor: {
      education: ['10th', '12th', 'Diploma', 'Graduate'],
      experience: ['Beginner', 'Intermediate'],
      budgetRange: ['₹50,000 – ₹2,00,000', 'Above ₹2,00,000'],
      skillTags: ['retail', 'customer service', 'inventory', 'management'],
      interests: ['Food & Beverages', 'Home Services'],
    },
  },
  {
    name: 'Restaurant',
    description:
      'A sit-down restaurant serving regional or multi-cuisine food. Success depends on food quality, ambience, and location. In India, the food service industry is growing rapidly across all tiers.',
    category: 'Food & Beverages',
    investment: { min: 300000, max: 2000000, display: '₹3,00,000 – ₹20,00,000' },
    riskLevel: 'High',
    profitPotential: '₹50,000 – ₹3,00,000/month',
    requiredSkills: ['Cooking', 'Food Safety', 'Staff Management', 'Customer Service', 'Marketing'],
    advantages: [
      'High earning potential with good footfall',
      'Can become a brand and expand to multiple outlets',
      'Zomato/Swiggy integration boosts revenue significantly',
    ],
    challenges: [
      'High initial investment and operating costs',
      'Requires FSSAI license and other compliance',
      'Very competitive market',
      'Staff management is complex',
    ],
    successTips: [
      'Start with a focused menu (5–10 items) and master it',
      'List on food delivery apps from day one',
      'Invest in interior design for a great customer experience',
      'Train staff well and create SOPs for consistency',
    ],
    growthPotential: 'Can expand to cloud kitchen model, franchise, or chain of outlets.',
    futureScope: "India's food service industry is projected to grow to ₹5.99 lakh crore by 2025.",
    suitableFor: {
      education: ['12th', 'Diploma', 'Graduate'],
      experience: ['Intermediate', 'Advanced', 'Expert'],
      budgetRange: ['Above ₹2,00,000'],
      skillTags: ['cooking', 'food', 'management', 'hospitality'],
      interests: ['Food & Beverages'],
    },
  },
  {
    name: 'Tea Stall / Chai Point',
    description:
      'A small tea and snacks stall positioned near offices, colleges, or markets. Low investment, daily cash flow, and high repeat customers make this a reliable micro-business.',
    category: 'Food & Beverages',
    investment: { min: 5000, max: 50000, display: '₹5,000 – ₹50,000' },
    riskLevel: 'Low',
    profitPotential: '₹15,000 – ₹40,000/month',
    requiredSkills: ['Basic Cooking', 'Customer Service'],
    advantages: [
      'Very low startup cost',
      'High daily turnover with repeat customers',
      'Simple operations requiring minimal staff',
      'Can add snacks and meals to increase revenue',
    ],
    challenges: [
      'Seasonal variations in sales',
      'Physical labour intensive',
      'Weather dependent (outdoor setups)',
    ],
    successTips: [
      'Position near a college, office complex, or busy market',
      'Keep the stall clean to attract more customers',
      'Offer special teas (ginger, masala, kadak) to differentiate',
    ],
    growthPotential: 'Can grow into a branded chai cafe or franchise model like Chaayos or MBA Chai Wala.',
    futureScope:
      'The Indian tea market is worth ₹14,000 crore and growing. Branded chai cafes are booming.',
    suitableFor: {
      education: ['10th', '12th', 'Graduate'],
      experience: ['Beginner'],
      budgetRange: ['Under ₹10,000', '₹10,000 – ₹50,000'],
      skillTags: ['cooking', 'food', 'customer service'],
      interests: ['Food & Beverages'],
    },
  },
  {
    name: 'Coaching Centre',
    description:
      'An educational coaching centre for school students, competitive exam aspirants, or skill-based courses. With India\'s massive demand for quality education, this is a high-potential business.',
    category: 'Education & Training',
    investment: { min: 30000, max: 300000, display: '₹30,000 – ₹3,00,000' },
    riskLevel: 'Low',
    profitPotential: '₹30,000 – ₹2,00,000/month',
    requiredSkills: ['Teaching', 'Subject Expertise', 'Communication', 'Marketing'],
    advantages: [
      'High demand throughout the year',
      'Can be started from home',
      'Scalable with more batches and subjects',
      'Can expand online via YouTube or recorded courses',
    ],
    challenges: [
      'Building reputation takes time',
      'Student results directly affect reputation',
      'Competition from established coaching brands',
    ],
    successTips: [
      'Specialise in one exam or subject to build expertise',
      'Offer free demo classes to attract students',
      'Use social media to share results and testimonials',
    ],
    growthPotential: 'Can grow into a full institute or pivot to EdTech with online courses.',
    futureScope:
      "India's private coaching market is worth ₹58,000 crore and expected to double by 2027.",
    suitableFor: {
      education: ['Graduate', 'Post-Graduate', 'PhD'],
      experience: ['Beginner', 'Intermediate', 'Advanced'],
      budgetRange: ['Under ₹10,000', '₹10,000 – ₹50,000', '₹50,000 – ₹2,00,000'],
      skillTags: ['teaching', 'education', 'communication', 'leadership'],
      interests: ['Education & Training'],
    },
  },
  {
    name: 'Web Development Agency',
    description:
      'A service-based agency that builds websites and web applications for businesses. India has a massive market of SMEs that need professional websites, offering huge demand for skilled developers.',
    category: 'Technology & IT',
    investment: { min: 10000, max: 100000, display: '₹10,000 – ₹1,00,000' },
    riskLevel: 'Low',
    profitPotential: '₹50,000 – ₹3,00,000/month',
    requiredSkills: ['Web Development', 'UI/UX Design', 'Client Communication', 'Project Management'],
    advantages: [
      'Low overhead — can work from home',
      'High demand from Indian and global clients',
      'Can earn in foreign currency via Upwork or Fiverr',
      'Recurring revenue from website maintenance',
    ],
    challenges: [
      'High competition from freelancers and offshore agencies',
      'Client acquisition requires strong portfolio',
      'Project delays and scope creep are common',
    ],
    successTips: [
      'Build a portfolio with 3–5 demo projects before seeking clients',
      'Specialise in a niche like e-commerce or healthcare websites',
      'Join freelancing platforms alongside building direct clients',
    ],
    growthPotential: 'Can grow into a full-service digital agency with SEO, branding, and app development.',
    futureScope:
      'The Indian IT services market is growing at 8.4% CAGR. Web development demand will only increase.',
    suitableFor: {
      education: ['Diploma', 'Graduate', 'Post-Graduate'],
      experience: ['Intermediate', 'Advanced', 'Expert'],
      budgetRange: ['Under ₹10,000', '₹10,000 – ₹50,000'],
      skillTags: ['web development', 'programming', 'coding', 'design', 'technology'],
      interests: ['Technology & IT'],
    },
  },
  {
    name: 'Software Company',
    description:
      'A company that builds custom software products or SaaS solutions for businesses. High investment and expertise required, but also the highest earning potential in the tech space.',
    category: 'Technology & IT',
    investment: { min: 200000, max: 2000000, display: '₹2,00,000 – ₹20,00,000' },
    riskLevel: 'High',
    profitPotential: '₹1,00,000 – ₹20,00,000+/month',
    requiredSkills: ['Software Development', 'Product Management', 'Sales', 'Team Leadership'],
    advantages: [
      'Extremely high earning potential',
      'Scalable globally with minimal extra cost',
      'Recurring SaaS revenue is very stable',
    ],
    challenges: [
      'High initial investment in talent and infrastructure',
      'Long sales cycles for B2B clients',
      'Requires strong technical and business expertise',
    ],
    successTips: [
      'Start with a specific pain point in a niche industry',
      'Build an MVP and validate with 5 paying customers first',
      'Focus on B2B for more stable revenue',
    ],
    growthPotential: 'Unlimited — can raise funding, scale globally, or get acquired.',
    futureScope:
      'The Indian SaaS market is expected to reach $50 billion by 2030 with global customers.',
    suitableFor: {
      education: ['Graduate', 'Post-Graduate'],
      experience: ['Advanced', 'Expert'],
      budgetRange: ['Above ₹2,00,000'],
      skillTags: ['programming', 'software', 'technology', 'management', 'leadership'],
      interests: ['Technology & IT'],
    },
  },
  {
    name: 'Digital Marketing Agency',
    description:
      'An agency helping businesses with SEO, social media marketing, Google Ads, content creation, and online brand building. High demand from SMEs that want to grow online.',
    category: 'Technology & IT',
    investment: { min: 10000, max: 100000, display: '₹10,000 – ₹1,00,000' },
    riskLevel: 'Low',
    profitPotential: '₹40,000 – ₹2,00,000/month',
    requiredSkills: ['Digital Marketing', 'SEO', 'Social Media', 'Content Writing', 'Analytics'],
    advantages: [
      'Very low startup cost',
      'Can work remotely from anywhere',
      'High demand from all types of businesses',
      'Recurring retainer-based revenue',
    ],
    challenges: [
      'Algorithm changes affect strategies frequently',
      'Client retention requires consistent results',
      'Competitive market with many freelancers',
    ],
    successTips: [
      'Get certified in Google Ads and Meta Ads',
      'Start with local businesses and offer free audits',
      'Show ROI with clear reports to retain clients',
    ],
    growthPotential: 'Can grow to 20–50 clients with a team, generating consistent monthly retainers.',
    futureScope:
      "India's digital advertising market is projected to reach ₹35,809 crore by 2025.",
    suitableFor: {
      education: ['12th', 'Diploma', 'Graduate', 'Post-Graduate'],
      experience: ['Beginner', 'Intermediate', 'Advanced'],
      budgetRange: ['Under ₹10,000', '₹10,000 – ₹50,000'],
      skillTags: ['digital marketing', 'social media', 'marketing', 'content', 'seo'],
      interests: ['Technology & IT', 'Creative Arts'],
    },
  },
  {
    name: 'Mobile Repair Shop',
    description:
      'A smartphone and electronics repair service. As smartphone penetration grows in India, the demand for affordable local repair shops continues to rise significantly.',
    category: 'Home Services',
    investment: { min: 20000, max: 100000, display: '₹20,000 – ₹1,00,000' },
    riskLevel: 'Low',
    profitPotential: '₹20,000 – ₹60,000/month',
    requiredSkills: ['Electronics Repair', 'Customer Service', 'Basic Accounting'],
    advantages: [
      'High and consistent demand',
      'Can be started with low investment',
      'Quick skill acquisition through short courses',
      'Low competition in smaller cities',
    ],
    challenges: [
      'Sourcing genuine spare parts is difficult',
      'Technical skills need regular updating',
      'Warranty claims can hurt profits',
    ],
    successTips: [
      'Build relationships with reliable spare parts suppliers',
      'Offer a warranty on repairs to build trust',
      'Add accessories sales (covers, chargers) to increase revenue',
    ],
    growthPotential: 'Can expand to multiple locations or add laptop repair and smart home device services.',
    futureScope:
      'India has 750+ million smartphone users and the repair market is growing at 12% CAGR.',
    suitableFor: {
      education: ['10th', '12th', 'Diploma'],
      experience: ['Beginner', 'Intermediate'],
      budgetRange: ['₹10,000 – ₹50,000', '₹50,000 – ₹2,00,000'],
      skillTags: ['electronics', 'repair', 'technical', 'customer service'],
      interests: ['Home Services', 'Technology & IT'],
    },
  },
  {
    name: 'Cyber Cafe / Computer Centre',
    description:
      'A facility offering computer access, internet, printing, scanning, and government portal form-filling services. Still highly relevant in semi-urban and rural India.',
    category: 'Home Services',
    investment: { min: 100000, max: 400000, display: '₹1,00,000 – ₹4,00,000' },
    riskLevel: 'Medium',
    profitPotential: '₹15,000 – ₹50,000/month',
    requiredSkills: ['Basic Computer Skills', 'Customer Service', 'Knowledge of Government Portals'],
    advantages: [
      'Steady demand from students and job seekers',
      'Government service facilitation adds extra income',
      'Can add DTP, photocopy, lamination for extra revenue',
    ],
    challenges: [
      'Smartphone adoption is reducing demand for basic computer access',
      'High electricity and internet costs',
      'Equipment maintenance is expensive',
    ],
    successTips: [
      'Offer CSC (Common Service Centre) services for government forms',
      'Add coaching for MS Office and basic computer skills',
      'Partner with local schools for student computer practice sessions',
    ],
    growthPotential: 'Can pivot to a CSC centre or skills training centre with government partnerships.',
    futureScope: 'CSC Digital India programme offers franchise opportunities with government support.',
    suitableFor: {
      education: ['10th', '12th', 'Diploma', 'Graduate'],
      experience: ['Beginner', 'Intermediate'],
      budgetRange: ['₹50,000 – ₹2,00,000', 'Above ₹2,00,000'],
      skillTags: ['computer', 'internet', 'digital', 'customer service'],
      interests: ['Technology & IT', 'Home Services'],
    },
  },
  {
    name: 'Tuition Centre',
    description:
      'A small home-based or rented tuition centre offering academic support to school students. One of the most accessible and recession-proof businesses in India.',
    category: 'Education & Training',
    investment: { min: 5000, max: 50000, display: '₹5,000 – ₹50,000' },
    riskLevel: 'Low',
    profitPotential: '₹15,000 – ₹80,000/month',
    requiredSkills: ['Subject Expertise', 'Teaching', 'Communication', 'Patience'],
    advantages: [
      'Very low startup cost (can start from home)',
      'High demand from parents across all income groups',
      'Flexible working hours',
      'Strong word-of-mouth growth',
    ],
    challenges: [
      'Income is limited by number of students you can teach alone',
      'Results-based reputation — students\' performance affects business',
      'Seasonal peaks (exam season) and lows (summer vacations)',
    ],
    successTips: [
      'Start with 5–10 students and focus on results',
      'Build a strong parent network for referrals',
      'Expand by hiring subject specialists as the centre grows',
    ],
    growthPotential: 'Can scale into a full coaching institute or launch online recorded courses.',
    futureScope:
      "India's private tutoring market is one of the world's largest, valued at ₹1.4 lakh crore.",
    suitableFor: {
      education: ['Graduate', 'Post-Graduate'],
      experience: ['Beginner', 'Intermediate'],
      budgetRange: ['Under ₹10,000', '₹10,000 – ₹50,000'],
      skillTags: ['teaching', 'education', 'communication'],
      interests: ['Education & Training'],
    },
  },
  {
    name: 'Agriculture Startup / Organic Farming',
    description:
      'A modern agriculture venture focused on organic produce, hydroponics, or value-added farm products. Growing consumer demand for organic food creates strong market opportunity.',
    category: 'Agriculture & Organic',
    investment: { min: 50000, max: 500000, display: '₹50,000 – ₹5,00,000' },
    riskLevel: 'Medium',
    profitPotential: '₹20,000 – ₹1,50,000/month',
    requiredSkills: ['Agricultural Knowledge', 'Marketing', 'Supply Chain Management'],
    advantages: [
      'Government subsidies and loans available (PM Kisan, NABARD)',
      'Growing urban demand for organic products',
      'Direct-to-consumer model eliminates middlemen',
    ],
    challenges: [
      'Weather dependency and crop failure risks',
      'Marketing directly to consumers requires effort',
      'Organic certification takes time',
    ],
    successTips: [
      'Join the PM-KISAN scheme and explore NABARD loans',
      'Sell directly on platforms like BigBasket or local organic markets',
      'Get organic certification to charge premium prices',
    ],
    growthPotential: 'Can scale to export, supply to hotels and restaurants, or launch a branded product line.',
    futureScope:
      "India's organic food market is projected to grow at 22% CAGR to reach $3.5 billion by 2025.",
    suitableFor: {
      education: ['10th', '12th', 'Diploma', 'Graduate'],
      experience: ['Beginner', 'Intermediate', 'Advanced'],
      budgetRange: ['₹10,000 – ₹50,000', '₹50,000 – ₹2,00,000', 'Above ₹2,00,000'],
      skillTags: ['farming', 'agriculture', 'organic', 'management'],
      interests: ['Agriculture & Organic'],
    },
  },
  {
    name: 'Cloud Kitchen',
    description:
      'A food delivery-only business operating without a physical dining space. Lower overhead costs compared to a restaurant while tapping into the growing food delivery market via Zomato and Swiggy.',
    category: 'Food & Beverages',
    investment: { min: 50000, max: 200000, display: '₹50,000 – ₹2,00,000' },
    riskLevel: 'Medium',
    profitPotential: '₹30,000 – ₹1,50,000/month',
    requiredSkills: ['Cooking', 'Food Safety', 'Marketing', 'Operations Management'],
    advantages: [
      'Significantly lower overhead vs a restaurant',
      'Can run multiple brands from a single kitchen',
      'Instant access to delivery customers via Zomato/Swiggy',
    ],
    challenges: [
      'High commission charges (25–30%) from delivery platforms',
      'No direct customer relationship — dependent on app ratings',
      'Food quality consistency across high order volumes',
    ],
    successTips: [
      'Start with a niche cuisine (biryani, burgers, healthy bowls)',
      'Focus obsessively on packaging — it affects reviews',
      'Build a loyal WhatsApp customer group for direct orders to reduce commission costs',
    ],
    growthPotential: 'Can operate multiple cuisine brands from the same kitchen and expand to new cities.',
    futureScope:
      "India's cloud kitchen market is expected to reach $2.1 billion by 2024, growing at 12% CAGR.",
    suitableFor: {
      education: ['12th', 'Diploma', 'Graduate', 'Post-Graduate'],
      experience: ['Beginner', 'Intermediate', 'Advanced'],
      budgetRange: ['₹50,000 – ₹2,00,000', 'Above ₹2,00,000'],
      skillTags: ['cooking', 'food', 'marketing', 'management'],
      interests: ['Food & Beverages'],
    },
  },
  {
    name: 'YouTube Channel / Content Creation',
    description:
      'A YouTube channel or multi-platform content business covering education, entertainment, tech reviews, cooking, travel, or any niche with audience demand. Monetised through ads, sponsorships, and merchandise.',
    category: 'Creative Arts',
    investment: { min: 10000, max: 80000, display: '₹10,000 – ₹80,000' },
    riskLevel: 'Medium',
    profitPotential: '₹10,000 – ₹5,00,000+/month',
    requiredSkills: ['Video Editing', 'Content Strategy', 'Scriptwriting', 'SEO', 'Consistency'],
    advantages: [
      'Zero cost to publish — free platform',
      'Passive income once content is published',
      'Can build a global audience from India',
      'Multiple revenue streams: ads, sponsorships, courses, merch',
    ],
    challenges: [
      'Takes 6–18 months to see significant income',
      'Algorithm changes can impact reach significantly',
      'High content demand requires consistency',
    ],
    successTips: [
      'Pick a niche you are passionate about and knowledgeable in',
      'Post consistently (minimum 1–2 videos per week)',
      'Invest in good audio quality — more important than video quality',
      'Cross-promote on Instagram Reels and YouTube Shorts',
    ],
    growthPotential: 'Can become a full media company, launch a podcast, write a book, or sell online courses.',
    futureScope:
      "India is YouTube's largest user base globally. Creator economy is growing rapidly with brand deals.",
    suitableFor: {
      education: ['12th', 'Diploma', 'Graduate', 'Post-Graduate', 'Other'],
      experience: ['Beginner', 'Intermediate', 'Advanced'],
      budgetRange: ['Under ₹10,000', '₹10,000 – ₹50,000'],
      skillTags: ['video editing', 'content', 'creativity', 'digital', 'social media'],
      interests: ['Creative Arts', 'Technology & IT', 'Education & Training'],
    },
  },
  {
    name: 'Graphic Design Studio',
    description:
      'A design studio offering logo design, branding, social media creatives, packaging design, and marketing materials to businesses. High demand from startups and SMEs that need professional branding.',
    category: 'Creative Arts',
    investment: { min: 15000, max: 80000, display: '₹15,000 – ₹80,000' },
    riskLevel: 'Low',
    profitPotential: '₹30,000 – ₹1,50,000/month',
    requiredSkills: ['Graphic Design', 'Adobe Tools', 'Creativity', 'Client Communication'],
    advantages: [
      'Low overhead — laptop and software is all you need',
      'Can work for global clients via Fiverr, 99designs',
      'Recurring work from branding and social media clients',
    ],
    challenges: [
      'Portfolio development takes time',
      'Pricing pressure from cheaper freelancers',
      'Subjective nature of design leads to revision requests',
    ],
    successTips: [
      'Build a strong Behance and Dribbble portfolio',
      'Specialise in a niche like logo design or UI kits',
      'Charge per project not per hour to scale income',
    ],
    growthPotential: 'Can scale to a full-service creative agency with motion graphics, branding, and web design.',
    futureScope:
      "India's graphic design market is growing at 6.8% CAGR, driven by digital content demand.",
    suitableFor: {
      education: ['Diploma', 'Graduate', 'Post-Graduate'],
      experience: ['Beginner', 'Intermediate', 'Advanced'],
      budgetRange: ['Under ₹10,000', '₹10,000 – ₹50,000'],
      skillTags: ['graphic design', 'design', 'creativity', 'art', 'visual'],
      interests: ['Creative Arts'],
    },
  },
  {
    name: 'Clothing / Fashion Store',
    description:
      'A retail clothing store or boutique offering readymade or custom-stitched fashion. Can target women, men, or children depending on location. Online selling on Meesho and Flipkart can supplement physical sales.',
    category: 'Fashion & Lifestyle',
    investment: { min: 100000, max: 500000, display: '₹1,00,000 – ₹5,00,000' },
    riskLevel: 'Medium',
    profitPotential: '₹30,000 – ₹1,50,000/month',
    requiredSkills: ['Fashion Knowledge', 'Customer Service', 'Inventory Management', 'Marketing'],
    advantages: [
      'Festive seasons generate very high revenue',
      'Online + offline selling doubles reach',
      'Custom boutiques have very loyal customer bases',
    ],
    challenges: [
      'Fashion trends change quickly — inventory risk',
      'High competition from fast fashion brands',
      'Seasonal cash flow fluctuations',
    ],
    successTips: [
      'Stock trending and seasonal items based on local preferences',
      'Sell on Meesho, Flipkart, and Instagram simultaneously',
      'Build a WhatsApp group of loyal customers for new arrivals',
    ],
    growthPotential: 'Can launch a private label brand, design collection, or expand to multiple cities.',
    futureScope: "India's fashion industry is projected to reach $115 billion by 2026 with strong online growth.",
    suitableFor: {
      education: ['10th', '12th', 'Diploma', 'Graduate'],
      experience: ['Beginner', 'Intermediate'],
      budgetRange: ['₹50,000 – ₹2,00,000', 'Above ₹2,00,000'],
      skillTags: ['fashion', 'retail', 'customer service', 'inventory'],
      interests: ['Fashion & Lifestyle'],
    },
  },
  {
    name: 'Photography Business',
    description:
      'A professional photography service covering weddings, corporate events, product photography, and portraits. India has a massive wedding and event market that provides consistent demand.',
    category: 'Creative Arts',
    investment: { min: 50000, max: 300000, display: '₹50,000 – ₹3,00,000' },
    riskLevel: 'Low',
    profitPotential: '₹40,000 – ₹2,00,000/month',
    requiredSkills: ['Photography', 'Photo Editing', 'Client Communication', 'Marketing'],
    advantages: [
      'High per-event revenue (weddings: ₹30,000–₹3,00,000)',
      'Creative and fulfilling work',
      'Can build a strong social media portfolio to attract clients',
    ],
    challenges: [
      'High initial investment in camera equipment',
      'Seasonal demand — wedding season is peak, off-season is slow',
      'Competition from amateur photographers',
    ],
    successTips: [
      'Specialise (weddings vs products vs corporate) to build deep expertise',
      'Showcase portfolio on Instagram with good hashtag strategy',
      'Partner with wedding planners and event managers for referrals',
    ],
    growthPotential: 'Can expand to a full production studio with video, reels, and ad-film services.',
    futureScope:
      "India's wedding photography market alone is worth ₹10,000+ crore with growing premium demand.",
    suitableFor: {
      education: ['12th', 'Diploma', 'Graduate'],
      experience: ['Beginner', 'Intermediate', 'Advanced'],
      budgetRange: ['₹10,000 – ₹50,000', '₹50,000 – ₹2,00,000'],
      skillTags: ['photography', 'creative', 'editing', 'visual', 'art'],
      interests: ['Creative Arts', 'Fashion & Lifestyle'],
    },
  },
  {
    name: 'E-Commerce Store',
    description:
      'An online store selling physical or digital products through your own website or via Amazon, Flipkart, and Meesho. One of the most scalable business models in India today.',
    category: 'E-Commerce',
    investment: { min: 20000, max: 200000, display: '₹20,000 – ₹2,00,000' },
    riskLevel: 'Medium',
    profitPotential: '₹20,000 – ₹5,00,000+/month',
    requiredSkills: ['Digital Marketing', 'Inventory Management', 'Customer Service', 'Analytics'],
    advantages: [
      'Can be started from home with a laptop',
      'Access to pan-India customers immediately',
      'Marketplace listings (Amazon/Flipkart) provide free traffic',
      'Highly scalable with the right product',
    ],
    challenges: [
      'Competitive pricing from established sellers',
      'Logistics and return management can be complex',
      'Finding the right product niche takes research',
    ],
    successTips: [
      'Use tools like Jungle Scout or Google Trends to validate products',
      'Start with one product and test before scaling',
      'Run Instagram and Facebook ads to build a brand-direct customer base',
    ],
    growthPotential: 'Can become a multi-brand marketplace, private label, or D2C brand.',
    futureScope:
      "India's e-commerce market is expected to reach $188 billion by 2025 — massive growth ahead.",
    suitableFor: {
      education: ['12th', 'Diploma', 'Graduate', 'Post-Graduate'],
      experience: ['Beginner', 'Intermediate', 'Advanced'],
      budgetRange: ['₹10,000 – ₹50,000', '₹50,000 – ₹2,00,000'],
      skillTags: ['ecommerce', 'digital marketing', 'marketing', 'management', 'sales'],
      interests: ['E-Commerce', 'Fashion & Lifestyle'],
    },
  },
  {
    name: 'Fitness Centre / Gym',
    description:
      'A fitness facility offering gym equipment, personal training, yoga, or Zumba classes. Growing health consciousness and rising disposable income are driving demand in Tier 1 and Tier 2 cities.',
    category: 'Health & Wellness',
    investment: { min: 300000, max: 2000000, display: '₹3,00,000 – ₹20,00,000' },
    riskLevel: 'Medium',
    profitPotential: '₹50,000 – ₹3,00,000/month',
    requiredSkills: ['Fitness Knowledge', 'Management', 'Customer Service', 'Marketing'],
    advantages: [
      'Membership model provides predictable monthly revenue',
      'Strong word-of-mouth when members see results',
      'Additional revenue from personal training and supplements',
    ],
    challenges: [
      'High initial investment in equipment and space',
      'Retention of members beyond 3 months is challenging',
      'Competition from large gym chains',
    ],
    successTips: [
      'Focus on community building and member engagement',
      'Offer free trial weeks to attract new members',
      'Provide specialised classes (CrossFit, Pilates) to differentiate',
    ],
    growthPotential: 'Can franchise, add nutrition counselling, or launch a fitness app.',
    futureScope:
      "India's fitness industry is expected to reach ₹1.1 lakh crore by 2025 with 45% annual growth.",
    suitableFor: {
      education: ['12th', 'Diploma', 'Graduate'],
      experience: ['Intermediate', 'Advanced'],
      budgetRange: ['Above ₹2,00,000'],
      skillTags: ['fitness', 'health', 'wellness', 'management', 'coaching'],
      interests: ['Health & Wellness'],
    },
  },
  {
    name: 'Beauty Salon / Parlour',
    description:
      'A salon offering haircuts, facials, beauty treatments, and bridal makeup. High and consistent demand from women in all cities makes this one of the most stable service businesses.',
    category: 'Fashion & Lifestyle',
    investment: { min: 50000, max: 300000, display: '₹50,000 – ₹3,00,000' },
    riskLevel: 'Low',
    profitPotential: '₹30,000 – ₹1,50,000/month',
    requiredSkills: ['Beauty Skills', 'Customer Service', 'Marketing', 'Hygiene Management'],
    advantages: [
      'Daily walk-in customers provide stable cash flow',
      'Bridal packages are extremely high-value',
      'Can add services (nail art, threading, waxing) to increase revenue',
    ],
    challenges: [
      'Staff training and retention is a challenge',
      'Product costs are significant',
      'Dependent on physical location traffic',
    ],
    successTips: [
      'Get certified from a reputed beauty academy',
      'Specialise in bridal makeup for premium revenue',
      'Build a regular client base with loyalty cards and appointment reminders',
    ],
    growthPotential: 'Can expand to a chain of salons or launch an academy for beauty professionals.',
    futureScope:
      "India's beauty and wellness industry is expected to reach ₹1.5 lakh crore by 2025.",
    suitableFor: {
      education: ['10th', '12th', 'Diploma'],
      experience: ['Beginner', 'Intermediate'],
      budgetRange: ['₹10,000 – ₹50,000', '₹50,000 – ₹2,00,000'],
      skillTags: ['beauty', 'salon', 'fashion', 'customer service'],
      interests: ['Fashion & Lifestyle', 'Health & Wellness'],
    },
  },
  {
    name: 'Event Management Company',
    description:
      'A company organising weddings, corporate events, birthday parties, and social gatherings. India\'s massive event culture and increasing spending on celebrations creates a large addressable market.',
    category: 'Creative Arts',
    investment: { min: 50000, max: 300000, display: '₹50,000 – ₹3,00,000' },
    riskLevel: 'Medium',
    profitPotential: '₹50,000 – ₹3,00,000+/month',
    requiredSkills: ['Project Management', 'Vendor Management', 'Client Communication', 'Creativity', 'Marketing'],
    advantages: [
      'Single events can generate ₹50,000–₹5,00,000 in revenue',
      'Strong referral network from satisfied clients',
      'Can manage multiple events simultaneously with a team',
    ],
    challenges: [
      'Highly dependent on vendor reliability',
      'Cash flow issues if clients delay payments',
      'Stressful last-minute problem-solving required',
    ],
    successTips: [
      'Build a network of reliable vendors (decorators, caterers, photographers)',
      'Ask for 50% advance to manage cash flow',
      'Document every event with photos and videos for portfolio marketing',
    ],
    growthPotential: 'Can specialise in destination weddings, corporate events, or expand to an agency.',
    futureScope:
      "India's event management industry is growing at 16% CAGR, valued at ₹10,000 crore.",
    suitableFor: {
      education: ['12th', 'Diploma', 'Graduate', 'Post-Graduate'],
      experience: ['Intermediate', 'Advanced'],
      budgetRange: ['₹10,000 – ₹50,000', '₹50,000 – ₹2,00,000'],
      skillTags: ['management', 'communication', 'leadership', 'creativity', 'planning'],
      interests: ['Creative Arts', 'Fashion & Lifestyle'],
    },
  },
  {
    name: 'Real Estate Consulting',
    description:
      'A real estate brokerage and consulting service connecting buyers, sellers, and renters of residential and commercial properties. Earn commissions on successful transactions without owning property.',
    category: 'Consulting',
    investment: { min: 10000, max: 100000, display: '₹10,000 – ₹1,00,000' },
    riskLevel: 'Medium',
    profitPotential: '₹30,000 – ₹5,00,000/month',
    requiredSkills: ['Negotiation', 'Communication', 'Local Market Knowledge', 'Marketing'],
    advantages: [
      'No inventory required — earn commission on transactions',
      'Single deal can generate ₹50,000–₹5,00,000',
      'Growing property market with increasing transactions',
    ],
    challenges: [
      'Income is irregular and deal-dependent',
      'Requires building strong local network and trust',
      'High competition from established brokers',
    ],
    successTips: [
      'Get registered with RERA (Real Estate Regulatory Authority)',
      'Focus on a specific locality to become the area expert',
      'Use housing.com and MagicBricks to list properties',
    ],
    growthPotential: 'Can build a team of agents, open an office, and manage rental properties.',
    futureScope:
      "India's real estate market is expected to reach $1 trillion by 2030 with 10% annual growth.",
    suitableFor: {
      education: ['12th', 'Diploma', 'Graduate', 'Post-Graduate'],
      experience: ['Intermediate', 'Advanced', 'Expert'],
      budgetRange: ['Under ₹10,000', '₹10,000 – ₹50,000'],
      skillTags: ['negotiation', 'communication', 'sales', 'marketing'],
      interests: ['Consulting'],
    },
  },
  {
    name: 'Freelance Writing Agency',
    description:
      'A content agency providing blog posts, website copy, social media content, and marketing materials to businesses. High demand from digital-first companies that need quality content at scale.',
    category: 'Creative Arts',
    investment: { min: 5000, max: 30000, display: '₹5,000 – ₹30,000' },
    riskLevel: 'Low',
    profitPotential: '₹20,000 – ₹1,00,000/month',
    requiredSkills: ['Writing', 'Research', 'SEO', 'Content Strategy', 'Client Communication'],
    advantages: [
      'Very low startup cost — just a laptop and internet',
      'Global clients available on Upwork and Fiverr',
      'Scalable by hiring other writers',
    ],
    challenges: [
      'Finding clients initially requires patience',
      'Income depends on consistent workload',
      'Client revisions and scope changes are common',
    ],
    successTips: [
      'Build a niche around a topic you know well (tech, finance, health)',
      'Create writing samples on Medium or a personal blog',
      'Get certified in SEO writing to charge premium rates',
    ],
    growthPotential: 'Can build a full content agency with writers, editors, and SEO specialists.',
    futureScope:
      'The global content marketing industry is worth $600 billion and growing at 16% annually.',
    suitableFor: {
      education: ['12th', 'Graduate', 'Post-Graduate'],
      experience: ['Beginner', 'Intermediate'],
      budgetRange: ['Under ₹10,000'],
      skillTags: ['writing', 'content', 'communication', 'seo', 'creativity'],
      interests: ['Creative Arts', 'Education & Training'],
    },
  },
  {
    name: 'Mobile App Development',
    description:
      'A mobile application development service building iOS and Android apps for businesses. Strong technical skills required but very high earning potential in the growing app economy.',
    category: 'Technology & IT',
    investment: { min: 20000, max: 150000, display: '₹20,000 – ₹1,50,000' },
    riskLevel: 'Low',
    profitPotential: '₹60,000 – ₹5,00,000+/month',
    requiredSkills: ['Mobile Development', 'React Native / Flutter', 'UI/UX', 'Project Management'],
    advantages: [
      'Very high per-project revenue',
      'Can work for global clients in USD',
      'Recurring income from app maintenance contracts',
    ],
    challenges: [
      'Requires advanced technical skills and ongoing learning',
      'Client management and requirement changes are challenging',
      'Long project timelines affect cash flow',
    ],
    successTips: [
      'Build 2–3 demo apps and publish them on the App Store/Play Store',
      'Specialise in one platform (Flutter/React Native) first',
      'Use Toptal or Arc to find premium clients',
    ],
    growthPotential: 'Can build your own app products and monetise them, or build a development studio.',
    futureScope:
      'The global mobile app market is expected to reach $935 billion by 2023. Demand is limitless.',
    suitableFor: {
      education: ['Diploma', 'Graduate', 'Post-Graduate'],
      experience: ['Intermediate', 'Advanced', 'Expert'],
      budgetRange: ['Under ₹10,000', '₹10,000 – ₹50,000'],
      skillTags: ['mobile', 'programming', 'development', 'technology', 'coding'],
      interests: ['Technology & IT'],
    },
  },
  {
    name: 'Interior Design Business',
    description:
      'An interior design consultancy helping homeowners and businesses transform their spaces. High per-project value and growing demand from India\'s expanding middle class and real estate sector.',
    category: 'Home Services',
    investment: { min: 20000, max: 150000, display: '₹20,000 – ₹1,50,000' },
    riskLevel: 'Low',
    profitPotential: '₹50,000 – ₹3,00,000/month',
    requiredSkills: ['Interior Design', '3D Visualisation', 'Client Management', 'Vendor Network'],
    advantages: [
      'High per-project earnings (₹50,000–₹10,00,000 per project)',
      'Strong referral business from satisfied clients',
      'Can operate with low overhead from home initially',
    ],
    challenges: [
      'Building a portfolio takes time',
      'Dependent on client taste and revisions',
      'Material procurement and vendor management is complex',
    ],
    successTips: [
      'Get certified and build a portfolio with 3D renders first',
      'Showcase portfolio on Instagram and Houzz',
      'Build strong relationships with contractors and furniture suppliers',
    ],
    growthPotential: 'Can become a full architecture + design firm or launch a furniture brand.',
    futureScope:
      "India's interior design market is expected to reach ₹29,000 crore by 2025 with rising home ownership.",
    suitableFor: {
      education: ['Diploma', 'Graduate', 'Post-Graduate'],
      experience: ['Intermediate', 'Advanced'],
      budgetRange: ['₹10,000 – ₹50,000', '₹50,000 – ₹2,00,000'],
      skillTags: ['design', 'creativity', 'art', 'management', 'visual'],
      interests: ['Home Services', 'Creative Arts'],
    },
  },
  {
    name: 'Travel Agency',
    description:
      'A travel consultancy and booking agency planning holidays, pilgrimage tours, corporate travel, and adventure trips. Post-COVID, travel demand has surged with revenge tourism driving growth.',
    category: 'Consulting',
    investment: { min: 30000, max: 200000, display: '₹30,000 – ₹2,00,000' },
    riskLevel: 'Medium',
    profitPotential: '₹30,000 – ₹1,50,000/month',
    requiredSkills: ['Travel Knowledge', 'Communication', 'Customer Service', 'Digital Marketing'],
    advantages: [
      'Commission-based model with no inventory required',
      'Growing travel demand from middle-class India',
      'Can specialise in high-margin niches like international or luxury travel',
    ],
    challenges: [
      'Business is vulnerable to external events (COVID, geopolitical issues)',
      'Price comparison sites reduce margins',
      'Client service issues can damage reputation quickly',
    ],
    successTips: [
      'Get IATA accreditation for credibility and better hotel rates',
      'Specialise in a niche (Char Dham, Goa, Europe packages)',
      'Build an Instagram travel account for organic client acquisition',
    ],
    growthPotential: 'Can build a full DMC (Destination Management Company) or travel brand.',
    futureScope:
      "India's travel and tourism market is expected to reach $125 billion by 2027 — massive growth.",
    suitableFor: {
      education: ['12th', 'Diploma', 'Graduate', 'Post-Graduate'],
      experience: ['Beginner', 'Intermediate', 'Advanced'],
      budgetRange: ['Under ₹10,000', '₹10,000 – ₹50,000'],
      skillTags: ['communication', 'marketing', 'customer service', 'management'],
      interests: ['Consulting'],
    },
  },
];

module.exports = businesses;
