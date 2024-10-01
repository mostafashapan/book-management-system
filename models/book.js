const mongoose = require('mongoose');
const { Schema } = mongoose;
const Category = require('./category'); // Assuming Category is another Mongoose model

const bookSchema = new Schema({
  BookId: {
    type: Number,
    required: true,
    unique: true,
    // You may want to handle auto-incrementing through a separate mechanism
  },
  Name: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  },
  Price: {
    type: Schema.Types.Decimal128,
    required: true,
    min: 0
  },
  Author: {
    type: String
  },
  Stock: {
    type: Number,
    required: true,
    min: 0
  },
  CategoryId: {
    type: Schema.Types.ObjectId,
    ref: 'Category', // Reference to the Category model
    required: true
  }
}, {
  timestamps: true // Automatically manage createdAt and updatedAt
});

// Pre-save hook to handle custom logic for updatedAt if needed
bookSchema.pre('save', function(next) {
  if (this.isModified('Name') || this.isModified('Description') || this.isModified('Price')) {
    this.updatedAt = Date.now(); // Optional if timestamps is used
  }
  next();
});

// Create the model
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
