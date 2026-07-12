# EntreSkill Hub — AI-Powered Business Recommendation System

> **PS-II Internship Project** | Tilak Kumar | BML Munjal University | Unified Mentor Pvt. Ltd.

---

## 📌 Project Overview

EntreSkill Hub is a full-stack MERN application that helps aspiring entrepreneurs discover the right business based on their skills, education, budget, experience, and interests. Users take a 25-question skill assessment and receive personalised business recommendations from a rule-based engine.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19 + Vite 8 |
| Styling | Tailwind CSS 3 |
| Routing | React Router v7 |
| HTTP Client | Axios |
| Notifications | React Hot Toast |
| Backend | Node.js + Express.js |
| Database | MongoDB + Mongoose |
| Authentication | JWT + bcryptjs |
| API Validation | Express Validator |

---

## 📁 Folder Structure

```
EntreSkill Hub/
├── src/                          # Frontend (React)
│   ├── App.jsx                   # Root with AuthProvider + routing
│   ├── context/
│   │   └── AuthContext.jsx       # Auth state (login/register/logout)
│   ├── utils/
│   │   └── api.js                # Axios instance with JWT interceptor
│   ├── components/
│   │   ├── common/
│   │   │   ├── ProtectedRoute.jsx
│   │   │   └── ScrollToTop.jsx
│   │   ├── layout/
│   │   │   ├── Navbar.jsx        # Auth-aware navigation
│   │   │   └── Footer.jsx
│   │   └── home/                 # Home page sections
│   └── pages/
│       ├── HomePage.jsx
│       ├── LoginPage.jsx         ← Connected to auth API
│       ├── RegisterPage.jsx      ← Connected to auth API
│       ├── SkillAssessmentPage.jsx ← 25-question real quiz
│       ├── DashboardPage.jsx     ← Real data dashboard
│       ├── ProfilePage.jsx       ← Edit profile
│       ├── RecommendationsPage.jsx ← Business listings
│       └── RecommendationDetailPage.jsx ← Business detail
│
└── backend/                      # Backend (Express + MongoDB)
    ├── server.js
    ├── .env
    ├── config/
    │   └── db.js
    ├── models/
    │   ├── User.js
    │   ├── Assessment.js
    │   ├── Recommendation.js
    │   └── SavedRecommendation.js
    ├── controllers/
    │   ├── authController.js
    │   ├── assessmentController.js
    │   ├── recommendController.js
    │   └── savedController.js
    ├── routes/
    │   ├── authRoutes.js
    │   ├── assessmentRoutes.js
    │   ├── recommendRoutes.js
    │   └── savedRoutes.js
    ├── middleware/
    │   └── authMiddleware.js
    ├── utils/
    │   ├── generateToken.js
    │   └── recommendationEngine.js
    └── data/
        ├── questions.js          ← 25 assessment questions
        └── businesses.js         ← 25 business recommendations
```

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js v18+
- npm
- MongoDB Atlas account (or local MongoDB)

### Step 1: Clone the repository
```bash
git clone https://github.com/Tilak5953/EntreSkill-Hub.git
cd EntreSkill-Hub
```

### Step 2: Install frontend dependencies
```bash
npm install
```

### Step 3: Set up backend
```bash
cd backend
npm install
```

### Step 4: Configure environment variables
Edit `backend/.env` and replace the MongoDB URI with your own:
```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/entreskillhub
JWT_SECRET=your_secure_jwt_secret_here
JWT_EXPIRE=30d
NODE_ENV=development
```

### Step 5: Run the backend
```bash
# From the backend/ directory
npm run dev
```

### Step 6: Seed the database
Open your browser and visit:
```
http://localhost:5000/api/recommendations/seed
```
This inserts all 25 business recommendations into MongoDB.

### Step 7: Run the frontend
```bash
# From the root project directory
npm run dev
```
Open: **http://localhost:5173**

---

## 🔌 API Documentation

Base URL: `http://localhost:5000/api`

### Authentication
| Method | Endpoint | Body | Auth | Description |
|--------|----------|------|------|-------------|
| POST | `/auth/register` | `{name, email, password, mobile}` | No | Register new user |
| POST | `/auth/login` | `{email, password}` | No | Login + get JWT |
| GET | `/auth/profile` | — | Yes | Get logged-in user |
| PUT | `/auth/profile` | `{name, mobile, education, ...}` | Yes | Update profile |

### Assessment
| Method | Endpoint | Body | Auth | Description |
|--------|----------|------|------|-------------|
| GET | `/assessment/questions` | — | Yes | Get 25 questions |
| POST | `/assessment/submit` | `{answers: [{questionId, selectedOption}]}` | Yes | Submit + compute scores |
| GET | `/assessment/result` | — | Yes | Get latest result |

### Recommendations
| Method | Endpoint | Body | Auth | Description |
|--------|----------|------|------|-------------|
| GET | `/recommendations` | — | Yes | Get personalised matches |
| GET | `/recommendations/:id` | — | Yes | Get single business |
| GET | `/recommendations/seed` | — | No | Seed 25 businesses (admin) |

### Saved Businesses
| Method | Endpoint | Body | Auth | Description |
|--------|----------|------|------|-------------|
| GET | `/saved` | — | Yes | Get all saved |
| POST | `/saved/:id` | — | Yes | Save a business |
| DELETE | `/saved/:id` | — | Yes | Unsave a business |

---

## 🗃️ Database Schema

### Users Collection
```js
{ name, email, password (hashed), mobile, education, skills[], interests[], budget, experience, location }
```

### Assessments Collection
```js
{ user, answers[], categoryScores{9 categories}, overallScore, strengths[], weaknesses[] }
```

### Recommendations Collection
```js
{ name, description, category, investment{min,max,display}, riskLevel, profitPotential, requiredSkills[], advantages[], challenges[], successTips[], growthPotential, futureScope, suitableFor{...} }
```

### SavedRecommendations Collection
```js
{ user, recommendation }  // Compound unique index
```

---

## 🧠 Recommendation Engine

The engine uses a **rule-based matching algorithm** that scores each business against the user's profile across 6 weighted factors:

| Factor | Weight | How it works |
|--------|--------|-------------|
| Skill Match | 30% | Overlap between user skills and business skill requirements |
| Budget Match | 20% | User budget vs business investment range |
| Education Match | 15% | User education vs suitable education levels |
| Experience Match | 15% | User experience vs suitable experience levels |
| Interest Match | 10% | User interests vs business category |
| Assessment Strength | 10% | User's top strengths aligned with business category |

Returns all businesses sorted by `matchPercentage` (0–100).

---

## 🚀 Deployment

### Frontend — Vercel
```bash
npm run build
# Deploy dist/ folder to Vercel
```
Add environment variable in Vercel: `VITE_API_URL=https://your-backend.render.com/api`

### Backend — Render
1. Create a new Web Service on Render
2. Connect your GitHub repo
3. Root directory: `backend`
4. Build command: `npm install`
5. Start command: `node server.js`
6. Add environment variables (MONGO_URI, JWT_SECRET, etc.)

### MongoDB — Atlas
1. Create a free cluster at mongodb.com/atlas
2. Add your IP to the whitelist (or allow all: 0.0.0.0/0)
3. Create a database user and copy the connection string to `.env`

---

## 📄 License

MIT — Developed as part of PS-II Internship at Unified Mentor Pvt. Ltd.

**Developer:** Tilak Kumar | B.Tech CSE | BML Munjal University
