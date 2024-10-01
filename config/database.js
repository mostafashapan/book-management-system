const mongoose = require('mongoose');
const Book = require('../models/book'); // Adjust the path as needed
const Category = require('../models/category'); // Adjust the path as needed

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/books'; // Use environment variable or default

async function checkRelationships() {
  try {
    // Fetch books and populate their CategoryId field with category details
    const books = await Book.find().populate('CategoryId');
    console.log('Books with Categories:', JSON.stringify(books, null, 2));
  } catch (err) {
    console.error('Error fetching books with categories:', err);
  }
}

async function connectAndCheck() {
  try {
    await mongoose.connect(mongoURI); // Removed deprecated options
    console.log('MongoDB connected successfully');
    await checkRelationships(); // Call the function to check relationships
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
}

connectAndCheck();

// Export mongoose for use in other modules if needed
module.exports = mongoose;
