const express = require('express');
const router = express.Router();
const Category = require('../models/category');

// GET all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a specific category by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findByPk(id);
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
    } else {
      res.json(category);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new category
router.post('/', async (req, res) => {
  const newCategory = req.body;
  try {
    const createdCategory = await Category.create(newCategory);
    res.status(201).json(createdCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update an existing category
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updatedCategory = req.body;
  try {
    const category = await Category.findByPk(id);
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
    } else {
      await category.update(updatedCategory);
      res.json(category);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a category
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findByPk(id);
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
    } else {
      await category.destroy();
      res.json({ message: 'Category deleted' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
