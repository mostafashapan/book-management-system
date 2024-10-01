const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// GET all categories
router.get('/', categoryController.getAllCategories);

// GET a specific category by CategoryId
router.get('/categoryId/:categoryId', categoryController.getCategoryByCategoryId);

// GET a specific category by ID
router.get('/:id', categoryController.getCategoryById);

// POST a new category
router.post('/', categoryController.createCategory);

// PUT update an existing category by ID
router.put('/:id', categoryController.updateCategory);

// DELETE a category by ID
router.delete('/:id', categoryController.deleteCategoryById);

// DELETE a category by CategoryId
router.delete('/categoryId/:categoryId', categoryController.deleteCategoryByCategoryId);

module.exports = router;
