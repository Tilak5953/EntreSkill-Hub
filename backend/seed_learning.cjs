const mongoose = require('mongoose');
const LearningResource = require('../backend/models/LearningResource');
const learningResourcesData = require('../backend/data/learningResources');
require('dotenv').config({ path: '../backend/.env' });

const seedDirectly = async () => {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected.');
    
    console.log('Deleting old resources...');
    await LearningResource.deleteMany({});
    
    console.log('Inserting new resources...');
    const inserted = await LearningResource.insertMany(learningResourcesData);
    console.log(`Successfully seeded ${inserted.length} resources!`);
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding:', error);
    process.exit(1);
  }
};

seedDirectly();
