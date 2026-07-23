// Ultra-Detailed Business Database — 15 Unique Indian Business Blueprints
const businesses = [
  {
    name: "Cloud Kitchen (Dark Kitchen)",
    description: "A delivery-only food business operating out of a commercial kitchen space without a dine-in facility. It leverages food delivery apps like Zomato and Swiggy to reach customers, significantly reducing overhead costs.",
    category: "Food & Beverages",
    investment: { min: 200000, max: 1000000, display: "₹2 Lakh - ₹10 Lakh" },
    riskLevel: "Medium",
    profitPotential: "₹50,000 – ₹2,00,000/month",
    requiredSkills: ["Culinary Skills", "Inventory Management", "Digital Marketing", "Food Safety Standards"],
    advantages: ["Low rent and overhead", "Flexibility to change menus quickly", "Ability to run multiple brands from one kitchen", "Data-driven operations"],
    challenges: ["High dependence on food delivery platforms", "Steep platform commissions", "Intense competition"],
    successTips: ["Focus on a niche cuisine", "Optimize packaging for delivery", "Maintain consistent food quality"],
    growthPotential: "High, with opportunities to scale by opening multiple kitchen pods.",
    futureScope: "The Indian cloud kitchen market is expected to grow at a CAGR of over 15% and reach $2 billion by 2025.",
    marketAnalysis: "Urban India shows a massive shift towards online food delivery due to busy lifestyles.",
    targetAudience: "Working professionals, students, and young couples in Tier 1 and Tier 2 cities.",
    legalRequirements: ["FSSAI License", "Health Trade License", "Fire Safety NOC", "GST Registration", "Shop and Establishment Act"],
    roiTimeline: "12-18 months",
    marketingStrategy: ["Zomato/Swiggy Ads", "Instagram Marketing", "Influencer Collaborations", "Local SEO"],
    commonPitfalls: ["Ignoring packaging quality", "Underestimating platform fees", "Inconsistent taste"],
    suitableFor: { 
      education: ["Hospitality", "Business Administration", "Any"], 
      experience: ["F&B Operations", "Marketing"], 
      budgetRange: ["₹2L-₹10L"], 
      skillTags: ["Cooking", "Management", "Marketing"], 
      interests: ["Food", "Operations"] 
    },
    roadmap: [
      { phase: "Setup", duration: "1-2 months", tasks: ["Finalize location", "Obtain licenses", "Design menu", "Set up kitchen"] },
      { phase: "Launch", duration: "1 month", tasks: ["Onboard on delivery apps", "Launch social media", "Start operations", "Gather initial feedback"] },
      { phase: "Scale", duration: "Ongoing", tasks: ["Analyze popular items", "Optimize food cost", "Launch secondary brands"] }
    ],
    unitEconomics: [
      { metric: "Average Order Value", value: "₹350" },
      { metric: "Food Cost", value: "30%" },
      { metric: "Packaging Cost", value: "8%" },
      { metric: "Delivery App Commission", value: "25%" },
      { metric: "Net Margin", value: "15-20%" }
    ],
    capexBreakdown: [
      { item: "Commercial Kitchen Equipment", cost: "₹3,00,000" },
      { item: "Licenses and Permits", cost: "₹15,000" },
      { item: "Initial Inventory", cost: "₹50,000" },
      { item: "Security Deposit (Rent)", cost: "₹1,00,000" },
      { item: "Marketing Budget", cost: "₹35,000" }
    ],
    techStack: [
      { tool: "Petpooja", purpose: "POS and Billing" },
      { tool: "UrbanPiper", purpose: "Delivery aggregator management" },
      { tool: "Canva", purpose: "Social media post design" }
    ],
    successStory: { name: "Rebel Foods (Faasos)", revenue: "₹859 Cr (FY22)", description: "Pioneered the multi-brand cloud kitchen model in India." },
    isActive: true
  },
  {
    name: "D2C Skincare Brand",
    description: "An online-first skincare brand formulating products with natural or science-backed ingredients, selling directly to consumers via its own website and e-commerce marketplaces. It focuses on specific skin concerns tailored to Indian skin types.",
    category: "E-Commerce",
    investment: { min: 500000, max: 2000000, display: "₹5 Lakh - ₹20 Lakh" },
    riskLevel: "High",
    profitPotential: "₹1,00,000 – ₹5,00,000/month",
    requiredSkills: ["Brand Building", "E-commerce Operations", "Digital Marketing", "Product Sourcing"],
    advantages: ["High gross margins", "Direct customer relationship", "Scalability across India", "Niche targeting capabilities"],
    challenges: ["High customer acquisition cost (CAC)", "Fierce competition", "Inventory management"],
    successTips: ["Focus on packaging aesthetics", "Leverage micro-influencers", "Build a strong community around the brand"],
    growthPotential: "Very high, with potential to expand into offline retail (omnichannel).",
    futureScope: "The Indian D2C beauty and personal care market is projected to reach $4.4 billion by 2025.",
    marketAnalysis: "Increasing awareness of skincare routines and demand for cruelty-free/vegan products.",
    targetAudience: "Gen Z and Millennials seeking targeted skincare solutions.",
    legalRequirements: ["Ayush/Cosmetic Manufacturing License", "Trademark Registration", "GST Registration", "Legal Metrology Packaged Commodities Rule compliance"],
    roiTimeline: "18-24 months",
    marketingStrategy: ["Instagram/Facebook Ads", "Influencer Marketing", "SEO for e-commerce", "Email Marketing"],
    commonPitfalls: ["Overspending on initial inventory", "Ignoring retention strategies", "Poor customer service"],
    suitableFor: { 
      education: ["Marketing", "Chemistry/Pharmacy (Optional)", "Business"], 
      experience: ["E-commerce", "Brand Management"], 
      budgetRange: ["₹5L-₹20L"], 
      skillTags: ["Branding", "Marketing", "E-commerce"], 
      interests: ["Beauty", "Fashion", "Entrepreneurship"] 
    },
    roadmap: [
      { phase: "Product Dev", duration: "3-4 months", tasks: ["Formulate products", "Finalize packaging", "Obtain licenses", "Setup Shopify store"] },
      { phase: "Launch", duration: "1-2 months", tasks: ["Send PR packages", "Run pre-launch campaigns", "Go live", "Start performance marketing"] },
      { phase: "Growth", duration: "Ongoing", tasks: ["List on Amazon/Nykaa", "Optimize CAC", "Launch new SKUs"] }
    ],
    unitEconomics: [
      { metric: "Average Order Value", value: "₹800" },
      { metric: "Gross Margin", value: "70%" },
      { metric: "Customer Acquisition Cost", value: "₹400" },
      { metric: "Shipping Cost", value: "₹80" },
      { metric: "Net Margin", value: "10-15%" }
    ],
    capexBreakdown: [
      { item: "Product Formulation & Initial Inventory", cost: "₹4,00,000" },
      { item: "Packaging & Design", cost: "₹1,50,000" },
      { item: "Website Development", cost: "₹50,000" },
      { item: "Legal & Trademarks", cost: "₹30,000" },
      { item: "Initial Marketing Budget", cost: "₹2,00,000" }
    ],
    techStack: [
      { tool: "Shopify", purpose: "E-commerce platform" },
      { tool: "Klaviyo", purpose: "Email & SMS marketing" },
      { tool: "Shiprocket", purpose: "Logistics and shipping" }
    ],
    successStory: { name: "Plum Goodness", revenue: "₹322 Cr (FY23)", description: "India's first 100% vegan beauty brand." },
    isActive: true
  },
  {
    name: "B2B Micro-SaaS Tool",
    description: "A specialized Software as a Service (SaaS) product designed to solve a specific, niche problem for other businesses, such as an invoicing tool for Indian freelancers or a specialized CRM for local gyms.",
    category: "Technology",
    investment: { min: 50000, max: 500000, display: "₹50K - ₹5 Lakh" },
    riskLevel: "Low",
    profitPotential: "₹50,000 – ₹3,00,000/month",
    requiredSkills: ["Software Development", "Product Management", "B2B Sales", "UI/UX Design"],
    advantages: ["High margins once built", "Recurring revenue model", "Global scalability", "Low operational overhead"],
    challenges: ["Finding the right product-market fit", "Customer churn", "Initial customer acquisition"],
    successTips: ["Solve one specific problem extremely well", "Offer a solid free trial", "Focus on excellent customer support"],
    growthPotential: "High, can easily scale globally without physical constraints.",
    futureScope: "India is becoming a global hub for SaaS, with expected revenues of $50-70 billion by 2030.",
    marketAnalysis: "SMBs are increasingly adopting digital tools to streamline operations.",
    targetAudience: "Small to Medium Businesses (SMBs), freelancers, and specialized agencies.",
    legalRequirements: ["Company Registration (Private Limited/LLP)", "GST Registration", "Terms of Service and Privacy Policy compliance", "Data Protection compliance (DPDP Act)"],
    roiTimeline: "6-12 months",
    marketingStrategy: ["Content Marketing/SEO", "LinkedIn Outreach", "Product Hunt Launch", "AppSumo Deals"],
    commonPitfalls: ["Building before validating", "Underpricing the product", "Ignoring user feedback"],
    suitableFor: { 
      education: ["Computer Science", "IT", "Business"], 
      experience: ["Software Engineering", "Product Development"], 
      budgetRange: ["₹50K-₹5L"], 
      skillTags: ["Coding", "Sales", "Design"], 
      interests: ["Tech", "Problem Solving"] 
    },
    roadmap: [
      { phase: "Validation", duration: "1 month", tasks: ["Identify problem", "Interview target users", "Create landing page", "Get signups"] },
      { phase: "Development", duration: "2-3 months", tasks: ["Build MVP", "Setup billing", "Beta testing", "Launch"] },
      { phase: "Scaling", duration: "Ongoing", tasks: ["Content marketing", "Feature iterations", "Partnerships"] }
    ],
    unitEconomics: [
      { metric: "Average Revenue Per User (ARPU)", value: "₹1,500/month" },
      { metric: "Customer Lifetime Value (LTV)", value: "₹30,000" },
      { metric: "Customer Acquisition Cost (CAC)", value: "₹3,000" },
      { metric: "Churn Rate", value: "3-5% monthly" },
      { metric: "Gross Margin", value: "85%" }
    ],
    capexBreakdown: [
      { item: "Cloud Hosting & Services", cost: "₹20,000" },
      { item: "Software Licenses (IDEs, Design)", cost: "₹15,000" },
      { item: "Company Registration", cost: "₹15,000" },
      { item: "Marketing & Launch Tools", cost: "₹25,000" },
      { item: "Miscellaneous/Buffer", cost: "₹10,000" }
    ],
    techStack: [
      { tool: "Vercel / AWS", purpose: "Hosting and infrastructure" },
      { tool: "Stripe / Razorpay", purpose: "Payment processing" },
      { tool: "Supabase / Firebase", purpose: "Database and Auth" }
    ],
    successStory: { name: "Khatabook", revenue: "₹71 Cr (FY22)", description: "Simplified digital ledger app tailored for Indian MSMEs." },
    isActive: true
  },
  {
    name: "Tiffin/Meal Prep Service",
    description: "A localized service providing home-cooked, healthy, and hygienic daily meals to students and working professionals who lack the time or skill to cook. Often operates on a subscription basis.",
    category: "Food & Beverages",
    investment: { min: 20000, max: 100000, display: "₹20K - ₹1 Lakh" },
    riskLevel: "Low",
    profitPotential: "₹20,000 – ₹80,000/month",
    requiredSkills: ["Cooking at scale", "Logistics & Routing", "Menu Planning", "Customer Relationship Management"],
    advantages: ["Predictable revenue through subscriptions", "Low initial investment", "High customer retention", "Word-of-mouth marketing"],
    challenges: ["Managing daily logistics", "Maintaining consistency in taste", "Handling cancellations/pauses"],
    successTips: ["Offer specialized diets (Keto, Vegan)", "Use eco-friendly packaging", "Ensure on-time delivery"],
    growthPotential: "Moderate; can scale locally and expand to corporate catering.",
    futureScope: "High demand in IT hubs and student towns as people prioritize health and home-style food.",
    marketAnalysis: "Migration to urban centers for work/study creates a steady demand for home-style meals.",
    targetAudience: "Bachelors, hostellers, and busy corporate employees.",
    legalRequirements: ["FSSAI Registration", "Local Municipal Health License", "GST (if turnover exceeds threshold)"],
    roiTimeline: "3-6 months",
    marketingStrategy: ["Flyers in PG/Hostels", "WhatsApp Groups", "Local Facebook Groups", "Referral Discounts"],
    commonPitfalls: ["Overcomplicating the menu", "Poor delivery routing", "Ignoring packaging hygiene"],
    suitableFor: { 
      education: ["Any"], 
      experience: ["Home Cooking", "Basic Management"], 
      budgetRange: ["Under ₹1L"], 
      skillTags: ["Cooking", "Logistics", "Customer Service"], 
      interests: ["Food", "Helping People"] 
    },
    roadmap: [
      { phase: "Setup", duration: "2 weeks", tasks: ["Finalize menu", "Source packaging", "Get FSSAI", "Arrange delivery boy"] },
      { phase: "Launch", duration: "1-2 weeks", tasks: ["Distribute flyers", "Start free trials", "Onboard first 10 customers"] },
      { phase: "Operations", duration: "Ongoing", tasks: ["Manage daily deliveries", "Collect feedback", "Scale customer base"] }
    ],
    unitEconomics: [
      { metric: "Monthly Subscription Price", value: "₹3,500" },
      { metric: "Cost per Meal", value: "₹45" },
      { metric: "Delivery Cost per Meal", value: "₹15" },
      { metric: "Profit per Meal", value: "₹20" },
      { metric: "Gross Margin", value: "30-40%" }
    ],
    capexBreakdown: [
      { item: "Cooking Utensils & Equipment", cost: "₹15,000" },
      { item: "Initial Groceries", cost: "₹10,000" },
      { item: "Packaging Materials (Bulk)", cost: "₹5,000" },
      { item: "Marketing (Flyers, Ads)", cost: "₹3,000" },
      { item: "FSSAI Registration & Legal", cost: "₹2,000" }
    ],
    techStack: [
      { tool: "WhatsApp Business", purpose: "Customer communication" },
      { tool: "Google Sheets", purpose: "Managing subscriptions" },
      { tool: "PhonePe/GPay", purpose: "Collecting payments" }
    ],
    successStory: { name: "SpiceBox", revenue: "N/A", description: "Mumbai-based tiffin service that scaled significantly." },
    isActive: true
  },
  {
    name: "Custom Apparel & Print-on-Demand",
    description: "An online store selling custom-designed t-shirts, hoodies, and accessories. Orders are fulfilled by a Print-on-Demand (POD) partner, meaning no inventory is held by the business owner.",
    category: "E-Commerce",
    investment: { min: 10000, max: 50000, display: "₹10K - ₹50K" },
    riskLevel: "Low",
    profitPotential: "₹20,000 – ₹1,00,000/month",
    requiredSkills: ["Graphic Design", "Digital Marketing", "Trend Analysis", "E-commerce setup"],
    advantages: ["Zero inventory risk", "Low startup cost", "Location independent", "Easy to experiment with designs"],
    challenges: ["Lower profit margins per item", "Dependent on supplier quality", "High competition"],
    successTips: ["Target micro-niches (e.g., programmers, dog lovers)", "Create high-quality mockups", "Build a brand story"],
    growthPotential: "Moderate to High; easily scalable across India.",
    futureScope: "Growing fast as Gen Z prefers personalized and pop-culture themed clothing.",
    marketAnalysis: "Increasing adoption of casual wear and statement t-shirts in India.",
    targetAudience: "College students, young professionals, and niche hobbyists.",
    legalRequirements: ["GST Registration", "Trademark for Brand Name (Optional)"],
    roiTimeline: "3-6 months",
    marketingStrategy: ["Instagram Reels", "Facebook Ads", "Meme Marketing", "Influencer shoutouts"],
    commonPitfalls: ["Generic designs", "Ignoring shipping costs", "Not calculating ad spend ROI"],
    suitableFor: { 
      education: ["Design", "Marketing", "Any"], 
      experience: ["Basic Design", "Social Media"], 
      budgetRange: ["Under ₹50K"], 
      skillTags: ["Design", "Marketing", "E-commerce"], 
      interests: ["Fashion", "Art", "Pop Culture"] 
    },
    roadmap: [
      { phase: "Setup", duration: "1-2 weeks", tasks: ["Create designs", "Setup Shopify", "Integrate POD app", "Order samples"] },
      { phase: "Launch", duration: "2 weeks", tasks: ["Setup social media", "Run initial test ads", "Launch website"] },
      { phase: "Scale", duration: "Ongoing", tasks: ["Identify winning designs", "Scale ad spend", "Add new products"] }
    ],
    unitEconomics: [
      { metric: "Average Selling Price", value: "₹599" },
      { metric: "POD Base Cost + Shipping", value: "₹350" },
      { metric: "Customer Acquisition Cost", value: "₹150" },
      { metric: "Net Profit per Item", value: "₹99" },
      { metric: "Net Margin", value: "15-20%" }
    ],
    capexBreakdown: [
      { item: "Shopify Subscription (3 months)", cost: "₹5,000" },
      { item: "Domain Name", cost: "₹800" },
      { item: "Initial Ad Budget", cost: "₹10,000" },
      { item: "Sample Orders", cost: "₹3,000" },
      { item: "Design Assets/Software", cost: "₹2,000" }
    ],
    techStack: [
      { tool: "Shopify", purpose: "Storefront" },
      { tool: "Blinkstore / Printrove", purpose: "Print-on-demand fulfillment" },
      { tool: "Canva / Illustrator", purpose: "T-shirt design" }
    ],
    successStory: { name: "The Souled Store", revenue: "₹235 Cr (FY23)", description: "Started small, now India's biggest destination for pop-culture merch." },
    isActive: true
  },
  {
    name: "YouTube Education Channel",
    description: "Creating high-quality, niche educational content on YouTube (e.g., coding, finance, school subjects) for Indian audiences. Monetization comes via Adsense, sponsorships, and selling premium courses.",
    category: "Education",
    investment: { min: 10000, max: 100000, display: "₹10K - ₹1 Lakh" },
    riskLevel: "Low",
    profitPotential: "₹20,000 – ₹5,00,000+/month",
    requiredSkills: ["Video Editing", "Public Speaking", "Scriptwriting", "Subject Matter Expertise"],
    advantages: ["Extremely low barrier to entry", "Passive income potential", "Builds personal brand", "High leverage"],
    challenges: ["Algorithm dependency", "Burnout from consistent posting", "Slow initial growth"],
    successTips: ["Focus on audio quality", "Create engaging thumbnails", "Solve specific viewer problems"],
    growthPotential: "Limitless; successful channels evolve into full-fledged EdTech companies.",
    futureScope: "Edutainment is booming in India; regional language content is highly sought after.",
    marketAnalysis: "India has the largest YouTube user base globally, consuming vast amounts of educational content.",
    targetAudience: "Students, job seekers, and lifelong learners.",
    legalRequirements: ["Proprietorship/Company Registration (for sponsorships)", "GST (if crossing threshold)"],
    roiTimeline: "12-24 months",
    marketingStrategy: ["YouTube SEO", "Cross-promotion on Instagram/Twitter", "Community Posts", "Collaborations"],
    commonPitfalls: ["Inconsistent upload schedule", "Poor audio quality", "Boring intros"],
    suitableFor: { 
      education: ["Degree in subject area"], 
      experience: ["Teaching", "Video Production"], 
      budgetRange: ["Under ₹1L"], 
      skillTags: ["Communication", "Editing", "Teaching"], 
      interests: ["Education", "Content Creation"] 
    },
    roadmap: [
      { phase: "Preparation", duration: "1 month", tasks: ["Define niche", "Buy basic gear", "Script first 5 videos", "Design branding"] },
      { phase: "Execution", duration: "6-12 months", tasks: ["Upload consistently", "Analyze analytics", "Improve editing", "Engage comments"] },
      { phase: "Monetization", duration: "Ongoing", tasks: ["Activate Adsense", "Pitch sponsors", "Launch paid course"] }
    ],
    unitEconomics: [
      { metric: "RPM (Revenue Per Mille)", value: "₹50 - ₹150 (India)" },
      { metric: "Sponsorship Rate", value: "₹10,000 - ₹50,000 per integration" },
      { metric: "Course Conversion Rate", value: "1-2% of viewers" },
      { metric: "Production Cost per Video", value: "₹500 (Time + electricity)" },
      { metric: "Margin", value: "90%+" }
    ],
    capexBreakdown: [
      { item: "Good Microphone", cost: "₹5,000" },
      { item: "Lighting Setup", cost: "₹3,000" },
      { item: "Webcam / Entry DSLR", cost: "₹30,000" },
      { item: "Video Editing Software (Annual)", cost: "₹5,000" },
      { item: "Acoustic Treatment", cost: "₹5,000" }
    ],
    techStack: [
      { tool: "Premiere Pro / DaVinci Resolve", purpose: "Video Editing" },
      { tool: "OBS Studio", purpose: "Screen recording" },
      { tool: "TubeBuddy / VidIQ", purpose: "Keyword research" }
    ],
    successStory: { name: "Physics Wallah", revenue: "₹798 Cr (FY23)", description: "Started as a YouTube channel, became a profitable unicorn EdTech." },
    isActive: true
  },
  {
    name: "Chartered Accountant / Tax Consultancy Firm",
    description: "Providing taxation, auditing, compliance, and financial advisory services to individuals and businesses. Can start as a solo practitioner and grow into a larger firm.",
    category: "Services",
    investment: { min: 50000, max: 300000, display: "₹50K - ₹3 Lakh" },
    riskLevel: "Low",
    profitPotential: "₹50,000 – ₹5,00,000/month",
    requiredSkills: ["Accounting Principles", "Tax Laws", "Client Communication", "Attention to Detail"],
    advantages: ["High trust business", "Recurring yearly clients", "Low capital required", "Recession-resistant"],
    challenges: ["Keeping up with changing tax laws", "Client acquisition in early days", "High liability/responsibility"],
    successTips: ["Network extensively", "Specialize in a niche (e.g., startup compliance)", "Adopt cloud accounting tools"],
    growthPotential: "Steady and high; can scale by hiring junior accountants and expanding services.",
    futureScope: "Increasing formalization of the Indian economy and GST drives constant demand for CAs.",
    marketAnalysis: "Every registered business in India requires tax filing and compliance services.",
    targetAudience: "Small to Medium Enterprises (SMEs), startups, and High Net-worth Individuals (HNIs).",
    legalRequirements: ["ICAI Membership and Certificate of Practice", "Firm Registration with ICAI", "GST Registration", "Professional Tax Registration"],
    roiTimeline: "6-12 months",
    marketingStrategy: ["Networking Events (BNI)", "LinkedIn Publishing", "Referrals", "Local SEO (Google My Business)"],
    commonPitfalls: ["Underpricing services", "Poor client communication", "Missing deadlines"],
    suitableFor: { 
      education: ["CA", "CS", "CMA", "B.Com"], 
      experience: ["Articleship", "Corporate Finance"], 
      budgetRange: ["₹50K-₹3L"], 
      skillTags: ["Finance", "Law", "Analysis"], 
      interests: ["Numbers", "Consulting", "Law"] 
    },
    roadmap: [
      { phase: "Setup", duration: "1 month", tasks: ["Get CoP from ICAI", "Setup home office", "Buy software", "Register firm"] },
      { phase: "Acquisition", duration: "3-6 months", tasks: ["Reach out to network", "Attend meetups", "Onboard first 20 clients"] },
      { phase: "Expansion", duration: "Ongoing", tasks: ["Hire articles/assistants", "Rent commercial office", "Expand service lines"] }
    ],
    unitEconomics: [
      { metric: "Average Retainer (SME)", value: "₹5,000 - ₹15,000/month" },
      { metric: "Cost of Service Delivery", value: "30% (Staffing & Software)" },
      { metric: "Gross Margin", value: "70%" },
      { metric: "Client Retention Rate", value: "85-90%" },
      { metric: "CAC", value: "Primarily time/networking cost" }
    ],
    capexBreakdown: [
      { item: "Office Setup (Laptop, Printer)", cost: "₹70,000" },
      { item: "Tax/Accounting Software Licenses", cost: "₹25,000" },
      { item: "ICAI Firm Registration Fees", cost: "₹10,000" },
      { item: "Website & Branding", cost: "₹15,000" },
      { item: "Miscellaneous", cost: "₹10,000" }
    ],
    techStack: [
      { tool: "Tally Prime / Zoho Books", purpose: "Accounting" },
      { tool: "ClearTax / CompuTax", purpose: "Tax Filing" },
      { tool: "Google Workspace", purpose: "Client Communication & Docs" }
    ],
    successStory: { name: "Clear (formerly ClearTax)", revenue: "Software giant", description: "Began as a simple tax filing tool, revolutionizing compliance in India." },
    isActive: true
  },
  {
    name: "Online Fitness & Yoga Studio",
    description: "Conducting live and recorded fitness, Zumba, or Yoga classes over video conferencing tools for a global and domestic audience. Monetized via monthly memberships or per-class fees.",
    category: "Health & Wellness",
    investment: { min: 10000, max: 50000, display: "₹10K - ₹50K" },
    riskLevel: "Low",
    profitPotential: "₹30,000 – ₹1,50,000/month",
    requiredSkills: ["Fitness Certification", "High Energy/Motivation", "Basic Tech Setup", "Community Building"],
    advantages: ["Zero rent for studio space", "Global reach", "High margins", "Flexible schedule"],
    challenges: ["Keeping clients engaged virtually", "Time zone differences", "Tech glitches during live classes"],
    successTips: ["Focus on form correction", "Build a WhatsApp community", "Offer free trial classes"],
    growthPotential: "High; can transition to a hybrid model or launch a fitness app.",
    futureScope: "Post-pandemic, hybrid fitness routines are standard; strong demand for Indian Yoga globally.",
    marketAnalysis: "Increasing health awareness among desk workers and corporate professionals.",
    targetAudience: "Corporate employees, homemakers, and fitness enthusiasts globally.",
    legalRequirements: ["Fitness/Yoga Certification (Yoga Alliance, etc.)", "GST Registration", "Music Licensing (if applicable)"],
    roiTimeline: "1-3 months",
    marketingStrategy: ["Instagram Live workouts", "Corporate tie-ups", "Facebook Ads", "Word of Mouth"],
    commonPitfalls: ["Poor internet connection", "Bad audio quality", "Ignoring client injuries/limitations"],
    suitableFor: { 
      education: ["Fitness Certifications"], 
      experience: ["Personal Training"], 
      budgetRange: ["Under ₹50K"], 
      skillTags: ["Fitness", "Communication", "Sales"], 
      interests: ["Health", "Wellness", "Helping People"] 
    },
    roadmap: [
      { phase: "Setup", duration: "1-2 weeks", tasks: ["Setup camera/audio", "Design class schedule", "Set pricing", "Create social handles"] },
      { phase: "Launch", duration: "2 weeks", tasks: ["Host free masterclass", "Pitch to existing network", "Enroll first batch"] },
      { phase: "Scale", duration: "Ongoing", tasks: ["Introduce specialized batches", "Hire associate trainers", "Launch pre-recorded programs"] }
    ],
    unitEconomics: [
      { metric: "Monthly Subscription", value: "₹1,500 - ₹3,000" },
      { metric: "Max Members per Live Class", value: "20-30" },
      { metric: "Platform Cost (Zoom)", value: "₹1,500/month" },
      { metric: "Marketing Spend per User", value: "₹300" },
      { metric: "Gross Margin", value: "90%" }
    ],
    capexBreakdown: [
      { item: "HD Webcam & Ring Light", cost: "₹12,000" },
      { item: "Wireless Mic System", cost: "₹8,000" },
      { item: "Fitness Props (Mats, Weights)", cost: "₹5,000" },
      { item: "Zoom Pro Annual License", cost: "₹15,000" },
      { item: "Marketing Buffer", cost: "₹10,000" }
    ],
    techStack: [
      { tool: "Zoom", purpose: "Live Classes" },
      { tool: "Razorpay / Stripe", purpose: "Payment collection" },
      { tool: "Instagram", purpose: "Marketing and community" }
    ],
    successStory: { name: "Cult.fit", revenue: "₹694 Cr (FY23)", description: "Scaled online and offline fitness dramatically across India." },
    isActive: true
  },
  {
    name: "Organic Grocery / Farm-to-Table Delivery",
    description: "Sourcing organic fruits, vegetables, and staples directly from local farmers and delivering them fresh to urban consumers via a subscription or on-demand app.",
    category: "Retail",
    investment: { min: 300000, max: 1500000, display: "₹3 Lakh - ₹15 Lakh" },
    riskLevel: "Medium",
    profitPotential: "₹50,000 – ₹2,50,000/month",
    requiredSkills: ["Supply Chain Management", "Farmer Networking", "Quality Control", "Logistics"],
    advantages: ["Premium pricing capability", "Promotes sustainable agriculture", "Loyal customer base", "High demand for clean food"],
    challenges: ["Managing perishables (high wastage)", "Complex supply chain", "Establishing trust in 'organic' claims"],
    successTips: ["Obtain strict organic certifications", "Ensure transparency (show the farm)", "Minimize delivery time"],
    growthPotential: "Moderate to High; can expand product categories to dairy and staples.",
    futureScope: "Growing health consciousness is expanding the organic food market in India.",
    marketAnalysis: "Urban households are willing to pay a 20-30% premium for chemical-free, traceable produce.",
    targetAudience: "Health-conscious families, new parents, and affluent urban residents.",
    legalRequirements: ["FSSAI License", "Organic Certification (NPOP/Participatory Guarantee System)", "Trade License", "GST Registration", "Weights and Measures License"],
    roiTimeline: "12-18 months",
    marketingStrategy: ["Society activations (Kiosks)", "WhatsApp Marketing", "Influencer endorsements", "Referral programs"],
    commonPitfalls: ["High logistics costs eating margins", "Spoilage due to poor cold chain", "Fake organic suppliers"],
    suitableFor: { 
      education: ["Agri-business", "Supply Chain", "Business"], 
      experience: ["Operations", "FMCG"], 
      budgetRange: ["₹3L-₹15L"], 
      skillTags: ["Logistics", "Networking", "Management"], 
      interests: ["Agriculture", "Sustainability", "Retail"] 
    },
    roadmap: [
      { phase: "Sourcing", duration: "1-2 months", tasks: ["Identify organic farmers", "Verify certifications", "Setup sorting facility", "Plan logistics"] },
      { phase: "Pilot Launch", duration: "1 month", tasks: ["Target specific pin codes", "Launch WhatsApp ordering", "Refine delivery routes"] },
      { phase: "Scale", duration: "Ongoing", tasks: ["Launch app/website", "Expand categories", "Optimize wastage"] }
    ],
    unitEconomics: [
      { metric: "Average Basket Size", value: "₹800" },
      { metric: "Farmer Payout", value: "50-60%" },
      { metric: "Logistics & Packaging Cost", value: "15%" },
      { metric: "Wastage Cost", value: "5-8%" },
      { metric: "Net Margin", value: "15-20%" }
    ],
    capexBreakdown: [
      { item: "Sorting/Storage Facility Deposit", cost: "₹1,00,000" },
      { item: "Cold Storage/Freezers", cost: "₹80,000" },
      { item: "Delivery Vehicles (Lease/Advance)", cost: "₹50,000" },
      { item: "Packaging Materials (Eco-friendly)", cost: "₹30,000" },
      { item: "App/Website Development", cost: "₹40,000" }
    ],
    techStack: [
      { tool: "Shopify / Custom App", purpose: "Storefront" },
      { tool: "Locus / FarEye", purpose: "Route optimization" },
      { tool: "WhatsApp API", purpose: "Customer updates" }
    ],
    successStory: { name: "Otipy", revenue: "₹115 Cr (FY23)", description: "Farm-to-home agritech startup leveraging community group buying." },
    isActive: true
  },
  {
    name: "Dropshipping (Amazon FBA India)",
    description: "Sourcing products from manufacturers (often in India or China) and storing them in Amazon's fulfillment centers. Amazon handles packing, shipping, and customer service. You manage listing, PPC, and inventory.",
    category: "E-Commerce",
    investment: { min: 50000, max: 300000, display: "₹50K - ₹3 Lakh" },
    riskLevel: "Medium",
    profitPotential: "₹40,000 – ₹2,00,000/month",
    requiredSkills: ["Product Research", "Amazon PPC", "Supplier Negotiation", "Listing Optimization (SEO)"],
    advantages: ["Leverage Amazon's massive traffic", "No need to manage warehouse", "Prime badge increases sales", "Scalable model"],
    challenges: ["High Amazon fees", "Account suspension risks", "Fierce price competition"],
    successTips: ["Find low-competition, high-demand niches", "Invest in high-quality product photography", "Master Amazon PPC ads"],
    growthPotential: "High; can build private label brands and exit.",
    futureScope: "E-commerce penetration in Tier 2/3 cities is driving immense growth on Amazon India.",
    marketAnalysis: "Millions of daily active buyers looking for fast delivery and reliable products.",
    targetAudience: "Amazon India shoppers across various categories.",
    legalRequirements: ["GST Registration (Mandatory for selling online)", "Current Bank Account", "Trademark (for Brand Registry)"],
    roiTimeline: "6-12 months",
    marketingStrategy: ["Amazon PPC (Sponsored Products)", "Lightning Deals", "Amazon SEO", "External traffic (FB Ads)"],
    commonPitfalls: ["Choosing generic saturated products", "Running out of inventory", "Ignoring profit margins after Amazon fees"],
    suitableFor: { 
      education: ["Any"], 
      experience: ["Digital Marketing", "E-commerce"], 
      budgetRange: ["₹50K-₹3L"], 
      skillTags: ["Research", "Marketing", "Data Analysis"], 
      interests: ["E-commerce", "Trading"] 
    },
    roadmap: [
      { phase: "Research", duration: "1 month", tasks: ["Use Helium10 for product research", "Contact suppliers on IndiaMart/Alibaba", "Order samples"] },
      { phase: "Launch", duration: "1 month", tasks: ["Ship to FBA", "Create optimized listing", "Enroll in Brand Registry", "Launch PPC campaigns"] },
      { phase: "Optimize", duration: "Ongoing", tasks: ["Monitor PPC ACoS", "Manage inventory levels", "Gather reviews"] }
    ],
    unitEconomics: [
      { metric: "Selling Price", value: "₹999" },
      { metric: "Product Sourcing Cost", value: "₹250" },
      { metric: "Amazon FBA Fees + Commission", value: "₹350" },
      { metric: "PPC Cost per Acquisition", value: "₹150" },
      { metric: "Net Profit Margin", value: "20-25%" }
    ],
    capexBreakdown: [
      { item: "Initial Inventory Sourcing", cost: "₹1,50,000" },
      { item: "Product Photography & Listing", cost: "₹15,000" },
      { item: "Amazon PPC Budget (Launch)", cost: "₹30,000" },
      { item: "Software Tools (Helium10/JungleScout)", cost: "₹10,000" },
      { item: "Trademark Registration", cost: "₹10,000" }
    ],
    techStack: [
      { tool: "Amazon Seller Central", purpose: "Platform management" },
      { tool: "Helium10", purpose: "Product research and SEO" },
      { tool: "IndiaMart", purpose: "Supplier sourcing" }
    ],
    successStory: { name: "Boat Lifestyle", revenue: "₹3400 Cr (FY23)", description: "Started primarily as an Amazon-first brand before going omnichannel." },
    isActive: true
  },
  {
    name: "Freelance UI/UX Design Agency",
    description: "A specialized agency offering User Interface and User Experience design services for startups and enterprises, including web design, mobile app design, and wireframing.",
    category: "Services",
    investment: { min: 20000, max: 100000, display: "₹20K - ₹1 Lakh" },
    riskLevel: "Low",
    profitPotential: "₹80,000 – ₹4,00,000/month",
    requiredSkills: ["Figma/Adobe XD", "User Research", "Wireframing", "Client Pitching"],
    advantages: ["High hourly rates", "Low overhead", "Global client base (earn in USD)", "Creative fulfillment"],
    challenges: ["Dealing with difficult clients/revisions", "Inconsistent income initially", "Staying updated with design trends"],
    successTips: ["Build a stunning portfolio on Behance/Dribbble", "Specialize in an industry (e.g., FinTech SaaS)", "Focus on UX, not just pretty UI"],
    growthPotential: "High; can hire junior designers and scale into a full-fledged product agency.",
    futureScope: "Explosive demand as every business digitizes and user experience becomes a key differentiator.",
    marketAnalysis: "Startups globally offshore design work to India for cost arbitrage without compromising quality.",
    targetAudience: "Funded startups, tech companies, and traditional businesses going digital.",
    legalRequirements: ["Sole Proprietorship Registration", "GST Registration (if exporting services/crossing threshold)", "LUT for GST exemption on exports"],
    roiTimeline: "1-3 months",
    marketingStrategy: ["Dribbble/Behance Portfolio", "Upwork/Fiverr", "Cold Emailing Startups", "LinkedIn Networking"],
    commonPitfalls: ["Not signing contracts", "Failing to define scope (scope creep)", "Pricing too low"],
    suitableFor: { 
      education: ["Design", "HCI", "Self-taught"], 
      experience: ["Freelancing", "Agency Work"], 
      budgetRange: ["Under ₹1L"], 
      skillTags: ["Design", "Communication", "Problem Solving"], 
      interests: ["Art", "Technology", "Psychology"] 
    },
    roadmap: [
      { phase: "Portfolio", duration: "1 month", tasks: ["Create 3 case studies", "Setup website", "Optimize LinkedIn profile"] },
      { phase: "Outreach", duration: "1-2 months", tasks: ["Send daily cold emails", "Apply on Upwork", "Land first 3 retainers"] },
      { phase: "Agency Transition", duration: "Ongoing", tasks: ["Hire freelance support", "Productize services", "Increase pricing"] }
    ],
    unitEconomics: [
      { metric: "Average Project Size", value: "₹1,00,000 - ₹3,00,000" },
      { metric: "Time to Complete", value: "2-4 weeks" },
      { metric: "Software/Tool Costs", value: "₹2,000/month" },
      { metric: "Subcontractor Payout (if any)", value: "30-40%" },
      { metric: "Net Margin", value: "60-90%" }
    ],
    capexBreakdown: [
      { item: "High-Performance Laptop (MacBook)", cost: "₹80,000" },
      { item: "Figma Pro Subscription (Annual)", cost: "₹12,000" },
      { item: "Portfolio Website & Domain", cost: "₹5,000" },
      { item: "Legal/Contract Templates", cost: "₹2,000" },
      { item: "Marketing/Ads (Optional)", cost: "₹1,000" }
    ],
    techStack: [
      { tool: "Figma", purpose: "Design and Prototyping" },
      { tool: "Webflow / Framer", purpose: "No-code website building" },
      { tool: "Notion", purpose: "Project management" }
    ],
    successStory: { name: "Lollypop Design Studio", revenue: "Acquired by Terralogic", description: "Started as a small agency in Bangalore, grew into a global design powerhouse." },
    isActive: true
  },
  {
    name: "Electric Vehicle (EV) Charging Station Business",
    description: "Setting up and operating fast-charging infrastructure for electric 2-wheelers and 4-wheelers. Revenue is generated by charging customers per unit of electricity (kWh) or time spent.",
    category: "Technology",
    investment: { min: 500000, max: 2500000, display: "₹5 Lakh - ₹25 Lakh" },
    riskLevel: "Medium",
    profitPotential: "₹40,000 – ₹1,50,000/month (per station)",
    requiredSkills: ["Real Estate Negotiation", "Basic Electrical Knowledge", "Vendor Management", "Operations"],
    advantages: ["Future-proof industry", "Government subsidies available", "Passive income potential", "First-mover advantage in many areas"],
    challenges: ["High initial capital expenditure", "Dependence on local grid stability", "Evolving technology standards"],
    successTips: ["Secure prime locations (malls, highways, cafes)", "Partner with established network operators (CPOs)", "Ensure 99% uptime"],
    growthPotential: "Massive; scalable by building a network of stations across highways or cities.",
    futureScope: "India aims for 30% EV penetration by 2030, requiring millions of charging points.",
    marketAnalysis: "Rapid adoption of EV two-wheelers and commercial fleets creates urgent need for infrastructure.",
    targetAudience: "EV owners, fleet operators, and electric cab drivers.",
    legalRequirements: ["NOC from DISCOM", "Fire Safety NOC", "Municipal Corporation Approval", "GST Registration", "Compliance with Ministry of Power guidelines"],
    roiTimeline: "24-36 months",
    marketingStrategy: ["Listing on EV apps (PlugShare)", "Tie-ups with fleet operators (BluSmart)", "Visible Signage", "Local SEO"],
    commonPitfalls: ["Choosing low-traffic locations", "Installing outdated slow chargers", "Ignoring maintenance"],
    suitableFor: { 
      education: ["Engineering", "Business"], 
      experience: ["Real Estate", "Operations"], 
      budgetRange: ["₹5L-₹25L"], 
      skillTags: ["Negotiation", "Operations", "Tech-savvy"], 
      interests: ["Clean Tech", "Automotive", "Infrastructure"] 
    },
    roadmap: [
      { phase: "Planning", duration: "1-2 months", tasks: ["Identify location", "Sign lease", "Apply for electricity load", "Select charger vendor"] },
      { phase: "Installation", duration: "1 month", tasks: ["Install transformers/cabling", "Mount chargers", "Test network connectivity"] },
      { phase: "Launch", duration: "Ongoing", tasks: ["List on maps", "Market to local fleets", "Monitor uptime and billing"] }
    ],
    unitEconomics: [
      { metric: "Cost of Electricity (Commercial)", value: "₹6 - ₹8 per kWh" },
      { metric: "Selling Price to Customer", value: "₹15 - ₹20 per kWh" },
      { metric: "Average Units per Day", value: "100 kWh" },
      { metric: "Gross Margin per Unit", value: "₹9 - ₹12" },
      { metric: "Monthly O&M Cost", value: "₹10,000" }
    ],
    capexBreakdown: [
      { item: "DC Fast Charger (50kW)", cost: "₹6,00,000" },
      { item: "AC Slow Chargers (2 units)", cost: "₹1,00,000" },
      { item: "Electrical Infrastructure & Transformer", cost: "₹3,00,000" },
      { item: "Civil Work & Canopy", cost: "₹1,50,000" },
      { item: "Software & App Integration", cost: "₹50,000" }
    ],
    techStack: [
      { tool: "Kazam / Statiq CMS", purpose: "Charge Point Management System" },
      { tool: "PlugShare", purpose: "Customer discovery" },
      { tool: "Razorpay", purpose: "Wallet and payment integration" }
    ],
    successStory: { name: "Statiq", revenue: "Series A Funded", description: "Built one of India's largest EV charging networks by aggregating chargers and partnering with real estate." },
    isActive: true
  },
  {
    name: "Pet Grooming & Care Services",
    description: "Offering premium grooming, day-care, and boarding services for pets (mostly dogs and cats) in urban areas. Can be operated via a mobile van or a physical salon.",
    category: "Services",
    investment: { min: 200000, max: 1000000, display: "₹2 Lakh - ₹10 Lakh" },
    riskLevel: "Low",
    profitPotential: "₹40,000 – ₹1,50,000/month",
    requiredSkills: ["Animal Handling", "Grooming Techniques", "Customer Service", "Patience"],
    advantages: ["High customer loyalty", "Growing pet humanization trend", "Premium pricing for quality service", "Joyful work environment"],
    challenges: ["Dealing with aggressive pets", "Staff retention (trained groomers)", "High operational involvement"],
    successTips: ["Prioritize pet safety above all", "Offer mobile/at-home grooming", "Maintain high hygiene standards"],
    growthPotential: "High; can add retail (pet food/accessories) to increase revenue.",
    futureScope: "The Indian pet care market is growing at ~20% annually, driven by millennial pet parents.",
    marketAnalysis: "Urban pet owners treat pets as family and are willing to spend heavily on their grooming and well-being.",
    targetAudience: "Affluent pet parents in metro and Tier 1 cities.",
    legalRequirements: ["Trade License from Municipality", "Animal Welfare Board Registration (if boarding)", "Veterinary Tie-up (recommended)", "GST Registration"],
    roiTimeline: "12-18 months",
    marketingStrategy: ["Instagram/Reels", "Tie-ups with local vets", "Society WhatsApp groups", "Referral programs"],
    commonPitfalls: ["Hiring untrained groomers", "Poor hygiene leading to infections", "Overbooking leading to stressed animals"],
    suitableFor: { 
      education: ["Pet Grooming Certification"], 
      experience: ["Animal Care"], 
      budgetRange: ["₹2L-₹10L"], 
      skillTags: ["Empathy", "Grooming", "Customer Service"], 
      interests: ["Animals", "Caregiving", "Service"] 
    },
    roadmap: [
      { phase: "Setup", duration: "1-2 months", tasks: ["Get certified", "Find location/van", "Buy grooming equipment", "Setup interior"] },
      { phase: "Launch", duration: "1 month", tasks: ["Partner with local vet", "Run local FB ads", "Offer inaugural discounts"] },
      { phase: "Growth", duration: "Ongoing", tasks: ["Start retail sales", "Introduce loyalty programs", "Hire assistants"] }
    ],
    unitEconomics: [
      { metric: "Average Grooming Ticket", value: "₹1,500 - ₹3,000" },
      { metric: "Shampoo & Consumables Cost", value: "₹200 per pet" },
      { metric: "Groomer Commission (if hired)", value: "30-40%" },
      { metric: "Pets Groomed per Day", value: "5-8" },
      { metric: "Gross Margin", value: "50-60%" }
    ],
    capexBreakdown: [
      { item: "Grooming Tables & Tubs", cost: "₹80,000" },
      { item: "Clippers, Dryers, Shears", cost: "₹50,000" },
      { item: "Interior Setup & Waiting Area", cost: "₹1,50,000" },
      { item: "Initial Consumables (Shampoos)", cost: "₹20,000" },
      { item: "Marketing & Licenses", cost: "₹20,000" }
    ],
    techStack: [
      { tool: "Fresha / Zoho Bookings", purpose: "Appointment scheduling" },
      { tool: "Instagram", purpose: "Visual marketing" },
      { tool: "QuickBooks", purpose: "Accounting" }
    ],
    successStory: { name: "Heads Up For Tails", revenue: "₹150+ Cr", description: "Pioneered luxury pet care and grooming in India." },
    isActive: true
  },
  {
    name: "Handmade Jewellery & Craft Business",
    description: "Designing, manufacturing, and selling unique handcrafted jewellery (resin, terracotta, polymer clay) via Instagram and e-commerce platforms.",
    category: "E-Commerce",
    investment: { min: 5000, max: 30000, display: "₹5K - ₹30K" },
    riskLevel: "Low",
    profitPotential: "₹15,000 – ₹70,000/month",
    requiredSkills: ["Crafting & Artistry", "Social Media Marketing", "Product Photography", "Packaging Design"],
    advantages: ["Extremely low startup cost", "High markup on materials", "Creative freedom", "Can be run from a small room"],
    challenges: ["Scaling production (time-intensive)", "Platform algorithm changes", "Copycats"],
    successTips: ["Create unique, signature designs", "Film aesthetic behind-the-scenes reels", "Focus on premium, unboxing experience"],
    growthPotential: "Moderate; requires hiring artisans to scale beyond personal capacity.",
    futureScope: "Strong trend towards supporting small, homegrown, and artisanal businesses in India.",
    marketAnalysis: "Consumers are moving away from mass-produced fashion towards unique, statement pieces.",
    targetAudience: "Gen Z, college students, and fashion enthusiasts.",
    legalRequirements: ["Udyam Registration (MSME)", "GST Registration (if selling on Amazon/Flipkart)", "Trademark (Optional)"],
    roiTimeline: "1-3 months",
    marketingStrategy: ["Instagram Reels & TikToks", "Influencer Gifting", "Pop-up Flea Markets", "Pinterest Marketing"],
    commonPitfalls: ["Underpricing labor time", "Poor quality raw materials", "Ignoring packaging aesthetics"],
    suitableFor: { 
      education: ["Any"], 
      experience: ["Hobby Crafter", "Design"], 
      budgetRange: ["Under ₹30K"], 
      skillTags: ["Creativity", "Social Media", "Patience"], 
      interests: ["Art", "Fashion", "Crafts"] 
    },
    roadmap: [
      { phase: "Creation", duration: "1 month", tasks: ["Source raw materials", "Create first collection", "Design packaging", "Shoot photos"] },
      { phase: "Launch", duration: "1 month", tasks: ["Setup Instagram Shop", "Post daily reels", "Start taking DM orders"] },
      { phase: "Scale", duration: "Ongoing", tasks: ["Setup Shopify website", "Attend flea markets", "Hire packaging help"] }
    ],
    unitEconomics: [
      { metric: "Average Selling Price", value: "₹499" },
      { metric: "Raw Material Cost", value: "₹50 - ₹100" },
      { metric: "Packaging Cost", value: "₹40" },
      { metric: "Shipping Cost", value: "₹60" },
      { metric: "Gross Margin", value: "60-70%" }
    ],
    capexBreakdown: [
      { item: "Raw Materials (Clay, Resin, Hooks)", cost: "₹10,000" },
      { item: "Tools (Pliers, UV Lamps, Molds)", cost: "₹5,000" },
      { item: "Branded Packaging Boxes", cost: "₹5,000" },
      { item: "Photography Backdrop/Ring Light", cost: "₹3,000" },
      { item: "Initial Marketing/Ads", cost: "₹2,000" }
    ],
    techStack: [
      { tool: "Instagram", purpose: "Primary storefront and marketing" },
      { tool: "Razorpay Payment Links", purpose: "Collecting payments" },
      { tool: "Shiprocket", purpose: "Automated shipping" }
    ],
    successStory: { name: "Quirksmith", revenue: "Bootstrapped to multi-crore", description: "Sisters started creating silver handmade jewellery, built a massive D2C brand." },
    isActive: true
  },
  {
    name: "Kids' Coding / EdTech Bootcamp",
    description: "Offering online or offline coding, robotics, and logical thinking classes for children aged 6-14. Focuses on future-ready skills using scratch, python, and block-based coding.",
    category: "Education",
    investment: { min: 50000, max: 500000, display: "₹50K - ₹5 Lakh" },
    riskLevel: "Medium",
    profitPotential: "₹60,000 – ₹3,00,000/month",
    requiredSkills: ["Curriculum Development", "Basic Programming", "Child Psychology/Pedagogy", "Sales/Convincing Parents"],
    advantages: ["High parental willingness to pay", "Recurring revenue (monthly fees)", "High referral rates", "Socially impactful"],
    challenges: ["Convincing parents of ROI", "Screen-time fatigue among kids", "Finding good tutors"],
    successTips: ["Offer a free trial class", "Host regular hackathons/showcases for parents", "Keep classes interactive and gamified"],
    growthPotential: "High; can scale by franchising or expanding online cohorts.",
    futureScope: "NEP 2020 emphasizes coding in schools, drastically increasing awareness and demand.",
    marketAnalysis: "Indian parents prioritize education and view tech skills as essential for future success.",
    targetAudience: "Parents of children aged 6-14 in Tier 1 and Tier 2 cities.",
    legalRequirements: ["Company/LLP Registration", "GST Registration", "Data Privacy compliance (for minors)", "Curriculum Copyright (Optional)"],
    roiTimeline: "6-12 months",
    marketingStrategy: ["Facebook Ads targeting parents", "School partnerships", "Free workshops in societies", "Parent WhatsApp groups"],
    commonPitfalls: ["Making classes too theoretical", "Poor communication with parents", "High tutor turnover"],
    suitableFor: { 
      education: ["Computer Science", "B.Ed", "Engineering"], 
      experience: ["Teaching", "Software Dev"], 
      budgetRange: ["₹50K-₹5L"], 
      skillTags: ["Teaching", "Coding", "Sales"], 
      interests: ["Education", "Technology", "Children"] 
    },
    roadmap: [
      { phase: "Curriculum", duration: "1-2 months", tasks: ["Design curriculum", "Build learning platform/LMS", "Hire initial tutors", "Create marketing material"] },
      { phase: "Launch", duration: "1 month", tasks: ["Run FB ads for free trials", "Conduct demo classes", "Convert first 50 students"] },
      { phase: "Scale", duration: "Ongoing", tasks: ["Host coding competitions", "Partner with schools", "Automate sales funnel"] }
    ],
    unitEconomics: [
      { metric: "Course Fee (Monthly)", value: "₹2,500 - ₹5,000" },
      { metric: "Tutor Payout per Class", value: "₹300 - ₹500" },
      { metric: "Student to Teacher Ratio", value: "1:4 or 1:1" },
      { metric: "Customer Acquisition Cost", value: "₹1,500 - ₹3,000" },
      { metric: "Gross Margin", value: "50-60%" }
    ],
    capexBreakdown: [
      { item: "LMS & Website Setup", cost: "₹40,000" },
      { item: "Curriculum Development", cost: "₹30,000" },
      { item: "Marketing & Lead Gen Ads", cost: "₹50,000" },
      { item: "Zoom/Software Licenses", cost: "₹10,000" },
      { item: "Legal & Registration", cost: "₹15,000" }
    ],
    techStack: [
      { tool: "Code.org / Scratch", purpose: "Teaching tools" },
      { tool: "Zoom", purpose: "Online classes" },
      { tool: "HubSpot / LeadSquared", purpose: "Sales CRM" }
    ],
    successStory: { name: "WhiteHat Jr", revenue: "Acquired for $300M by BYJU'S", description: "Created massive awareness and market for kids coding in India." },
    isActive: true
  }
];

module.exports = businesses;
