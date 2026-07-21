const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '..', 'backend', 'data', 'businesses.js');
let businessesData = require('../backend/data/businesses.js');

const defaultRoadmap = [
  { phase: 'Research & Validation', duration: 'Week 1-2', tasks: ['Conduct local market research', 'Identify target audience', 'Analyze competitors', 'Validate product/service pricing'] },
  { phase: 'Legal & Setup', duration: 'Week 3-4', tasks: ['Register business name', 'Obtain necessary licenses (e.g. FSSAI, GST)', 'Open a current bank account', 'Secure a location or domain name'] },
  { phase: 'Build & Prepare', duration: 'Week 5-6', tasks: ['Procure equipment and initial inventory', 'Set up physical/digital store', 'Hire initial staff if required', 'Set up accounting software'] },
  { phase: 'Launch', duration: 'Week 7-8', tasks: ['Run local or digital launch campaigns', 'Offer launch discounts', 'Onboard first 10 customers', 'Gather initial feedback'] },
  { phase: 'Growth & Marketing', duration: 'Month 3-6', tasks: ['Optimize operations based on feedback', 'Scale marketing spend', 'Build customer loyalty program', 'Establish supply chain reliability'] },
  { phase: 'Scale & Expand', duration: 'Month 6-12', tasks: ['Explore new locations or product lines', 'Hire a manager to delegate operations', 'Automate recurring tasks', 'Focus on brand building'] }
];

// Add roadmap to existing businesses
businessesData = businessesData.map(b => ({
  ...b,
  roadmap: defaultRoadmap
}));

