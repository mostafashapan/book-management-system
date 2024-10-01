const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
  CategoryId: {
    type: Number,
    unique: true, // Ensure it's unique
    sparse: true,  // Allows for uniqueness without requiring a value
  },
  Name: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    
  }
}, {
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
});

// Pre-save hook to generate CategoryId if not provided
categorySchema.pre('save', async function (next) {
  if (!this.CategoryId) {
    const lastCategory = await Category.findOne({}, 'CategoryId').sort({ CategoryId: -1 }).exec();
    this.CategoryId = lastCategory ? lastCategory.CategoryId + 1 : 1; // Start from 1 if no categories exist
  }
  next();
});

// Create the model
const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
