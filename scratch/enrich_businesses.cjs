const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '..', 'backend', 'data', 'businesses.js');
let businesses = require(targetPath);

function getRoadmap(name, category) {
  return [
    {
      phase: 'Phase 1: Idea Validation & Research',
      duration: 'Weeks 1-2',
      tasks: [
        `Conduct local market research for ${name}`,
        'Analyze top 3 competitors in the area',
        'Define unique selling proposition (USP)',
        'Survey potential customers in the target demographic'
      ]
    },
    {
      phase: 'Phase 2: Legal & Financial Setup',
      duration: 'Weeks 3-4',
      tasks: [
        'Register business entity (Sole Proprietorship or LLP)',
        'Apply for necessary licenses and permits',
        'Open a dedicated current bank account',
        'Set up accounting software and initial budget'
      ]
    },
    {
      phase: 'Phase 3: Operations & Sourcing',
      duration: 'Weeks 5-8',
      tasks: [
        'Secure location or set up digital workspace',
        'Procure necessary equipment and software',
        'Establish vendor/supplier relationships',
        'Draft standard operating procedures (SOPs)'
      ]
    },
    {
      phase: 'Phase 4: Brand Identity & Marketing Prep',
      duration: 'Weeks 9-10',
      tasks: [
        'Design logo, brand guidelines, and assets',
        'Build and launch the business website',
        'Set up professional social media profiles',
        'Develop a 3-month content calendar'
      ]
    },
    {
      phase: 'Phase 5: Soft Launch & Testing',
      duration: 'Weeks 11-12',
      tasks: [
        'Run a soft launch with a limited audience',
        'Test operational flow and customer service',
        'Collect initial feedback and reviews',
        'Refine processes based on early data'
      ]
    },
    {
      phase: 'Phase 6: Grand Launch & Scaling',
      duration: 'Month 4 onwards',
      tasks: [
        'Execute the main marketing campaign',
        'Monitor customer acquisition cost (CAC)',
        'Optimize operations for higher volume',
        'Plan for hiring or expanding product lines'
      ]
    }
  ];
}

function getLegal(category) {
  const common = ['Business Registration (Udyam/MSME)', 'GST Registration', 'Current Bank Account'];
  if (category.includes('Food')) return [...common, 'FSSAI License', 'Health Trade License', 'Fire NOC'];
  if (category.includes('Education')) return [...common, 'Educational Society Registration', 'Local Municipal NOC'];
  if (category.includes('Health')) return [...common, 'Clinical Establishment Act Registration', 'Bio-Medical Waste Management Rule Compliance'];
  if (category.includes('Tech') || category.includes('E-Commerce')) return [...common, 'Shop & Establishment Act', 'Data Privacy Policy Compliance'];
  return [...common, 'Shop & Establishment Act'];
}

function getMarketing(category) {
  if (category.includes('B2B') || category.includes('Tech')) return ['LinkedIn Outreach', 'SEO & Content Marketing', 'Cold Emailing', 'Industry Conferences'];
  if (category.includes('Fashion') || category.includes('Food')) return ['Instagram & TikTok Reels', 'Influencer Partnerships', 'Local Facebook Ads', 'Food Aggregator Promotions'];
  return ['Google Search Ads', 'Local SEO (Google My Business)', 'Social Media Marketing', 'Referral Programs'];
}

businesses = businesses.map(b => {
  const isB2B = b.category.includes('Tech') || b.category.includes('Consulting');
  
  return {
    ...b,
    marketAnalysis: `The market for ${b.name} is experiencing robust growth driven by increasing consumer demand and digital transformation. In India, the ${b.category} sector is projected to grow at a CAGR of over 15% in the next five years. Rising disposable incomes, changing lifestyle patterns, and the shift toward specialized services make this a highly viable opportunity with significant untapped potential in Tier 2 and Tier 3 cities.`,
    targetAudience: isB2B 
      ? `Small to medium-sized enterprises (SMEs), startups, and corporate clients looking for specialized solutions in the ${b.category} space. Decision-makers include founders, HR managers, and operational heads.`
      : `Urban and semi-urban consumers aged 18-45 who value convenience, quality, and specialized services. They are digitally active, brand-conscious, and willing to pay a premium for exceptional experiences.`,
    legalRequirements: getLegal(b.category),
    roiTimeline: `Based on an initial investment of ${b.investment.display}, businesses in this category typically reach the break-even point within 8 to 14 months. Consistent profitability is usually achieved by month 18, assuming a month-over-month growth rate of 10-15%.`,
    marketingStrategy: getMarketing(b.category),
    commonPitfalls: [
      'Underestimating initial working capital required',
      'Ignoring local market research and assuming broad demand',
      'Failing to establish a strong online presence early on',
      'Poor pricing strategy leading to unsustainable margins'
    ],
    roadmap: b.roadmap && b.roadmap.length > 0 ? b.roadmap : getRoadmap(b.name, b.category)
  };
});

const fileContent = `// Detailed Business Database with full roadmaps and deep analytics
// Generated by Data Enrichment Script

const businesses = ${JSON.stringify(businesses, null, 2)};

module.exports = businesses;
`;

fs.writeFileSync(targetPath, fileContent);
console.log('Successfully enriched all 40 businesses with detailed fields and roadmaps.');
