const fs = require('fs');
const path = require('path');

const firstNames = ['Vikram', 'Sneha', 'Rahul', 'Anjali', 'Karan', 'Priya', 'Amit', 'Neha', 'Rohit', 'Sanjana', 'Ravi', 'Ayesha', 'Siddharth', 'Pooja', 'Aditya', 'Ritu', 'Arjun', 'Meera', 'Gaurav', 'Nidhi', 'Kavita', 'Sanjay', 'Manoj', 'Rakesh', 'Divya', 'Aakash', 'Varun', 'Kriti', 'Simran', 'Ishaan'];
const lastNames = ['Ahuja', 'Rao', 'Desai', 'Sharma', 'Patel', 'Iyer', 'Agarwal', 'Gupta', 'Verma', 'Kapoor', 'Singh', 'Kumar', 'Joshi', 'Chopra', 'Reddy', 'Menon', 'Nair', 'Bhat', 'Das', 'Sen', 'Malhotra', 'Bansal', 'Jain', 'Mehta', 'Seth', 'Chatterjee', 'Pandey', 'Kaur', 'Srivastava', 'Choudhury'];
const titles = ['Founder', 'CEO', 'CTO', 'VP of Growth', 'Director of Operations', 'Managing Partner', 'Head of Engineering', 'Supply Chain Lead', 'EdTech Product Lead', 'Angel Investor', 'Chief Compliance Officer', 'Marketing Head', 'Lead Designer', 'Data Science Head', 'Chief Revenue Officer', 'Co-Founder'];
const companies = ['Flipkart', 'Zomato', 'Razorpay', 'Delhivery', 'UpGrad', 'FinEdge Solutions', 'Creative Media Agency', 'OrganicEarth', 'LegalWiz India', 'Indian Angel Network', 'Swiggy', 'Cred', 'Ola', 'Paytm', 'Freshworks', 'Zerodha', 'Lenskart', 'Nykaa', 'Dream11', 'Meesho', 'Unacademy', 'ShareChat', 'Postman', 'BrowserStack', 'Oyo', 'CureFit', 'UrbanCompany', 'PolicyBazaar', 'Pine Labs', 'Udaan'];
const expertisePool = ['E-Commerce', 'Scaling', 'Growth Marketing', 'FinTech', 'Fundraising', 'B2B SaaS', 'Food Tech', 'Cloud Kitchens', 'Operations', 'Digital Marketing', 'Brand Building', 'Content Strategy', 'Tech Infrastructure', 'Product Management', 'Cybersecurity', 'Retail', 'D2C', 'Sustainable Business', 'Legal', 'Taxation', 'Company Registration', 'Angel Investing', 'Pitch Decks', 'Mentorship', 'Logistics', 'Supply Chain', 'B2B Trade', 'EdTech', 'Customer Retention', 'AI/ML', 'Blockchain', 'Web3', 'UI/UX Design', 'Sales', 'B2B Sales', 'SEO', 'Performance Marketing', 'Data Analytics', 'Business Strategy', 'Hardware', 'IoT', 'HealthTech', 'Agritech', 'CleanTech', 'D2C Brand', 'Bootstrapping', 'Consumer Apps', 'Marketplaces'];

const images = [
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=200'
];

const prices = [999, 1499, 1999, 2499, 2999, 3499, 4999];

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getRandomItems = (arr, num) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

const bios = [
  "I specialize in scaling products from 0 to 1, and 1 to 100. If you are struggling with customer acquisition, retention, or just need a solid growth loop, I can help you build a profitable engine.",
  "Raised multiple rounds of VC funding and understand exactly what investors look for. Let me help you perfect your pitch deck, financial model, and narrative before you step into the room.",
  "Built and managed high-performing engineering and product teams. If your tech stack is crumbling under scale or you need to hire your first 10 engineers, we should talk.",
  "Deep expertise in B2B SaaS and enterprise sales. Transitioning from founder-led sales to a predictable revenue machine is hard. I provide the playbook to get you there.",
  "Passionate about consumer brands, D2C, and e-commerce. I've navigated the complexities of supply chain, performance marketing, and Shopify optimization to build 8-figure businesses.",
  "Former top-tier consultant turned operator. I bring structure to chaos. Whether it's unit economics, operational efficiency, or strategic pivots, I provide actionable, no-nonsense advice."
];

const mentors = [];

for (let i = 0; i < 60; i++) {
  const firstName = getRandom(firstNames);
  const lastName = getRandom(lastNames);
  mentors.push({
    name: `${firstName} ${lastName}`,
    title: getRandom(titles),
    company: getRandom(companies),
    imageUrl: getRandom(images),
    expertise: getRandomItems(expertisePool, 3),
    experienceYears: Math.floor(Math.random() * 15) + 5,
    rating: (Math.random() * (5.0 - 4.5) + 4.5).toFixed(1),
    reviews: Math.floor(Math.random() * 400) + 50,
    priceSession: getRandom(prices),
    bio: getRandom(bios)
  });
}

const fileContent = `// Auto-generated 60 realistic Indian mentor profiles
const mentors = ${JSON.stringify(mentors, null, 2)};
module.exports = mentors;
`;

fs.writeFileSync(path.join(__dirname, '../backend/data/mentors.js'), fileContent);
console.log('Successfully generated 60 mentors and saved to backend/data/mentors.js');
