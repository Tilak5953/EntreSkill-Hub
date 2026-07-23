const mongoose = require('mongoose');
const Recommendation = require('../backend/models/Recommendation');
require('dotenv').config({ path: '../backend/.env' });

const MONGO_URI = 'mongodb+srv://entreskillhub:entreskillhub123@cluster0.mongodb.net/entreskillhub?retryWrites=true&w=majority';

async function clearDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');
    await Recommendation.deleteMany({});
    console.log('Successfully deleted all old business recommendations');
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

clearDB();
