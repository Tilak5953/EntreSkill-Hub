// Assessment Questions Data
// Developer: Tilak Kumar | BML Munjal University | PS-II Internship
// 25 questions across 9 categories for entrepreneurship assessment

const questions = [
  // ─── PROGRAMMING (3 questions) ───────────────────────────────────────────
  {
    id: 1,
    category: 'programming',
    question: 'How comfortable are you with using computers and software tools for your work?',
    options: [
      { text: 'I can only do very basic tasks like browsing and email', score: 1 },
      { text: 'I can use office tools like Word, Excel, and PowerPoint', score: 2 },
      { text: 'I can use specialised software and learn new tools quickly', score: 3 },
      { text: 'I can code, automate tasks, and build digital solutions', score: 4 },
    ],
  },
  {
    id: 2,
    category: 'programming',
    question: 'If your business website or app has a technical issue, what would you do?',
    options: [
      { text: 'I would have no idea how to handle it', score: 1 },
      { text: 'I would search online for a solution', score: 2 },
      { text: 'I would diagnose and fix basic issues myself', score: 3 },
      { text: 'I would debug and resolve it completely on my own', score: 4 },
    ],
  },
  {
    id: 3,
    category: 'programming',
    question: 'How would you manage the online presence of your business?',
    options: [
      { text: 'I would rely entirely on others', score: 1 },
      { text: 'I can set up a basic social media page', score: 2 },
      { text: 'I can manage a website and run basic online campaigns', score: 3 },
      { text: 'I can build a website and run data-driven digital campaigns', score: 4 },
    ],
  },

  // ─── LEADERSHIP (3 questions) ────────────────────────────────────────────
  {
    id: 4,
    category: 'leadership',
    question: 'How do you handle a situation where your team is underperforming?',
    options: [
      { text: 'I would get frustrated and lose motivation', score: 1 },
      { text: 'I would try to motivate them with rewards', score: 2 },
      { text: 'I would have individual conversations and set clear expectations', score: 3 },
      { text: 'I would identify root causes, provide coaching, and restructure if needed', score: 4 },
    ],
  },
  {
    id: 5,
    category: 'leadership',
    question: 'When starting a new project, how do you approach planning?',
    options: [
      { text: 'I start without much planning and figure it out as I go', score: 1 },
      { text: 'I make a rough plan in my head', score: 2 },
      { text: 'I create a written plan with milestones', score: 3 },
      { text: 'I build a detailed project plan with tasks, timelines, and contingencies', score: 4 },
    ],
  },
  {
    id: 6,
    category: 'leadership',
    question: 'How do you make important business decisions?',
    options: [
      { text: 'I usually go with gut feeling', score: 1 },
      { text: 'I ask someone I trust for advice', score: 2 },
      { text: 'I research the options before deciding', score: 3 },
      { text: 'I analyse data, consider risks, and consult relevant stakeholders', score: 4 },
    ],
  },

  // ─── MARKETING (3 questions) ─────────────────────────────────────────────
  {
    id: 7,
    category: 'marketing',
    question: 'How would you attract your first 100 customers for your new business?',
    options: [
      { text: 'I would wait for word-of-mouth to spread', score: 1 },
      { text: 'I would tell friends and family about it', score: 2 },
      { text: 'I would use social media and local promotions', score: 3 },
      { text: 'I would run targeted campaigns across multiple channels with a defined budget', score: 4 },
    ],
  },
  {
    id: 8,
    category: 'marketing',
    question: 'How well do you understand your target customers?',
    options: [
      { text: 'I have not thought deeply about who my customers are', score: 1 },
      { text: 'I have a general idea of who would buy from me', score: 2 },
      { text: 'I can describe my target customer by age, income, and needs', score: 3 },
      { text: 'I have created detailed customer personas based on research', score: 4 },
    ],
  },
  {
    id: 9,
    category: 'marketing',
    question: 'What is your approach to pricing your product or service?',
    options: [
      { text: 'I would price it based on what feels right', score: 1 },
      { text: 'I would check what competitors charge and match it', score: 2 },
      { text: 'I would calculate costs and add a profit margin', score: 3 },
      { text: 'I would use a combination of cost analysis, competitor research, and value-based pricing', score: 4 },
    ],
  },

  // ─── FINANCE (2 questions) ───────────────────────────────────────────────
  {
    id: 10,
    category: 'finance',
    question: 'Can you create a basic budget and track monthly income and expenses for a business?',
    options: [
      { text: 'No, I find financial management very difficult', score: 1 },
      { text: 'I can track expenses roughly but not precisely', score: 2 },
      { text: 'I can maintain a spreadsheet with income, expenses, and profit', score: 3 },
      { text: 'I can create and analyse financial statements like P&L and cash flow', score: 4 },
    ],
  },
  {
    id: 11,
    category: 'finance',
    question: 'How much of your own savings are you willing to invest in starting a business?',
    options: [
      { text: 'I am not willing to risk any personal savings', score: 1 },
      { text: 'I can invest a small amount (under ₹10,000)', score: 2 },
      { text: 'I can invest a moderate amount (₹10,000 – ₹1,00,000)', score: 3 },
      { text: 'I am willing to invest significantly and take calculated financial risks', score: 4 },
    ],
  },

  // ─── COMMUNICATION (3 questions) ─────────────────────────────────────────
  {
    id: 12,
    category: 'communication',
    question: 'How confident are you when pitching your business idea to a potential investor or client?',
    options: [
      { text: 'I get very nervous and struggle to articulate my thoughts', score: 1 },
      { text: 'I can explain the basics but feel uncertain', score: 2 },
      { text: 'I can deliver a clear and convincing pitch', score: 3 },
      { text: 'I can tailor my pitch to the audience and handle tough questions confidently', score: 4 },
    ],
  },
  {
    id: 13,
    category: 'communication',
    question: 'How do you handle a difficult or unhappy customer?',
    options: [
      { text: 'I get defensive or avoid the situation', score: 1 },
      { text: 'I apologise and hope the situation resolves itself', score: 2 },
      { text: 'I listen patiently and offer a solution', score: 3 },
      { text: 'I empathise, take ownership, resolve the issue, and follow up', score: 4 },
    ],
  },
  {
    id: 14,
    category: 'communication',
    question: 'How effectively can you negotiate with suppliers or vendors?',
    options: [
      { text: 'I accept whatever price is offered', score: 1 },
      { text: 'I try to ask for a small discount', score: 2 },
      { text: 'I research market rates and negotiate confidently', score: 3 },
      { text: 'I use strategic negotiation tactics to secure favourable terms', score: 4 },
    ],
  },

  // ─── RISK TAKING (2 questions) ───────────────────────────────────────────
  {
    id: 15,
    category: 'riskTaking',
    question: 'If your business idea has a 60% chance of success and 40% chance of failure, would you pursue it?',
    options: [
      { text: 'No, I only pursue things with very high certainty', score: 1 },
      { text: 'I would pursue it only after extensive deliberation', score: 2 },
      { text: 'Yes, I would go for it with a backup plan', score: 3 },
      { text: 'Absolutely — calculated risks are part of building a business', score: 4 },
    ],
  },
  {
    id: 16,
    category: 'riskTaking',
    question: 'How do you react when a business venture does not go as planned?',
    options: [
      { text: 'I give up and move on to something safer', score: 1 },
      { text: 'I feel discouraged but eventually try again', score: 2 },
      { text: 'I analyse what went wrong and adjust my strategy', score: 3 },
      { text: 'I see it as a learning opportunity and pivot quickly', score: 4 },
    ],
  },

  // ─── MANAGEMENT (3 questions) ────────────────────────────────────────────
  {
    id: 17,
    category: 'management',
    question: 'How do you prioritise tasks when you have multiple deadlines?',
    options: [
      { text: 'I often feel overwhelmed and miss deadlines', score: 1 },
      { text: 'I tackle whatever seems most urgent', score: 2 },
      { text: 'I categorise tasks by importance and urgency', score: 3 },
      { text: 'I use productivity frameworks (like Eisenhower matrix) and delegate effectively', score: 4 },
    ],
  },
  {
    id: 18,
    category: 'management',
    question: 'How would you manage inventory and supply chain for a product-based business?',
    options: [
      { text: 'I would have no system — order when items run out', score: 1 },
      { text: 'I would maintain a basic stock register', score: 2 },
      { text: 'I would use inventory tracking software and plan restocking in advance', score: 3 },
      { text: 'I would implement just-in-time inventory with automated alerts and supplier relationships', score: 4 },
    ],
  },
  {
    id: 19,
    category: 'management',
    question: 'How comfortable are you with delegating tasks to employees or team members?',
    options: [
      { text: 'I prefer to do everything myself to ensure quality', score: 1 },
      { text: 'I delegate sometimes but then micromanage', score: 2 },
      { text: 'I delegate tasks to the right people and check in periodically', score: 3 },
      { text: 'I build trust, empower my team, and focus on high-level strategy', score: 4 },
    ],
  },

  // ─── DIGITAL SKILLS (3 questions) ────────────────────────────────────────
  {
    id: 20,
    category: 'digitalSkills',
    question: 'How do you use social media for business promotion?',
    options: [
      { text: 'I do not use social media for business', score: 1 },
      { text: 'I post occasionally without a clear strategy', score: 2 },
      { text: 'I maintain a consistent posting schedule with engaging content', score: 3 },
      { text: 'I run data-driven social media campaigns with analytics tracking', score: 4 },
    ],
  },
  {
    id: 21,
    category: 'digitalSkills',
    question: 'Have you ever used e-commerce platforms (Meesho, Amazon, Flipkart) to sell products?',
    options: [
      { text: 'No, I have never sold anything online', score: 1 },
      { text: 'I have explored these platforms but not sold anything yet', score: 2 },
      { text: 'I have sold products online with moderate success', score: 3 },
      { text: 'I have a well-established online selling presence with consistent sales', score: 4 },
    ],
  },
  {
    id: 22,
    category: 'digitalSkills',
    question: 'How comfortable are you with using digital payment tools like UPI, QR codes, and POS systems?',
    options: [
      { text: 'I prefer cash transactions only', score: 1 },
      { text: 'I use UPI for personal transactions but not for business', score: 2 },
      { text: 'I can set up and manage digital payments for my business', score: 3 },
      { text: 'I can integrate multiple payment gateways and manage reconciliation', score: 4 },
    ],
  },

  // ─── BUSINESS KNOWLEDGE (3 questions) ────────────────────────────────────
  {
    id: 23,
    category: 'businessKnowledge',
    question: 'Do you know the basic legal requirements for starting a business in India (GST, MSME registration, etc.)?',
    options: [
      { text: 'No, I have no knowledge of business registration', score: 1 },
      { text: 'I have heard about these but do not know the details', score: 2 },
      { text: 'I understand the basics and know where to find information', score: 3 },
      { text: 'I am fully aware of all legal requirements and compliance procedures', score: 4 },
    ],
  },
  {
    id: 24,
    category: 'businessKnowledge',
    question: 'How do you evaluate whether a business idea is viable?',
    options: [
      { text: 'If the idea sounds exciting to me, I go for it', score: 1 },
      { text: 'I check if friends and family like the idea', score: 2 },
      { text: 'I research the market and check if there is demand', score: 3 },
      { text: 'I conduct market research, competitor analysis, and calculate break-even', score: 4 },
    ],
  },
  {
    id: 25,
    category: 'businessKnowledge',
    question: 'Are you aware of any government schemes supporting entrepreneurs in India (MUDRA, Startup India, PM SVANidhi)?',
    options: [
      { text: 'No, I have no knowledge of such schemes', score: 1 },
      { text: 'I have heard of them but do not know the details', score: 2 },
      { text: 'I know about them and have explored eligibility', score: 3 },
      { text: 'I have applied for or plan to apply for relevant government support', score: 4 },
    ],
  },
];

module.exports = questions;
