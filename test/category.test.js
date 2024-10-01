const mongoose = require('mongoose');
const { expect } = require('chai');
const Category = require('../models/category');

describe('Category Model', () => {
  before(async () => {
    await mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
  });

  after(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  it('should create a category with valid data', async () => {
    const category = new Category({
      Name: 'Test Category',
      Description: 'A category for testing',
    });

    const savedCategory = await category.save();
    expect(savedCategory._id).to.exist;
    expect(savedCategory.Name).to.equal('Test Category');
  });

  it('should not save a category without a name', async () => {
    const category = new Category({});
    try {
      await category.save();
    } catch (error) {
      expect(error.errors.Name).to.exist;
    }
  });
});
