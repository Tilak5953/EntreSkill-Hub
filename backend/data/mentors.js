// Detailed, Realistic Indian Mentor Profiles
// Replaces dummy data with hyper-specific, credible profiles

const mentors = [
  {
    name: 'Vikram Ahuja',
    title: 'Ex-VP of Growth',
    company: 'Flipkart',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
    expertise: ['E-Commerce', 'Scaling', 'Growth Marketing'],
    experienceYears: 12,
    rating: 4.9,
    reviews: 142,
    bio: 'Former VP of Growth at Flipkart, scaling categories from $1M to $50M+ ARR. I help early-stage e-commerce and D2C brands navigate Indian supply chain logistics, customer acquisition costs (CAC), and marketplace scaling strategies. If you want to crack Amazon/Flipkart algorithms or build your own Shopify store, I can help.'
  },
  {
    name: 'Sneha Rao',
    title: 'Founder & CEO',
    company: 'FinEdge Solutions (Y-Combinator W21)',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    expertise: ['FinTech', 'Fundraising', 'B2B SaaS'],
    experienceYears: 9,
    rating: 4.8,
    reviews: 89,
    bio: 'YC Alumni and 2x Founder. Raised over $5M from tier-1 Indian VC firms (Sequoia India, Nexus). I specialize in helping founders build compelling pitch decks, navigate early-stage valuations, and build B2B SaaS sales funnels for the Indian enterprise market.'
  },
  {
    name: 'Rahul Desai',
    title: 'Director of Operations',
    company: 'Zomato',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    expertise: ['Food Tech', 'Cloud Kitchens', 'Operations'],
    experienceYears: 14,
    rating: 5.0,
    reviews: 215,
    bio: 'Core operations team at Zomato. I know exactly what makes a cloud kitchen succeed or fail in 6 months. I mentor founders on FSSAI compliance, Swiggy/Zomato algorithm optimization, food cost management, and scaling dark kitchens across Tier 1 and Tier 2 cities.'
  },
  {
    name: 'Anjali Sharma',
    title: 'Managing Partner',
    company: 'Creative Media Agency',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
    expertise: ['Digital Marketing', 'Brand Building', 'Content Strategy'],
    experienceYears: 10,
    rating: 4.7,
    reviews: 156,
    bio: 'Run a 50-person creative agency in Mumbai. I guide freelancers, aspiring agency owners, and service-based businesses on how to transition from Upwork/Fiverr to closing high-ticket retainer clients. Deep expertise in Meta Ads, local SEO, and influencer marketing.'
  },
  {
    name: 'Karan Patel',
    title: 'Head of Engineering',
    company: 'Razorpay',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200',
    expertise: ['Tech Infrastructure', 'Product Management', 'Cybersecurity'],
    experienceYears: 15,
    rating: 4.9,
    reviews: 110,
    bio: 'Built highly scalable payment systems processing millions of transactions. I mentor tech founders on architectural decisions (AWS vs GCP), hiring your first engineering team in India, data privacy compliance, and building resilient MVP architectures.'
  },
  {
    name: 'Priya Iyer',
    title: 'D2C Founder',
    company: 'OrganicEarth',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    expertise: ['Retail', 'D2C', 'Sustainable Business'],
    experienceYears: 7,
    rating: 4.8,
    reviews: 78,
    bio: 'Bootstrapped my organic skincare brand to ₹10 Crore revenue in 3 years. I help founders with contract manufacturing, packaging sourcing, Shopify conversion rate optimization, and building a loyal community on Instagram in a crowded market.'
  },
  {
    name: 'Amit Agarwal',
    title: 'Chief Compliance Officer',
    company: 'LegalWiz India',
    imageUrl: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=200',
    expertise: ['Legal', 'Taxation', 'Company Registration'],
    experienceYears: 18,
    rating: 5.0,
    reviews: 320,
    bio: 'Chartered Accountant and Corporate Lawyer. The biggest reason startups fail in India is compliance notices. I provide clear, no-nonsense guidance on Private Limited vs LLP, GST filings, MSME/Udyam registration, and co-founder equity structuring.'
  },
  {
    name: 'Neha Gupta',
    title: 'Angel Investor',
    company: 'Indian Angel Network',
    imageUrl: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&q=80&w=200',
    expertise: ['Angel Investing', 'Pitch Decks', 'Mentorship'],
    experienceYears: 11,
    rating: 4.7,
    reviews: 95,
    bio: 'Invested in 20+ Indian startups across EdTech, HealthTech, and Agritech. I review pitch decks and tell you exactly why investors are passing on your startup. Best suited for founders preparing for their Seed or Pre-Series A rounds.'
  },
  {
    name: 'Rohit Verma',
    title: 'Supply Chain Lead',
    company: 'Delhivery',
    imageUrl: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=200',
    expertise: ['Logistics', 'Supply Chain', 'B2B Trade'],
    experienceYears: 13,
    rating: 4.8,
    reviews: 104,
    bio: 'If you are building a physical product business, your margins live or die in logistics. I help founders optimize reverse logistics (RTOs), negotiate with courier partners, and manage inventory forecasting to prevent dead stock.'
  },
  {
    name: 'Sanjana Kapoor',
    title: 'EdTech Product Lead',
    company: 'UpGrad',
    imageUrl: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&q=80&w=200',
    expertise: ['EdTech', 'Product Strategy', 'Customer Retention'],
    experienceYears: 8,
    rating: 4.9,
    reviews: 132,
    bio: 'Designed learning experiences for over 1M+ students. I mentor founders looking to build cohort-based courses, coaching centers, or EdTech apps. I focus heavily on learner retention metrics, gamification, and lowering customer acquisition costs.'
  }
];

module.exports = mentors;
