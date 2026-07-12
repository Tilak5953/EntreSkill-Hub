/**
 * EntreSkill Hub - Backend Server
 * Express.js REST API with MongoDB
 * Developer: Tilak Kumar
 * -- Tilak Kumar
 */

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// ----- Middleware -----

// Enable CORS for frontend
app.use(
  cors({
    origin: ['http://localhost:5173', 'https://entre-skill-hub-khaki.vercel.app'],
    credentials: true,
  })
);

// Parse JSON request bodies
app.use(express.json());

// ----- API Routes -----
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/assessment', require('./routes/assessmentRoutes'));
app.use('/api/recommendations', require('./routes/recommendRoutes'));
app.use('/api/saved', require('./routes/savedRoutes'));

// Health-check endpoint
app.get('/', (req, res) => {
  res.json({ success: true, message: 'EntreSkill Hub API is running 🚀' });
});

// ----- Global Error Handler -----
app.use((err, req, res, _next) => {
  console.error('❌ Unhandled Error:', err.stack || err.message);

  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal Server Error',
  });
});

// ----- Start Server -----
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
