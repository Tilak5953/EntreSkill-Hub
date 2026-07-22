// Ultra-Detailed Business Database with Financial Analytics
const businesses = [
  {
    "name": "Cloud Kitchen (Dark Kitchen)",
    "description": "A delivery-only restaurant operating entirely on aggregator platforms like Zomato and Swiggy. By eliminating front-of-house staff, interior design, and prime real estate costs, cloud kitchens allow founders to achieve operational profitability significantly faster than traditional dine-in restaurants.",
    "category": "Food & Beverages",
    "investment": {
      "min": 150000,
      "max": 500000,
      "display": "₹1,50,000 – ₹5,00,000"
    },
    "riskLevel": "Medium",
    "profitPotential": "₹40,000 – ₹1,50,000/month",
    "requiredSkills": [
      "Kitchen Operations",
      "Food Costing",
      "Digital Marketing",
      "Supply Chain"
    ],
    "advantages": [
      "80% lower overhead vs dine-in",
      "Can run multiple brands (e.g. burgers & pizza) from the same kitchen",
      "Instant customer access via aggregators"
    ],
    "challenges": [
      "High aggregator commissions (22-28%)",
      "Heavy reliance on platform algorithms",
      "Delivery logistics and food temperature maintenance"
    ],
    "successTips": [
      "Optimize menu engineering for items that travel well",
      "Run aggressive Zomato CPC ads during lunch/dinner peaks",
      "Include handwritten notes for customer retention"
    ],
    "growthPotential": "Can scale to a multi-city network using standard operating procedures (SOPs) or franchise out the brand.",
    "futureScope": "The Indian cloud kitchen market is projected to reach $2 Billion by 2025. Massive scope in Tier 2 and Tier 3 cities.",
    "marketAnalysis": "Consumer preference has permanently shifted towards delivery over dining out. 65% of millennials order in at least twice a week.",
    "targetAudience": "Urban professionals, students, and nuclear families looking for quick, hygienic, and affordable meals.",
    "legalRequirements": [
      "FSSAI Registration (State License)",
      "GST Registration",
      "Fire NOC",
      "Shop & Establishment Act"
    ],
    "roiTimeline": "Break-even usually achieved in month 6 to 9.",
    "marketingStrategy": [
      "Zomato/Swiggy In-App Carousel Ads",
      "Instagram Reels of food preparation",
      "Influencer food reviews",
      "Aggressive discounting (BOGO) for first 30 days"
    ],
    "commonPitfalls": [
      "Ignoring food cost percentage (should be < 30%)",
      "Poor packaging causing spillage",
      "Inconsistent taste due to lack of recipes"
    ],
    "suitableFor": {
      "education": [
        "12th",
        "Graduate"
      ],
      "experience": [
        "Intermediate"
      ],
      "budgetRange": [
        "₹50,000 – ₹2,00,000",
        "Above ₹2,00,000"
      ],
      "skillTags": [
        "food",
        "operations",
        "management"
      ],
      "interests": [
        "Culinary",
        "Business Scaling"
      ]
    },
    "roadmap": [
      {
        "phase": "Research & Licensing",
        "duration": "Week 1-2",
        "tasks": [
          "Finalize menu and cuisine",
          "Apply for FSSAI and GST",
          "Scout low-rent commercial space"
        ]
      },
      {
        "phase": "Setup & Equipment",
        "duration": "Week 3-5",
        "tasks": [
          "Purchase commercial equipment",
          "Design standard operating procedures (SOPs)",
          "Setup POS and aggregator integrations"
        ]
      },
      {
        "phase": "Launch & Marketing",
        "duration": "Week 6-8",
        "tasks": [
          "Conduct trial runs",
          "Launch on Zomato/Swiggy",
          "Start aggressive CPC ad campaigns"
        ]
      }
    ],
    "unitEconomics": [
      {
        "metric": "Average Order Value (AOV)",
        "value": "₹350"
      },
      {
        "metric": "Food Cost (COGS)",
        "value": "28% (₹98)"
      },
      {
        "metric": "Packaging Cost",
        "value": "6% (₹21)"
      },
      {
        "metric": "Aggregator Commission",
        "value": "25% (₹87)"
      },
      {
        "metric": "Gross Margin per Order",
        "value": "41% (₹144)"
      }
    ],
    "capexBreakdown": [
      {
        "item": "Commercial Equipment (Ovens, Fryers, Exhaust)",
        "cost": "₹1,80,000"
      },
      {
        "item": "Security Deposit (Rent)",
        "cost": "₹40,000"
      },
      {
        "item": "Licenses (FSSAI, Trade)",
        "cost": "₹15,000"
      },
      {
        "item": "Initial Inventory & Packaging",
        "cost": "₹30,000"
      },
      {
        "item": "Working Capital Buffer",
        "cost": "₹1,00,000"
      }
    ],
    "techStack": [
      {
        "tool": "PetPooja / Posist",
        "purpose": "Billing & Inventory Management"
      },
      {
        "tool": "UrbanPiper",
        "purpose": "Aggregator Menu Syncing"
      },
      {
        "tool": "Canva",
        "purpose": "Menu Design & Social Media"
      }
    ],
    "successStory": {
      "name": "Faasos (Rebel Foods)",
      "revenue": "$1B+ Valuation (Unicorn)",
      "description": "Started as a single wrap shop in Pune, Rebel Foods pivoted to the Cloud Kitchen model. They now run 400+ kitchens globally, operating 45+ brands (Behrouz Biryani, Oven Story) from the exact same physical locations, proving the multi-brand dark kitchen model."
    },
    "isActive": true
  },
  {
    "name": "D2C Skincare Brand",
    "description": "A Direct-to-Consumer (D2C) brand formulating and selling niche skincare products (e.g. vegan, ayurvedic, or chemical-free) directly to customers via a Shopify store and Instagram, bypassing traditional retail distributors.",
    "category": "E-Commerce",
    "investment": {
      "min": 200000,
      "max": 800000,
      "display": "₹2,00,000 – ₹8,00,000"
    },
    "riskLevel": "High",
    "profitPotential": "₹1,00,000 – ₹5,00,000/month",
    "requiredSkills": [
      "Brand Building",
      "Performance Marketing",
      "Supply Chain",
      "Copywriting"
    ],
    "advantages": [
      "High gross margins (70-80%)",
      "Direct relationship and data of customers",
      "Highly scalable via Facebook/Google Ads"
    ],
    "challenges": [
      "Extremely high Customer Acquisition Cost (CAC)",
      "Intense competition",
      "Inventory risk and expiry dates"
    ],
    "successTips": [
      "Focus on a micro-niche (e.g., acne for sensitive skin)",
      "Invest heavily in aesthetic unboxing experiences",
      "Build a subscription model for recurring revenue"
    ],
    "growthPotential": "Can scale to ₹100 Cr+ by expanding product lines, launching on Amazon/Nykaa, and raising VC funding.",
    "futureScope": "The Indian D2C market is booming, expected to hit $100 Billion. Consumers are shifting away from legacy FMCG brands to niche D2C players.",
    "marketAnalysis": "Gen-Z and Millennials prefer purpose-driven, clean-label brands with aesthetic packaging.",
    "targetAudience": "Females aged 18-35, tier-1 and tier-2 cities, middle-to-high income.",
    "legalRequirements": [
      "Cosmetic Manufacturing License (or Third-party Mfg)",
      "Trademark Registration",
      "GST Registration",
      "Company Incorporation (Pvt Ltd)"
    ],
    "roiTimeline": "Break-even on ad-spend typically in month 8 to 12.",
    "marketingStrategy": [
      "Meta Ads (Facebook/Instagram)",
      "Micro-Influencer Seeding",
      "UGC (User Generated Content) TikToks/Reels",
      "Email Marketing (Klaviyo)"
    ],
    "commonPitfalls": [
      "Overspending on branding before product-market fit",
      "Ignoring Customer Lifetime Value (LTV)",
      "High RTO (Return to Origin) rates on Cash-on-Delivery"
    ],
    "suitableFor": {
      "education": [
        "Graduate"
      ],
      "experience": [
        "Advanced"
      ],
      "budgetRange": [
        "Above ₹2,00,000"
      ],
      "skillTags": [
        "marketing",
        "branding",
        "ecommerce"
      ],
      "interests": [
        "Fashion/Beauty",
        "Digital Marketing"
      ]
    },
    "roadmap": [
      {
        "phase": "Product R&D",
        "duration": "Month 1-2",
        "tasks": [
          "Find third-party manufacturer",
          "Finalize formulations",
          "Design packaging"
        ]
      },
      {
        "phase": "Store Setup & Content",
        "duration": "Month 3-4",
        "tasks": [
          "Build Shopify Store",
          "Conduct product photoshoots",
          "Setup social media profiles"
        ]
      },
      {
        "phase": "Launch & Scale",
        "duration": "Month 5-6",
        "tasks": [
          "Launch Meta Ad campaigns",
          "Send PR packages to influencers",
          "Optimize conversion rate"
        ]
      }
    ],
    "unitEconomics": [
      {
        "metric": "Average Order Value (AOV)",
        "value": "₹950"
      },
      {
        "metric": "Cost of Goods (COGS)",
        "value": "20% (₹190)"
      },
      {
        "metric": "Shipping & Fulfillment",
        "value": "10% (₹95)"
      },
      {
        "metric": "Customer Acquisition Cost (CAC)",
        "value": "45% (₹427)"
      },
      {
        "metric": "Net Margin (First Order)",
        "value": "25% (₹238)"
      }
    ],
    "capexBreakdown": [
      {
        "item": "Initial Inventory (MOQ from Manufacturer)",
        "cost": "₹3,00,000"
      },
      {
        "item": "Packaging & Branding Design",
        "cost": "₹50,000"
      },
      {
        "item": "Shopify Setup & App ecosystem",
        "cost": "₹15,000"
      },
      {
        "item": "Trademark & Legal",
        "cost": "₹20,000"
      },
      {
        "item": "Initial Marketing Budget",
        "cost": "₹1,50,000"
      }
    ],
    "techStack": [
      {
        "tool": "Shopify",
        "purpose": "E-Commerce Storefront"
      },
      {
        "tool": "Shiprocket",
        "purpose": "Logistics & RTO Management"
      },
      {
        "tool": "Klaviyo",
        "purpose": "Email & SMS Marketing"
      }
    ],
    "successStory": {
      "name": "Minimalist",
      "revenue": "₹350 Crore ARR",
      "description": "Launched in 2020 as a transparent, science-backed alternative to generic ayurvedic brands. By focusing entirely on active ingredients (like Niacinamide) and avoiding flashy marketing, they hit ₹350 Cr in revenue within 3 years, rivaling legacy FMCG giants."
    },
    "isActive": true
  },
  {
    "name": "B2B Micro-SaaS",
    "description": "A highly focused, niche Software-as-a-Service product designed to solve one specific problem for a specific industry (e.g., automated GST invoicing for freelance designers). It prioritizes profitability and low churn over massive hyper-growth.",
    "category": "Technology",
    "investment": {
      "min": 10000,
      "max": 50000,
      "display": "₹10,000 – ₹50,000"
    },
    "riskLevel": "Low",
    "profitPotential": "₹50,000 – ₹3,00,000/month",
    "requiredSkills": [
      "Full-Stack Development",
      "UI/UX Design",
      "Cold Emailing",
      "SEO"
    ],
    "advantages": [
      "Almost zero marginal cost of reproduction",
      "Recurring subscription revenue (MRR)",
      "Can be built and run by a solo founder"
    ],
    "challenges": [
      "Finding a profitable, underserved niche",
      "High technical barrier to entry",
      "Customer churn and retention"
    ],
    "successTips": [
      "Solve a painful problem people are already paying for with spreadsheets",
      "Launch quickly on ProductHunt and AppSumo",
      "Talk to 50 potential customers before writing code"
    ],
    "growthPotential": "Can scale to $10k-$50k Monthly Recurring Revenue (MRR) and be sold on platforms like Acquire.com for a 4x multiple.",
    "futureScope": "Massive global scope. A SaaS built in India can be sold to customers in the US, earning in Dollars while spending in Rupees.",
    "marketAnalysis": "Businesses are actively looking for specialized tools to cut costs and automate workflows, rather than clunky all-in-one enterprise software.",
    "targetAudience": "Small business owners, agencies, and freelancers globally.",
    "legalRequirements": [
      "Terms of Service & Privacy Policy",
      "Stripe/Razorpay Merchant Account",
      "Sole Proprietorship / LLC"
    ],
    "roiTimeline": "Break-even can be achieved within 2-3 months of launch.",
    "marketingStrategy": [
      "Programmatic SEO",
      "Twitter/LinkedIn Build-in-Public",
      "Cold Email Outreach (Instantly.ai)",
      "Product Hunt Launch"
    ],
    "commonPitfalls": [
      "Building for months without validating the idea",
      "Pricing too low",
      "Ignoring marketing to focus only on coding"
    ],
    "suitableFor": {
      "education": [
        "Graduate"
      ],
      "experience": [
        "Intermediate",
        "Advanced"
      ],
      "budgetRange": [
        "Under ₹50,000"
      ],
      "skillTags": [
        "software",
        "development",
        "marketing"
      ],
      "interests": [
        "Technology",
        "Automation"
      ]
    },
    "roadmap": [
      {
        "phase": "Validation & MVP",
        "duration": "Month 1-2",
        "tasks": [
          "Interview target audience",
          "Build landing page waitlist",
          "Develop core MVP features"
        ]
      },
      {
        "phase": "Beta Launch",
        "duration": "Month 3",
        "tasks": [
          "Onboard 10 beta testers",
          "Fix critical bugs",
          "Setup Stripe billing"
        ]
      },
      {
        "phase": "Public Launch",
        "duration": "Month 4",
        "tasks": [
          "Launch on Product Hunt",
          "Start cold email campaigns",
          "Publish SEO content"
        ]
      }
    ],
    "unitEconomics": [
      {
        "metric": "Monthly Subscription (ARPU)",
        "value": "$49 (₹4,000)"
      },
      {
        "metric": "Server/API Costs per User",
        "value": "5% (₹200)"
      },
      {
        "metric": "Customer Acquisition Cost (CAC)",
        "value": "$100 (₹8,200)"
      },
      {
        "metric": "Average Lifetime (LTV)",
        "value": "18 Months ($882)"
      },
      {
        "metric": "LTV:CAC Ratio",
        "value": "8.8x (Excellent)"
      }
    ],
    "capexBreakdown": [
      {
        "item": "Domain & Hosting (Vercel/AWS)",
        "cost": "₹5,000/yr"
      },
      {
        "item": "Legal/Terms Templates",
        "cost": "₹2,000"
      },
      {
        "item": "SaaS Boilerplate (ShipFast)",
        "cost": "₹12,000"
      },
      {
        "item": "Marketing Tools (Email/Social)",
        "cost": "₹15,000"
      },
      {
        "item": "Development Time (Sweat Equity)",
        "cost": "₹0"
      }
    ],
    "techStack": [
      {
        "tool": "Next.js + Tailwind",
        "purpose": "Frontend Framework"
      },
      {
        "tool": "Supabase / MongoDB",
        "purpose": "Database & Auth"
      },
      {
        "tool": "Stripe",
        "purpose": "Subscription Billing"
      }
    ],
    "successStory": {
      "name": "Bhanu Teja (Siteoly)",
      "revenue": "$10k+ MRR as a Solo Founder",
      "description": "Bhanu built Siteoly, a tool to create websites from Notion databases. Without any funding or employees, he scaled it to over $10,000 per month in recurring revenue just by marketing on Twitter and leveraging SEO."
    },
    "isActive": true
  },
  {
    "name": "Business Idea Prototype 1",
    "description": "A delivery-only restaurant operating entirely on aggregator platforms like Zomato and Swiggy. By eliminating front-of-house staff, interior design, and prime real estate costs, cloud kitchens allow founders to achieve operational profitability significantly faster than traditional dine-in restaurants.",
    "category": "Food & Beverages",
    "investment": {
      "min": 150000,
      "max": 500000,
      "display": "₹1,50,000 – ₹5,00,000"
    },
    "riskLevel": "Medium",
    "profitPotential": "₹40,000 – ₹1,50,000/month",
    "requiredSkills": [
      "Kitchen Operations",
      "Food Costing",
      "Digital Marketing",
      "Supply Chain"
    ],
    "advantages": [
      "80% lower overhead vs dine-in",
      "Can run multiple brands (e.g. burgers & pizza) from the same kitchen",
      "Instant customer access via aggregators"
    ],
    "challenges": [
      "High aggregator commissions (22-28%)",
      "Heavy reliance on platform algorithms",
      "Delivery logistics and food temperature maintenance"
    ],
    "successTips": [
      "Optimize menu engineering for items that travel well",
      "Run aggressive Zomato CPC ads during lunch/dinner peaks",
      "Include handwritten notes for customer retention"
    ],
    "growthPotential": "Can scale to a multi-city network using standard operating procedures (SOPs) or franchise out the brand.",
    "futureScope": "The Indian cloud kitchen market is projected to reach $2 Billion by 2025. Massive scope in Tier 2 and Tier 3 cities.",
    "marketAnalysis": "Consumer preference has permanently shifted towards delivery over dining out. 65% of millennials order in at least twice a week.",
    "targetAudience": "Urban professionals, students, and nuclear families looking for quick, hygienic, and affordable meals.",
    "legalRequirements": [
      "FSSAI Registration (State License)",
      "GST Registration",
      "Fire NOC",
      "Shop & Establishment Act"
    ],
    "roiTimeline": "Break-even usually achieved in month 6 to 9.",
    "marketingStrategy": [
      "Zomato/Swiggy In-App Carousel Ads",
      "Instagram Reels of food preparation",
      "Influencer food reviews",
      "Aggressive discounting (BOGO) for first 30 days"
    ],
    "commonPitfalls": [
      "Ignoring food cost percentage (should be < 30%)",
      "Poor packaging causing spillage",
      "Inconsistent taste due to lack of recipes"
    ],
    "suitableFor": {
      "education": [
        "12th",
        "Graduate"
      ],
      "experience": [
        "Intermediate"
      ],
      "budgetRange": [
        "₹50,000 – ₹2,00,000",
        "Above ₹2,00,000"
      ],
      "skillTags": [
        "food",
        "operations",
        "management"
      ],
      "interests": [
        "Culinary",
        "Business Scaling"
      ]
    },
    "roadmap": [
      {
        "phase": "Research & Licensing",
        "duration": "Week 1-2",
        "tasks": [
          "Finalize menu and cuisine",
          "Apply for FSSAI and GST",
          "Scout low-rent commercial space"
        ]
      },
      {
        "phase": "Setup & Equipment",
        "duration": "Week 3-5",
        "tasks": [
          "Purchase commercial equipment",
          "Design standard operating procedures (SOPs)",
          "Setup POS and aggregator integrations"
        ]
      },
      {
        "phase": "Launch & Marketing",
        "duration": "Week 6-8",
        "tasks": [
          "Conduct trial runs",
          "Launch on Zomato/Swiggy",
          "Start aggressive CPC ad campaigns"
        ]
      }
    ],
    "unitEconomics": [
      {
        "metric": "Average Order Value (AOV)",
        "value": "₹350"
      },
      {
        "metric": "Food Cost (COGS)",
        "value": "28% (₹98)"
      },
      {
        "metric": "Packaging Cost",
        "value": "6% (₹21)"
      },
      {
        "metric": "Aggregator Commission",
        "value": "25% (₹87)"
      },
      {
        "metric": "Gross Margin per Order",
        "value": "41% (₹144)"
      }
    ],
    "capexBreakdown": [
      {
        "item": "Commercial Equipment (Ovens, Fryers, Exhaust)",
        "cost": "₹1,80,000"
      },
      {
        "item": "Security Deposit (Rent)",
        "cost": "₹40,000"
      },
      {
        "item": "Licenses (FSSAI, Trade)",
        "cost": "₹15,000"
      },
      {
        "item": "Initial Inventory & Packaging",
        "cost": "₹30,000"
      },
      {
        "item": "Working Capital Buffer",
        "cost": "₹1,00,000"
      }
    ],
    "techStack": [
      {
        "tool": "PetPooja / Posist",
        "purpose": "Billing & Inventory Management"
      },
      {
        "tool": "UrbanPiper",
        "purpose": "Aggregator Menu Syncing"
      },
      {
        "tool": "Canva",
        "purpose": "Menu Design & Social Media"
      }
    ],
    "successStory": {
      "name": "Faasos (Rebel Foods)",
      "revenue": "$1B+ Valuation (Unicorn)",
      "description": "Started as a single wrap shop in Pune, Rebel Foods pivoted to the Cloud Kitchen model. They now run 400+ kitchens globally, operating 45+ brands (Behrouz Biryani, Oven Story) from the exact same physical locations, proving the multi-brand dark kitchen model."
    },
    "isActive": true
  },
  {
    "name": "Business Idea Prototype 2",
    "description": "A delivery-only restaurant operating entirely on aggregator platforms like Zomato and Swiggy. By eliminating front-of-house staff, interior design, and prime real estate costs, cloud kitchens allow founders to achieve operational profitability significantly faster than traditional dine-in restaurants.",
    "category": "Services",
    "investment": {
      "min": 150000,
      "max": 500000,
      "display": "₹1,50,000 – ₹5,00,000"
    },
    "riskLevel": "Medium",
    "profitPotential": "₹40,000 – ₹1,50,000/month",
    "requiredSkills": [
      "Kitchen Operations",
      "Food Costing",
      "Digital Marketing",
      "Supply Chain"
    ],
    "advantages": [
      "80% lower overhead vs dine-in",
      "Can run multiple brands (e.g. burgers & pizza) from the same kitchen",
      "Instant customer access via aggregators"
    ],
    "challenges": [
      "High aggregator commissions (22-28%)",
      "Heavy reliance on platform algorithms",
      "Delivery logistics and food temperature maintenance"
    ],
    "successTips": [
      "Optimize menu engineering for items that travel well",
      "Run aggressive Zomato CPC ads during lunch/dinner peaks",
      "Include handwritten notes for customer retention"
    ],
    "growthPotential": "Can scale to a multi-city network using standard operating procedures (SOPs) or franchise out the brand.",
    "futureScope": "The Indian cloud kitchen market is projected to reach $2 Billion by 2025. Massive scope in Tier 2 and Tier 3 cities.",
    "marketAnalysis": "Consumer preference has permanently shifted towards delivery over dining out. 65% of millennials order in at least twice a week.",
    "targetAudience": "Urban professionals, students, and nuclear families looking for quick, hygienic, and affordable meals.",
    "legalRequirements": [
      "FSSAI Registration (State License)",
      "GST Registration",
      "Fire NOC",
      "Shop & Establishment Act"
    ],
    "roiTimeline": "Break-even usually achieved in month 6 to 9.",
    "marketingStrategy": [
      "Zomato/Swiggy In-App Carousel Ads",
      "Instagram Reels of food preparation",
      "Influencer food reviews",
      "Aggressive discounting (BOGO) for first 30 days"
    ],
    "commonPitfalls": [
      "Ignoring food cost percentage (should be < 30%)",
      "Poor packaging causing spillage",
      "Inconsistent taste due to lack of recipes"
    ],
    "suitableFor": {
      "education": [
        "12th",
        "Graduate"
      ],
      "experience": [
        "Intermediate"
      ],
      "budgetRange": [
        "₹50,000 – ₹2,00,000",
        "Above ₹2,00,000"
      ],
      "skillTags": [
        "food",
        "operations",
        "management"
      ],
      "interests": [
        "Culinary",
        "Business Scaling"
      ]
    },
    "roadmap": [
      {
        "phase": "Research & Licensing",
        "duration": "Week 1-2",
        "tasks": [
          "Finalize menu and cuisine",
          "Apply for FSSAI and GST",
          "Scout low-rent commercial space"
        ]
      },
      {
        "phase": "Setup & Equipment",
        "duration": "Week 3-5",
        "tasks": [
          "Purchase commercial equipment",
          "Design standard operating procedures (SOPs)",
          "Setup POS and aggregator integrations"
        ]
      },
      {
        "phase": "Launch & Marketing",
        "duration": "Week 6-8",
        "tasks": [
          "Conduct trial runs",
          "Launch on Zomato/Swiggy",
          "Start aggressive CPC ad campaigns"
        ]
      }
    ],
    "unitEconomics": [
      {
        "metric": "Average Order Value (AOV)",
        "value": "₹350"
      },
      {
        "metric": "Food Cost (COGS)",
        "value": "28% (₹98)"
      },
      {
        "metric": "Packaging Cost",
        "value": "6% (₹21)"
      },
      {
        "metric": "Aggregator Commission",
        "value": "25% (₹87)"
      },
      {
        "metric": "Gross Margin per Order",
        "value": "41% (₹144)"
      }
    ],
    "capexBreakdown": [
      {
        "item": "Commercial Equipment (Ovens, Fryers, Exhaust)",
        "cost": "₹1,80,000"
      },
      {
        "item": "Security Deposit (Rent)",
        "cost": "₹40,000"
      },
      {
        "item": "Licenses (FSSAI, Trade)",
        "cost": "₹15,000"
      },
      {
        "item": "Initial Inventory & Packaging",
        "cost": "₹30,000"
      },
      {
        "item": "Working Capital Buffer",
        "cost": "₹1,00,000"
      }
    ],
    "techStack": [
      {
        "tool": "PetPooja / Posist",
        "purpose": "Billing & Inventory Management"
      },
      {
        "tool": "UrbanPiper",
        "purpose": "Aggregator Menu Syncing"
      },
      {
        "tool": "Canva",
        "purpose": "Menu Design & Social Media"
      }
    ],
    "successStory": {
      "name": "Faasos (Rebel Foods)",
      "revenue": "$1B+ Valuation (Unicorn)",
      "description": "Started as a single wrap shop in Pune, Rebel Foods pivoted to the Cloud Kitchen model. They now run 400+ kitchens globally, operating 45+ brands (Behrouz Biryani, Oven Story) from the exact same physical locations, proving the multi-brand dark kitchen model."
    },
    "isActive": true
  },
  {
    "name": "Business Idea Prototype 3",
    "description": "A delivery-only restaurant operating entirely on aggregator platforms like Zomato and Swiggy. By eliminating front-of-house staff, interior design, and prime real estate costs, cloud kitchens allow founders to achieve operational profitability significantly faster than traditional dine-in restaurants.",
    "category": "Technology",
    "investment": {
      "min": 150000,
      "max": 500000,
      "display": "₹1,50,000 – ₹5,00,000"
    },
    "riskLevel": "Medium",
    "profitPotential": "₹40,000 – ₹1,50,000/month",
    "requiredSkills": [
      "Kitchen Operations",
      "Food Costing",
      "Digital Marketing",
      "Supply Chain"
    ],
    "advantages": [
      "80% lower overhead vs dine-in",
      "Can run multiple brands (e.g. burgers & pizza) from the same kitchen",
      "Instant customer access via aggregators"
    ],
    "challenges": [
      "High aggregator commissions (22-28%)",
      "Heavy reliance on platform algorithms",
      "Delivery logistics and food temperature maintenance"
    ],
    "successTips": [
      "Optimize menu engineering for items that travel well",
      "Run aggressive Zomato CPC ads during lunch/dinner peaks",
      "Include handwritten notes for customer retention"
    ],
    "growthPotential": "Can scale to a multi-city network using standard operating procedures (SOPs) or franchise out the brand.",
    "futureScope": "The Indian cloud kitchen market is projected to reach $2 Billion by 2025. Massive scope in Tier 2 and Tier 3 cities.",
    "marketAnalysis": "Consumer preference has permanently shifted towards delivery over dining out. 65% of millennials order in at least twice a week.",
    "targetAudience": "Urban professionals, students, and nuclear families looking for quick, hygienic, and affordable meals.",
    "legalRequirements": [
      "FSSAI Registration (State License)",
      "GST Registration",
      "Fire NOC",
      "Shop & Establishment Act"
    ],
    "roiTimeline": "Break-even usually achieved in month 6 to 9.",
    "marketingStrategy": [
      "Zomato/Swiggy In-App Carousel Ads",
      "Instagram Reels of food preparation",
      "Influencer food reviews",
      "Aggressive discounting (BOGO) for first 30 days"
    ],
    "commonPitfalls": [
      "Ignoring food cost percentage (should be < 30%)",
      "Poor packaging causing spillage",
      "Inconsistent taste due to lack of recipes"
    ],
    "suitableFor": {
      "education": [
        "12th",
        "Graduate"
      ],
      "experience": [
        "Intermediate"
      ],
      "budgetRange": [
        "₹50,000 – ₹2,00,000",
        "Above ₹2,00,000"
      ],
      "skillTags": [
        "food",
        "operations",
        "management"
      ],
      "interests": [
        "Culinary",
        "Business Scaling"
      ]
    },
    "roadmap": [
      {
        "phase": "Research & Licensing",
        "duration": "Week 1-2",
        "tasks": [
          "Finalize menu and cuisine",
          "Apply for FSSAI and GST",
          "Scout low-rent commercial space"
        ]
      },
      {
        "phase": "Setup & Equipment",
        "duration": "Week 3-5",
        "tasks": [
          "Purchase commercial equipment",
          "Design standard operating procedures (SOPs)",
          "Setup POS and aggregator integrations"
        ]
      },
      {
        "phase": "Launch & Marketing",
        "duration": "Week 6-8",
        "tasks": [
          "Conduct trial runs",
          "Launch on Zomato/Swiggy",
          "Start aggressive CPC ad campaigns"
        ]
      }
    ],
    "unitEconomics": [
      {
        "metric": "Average Order Value (AOV)",
        "value": "₹350"
      },
      {
        "metric": "Food Cost (COGS)",
        "value": "28% (₹98)"
      },
      {
        "metric": "Packaging Cost",
        "value": "6% (₹21)"
      },
      {
        "metric": "Aggregator Commission",
        "value": "25% (₹87)"
      },
      {
        "metric": "Gross Margin per Order",
        "value": "41% (₹144)"
      }
    ],
    "capexBreakdown": [
      {
        "item": "Commercial Equipment (Ovens, Fryers, Exhaust)",
        "cost": "₹1,80,000"
      },
      {
        "item": "Security Deposit (Rent)",
        "cost": "₹40,000"
      },
      {
        "item": "Licenses (FSSAI, Trade)",
        "cost": "₹15,000"
      },
      {
        "item": "Initial Inventory & Packaging",
        "cost": "₹30,000"
      },
      {
        "item": "Working Capital Buffer",
        "cost": "₹1,00,000"
      }
    ],
    "techStack": [
      {
        "tool": "PetPooja / Posist",
        "purpose": "Billing & Inventory Management"
      },
      {
        "tool": "UrbanPiper",
        "purpose": "Aggregator Menu Syncing"
      },
      {
        "tool": "Canva",
        "purpose": "Menu Design & Social Media"
      }
    ],
    "successStory": {
      "name": "Faasos (Rebel Foods)",
      "revenue": "$1B+ Valuation (Unicorn)",
      "description": "Started as a single wrap shop in Pune, Rebel Foods pivoted to the Cloud Kitchen model. They now run 400+ kitchens globally, operating 45+ brands (Behrouz Biryani, Oven Story) from the exact same physical locations, proving the multi-brand dark kitchen model."
    },
    "isActive": true
  },
  {
    "name": "Business Idea Prototype 4",
    "description": "A delivery-only restaurant operating entirely on aggregator platforms like Zomato and Swiggy. By eliminating front-of-house staff, interior design, and prime real estate costs, cloud kitchens allow founders to achieve operational profitability significantly faster than traditional dine-in restaurants.",
    "category": "Retail",
    "investment": {
      "min": 150000,
      "max": 500000,
      "display": "₹1,50,000 – ₹5,00,000"
    },
    "riskLevel": "Medium",
    "profitPotential": "₹40,000 – ₹1,50,000/month",
    "requiredSkills": [
      "Kitchen Operations",
      "Food Costing",
      "Digital Marketing",
      "Supply Chain"
    ],
    "advantages": [
      "80% lower overhead vs dine-in",
      "Can run multiple brands (e.g. burgers & pizza) from the same kitchen",
      "Instant customer access via aggregators"
    ],
    "challenges": [
      "High aggregator commissions (22-28%)",
      "Heavy reliance on platform algorithms",
      "Delivery logistics and food temperature maintenance"
    ],
    "successTips": [
      "Optimize menu engineering for items that travel well",
      "Run aggressive Zomato CPC ads during lunch/dinner peaks",
      "Include handwritten notes for customer retention"
    ],
    "growthPotential": "Can scale to a multi-city network using standard operating procedures (SOPs) or franchise out the brand.",
    "futureScope": "The Indian cloud kitchen market is projected to reach $2 Billion by 2025. Massive scope in Tier 2 and Tier 3 cities.",
    "marketAnalysis": "Consumer preference has permanently shifted towards delivery over dining out. 65% of millennials order in at least twice a week.",
    "targetAudience": "Urban professionals, students, and nuclear families looking for quick, hygienic, and affordable meals.",
    "legalRequirements": [
      "FSSAI Registration (State License)",
      "GST Registration",
      "Fire NOC",
      "Shop & Establishment Act"
    ],
    "roiTimeline": "Break-even usually achieved in month 6 to 9.",
    "marketingStrategy": [
      "Zomato/Swiggy In-App Carousel Ads",
      "Instagram Reels of food preparation",
      "Influencer food reviews",
      "Aggressive discounting (BOGO) for first 30 days"
    ],
    "commonPitfalls": [
      "Ignoring food cost percentage (should be < 30%)",
      "Poor packaging causing spillage",
      "Inconsistent taste due to lack of recipes"
    ],
    "suitableFor": {
      "education": [
        "12th",
        "Graduate"
      ],
      "experience": [
        "Intermediate"
      ],
      "budgetRange": [
        "₹50,000 – ₹2,00,000",
        "Above ₹2,00,000"
      ],
      "skillTags": [
        "food",
        "operations",
        "management"
      ],
      "interests": [
        "Culinary",
        "Business Scaling"
      ]
    },
    "roadmap": [
      {
        "phase": "Research & Licensing",
        "duration": "Week 1-2",
        "tasks": [
          "Finalize menu and cuisine",
          "Apply for FSSAI and GST",
          "Scout low-rent commercial space"
        ]
      },
      {
        "phase": "Setup & Equipment",
        "duration": "Week 3-5",
        "tasks": [
          "Purchase commercial equipment",
          "Design standard operating procedures (SOPs)",
          "Setup POS and aggregator integrations"
        ]
      },
      {
        "phase": "Launch & Marketing",
        "duration": "Week 6-8",
        "tasks": [
          "Conduct trial runs",
          "Launch on Zomato/Swiggy",
          "Start aggressive CPC ad campaigns"
        ]
      }
    ],
    "unitEconomics": [
      {
        "metric": "Average Order Value (AOV)",
        "value": "₹350"
      },
      {
        "metric": "Food Cost (COGS)",
        "value": "28% (₹98)"
      },
      {
        "metric": "Packaging Cost",
        "value": "6% (₹21)"
      },
      {
        "metric": "Aggregator Commission",
        "value": "25% (₹87)"
      },
      {
        "metric": "Gross Margin per Order",
        "value": "41% (₹144)"
      }
    ],
    "capexBreakdown": [
      {
        "item": "Commercial Equipment (Ovens, Fryers, Exhaust)",
        "cost": "₹1,80,000"
      },
      {
        "item": "Security Deposit (Rent)",
        "cost": "₹40,000"
      },
      {
        "item": "Licenses (FSSAI, Trade)",
        "cost": "₹15,000"
      },
      {
        "item": "Initial Inventory & Packaging",
        "cost": "₹30,000"
      },
      {
        "item": "Working Capital Buffer",
        "cost": "₹1,00,000"
      }
    ],
    "techStack": [
      {
        "tool": "PetPooja / Posist",
        "purpose": "Billing & Inventory Management"
      },
      {
        "tool": "UrbanPiper",
        "purpose": "Aggregator Menu Syncing"
      },
      {
        "tool": "Canva",
        "purpose": "Menu Design & Social Media"
      }
    ],
    "successStory": {
      "name": "Faasos (Rebel Foods)",
      "revenue": "$1B+ Valuation (Unicorn)",
      "description": "Started as a single wrap shop in Pune, Rebel Foods pivoted to the Cloud Kitchen model. They now run 400+ kitchens globally, operating 45+ brands (Behrouz Biryani, Oven Story) from the exact same physical locations, proving the multi-brand dark kitchen model."
    },
    "isActive": true
  },
  {
    "name": "Business Idea Prototype 5",
    "description": "A delivery-only restaurant operating entirely on aggregator platforms like Zomato and Swiggy. By eliminating front-of-house staff, interior design, and prime real estate costs, cloud kitchens allow founders to achieve operational profitability significantly faster than traditional dine-in restaurants.",
    "category": "E-Commerce",
    "investment": {
      "min": 150000,
      "max": 500000,
      "display": "₹1,50,000 – ₹5,00,000"
    },
    "riskLevel": "Medium",
    "profitPotential": "₹40,000 – ₹1,50,000/month",
    "requiredSkills": [
      "Kitchen Operations",
      "Food Costing",
      "Digital Marketing",
      "Supply Chain"
    ],
    "advantages": [
      "80% lower overhead vs dine-in",
      "Can run multiple brands (e.g. burgers & pizza) from the same kitchen",
      "Instant customer access via aggregators"
    ],
    "challenges": [
      "High aggregator commissions (22-28%)",
      "Heavy reliance on platform algorithms",
      "Delivery logistics and food temperature maintenance"
    ],
    "successTips": [
      "Optimize menu engineering for items that travel well",
      "Run aggressive Zomato CPC ads during lunch/dinner peaks",
      "Include handwritten notes for customer retention"
    ],
    "growthPotential": "Can scale to a multi-city network using standard operating procedures (SOPs) or franchise out the brand.",
    "futureScope": "The Indian cloud kitchen market is projected to reach $2 Billion by 2025. Massive scope in Tier 2 and Tier 3 cities.",
    "marketAnalysis": "Consumer preference has permanently shifted towards delivery over dining out. 65% of millennials order in at least twice a week.",
    "targetAudience": "Urban professionals, students, and nuclear families looking for quick, hygienic, and affordable meals.",
    "legalRequirements": [
      "FSSAI Registration (State License)",
      "GST Registration",
      "Fire NOC",
      "Shop & Establishment Act"
    ],
    "roiTimeline": "Break-even usually achieved in month 6 to 9.",
    "marketingStrategy": [
      "Zomato/Swiggy In-App Carousel Ads",
      "Instagram Reels of food preparation",
      "Influencer food reviews",
      "Aggressive discounting (BOGO) for first 30 days"
    ],
    "commonPitfalls": [
      "Ignoring food cost percentage (should be < 30%)",
      "Poor packaging causing spillage",
      "Inconsistent taste due to lack of recipes"
    ],
    "suitableFor": {
      "education": [
        "12th",
        "Graduate"
      ],
      "experience": [
        "Intermediate"
      ],
      "budgetRange": [
        "₹50,000 – ₹2,00,000",
        "Above ₹2,00,000"
      ],
      "skillTags": [
        "food",
        "operations",
        "management"
      ],
      "interests": [
        "Culinary",
        "Business Scaling"
      ]
    },
    "roadmap": [
      {
        "phase": "Research & Licensing",
        "duration": "Week 1-2",
        "tasks": [
          "Finalize menu and cuisine",
          "Apply for FSSAI and GST",
          "Scout low-rent commercial space"
        ]
      },
      {
        "phase": "Setup & Equipment",
        "duration": "Week 3-5",
        "tasks": [
          "Purchase commercial equipment",
          "Design standard operating procedures (SOPs)",
          "Setup POS and aggregator integrations"
        ]
      },
      {
        "phase": "Launch & Marketing",
        "duration": "Week 6-8",
        "tasks": [
          "Conduct trial runs",
          "Launch on Zomato/Swiggy",
          "Start aggressive CPC ad campaigns"
        ]
      }
    ],
    "unitEconomics": [
      {
        "metric": "Average Order Value (AOV)",
        "value": "₹350"
      },
      {
        "metric": "Food Cost (COGS)",
        "value": "28% (₹98)"
      },
      {
        "metric": "Packaging Cost",
        "value": "6% (₹21)"
      },
      {
        "metric": "Aggregator Commission",
        "value": "25% (₹87)"
      },
      {
        "metric": "Gross Margin per Order",
        "value": "41% (₹144)"
      }
    ],
    "capexBreakdown": [
      {
        "item": "Commercial Equipment (Ovens, Fryers, Exhaust)",
        "cost": "₹1,80,000"
      },
      {
        "item": "Security Deposit (Rent)",
        "cost": "₹40,000"
      },
      {
        "item": "Licenses (FSSAI, Trade)",
        "cost": "₹15,000"
      },
      {
        "item": "Initial Inventory & Packaging",
        "cost": "₹30,000"
      },
      {
        "item": "Working Capital Buffer",
        "cost": "₹1,00,000"
      }
    ],
    "techStack": [
      {
        "tool": "PetPooja / Posist",
        "purpose": "Billing & Inventory Management"
      },
      {
        "tool": "UrbanPiper",
        "purpose": "Aggregator Menu Syncing"
      },
      {
        "tool": "Canva",
        "purpose": "Menu Design & Social Media"
      }
    ],
    "successStory": {
      "name": "Faasos (Rebel Foods)",
      "revenue": "$1B+ Valuation (Unicorn)",
      "description": "Started as a single wrap shop in Pune, Rebel Foods pivoted to the Cloud Kitchen model. They now run 400+ kitchens globally, operating 45+ brands (Behrouz Biryani, Oven Story) from the exact same physical locations, proving the multi-brand dark kitchen model."
    },
    "isActive": true
  },
  {
    "name": "Business Idea Prototype 6",
    "description": "A delivery-only restaurant operating entirely on aggregator platforms like Zomato and Swiggy. By eliminating front-of-house staff, interior design, and prime real estate costs, cloud kitchens allow founders to achieve operational profitability significantly faster than traditional dine-in restaurants.",
    "category": "Food & Beverages",
    "investment": {
      "min": 150000,
      "max": 500000,
      "display": "₹1,50,000 – ₹5,00,000"
    },
    "riskLevel": "Medium",
    "profitPotential": "₹40,000 – ₹1,50,000/month",
    "requiredSkills": [
      "Kitchen Operations",
      "Food Costing",
      "Digital Marketing",
      "Supply Chain"
    ],
    "advantages": [
      "80% lower overhead vs dine-in",
      "Can run multiple brands (e.g. burgers & pizza) from the same kitchen",
      "Instant customer access via aggregators"
    ],
    "challenges": [
      "High aggregator commissions (22-28%)",
      "Heavy reliance on platform algorithms",
      "Delivery logistics and food temperature maintenance"
    ],
    "successTips": [
      "Optimize menu engineering for items that travel well",
      "Run aggressive Zomato CPC ads during lunch/dinner peaks",
      "Include handwritten notes for customer retention"
    ],
    "growthPotential": "Can scale to a multi-city network using standard operating procedures (SOPs) or franchise out the brand.",
    "futureScope": "The Indian cloud kitchen market is projected to reach $2 Billion by 2025. Massive scope in Tier 2 and Tier 3 cities.",
    "marketAnalysis": "Consumer preference has permanently shifted towards delivery over dining out. 65% of millennials order in at least twice a week.",
    "targetAudience": "Urban professionals, students, and nuclear families looking for quick, hygienic, and affordable meals.",
    "legalRequirements": [
      "FSSAI Registration (State License)",
      "GST Registration",
      "Fire NOC",
      "Shop & Establishment Act"
    ],
    "roiTimeline": "Break-even usually achieved in month 6 to 9.",
    "marketingStrategy": [
      "Zomato/Swiggy In-App Carousel Ads",
      "Instagram Reels of food preparation",
      "Influencer food reviews",
      "Aggressive discounting (BOGO) for first 30 days"
    ],
    "commonPitfalls": [
      "Ignoring food cost percentage (should be < 30%)",
      "Poor packaging causing spillage",
      "Inconsistent taste due to lack of recipes"
    ],
    "suitableFor": {
      "education": [
        "12th",
        "Graduate"
      ],
      "experience": [
        "Intermediate"
      ],
      "budgetRange": [
        "₹50,000 – ₹2,00,000",
        "Above ₹2,00,000"
      ],
      "skillTags": [
        "food",
        "operations",
        "management"
      ],
      "interests": [
        "Culinary",
        "Business Scaling"
      ]
    },
    "roadmap": [
      {
        "phase": "Research & Licensing",
        "duration": "Week 1-2",
        "tasks": [
          "Finalize menu and cuisine",
          "Apply for FSSAI and GST",
          "Scout low-rent commercial space"
        ]
      },
      {
        "phase": "Setup & Equipment",
        "duration": "Week 3-5",
        "tasks": [
          "Purchase commercial equipment",
          "Design standard operating procedures (SOPs)",
          "Setup POS and aggregator integrations"
        ]
      },
      {
        "phase": "Launch & Marketing",
        "duration": "Week 6-8",
        "tasks": [
          "Conduct trial runs",
          "Launch on Zomato/Swiggy",
          "Start aggressive CPC ad campaigns"
        ]
      }
    ],
    "unitEconomics": [
      {
        "metric": "Average Order Value (AOV)",
        "value": "₹350"
      },
      {
        "metric": "Food Cost (COGS)",
        "value": "28% (₹98)"
      },
      {
        "metric": "Packaging Cost",
        "value": "6% (₹21)"
      },
      {
        "metric": "Aggregator Commission",
        "value": "25% (₹87)"
      },
      {
        "metric": "Gross Margin per Order",
        "value": "41% (₹144)"
      }
    ],
    "capexBreakdown": [
      {
        "item": "Commercial Equipment (Ovens, Fryers, Exhaust)",
        "cost": "₹1,80,000"
      },
      {
        "item": "Security Deposit (Rent)",
        "cost": "₹40,000"
      },
      {
        "item": "Licenses (FSSAI, Trade)",
        "cost": "₹15,000"
      },
      {
        "item": "Initial Inventory & Packaging",
        "cost": "₹30,000"
      },
      {
        "item": "Working Capital Buffer",
        "cost": "₹1,00,000"
      }
    ],
    "techStack": [
      {
        "tool": "PetPooja / Posist",
        "purpose": "Billing & Inventory Management"
      },
      {
        "tool": "UrbanPiper",
        "purpose": "Aggregator Menu Syncing"
      },
      {
        "tool": "Canva",
        "purpose": "Menu Design & Social Media"
      }
    ],
    "successStory": {
      "name": "Faasos (Rebel Foods)",
      "revenue": "$1B+ Valuation (Unicorn)",
      "description": "Started as a single wrap shop in Pune, Rebel Foods pivoted to the Cloud Kitchen model. They now run 400+ kitchens globally, operating 45+ brands (Behrouz Biryani, Oven Story) from the exact same physical locations, proving the multi-brand dark kitchen model."
    },
    "isActive": true
  },
  {
    "name": "Business Idea Prototype 7",
    "description": "A delivery-only restaurant operating entirely on aggregator platforms like Zomato and Swiggy. By eliminating front-of-house staff, interior design, and prime real estate costs, cloud kitchens allow founders to achieve operational profitability significantly faster than traditional dine-in restaurants.",
    "category": "Services",
    "investment": {
      "min": 150000,
      "max": 500000,
      "display": "₹1,50,000 – ₹5,00,000"
    },
    "riskLevel": "Medium",
    "profitPotential": "₹40,000 – ₹1,50,000/month",
    "requiredSkills": [
      "Kitchen Operations",
      "Food Costing",
      "Digital Marketing",
      "Supply Chain"
    ],
    "advantages": [
      "80% lower overhead vs dine-in",
      "Can run multiple brands (e.g. burgers & pizza) from the same kitchen",
      "Instant customer access via aggregators"
    ],
    "challenges": [
      "High aggregator commissions (22-28%)",
      "Heavy reliance on platform algorithms",
      "Delivery logistics and food temperature maintenance"
    ],
    "successTips": [
      "Optimize menu engineering for items that travel well",
      "Run aggressive Zomato CPC ads during lunch/dinner peaks",
      "Include handwritten notes for customer retention"
    ],
    "growthPotential": "Can scale to a multi-city network using standard operating procedures (SOPs) or franchise out the brand.",
    "futureScope": "The Indian cloud kitchen market is projected to reach $2 Billion by 2025. Massive scope in Tier 2 and Tier 3 cities.",
    "marketAnalysis": "Consumer preference has permanently shifted towards delivery over dining out. 65% of millennials order in at least twice a week.",
    "targetAudience": "Urban professionals, students, and nuclear families looking for quick, hygienic, and affordable meals.",
    "legalRequirements": [
      "FSSAI Registration (State License)",
      "GST Registration",
      "Fire NOC",
      "Shop & Establishment Act"
    ],
    "roiTimeline": "Break-even usually achieved in month 6 to 9.",
    "marketingStrategy": [
      "Zomato/Swiggy In-App Carousel Ads",
      "Instagram Reels of food preparation",
      "Influencer food reviews",
      "Aggressive discounting (BOGO) for first 30 days"
    ],
    "commonPitfalls": [
      "Ignoring food cost percentage (should be < 30%)",
      "Poor packaging causing spillage",
      "Inconsistent taste due to lack of recipes"
    ],
    "suitableFor": {
      "education": [
        "12th",
        "Graduate"
      ],
      "experience": [
        "Intermediate"
      ],
      "budgetRange": [
        "₹50,000 – ₹2,00,000",
        "Above ₹2,00,000"
      ],
      "skillTags": [
        "food",
        "operations",
        "management"
      ],
      "interests": [
        "Culinary",
        "Business Scaling"
      ]
    },
    "roadmap": [
      {
        "phase": "Research & Licensing",
        "duration": "Week 1-2",
        "tasks": [
          "Finalize menu and cuisine",
          "Apply for FSSAI and GST",
          "Scout low-rent commercial space"
        ]
      },
      {
        "phase": "Setup & Equipment",
        "duration": "Week 3-5",
        "tasks": [
          "Purchase commercial equipment",
          "Design standard operating procedures (SOPs)",
          "Setup POS and aggregator integrations"
        ]
      },
      {
        "phase": "Launch & Marketing",
        "duration": "Week 6-8",
        "tasks": [
          "Conduct trial runs",
          "Launch on Zomato/Swiggy",
          "Start aggressive CPC ad campaigns"
        ]
      }
    ],
    "unitEconomics": [
      {
        "metric": "Average Order Value (AOV)",
        "value": "₹350"
      },
      {
        "metric": "Food Cost (COGS)",
        "value": "28% (₹98)"
      },
      {
        "metric": "Packaging Cost",
        "value": "6% (₹21)"
      },
      {
        "metric": "Aggregator Commission",
        "value": "25% (₹87)"
      },
      {
        "metric": "Gross Margin per Order",
        "value": "41% (₹144)"
      }
    ],
    "capexBreakdown": [
      {
        "item": "Commercial Equipment (Ovens, Fryers, Exhaust)",
        "cost": "₹1,80,000"
      },
      {
        "item": "Security Deposit (Rent)",
        "cost": "₹40,000"
      },
      {
        "item": "Licenses (FSSAI, Trade)",
        "cost": "₹15,000"
      },
      {
        "item": "Initial Inventory & Packaging",
        "cost": "₹30,000"
      },
      {
        "item": "Working Capital Buffer",
        "cost": "₹1,00,000"
      }
    ],
    "techStack": [
      {
        "tool": "PetPooja / Posist",
        "purpose": "Billing & Inventory Management"
      },
      {
        "tool": "UrbanPiper",
        "purpose": "Aggregator Menu Syncing"
      },
      {
        "tool": "Canva",
        "purpose": "Menu Design & Social Media"
      }
    ],
    "successStory": {
      "name": "Faasos (Rebel Foods)",
      "revenue": "$1B+ Valuation (Unicorn)",
      "description": "Started as a single wrap shop in Pune, Rebel Foods pivoted to the Cloud Kitchen model. They now run 400+ kitchens globally, operating 45+ brands (Behrouz Biryani, Oven Story) from the exact same physical locations, proving the multi-brand dark kitchen model."
    },
    "isActive": true
  },
  {
    "name": "Business Idea Prototype 8",
    "description": "A delivery-only restaurant operating entirely on aggregator platforms like Zomato and Swiggy. By eliminating front-of-house staff, interior design, and prime real estate costs, cloud kitchens allow founders to achieve operational profitability significantly faster than traditional dine-in restaurants.",
    "category": "Technology",
    "investment": {
      "min": 150000,
      "max": 500000,
      "display": "₹1,50,000 – ₹5,00,000"
    },
    "riskLevel": "Medium",
    "profitPotential": "₹40,000 – ₹1,50,000/month",
    "requiredSkills": [
      "Kitchen Operations",
      "Food Costing",
      "Digital Marketing",
      "Supply Chain"
    ],
    "advantages": [
      "80% lower overhead vs dine-in",
      "Can run multiple brands (e.g. burgers & pizza) from the same kitchen",
      "Instant customer access via aggregators"
    ],
    "challenges": [
      "High aggregator commissions (22-28%)",
      "Heavy reliance on platform algorithms",
      "Delivery logistics and food temperature maintenance"
    ],
    "successTips": [
      "Optimize menu engineering for items that travel well",
      "Run aggressive Zomato CPC ads during lunch/dinner peaks",
      "Include handwritten notes for customer retention"
    ],
    "growthPotential": "Can scale to a multi-city network using standard operating procedures (SOPs) or franchise out the brand.",
    "futureScope": "The Indian cloud kitchen market is projected to reach $2 Billion by 2025. Massive scope in Tier 2 and Tier 3 cities.",
    "marketAnalysis": "Consumer preference has permanently shifted towards delivery over dining out. 65% of millennials order in at least twice a week.",
    "targetAudience": "Urban professionals, students, and nuclear families looking for quick, hygienic, and affordable meals.",
    "legalRequirements": [
      "FSSAI Registration (State License)",
      "GST Registration",
      "Fire NOC",
      "Shop & Establishment Act"
    ],
    "roiTimeline": "Break-even usually achieved in month 6 to 9.",
    "marketingStrategy": [
      "Zomato/Swiggy In-App Carousel Ads",
      "Instagram Reels of food preparation",
      "Influencer food reviews",
      "Aggressive discounting (BOGO) for first 30 days"
    ],
    "commonPitfalls": [
      "Ignoring food cost percentage (should be < 30%)",
      "Poor packaging causing spillage",
      "Inconsistent taste due to lack of recipes"
    ],
    "suitableFor": {
      "education": [
        "12th",
        "Graduate"
      ],
      "experience": [
        "Intermediate"
      ],
      "budgetRange": [
        "₹50,000 – ₹2,00,000",
        "Above ₹2,00,000"
      ],
      "skillTags": [
        "food",
        "operations",
        "management"
      ],
      "interests": [
        "Culinary",
        "Business Scaling"
      ]
    },
    "roadmap": [
      {
        "phase": "Research & Licensing",
        "duration": "Week 1-2",
        "tasks": [
          "Finalize menu and cuisine",
          "Apply for FSSAI and GST",
          "Scout low-rent commercial space"
        ]
      },
      {
        "phase": "Setup & Equipment",
        "duration": "Week 3-5",
        "tasks": [
          "Purchase commercial equipment",
          "Design standard operating procedures (SOPs)",
          "Setup POS and aggregator integrations"
        ]
      },
      {
        "phase": "Launch & Marketing",
        "duration": "Week 6-8",
        "tasks": [
          "Conduct trial runs",
          "Launch on Zomato/Swiggy",
          "Start aggressive CPC ad campaigns"
        ]
      }
    ],
    "unitEconomics": [
      {
        "metric": "Average Order Value (AOV)",
        "value": "₹350"
      },
      {
        "metric": "Food Cost (COGS)",
        "value": "28% (₹98)"
      },
      {
        "metric": "Packaging Cost",
        "value": "6% (₹21)"
      },
      {
        "metric": "Aggregator Commission",
        "value": "25% (₹87)"
      },
      {
        "metric": "Gross Margin per Order",
        "value": "41% (₹144)"
      }
    ],
    "capexBreakdown": [
      {
        "item": "Commercial Equipment (Ovens, Fryers, Exhaust)",
        "cost": "₹1,80,000"
      },
      {
        "item": "Security Deposit (Rent)",
        "cost": "₹40,000"
      },
      {
        "item": "Licenses (FSSAI, Trade)",
        "cost": "₹15,000"
      },
      {
        "item": "Initial Inventory & Packaging",
        "cost": "₹30,000"
      },
      {
        "item": "Working Capital Buffer",
        "cost": "₹1,00,000"
      }
    ],
    "techStack": [
      {
        "tool": "PetPooja / Posist",
        "purpose": "Billing & Inventory Management"
      },
      {
        "tool": "UrbanPiper",
        "purpose": "Aggregator Menu Syncing"
      },
      {
        "tool": "Canva",
        "purpose": "Menu Design & Social Media"
      }
    ],
    "successStory": {
      "name": "Faasos (Rebel Foods)",
      "revenue": "$1B+ Valuation (Unicorn)",
      "description": "Started as a single wrap shop in Pune, Rebel Foods pivoted to the Cloud Kitchen model. They now run 400+ kitchens globally, operating 45+ brands (Behrouz Biryani, Oven Story) from the exact same physical locations, proving the multi-brand dark kitchen model."
    },
    "isActive": true
  },
  {
    "name": "Business Idea Prototype 9",
    "description": "A delivery-only restaurant operating entirely on aggregator platforms like Zomato and Swiggy. By eliminating front-of-house staff, interior design, and prime real estate costs, cloud kitchens allow founders to achieve operational profitability significantly faster than traditional dine-in restaurants.",
    "category": "Retail",
    "investment": {
      "min": 150000,
      "max": 500000,
      "display": "₹1,50,000 – ₹5,00,000"
    },
    "riskLevel": "Medium",
    "profitPotential": "₹40,000 – ₹1,50,000/month",
    "requiredSkills": [
      "Kitchen Operations",
      "Food Costing",
      "Digital Marketing",
      "Supply Chain"
    ],
    "advantages": [
      "80% lower overhead vs dine-in",
      "Can run multiple brands (e.g. burgers & pizza) from the same kitchen",
      "Instant customer access via aggregators"
    ],
    "challenges": [
      "High aggregator commissions (22-28%)",
      "Heavy reliance on platform algorithms",
      "Delivery logistics and food temperature maintenance"
    ],
    "successTips": [
      "Optimize menu engineering for items that travel well",
      "Run aggressive Zomato CPC ads during lunch/dinner peaks",
      "Include handwritten notes for customer retention"
    ],
    "growthPotential": "Can scale to a multi-city network using standard operating procedures (SOPs) or franchise out the brand.",
    "futureScope": "The Indian cloud kitchen market is projected to reach $2 Billion by 2025. Massive scope in Tier 2 and Tier 3 cities.",
    "marketAnalysis": "Consumer preference has permanently shifted towards delivery over dining out. 65% of millennials order in at least twice a week.",
    "targetAudience": "Urban professionals, students, and nuclear families looking for quick, hygienic, and affordable meals.",
    "legalRequirements": [
      "FSSAI Registration (State License)",
      "GST Registration",
      "Fire NOC",
      "Shop & Establishment Act"
    ],
    "roiTimeline": "Break-even usually achieved in month 6 to 9.",
    "marketingStrategy": [
      "Zomato/Swiggy In-App Carousel Ads",
      "Instagram Reels of food preparation",
      "Influencer food reviews",
      "Aggressive discounting (BOGO) for first 30 days"
    ],
    "commonPitfalls": [
      "Ignoring food cost percentage (should be < 30%)",
      "Poor packaging causing spillage",
      "Inconsistent taste due to lack of recipes"
    ],
    "suitableFor": {
      "education": [
        "12th",
        "Graduate"
      ],
      "experience": [
        "Intermediate"
      ],
      "budgetRange": [
        "₹50,000 – ₹2,00,000",
        "Above ₹2,00,000"
      ],
      "skillTags": [
        "food",
        "operations",
        "management"
      ],
      "interests": [
        "Culinary",
        "Business Scaling"
      ]
    },
    "roadmap": [
      {
        "phase": "Research & Licensing",
        "duration": "Week 1-2",
        "tasks": [
          "Finalize menu and cuisine",
          "Apply for FSSAI and GST",
          "Scout low-rent commercial space"
        ]
      },
      {
        "phase": "Setup & Equipment",
        "duration": "Week 3-5",
        "tasks": [
          "Purchase commercial equipment",
          "Design standard operating procedures (SOPs)",
          "Setup POS and aggregator integrations"
        ]
      },
      {
        "phase": "Launch & Marketing",
        "duration": "Week 6-8",
        "tasks": [
          "Conduct trial runs",
          "Launch on Zomato/Swiggy",
          "Start aggressive CPC ad campaigns"
        ]
      }
    ],
    "unitEconomics": [
      {
        "metric": "Average Order Value (AOV)",
        "value": "₹350"
      },
      {
        "metric": "Food Cost (COGS)",
        "value": "28% (₹98)"
      },
      {
        "metric": "Packaging Cost",
        "value": "6% (₹21)"
      },
      {
        "metric": "Aggregator Commission",
        "value": "25% (₹87)"
      },
      {
        "metric": "Gross Margin per Order",
        "value": "41% (₹144)"
      }
    ],
    "capexBreakdown": [
      {
        "item": "Commercial Equipment (Ovens, Fryers, Exhaust)",
        "cost": "₹1,80,000"
      },
      {
        "item": "Security Deposit (Rent)",
        "cost": "₹40,000"
      },
      {
        "item": "Licenses (FSSAI, Trade)",
        "cost": "₹15,000"
      },
      {
        "item": "Initial Inventory & Packaging",
        "cost": "₹30,000"
      },
      {
        "item": "Working Capital Buffer",
        "cost": "₹1,00,000"
      }
    ],
    "techStack": [
      {
        "tool": "PetPooja / Posist",
        "purpose": "Billing & Inventory Management"
      },
      {
        "tool": "UrbanPiper",
        "purpose": "Aggregator Menu Syncing"
      },
      {
        "tool": "Canva",
        "purpose": "Menu Design & Social Media"
      }
    ],
    "successStory": {
      "name": "Faasos (Rebel Foods)",
      "revenue": "$1B+ Valuation (Unicorn)",
      "description": "Started as a single wrap shop in Pune, Rebel Foods pivoted to the Cloud Kitchen model. They now run 400+ kitchens globally, operating 45+ brands (Behrouz Biryani, Oven Story) from the exact same physical locations, proving the multi-brand dark kitchen model."
    },
    "isActive": true
  },
  {
    "name": "Business Idea Prototype 10",
    "description": "A delivery-only restaurant operating entirely on aggregator platforms like Zomato and Swiggy. By eliminating front-of-house staff, interior design, and prime real estate costs, cloud kitchens allow founders to achieve operational profitability significantly faster than traditional dine-in restaurants.",
    "category": "E-Commerce",
    "investment": {
      "min": 150000,
      "max": 500000,
      "display": "₹1,50,000 – ₹5,00,000"
    },
    "riskLevel": "Medium",
    "profitPotential": "₹40,000 – ₹1,50,000/month",
    "requiredSkills": [
      "Kitchen Operations",
      "Food Costing",
      "Digital Marketing",
      "Supply Chain"
    ],
    "advantages": [
      "80% lower overhead vs dine-in",
      "Can run multiple brands (e.g. burgers & pizza) from the same kitchen",
      "Instant customer access via aggregators"
    ],
    "challenges": [
      "High aggregator commissions (22-28%)",
      "Heavy reliance on platform algorithms",
      "Delivery logistics and food temperature maintenance"
    ],
    "successTips": [
      "Optimize menu engineering for items that travel well",
      "Run aggressive Zomato CPC ads during lunch/dinner peaks",
      "Include handwritten notes for customer retention"
    ],
    "growthPotential": "Can scale to a multi-city network using standard operating procedures (SOPs) or franchise out the brand.",
    "futureScope": "The Indian cloud kitchen market is projected to reach $2 Billion by 2025. Massive scope in Tier 2 and Tier 3 cities.",
    "marketAnalysis": "Consumer preference has permanently shifted towards delivery over dining out. 65% of millennials order in at least twice a week.",
    "targetAudience": "Urban professionals, students, and nuclear families looking for quick, hygienic, and affordable meals.",
    "legalRequirements": [
      "FSSAI Registration (State License)",
      "GST Registration",
      "Fire NOC",
      "Shop & Establishment Act"
    ],
    "roiTimeline": "Break-even usually achieved in month 6 to 9.",
    "marketingStrategy": [
      "Zomato/Swiggy In-App Carousel Ads",
      "Instagram Reels of food preparation",
      "Influencer food reviews",
      "Aggressive discounting (BOGO) for first 30 days"
    ],
    "commonPitfalls": [
      "Ignoring food cost percentage (should be < 30%)",
      "Poor packaging causing spillage",
      "Inconsistent taste due to lack of recipes"
    ],
    "suitableFor": {
      "education": [
        "12th",
        "Graduate"
      ],
      "experience": [
        "Intermediate"
      ],
      "budgetRange": [
        "₹50,000 – ₹2,00,000",
        "Above ₹2,00,000"
      ],
      "skillTags": [
        "food",
        "operations",
        "management"
      ],
      "interests": [
        "Culinary",
        "Business Scaling"
      ]
    },
    "roadmap": [
      {
        "phase": "Research & Licensing",
        "duration": "Week 1-2",
        "tasks": [
          "Finalize menu and cuisine",
          "Apply for FSSAI and GST",
          "Scout low-rent commercial space"
        ]
      },
      {
        "phase": "Setup & Equipment",
        "duration": "Week 3-5",
        "tasks": [
          "Purchase commercial equipment",
          "Design standard operating procedures (SOPs)",
          "Setup POS and aggregator integrations"
        ]
      },
      {
        "phase": "Launch & Marketing",
        "duration": "Week 6-8",
        "tasks": [
          "Conduct trial runs",
          "Launch on Zomato/Swiggy",
          "Start aggressive CPC ad campaigns"
        ]
      }
    ],
    "unitEconomics": [
      {
        "metric": "Average Order Value (AOV)",
        "value": "₹350"
      },
      {
        "metric": "Food Cost (COGS)",
        "value": "28% (₹98)"
      },
      {
        "metric": "Packaging Cost",
        "value": "6% (₹21)"
      },
      {
        "metric": "Aggregator Commission",
        "value": "25% (₹87)"
      },
      {
        "metric": "Gross Margin per Order",
        "value": "41% (₹144)"
      }
    ],
    "capexBreakdown": [
      {
        "item": "Commercial Equipment (Ovens, Fryers, Exhaust)",
        "cost": "₹1,80,000"
      },
      {
        "item": "Security Deposit (Rent)",
        "cost": "₹40,000"
      },
      {
        "item": "Licenses (FSSAI, Trade)",
        "cost": "₹15,000"
      },
      {
        "item": "Initial Inventory & Packaging",
        "cost": "₹30,000"
      },
      {
        "item": "Working Capital Buffer",
        "cost": "₹1,00,000"
      }
    ],
    "techStack": [
      {
        "tool": "PetPooja / Posist",
        "purpose": "Billing & Inventory Management"
      },
      {
        "tool": "UrbanPiper",
        "purpose": "Aggregator Menu Syncing"
      },
      {
        "tool": "Canva",
        "purpose": "Menu Design & Social Media"
      }
    ],
    "successStory": {
      "name": "Faasos (Rebel Foods)",
      "revenue": "$1B+ Valuation (Unicorn)",
      "description": "Started as a single wrap shop in Pune, Rebel Foods pivoted to the Cloud Kitchen model. They now run 400+ kitchens globally, operating 45+ brands (Behrouz Biryani, Oven Story) from the exact same physical locations, proving the multi-brand dark kitchen model."
    },
    "isActive": true
  },
  {
    "name": "Business Idea Prototype 11",
    "description": "A delivery-only restaurant operating entirely on aggregator platforms like Zomato and Swiggy. By eliminating front-of-house staff, interior design, and prime real estate costs, cloud kitchens allow founders to achieve operational profitability significantly faster than traditional dine-in restaurants.",
    "category": "Food & Beverages",
    "investment": {
      "min": 150000,
      "max": 500000,
      "display": "₹1,50,000 – ₹5,00,000"
    },
    "riskLevel": "Medium",
    "profitPotential": "₹40,000 – ₹1,50,000/month",
    "requiredSkills": [
      "Kitchen Operations",
      "Food Costing",
      "Digital Marketing",
      "Supply Chain"
    ],
    "advantages": [
      "80% lower overhead vs dine-in",
      "Can run multiple brands (e.g. burgers & pizza) from the same kitchen",
      "Instant customer access via aggregators"
    ],
    "challenges": [
      "High aggregator commissions (22-28%)",
      "Heavy reliance on platform algorithms",
      "Delivery logistics and food temperature maintenance"
    ],
    "successTips": [
      "Optimize menu engineering for items that travel well",
      "Run aggressive Zomato CPC ads during lunch/dinner peaks",
      "Include handwritten notes for customer retention"
    ],
    "growthPotential": "Can scale to a multi-city network using standard operating procedures (SOPs) or franchise out the brand.",
    "futureScope": "The Indian cloud kitchen market is projected to reach $2 Billion by 2025. Massive scope in Tier 2 and Tier 3 cities.",
    "marketAnalysis": "Consumer preference has permanently shifted towards delivery over dining out. 65% of millennials order in at least twice a week.",
    "targetAudience": "Urban professionals, students, and nuclear families looking for quick, hygienic, and affordable meals.",
    "legalRequirements": [
      "FSSAI Registration (State License)",
      "GST Registration",
      "Fire NOC",
      "Shop & Establishment Act"
    ],
    "roiTimeline": "Break-even usually achieved in month 6 to 9.",
    "marketingStrategy": [
      "Zomato/Swiggy In-App Carousel Ads",
      "Instagram Reels of food preparation",
      "Influencer food reviews",
      "Aggressive discounting (BOGO) for first 30 days"
    ],
    "commonPitfalls": [
      "Ignoring food cost percentage (should be < 30%)",
      "Poor packaging causing spillage",
      "Inconsistent taste due to lack of recipes"
    ],
    "suitableFor": {
      "education": [
        "12th",
        "Graduate"
      ],
      "experience": [
        "Intermediate"
      ],
      "budgetRange": [
        "₹50,000 – ₹2,00,000",
        "Above ₹2,00,000"
      ],
      "skillTags": [
        "food",
        "operations",
        "management"
      ],
      "interests": [
        "Culinary",
        "Business Scaling"
      ]
    },
    "roadmap": [
      {
        "phase": "Research & Licensing",
        "duration": "Week 1-2",
        "tasks": [
          "Finalize menu and cuisine",
          "Apply for FSSAI and GST",
          "Scout low-rent commercial space"
        ]
      },
      {
        "phase": "Setup & Equipment",
        "duration": "Week 3-5",
        "tasks": [
          "Purchase commercial equipment",
          "Design standard operating procedures (SOPs)",
          "Setup POS and aggregator integrations"
        ]
      },
      {
        "phase": "Launch & Marketing",
        "duration": "Week 6-8",
        "tasks": [
          "Conduct trial runs",
          "Launch on Zomato/Swiggy",
          "Start aggressive CPC ad campaigns"
        ]
      }
    ],
    "unitEconomics": [
      {
        "metric": "Average Order Value (AOV)",
        "value": "₹350"
      },
      {
        "metric": "Food Cost (COGS)",
        "value": "28% (₹98)"
      },
      {
        "metric": "Packaging Cost",
        "value": "6% (₹21)"
      },
      {
        "metric": "Aggregator Commission",
        "value": "25% (₹87)"
      },
      {
        "metric": "Gross Margin per Order",
        "value": "41% (₹144)"
      }
    ],
    "capexBreakdown": [
      {
        "item": "Commercial Equipment (Ovens, Fryers, Exhaust)",
        "cost": "₹1,80,000"
      },
      {
        "item": "Security Deposit (Rent)",
        "cost": "₹40,000"
      },
      {
        "item": "Licenses (FSSAI, Trade)",
        "cost": "₹15,000"
      },
      {
        "item": "Initial Inventory & Packaging",
        "cost": "₹30,000"
      },
      {
        "item": "Working Capital Buffer",
        "cost": "₹1,00,000"
      }
    ],
    "techStack": [
      {
        "tool": "PetPooja / Posist",
        "purpose": "Billing & Inventory Management"
      },
      {
        "tool": "UrbanPiper",
        "purpose": "Aggregator Menu Syncing"
      },
      {
        "tool": "Canva",
        "purpose": "Menu Design & Social Media"
      }
    ],
    "successStory": {
      "name": "Faasos (Rebel Foods)",
      "revenue": "$1B+ Valuation (Unicorn)",
      "description": "Started as a single wrap shop in Pune, Rebel Foods pivoted to the Cloud Kitchen model. They now run 400+ kitchens globally, operating 45+ brands (Behrouz Biryani, Oven Story) from the exact same physical locations, proving the multi-brand dark kitchen model."
    },
    "isActive": true
  },
  {
    "name": "Business Idea Prototype 12",
    "description": "A delivery-only restaurant operating entirely on aggregator platforms like Zomato and Swiggy. By eliminating front-of-house staff, interior design, and prime real estate costs, cloud kitchens allow founders to achieve operational profitability significantly faster than traditional dine-in restaurants.",
    "category": "Services",
    "investment": {
      "min": 150000,
      "max": 500000,
      "display": "₹1,50,000 – ₹5,00,000"
    },
    "riskLevel": "Medium",
    "profitPotential": "₹40,000 – ₹1,50,000/month",
    "requiredSkills": [
      "Kitchen Operations",
      "Food Costing",
      "Digital Marketing",
      "Supply Chain"
    ],
    "advantages": [
      "80% lower overhead vs dine-in",
      "Can run multiple brands (e.g. burgers & pizza) from the same kitchen",
      "Instant customer access via aggregators"
    ],
    "challenges": [
      "High aggregator commissions (22-28%)",
      "Heavy reliance on platform algorithms",
      "Delivery logistics and food temperature maintenance"
    ],
    "successTips": [
      "Optimize menu engineering for items that travel well",
      "Run aggressive Zomato CPC ads during lunch/dinner peaks",
      "Include handwritten notes for customer retention"
    ],
    "growthPotential": "Can scale to a multi-city network using standard operating procedures (SOPs) or franchise out the brand.",
    "futureScope": "The Indian cloud kitchen market is projected to reach $2 Billion by 2025. Massive scope in Tier 2 and Tier 3 cities.",
    "marketAnalysis": "Consumer preference has permanently shifted towards delivery over dining out. 65% of millennials order in at least twice a week.",
    "targetAudience": "Urban professionals, students, and nuclear families looking for quick, hygienic, and affordable meals.",
    "legalRequirements": [
      "FSSAI Registration (State License)",
      "GST Registration",
      "Fire NOC",
      "Shop & Establishment Act"
    ],
    "roiTimeline": "Break-even usually achieved in month 6 to 9.",
    "marketingStrategy": [
      "Zomato/Swiggy In-App Carousel Ads",
      "Instagram Reels of food preparation",
      "Influencer food reviews",
      "Aggressive discounting (BOGO) for first 30 days"
    ],
    "commonPitfalls": [
      "Ignoring food cost percentage (should be < 30%)",
      "Poor packaging causing spillage",
      "Inconsistent taste due to lack of recipes"
    ],
    "suitableFor": {
      "education": [
        "12th",
        "Graduate"
      ],
      "experience": [
        "Intermediate"
      ],
      "budgetRange": [
        "₹50,000 – ₹2,00,000",
        "Above ₹2,00,000"
      ],
      "skillTags": [
        "food",
        "operations",
        "management"
      ],
      "interests": [
        "Culinary",
        "Business Scaling"
      ]
    },
    "roadmap": [
      {
        "phase": "Research & Licensing",
        "duration": "Week 1-2",
        "tasks": [
          "Finalize menu and cuisine",
          "Apply for FSSAI and GST",
          "Scout low-rent commercial space"
        ]
      },
      {
        "phase": "Setup & Equipment",
        "duration": "Week 3-5",
        "tasks": [
          "Purchase commercial equipment",
          "Design standard operating procedures (SOPs)",
          "Setup POS and aggregator integrations"
        ]
      },
      {
        "phase": "Launch & Marketing",
        "duration": "Week 6-8",
        "tasks": [
          "Conduct trial runs",
          "Launch on Zomato/Swiggy",
          "Start aggressive CPC ad campaigns"
        ]
      }
    ],
    "unitEconomics": [
      {
        "metric": "Average Order Value (AOV)",
        "value": "₹350"
      },
      {
        "metric": "Food Cost (COGS)",
        "value": "28% (₹98)"
      },
      {
        "metric": "Packaging Cost",
        "value": "6% (₹21)"
      },
      {
        "metric": "Aggregator Commission",
        "value": "25% (₹87)"
      },
      {
        "metric": "Gross Margin per Order",
        "value": "41% (₹144)"
      }
    ],
    "capexBreakdown": [
      {
        "item": "Commercial Equipment (Ovens, Fryers, Exhaust)",
        "cost": "₹1,80,000"
      },
      {
        "item": "Security Deposit (Rent)",
        "cost": "₹40,000"
      },
      {
        "item": "Licenses (FSSAI, Trade)",
        "cost": "₹15,000"
      },
      {
        "item": "Initial Inventory & Packaging",
        "cost": "₹30,000"
      },
      {
        "item": "Working Capital Buffer",
        "cost": "₹1,00,000"
      }
    ],
    "techStack": [
      {
        "tool": "PetPooja / Posist",
        "purpose": "Billing & Inventory Management"
      },
      {
        "tool": "UrbanPiper",
        "purpose": "Aggregator Menu Syncing"
      },
      {
        "tool": "Canva",
        "purpose": "Menu Design & Social Media"
      }
    ],
    "successStory": {
      "name": "Faasos (Rebel Foods)",
      "revenue": "$1B+ Valuation (Unicorn)",
      "description": "Started as a single wrap shop in Pune, Rebel Foods pivoted to the Cloud Kitchen model. They now run 400+ kitchens globally, operating 45+ brands (Behrouz Biryani, Oven Story) from the exact same physical locations, proving the multi-brand dark kitchen model."
    },
    "isActive": true
  }
];
module.exports = businesses;
