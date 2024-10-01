const Category = require('../models/category');

// GET all categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET a specific category by CategoryId
exports.getCategoryByCategoryId = async (req, res) => {
  const { categoryId } = req.params;
  try {
    const category = await Category.findOne({ CategoryId: categoryId });
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(category);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET a specific category by ID
exports.getCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(category);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST a new category
exports.createCategory = async (req, res) => {
  const newCategory = new Category(req.body);
  try {
    const createdCategory = await newCategory.save();
    res.status(201).json(createdCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT update an existing category by ID
exports.updateCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findByIdAndUpdate(id, req.body, { new: true });
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(category);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE a category by ID
exports.deleteCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findByIdAndDelete(id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json({ message: 'Category deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE a category by CategoryId
exports.deleteCategoryByCategoryId = async (req, res) => {
  const { categoryId } = req.params;
  try {
    const category = await Category.findOneAndDelete({ CategoryId: categoryId });
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json({ message: 'Category deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