// 15 New Businesses
const newBusinesses = [
  {
    name: 'Logistics & Delivery Agency',
    description: 'A local delivery service for e-commerce, food, and document transport. With the boom in online shopping, last-mile delivery is highly lucrative.',
    category: 'Transportation & Logistics',
    investment: { min: 100000, max: 500000, display: '₹1,00,000 – ₹5,00,000' },
    riskLevel: 'Medium',
    profitPotential: '₹40,000 – ₹2,00,000/month',
    requiredSkills: ['Operations Management', 'Customer Service', 'Route Planning', 'Team Leadership'],
    advantages: ['High demand from local businesses', 'Scalable by adding more vehicles', 'Can partner with Amazon/Flipkart as a delivery partner'],
    challenges: ['High fuel and maintenance costs', 'Driver retention is difficult', 'Strict delivery timelines'],
    successTips: ['Start as an Amazon Delivery Service Partner (DSP)', 'Focus on a specific pin code initially', 'Use route optimization software'],
    growthPotential: 'Can expand to intra-city logistics, cold-chain transport, or fleet management.',
    futureScope: 'India\'s logistics sector is growing at 10-12% CAGR, driven by e-commerce.',
    suitableFor: { education: ['12th', 'Diploma', 'Graduate'], experience: ['Intermediate', 'Advanced'], budgetRange: ['₹50,000 – ₹2,00,000', 'Above ₹2,00,000'], skillTags: ['management', 'operations', 'logistics', 'leadership'], interests: ['Transportation & Logistics', 'Management'] }
  },
  {
    name: 'Real Estate Photography & Virtual Tours',
    description: 'Provide high-quality photos, drone shots, and 360-degree virtual tours for real estate brokers and builders.',
    category: 'Real Estate & Property',
    investment: { min: 50000, max: 200000, display: '₹50,000 – ₹2,00,000' },
    riskLevel: 'Low',
    profitPotential: '₹30,000 – ₹1,50,000/month',
    requiredSkills: ['Photography', 'Video Editing', 'Drone Operation', 'Sales'],
    advantages: ['High profit margins per shoot', 'B2B clients provide recurring business', 'Low overhead costs'],
    challenges: ['Initial equipment cost is high', 'Requires networking with brokers', 'Travel time between shoots'],
    successTips: ['Invest in a good wide-angle lens and 360 camera', 'Offer free first shoots to top local brokers', 'Create short Instagram reels for properties'],
    growthPotential: 'Can expand to architectural photography and corporate video production.',
    futureScope: 'Digital property showcasing is becoming the standard in Indian real estate.',
    suitableFor: { education: ['12th', 'Diploma', 'Graduate'], experience: ['Beginner', 'Intermediate'], budgetRange: ['₹50,000 – ₹2,00,000'], skillTags: ['photography', 'editing', 'visual', 'sales'], interests: ['Creative Arts', 'Real Estate & Property'] }
  },
  {
    name: 'Stock Market Trading & Investing',
    description: 'Day trading, swing trading, and long-term investing in the Indian stock market (NSE/BSE). Requires deep financial knowledge and risk management.',
    category: 'Finance & Insurance',
    investment: { min: 10000, max: 1000000, display: '₹10,000 – ₹10,00,000+' },
    riskLevel: 'High',
    profitPotential: 'Highly Variable',
    requiredSkills: ['Financial Analysis', 'Risk Management', 'Emotional Control', 'Technical Analysis'],
    advantages: ['Can work from anywhere', 'No clients, no boss, no employees', 'Infinite scalability of capital'],
    challenges: ['Very high risk of capital loss', 'Takes years to master', 'High emotional stress'],
    successTips: ['Never trade with borrowed money', 'Start with paper trading for 6 months', 'Strictly follow stop-loss rules'],
    growthPotential: 'Can become a SEBI registered investment advisor or start a proprietary trading desk.',
    futureScope: 'Retail participation in Indian markets is at an all-time high and growing rapidly.',
    suitableFor: { education: ['Graduate', 'Post-Graduate'], experience: ['Advanced', 'Expert'], budgetRange: ['₹50,000 – ₹2,00,000', 'Above ₹2,00,000'], skillTags: ['finance', 'analysis', 'numbers', 'risk management'], interests: ['Finance & Insurance'] }
  },
  {
    name: 'Insurance Agency (POSP)',
    description: 'Become a Point of Sales Person (POSP) to sell life, health, and motor insurance. Zero inventory business with high recurring commissions.',
    category: 'Finance & Insurance',
    investment: { min: 0, max: 10000, display: 'Under ₹10,000' },
    riskLevel: 'Low',
    profitPotential: '₹20,000 – ₹2,00,000/month',
    requiredSkills: ['Sales', 'Communication', 'Networking', 'Persistence'],
    advantages: ['Zero startup cost', 'Recurring renewal commissions for life', 'Flexible working hours'],
    challenges: ['High rejection rate', 'Requires constant networking', 'Takes time to build a solid portfolio'],
    successTips: ['Focus heavily on health insurance post-COVID', 'Leverage your existing family and friend network first', 'Use digital platforms like Mintpro or Turtlemint to sell multiple brands'],
    growthPotential: 'Can build a team of sub-agents and open a full-fledged financial consultancy.',
    futureScope: 'Insurance penetration in India is very low, presenting a massive growth opportunity.',
    suitableFor: { education: ['12th', 'Graduate'], experience: ['Beginner', 'Intermediate'], budgetRange: ['Under ₹10,000'], skillTags: ['sales', 'communication', 'networking', 'finance'], interests: ['Finance & Insurance', 'Consulting'] }
  },
  {
    name: 'Handmade / Artisanal Products',
    description: 'Creating and selling handmade soaps, candles, jewelry, or crafts online via Instagram, Etsy, and Amazon Karigar.',
    category: 'Manufacturing & Production',
    investment: { min: 10000, max: 50000, display: '₹10,000 – ₹50,000' },
    riskLevel: 'Low',
    profitPotential: '₹15,000 – ₹80,000/month',
    requiredSkills: ['Crafting/Production', 'Social Media Marketing', 'Packaging', 'Customer Service'],
    advantages: ['High profit margins', 'Creative satisfaction', 'Can be done part-time from home'],
    challenges: ['Scaling production is difficult manually', 'Shipping fragile items requires care', 'Consistent marketing needed'],
    successTips: ['Focus on premium, aesthetically pleasing packaging', 'Use Instagram Reels to show the "making of" process', 'Collect customer reviews actively'],
    growthPotential: 'Can transition to automated manufacturing and build a D2C brand.',
    futureScope: 'Consumers increasingly prefer unique, organic, and artisanal products over mass-produced goods.',
    suitableFor: { education: ['10th', '12th', 'Graduate'], experience: ['Beginner', 'Intermediate'], budgetRange: ['Under ₹10,000', '₹10,000 – ₹50,000'], skillTags: ['creativity', 'crafting', 'marketing', 'design'], interests: ['Creative Arts', 'Manufacturing & Production'] }
  },
  {
    name: 'Podcast Production Agency',
    description: 'Help experts and brands launch, edit, and market their podcasts. A B2B service in the booming audio entertainment space.',
    category: 'Entertainment & Media',
    investment: { min: 20000, max: 100000, display: '₹20,000 – ₹1,00,000' },
    riskLevel: 'Low',
    profitPotential: '₹40,000 – ₹2,00,000/month',
    requiredSkills: ['Audio Editing', 'Content Strategy', 'Marketing', 'Communication'],
    advantages: ['High retainer fees from corporate clients', 'Low overhead if working remotely', 'Niche skill with low competition'],
    challenges: ['Requires finding experts willing to invest in podcasting', 'Audio editing can be tedious', 'Marketing podcasts is challenging'],
    successTips: ['Offer a "done-for-you" service including cover art and publishing', 'Pitch to founders and CEOs on LinkedIn', 'Create short video clips (reels) from podcast audio for marketing'],
    growthPotential: 'Can grow into a full media network or specialized content marketing agency.',
    futureScope: 'India is the third-largest podcast market globally and growing rapidly.',
    suitableFor: { education: ['Diploma', 'Graduate'], experience: ['Intermediate', 'Advanced'], budgetRange: ['₹10,000 – ₹50,000'], skillTags: ['editing', 'audio', 'content', 'marketing'], interests: ['Entertainment & Media', 'Technology & IT'] }
  },
  {
    name: 'Travel Agency / Tour Operator',
    description: 'Curate and organize travel packages for domestic and international tourists. Focus on niche experiences like trekking, spiritual tours, or luxury honeymoons.',
    category: 'Travel & Tourism',
    investment: { min: 10000, max: 100000, display: '₹10,000 – ₹1,00,000' },
    riskLevel: 'Medium',
    profitPotential: '₹30,000 – ₹3,00,000/month',
    requiredSkills: ['Planning & Organization', 'Sales', 'Networking', 'Crisis Management'],
    advantages: ['Can start as a home-based consultant', 'High commission on flights and hotels', 'Fun and dynamic industry'],
    challenges: ['Highly vulnerable to economic downturns and pandemics', 'Fierce competition from MakeMyTrip/Agoda', 'Dealing with customer emergencies during trips'],
    successTips: ['Focus on a specific niche (e.g., Backpacking in Himalayas or Bali Honeymoons)', 'Build strong relationships with local hoteliers for better rates', 'Use Instagram to showcase beautiful itineraries'],
    growthPotential: 'Can expand to corporate travel management (B2B) or buy own transport fleet.',
    futureScope: 'Post-COVID revenge travel has boosted the industry, with rising demand for personalized experiences.',
    suitableFor: { education: ['12th', 'Graduate'], experience: ['Beginner', 'Intermediate'], budgetRange: ['Under ₹10,000', '₹10,000 – ₹50,000'], skillTags: ['planning', 'sales', 'networking', 'communication'], interests: ['Travel & Tourism'] }
  },
  {
    name: 'Pet Grooming & Boarding',
    description: 'Provide grooming services (washing, styling) and safe boarding for pets while owners travel. A fast-growing urban business.',
    category: 'Pet Care & Animal Services',
    investment: { min: 100000, max: 500000, display: '₹1,00,000 – ₹5,00,000' },
    riskLevel: 'Medium',
    profitPotential: '₹40,000 – ₹1,50,000/month',
    requiredSkills: ['Animal Handling', 'Grooming Skills', 'Customer Service', 'Patience'],
    advantages: ['Pet owners spend generously on their pets', 'High repeat customer rate', 'Joyful work environment for animal lovers'],
    challenges: ['Risk of animal bites or injuries', 'Requires maintaining high hygiene standards', 'Space requirements for boarding'],
    successTips: ['Get professional pet grooming certification', 'Offer mobile grooming services (van) to stand out', 'Keep owners updated with daily photos during boarding'],
    growthPotential: 'Can add a pet bakery, retail pet supplies, or veterinary clinic integration.',
    futureScope: 'Pet ownership in urban India is skyrocketing, creating a booming pet care economy.',
    suitableFor: { education: ['10th', '12th', 'Graduate'], experience: ['Beginner', 'Intermediate'], budgetRange: ['₹50,000 – ₹2,00,000'], skillTags: ['animal care', 'grooming', 'patience', 'customer service'], interests: ['Pet Care & Animal Services'] }
  },
  {
    name: 'Professional Deep Cleaning Services',
    description: 'B2B and B2C deep cleaning services for homes, offices, and post-construction sites using industrial equipment.',
    category: 'Cleaning & Maintenance',
    investment: { min: 50000, max: 200000, display: '₹50,000 – ₹2,00,000' },
    riskLevel: 'Low',
    profitPotential: '₹30,000 – ₹1,50,000/month',
    requiredSkills: ['Operations Management', 'Staff Management', 'Sales', 'Quality Control'],
    advantages: ['High demand during festivals (e.g., Diwali)', 'Recurring contracts from corporate offices', 'Quick breakeven period'],
    challenges: ['Managing blue-collar workforce is difficult', 'Physical and labor-intensive work', 'Quality consistency across teams'],
    successTips: ['Target corporate offices for monthly retainers', 'Invest in good quality industrial vacuums and chemicals', 'Collect Google reviews aggressively after every job'],
    growthPotential: 'Can expand to pest control, facility management, and sanitization services.',
    futureScope: 'Urbanization and busy lifestyles are driving the outsourced cleaning services market.',
    suitableFor: { education: ['10th', '12th', 'Graduate'], experience: ['Beginner', 'Intermediate'], budgetRange: ['₹10,000 – ₹50,000', '₹50,000 – ₹2,00,000'], skillTags: ['management', 'operations', 'sales', 'leadership'], interests: ['Cleaning & Maintenance', 'Home Services'] }
  },
  {
    name: 'Social Media Management (SMM)',
    description: 'Manage Instagram, LinkedIn, and Twitter accounts for founders and small businesses. Involves content creation, posting, and community engagement.',
    category: 'Technology & IT',
    investment: { min: 0, max: 10000, display: 'Under ₹10,000' },
    riskLevel: 'Low',
    profitPotential: '₹30,000 – ₹1,50,000/month',
    requiredSkills: ['Social Media', 'Copywriting', 'Canva/Design', 'Analytics'],
    advantages: ['Zero startup cost', 'Can be managed entirely from a smartphone/laptop', 'High demand for personal branding'],
    challenges: ['Constant need to stay updated with trends', 'Clients expect immediate viral results', 'Time-consuming content creation'],
    successTips: ['Focus on LinkedIn personal branding for CEOs (high paying)', 'Use scheduling tools like Buffer or Hootsuite', 'Batch create content once a week'],
    growthPotential: 'Can scale to a full digital marketing agency or PR firm.',
    futureScope: 'Personal branding has become essential, creating massive demand for ghostwriters and SMMs.',
    suitableFor: { education: ['12th', 'Graduate'], experience: ['Beginner', 'Intermediate'], budgetRange: ['Under ₹10,000'], skillTags: ['social media', 'content', 'writing', 'marketing'], interests: ['Technology & IT', 'Creative Arts'] }
  },
  {
    name: 'NGO / Social Enterprise',
    description: 'A for-profit or non-profit organization tackling social issues like waste management, women empowerment, or rural education.',
    category: 'Social Enterprise & NGO',
    investment: { min: 10000, max: 500000, display: '₹10,000 – ₹5,00,000' },
    riskLevel: 'High',
    profitPotential: 'Impact Driven (Variable)',
    requiredSkills: ['Leadership', 'Fundraising', 'Networking', 'Project Management'],
    advantages: ['High personal satisfaction and impact', 'Access to CSR funds from corporates', 'Strong community support'],
    challenges: ['Financial sustainability is very difficult', 'Navigating government regulations (FCRA, 80G)', 'Attracting and retaining talent on low budgets'],
    successTips: ['Build a hybrid model (sell a product/service to fund the social cause)', 'Network aggressively with corporate CSR heads', 'Maintain extreme financial transparency'],
    growthPotential: 'Can create national impact and partner with global organizations like UN or Gates Foundation.',
    futureScope: 'Social entrepreneurship is gaining traction as investors look for ESG (Environmental, Social, Governance) compliance.',
    suitableFor: { education: ['Graduate', 'Post-Graduate'], experience: ['Intermediate', 'Advanced'], budgetRange: ['₹10,000 – ₹50,000', '₹50,000 – ₹2,00,000'], skillTags: ['leadership', 'fundraising', 'networking', 'management'], interests: ['Social Enterprise & NGO', 'Education & Training'] }
  },
  {
    name: 'Fitness Equipment E-commerce',
    description: 'Selling home workout equipment, yoga mats, and accessories online via a D2C brand or marketplaces.',
    category: 'E-Commerce',
    investment: { min: 100000, max: 500000, display: '₹1,00,000 – ₹5,00,000' },
    riskLevel: 'Medium',
    profitPotential: '₹50,000 – ₹2,00,000/month',
    requiredSkills: ['E-commerce Management', 'Digital Marketing', 'Supply Chain', 'Customer Service'],
    advantages: ['Growing health awareness', 'High ticket items yield good margins', 'Scalable pan-India'],
    challenges: ['Heavy shipping costs for large equipment', 'Inventory storage requires space', 'High competition from established brands'],
    successTips: ['Focus on portable and aesthetic home-workout gear', 'Partner with fitness influencers on Instagram', 'Ensure robust packaging to prevent transit damage'],
    growthPotential: 'Can expand to supplements, activewear, or physical retail stores.',
    futureScope: 'The home fitness market continues to grow as people adopt hybrid work lifestyles.',
    suitableFor: { education: ['Graduate'], experience: ['Intermediate', 'Advanced'], budgetRange: ['₹50,000 – ₹2,00,000'], skillTags: ['ecommerce', 'marketing', 'logistics', 'sales'], interests: ['Health & Wellness', 'E-Commerce'] }
  },
  {
    name: 'Interior Design Consulting',
    description: 'Provide design concepts, 3D renderings, and project management for residential and commercial spaces.',
    category: 'Creative Arts',
    investment: { min: 20000, max: 100000, display: '₹20,000 – ₹1,00,000' },
    riskLevel: 'Medium',
    profitPotential: '₹50,000 – ₹4,00,000/month',
    requiredSkills: ['Interior Design', '3D Modeling (SketchUp/AutoCAD)', 'Project Management', 'Client Communication'],
    advantages: ['High earning potential per project', 'Creative and fulfilling work', 'Can charge consultation fees without execution risk'],
    challenges: ['Dealing with unreliable contractors', 'Client budget constraints and revisions', 'Building initial portfolio takes time'],
    successTips: ['Focus on a niche (e.g. modular kitchens or office spaces)', 'Build a strong network of reliable carpenters and vendors', 'Use Instagram to showcase transformations (Before/After)'],
    growthPotential: 'Can expand to turnkey execution, furniture manufacturing, or commercial architecture.',
    futureScope: 'Rising disposable incomes are driving massive demand for professional home interiors.',
    suitableFor: { education: ['Diploma', 'Graduate'], experience: ['Intermediate', 'Advanced'], budgetRange: ['₹10,000 – ₹50,000'], skillTags: ['design', 'creativity', 'management', 'visual'], interests: ['Creative Arts', 'Real Estate & Property'] }
  },
  {
    name: 'Car Detailing & Wash Studio',
    description: 'Premium car care services including ceramic coating, PPF (Paint Protection Film), and deep cleaning.',
    category: 'Automotive & Transport',
    investment: { min: 300000, max: 1500000, display: '₹3,00,000 – ₹15,00,000' },
    riskLevel: 'Medium',
    profitPotential: '₹80,000 – ₹3,00,000/month',
    requiredSkills: ['Technical Detailing Skills', 'Sales', 'Staff Management', 'Customer Service'],
    advantages: ['High profit margins on PPF and ceramic coatings', 'Car enthusiasts are willing to spend premium amounts', 'Growing luxury car market'],
    challenges: ['High setup cost for studio and lighting', 'Requires skilled labor', 'Mistakes on expensive cars can be costly'],
    successTips: ['Get certified training in PPF and ceramic application', 'Target premium housing societies for marketing', 'Offer annual maintenance packages for recurring revenue'],
    growthPotential: 'Can franchise, open multiple outlets, or add car modification services.',
    futureScope: 'The Indian car care market is organizing rapidly with high demand for premium services.',
    suitableFor: { education: ['12th', 'Diploma', 'Graduate'], experience: ['Intermediate', 'Advanced'], budgetRange: ['Above ₹2,00,000'], skillTags: ['technical', 'sales', 'management', 'customer service'], interests: ['Transportation & Logistics', 'Home Services'] }
  },
  {
    name: 'B2B Wholesale / Distribution',
    description: 'Acting as a distributor for FMCG, electronics, or industrial goods, connecting manufacturers to local retailers.',
    category: 'Retail & Distribution',
    investment: { min: 500000, max: 2500000, display: '₹5,00,000 – ₹25,00,000' },
    riskLevel: 'High',
    profitPotential: '₹1,00,000 – ₹5,00,000+/month',
    requiredSkills: ['Supply Chain Management', 'Sales', 'Finance & Credit Management', 'Negotiation'],
    advantages: ['High revenue volumes', 'Stable business once retailer network is built', 'Exclusive distribution rights can create a monopoly'],
    challenges: ['Very high working capital required', 'Managing credit cycles (udhaari) with retailers', 'Low profit margins (2-8%)'],
    successTips: ['Never compromise on credit terms; maintain strict collection cycles', 'Implement inventory management software from day one', 'Focus on fast-moving goods (FMCG) initially'],
    growthPotential: 'Can become a super-stockist, launch private label products, or expand territories.',
    futureScope: 'Despite e-B2B platforms (Udaan), traditional distribution remains the backbone of Indian retail.',
    suitableFor: { education: ['Graduate', 'Post-Graduate'], experience: ['Advanced', 'Expert'], budgetRange: ['Above ₹2,00,000'], skillTags: ['sales', 'logistics', 'finance', 'management'], interests: ['Retail', 'Finance & Insurance'] }
  }
].map(b => ({ ...b, roadmap: defaultRoadmap }));

businessesData = [...businessesData, ...newBusinesses];

const finalCode = `// Business Recommendations Data — 40 entries with Roadmaps
// Developer: Tilak Kumar | BML Munjal University | PS-II Internship

const businesses = ${JSON.stringify(businessesData, null, 2)};

module.exports = businesses;
`;

fs.writeFileSync(targetPath, finalCode);
console.log('Businesses successfully updated to ' + businessesData.length + ' entries.');
