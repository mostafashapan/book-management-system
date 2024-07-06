const express = require('express');
const router = express.Router();
const Book = require('../models/book'); // Ensure 'Book' model is properly defined

// GET all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a specific book by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByPk(id);
    if (!book) {
      res.status(404).json({ message: 'Book not found' });
    } else {
      res.json(book);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new book
router.post('/', async (req, res) => {
  const newBook = req.body;
  try {
    const createdBook = await Book.create(newBook);
    res.status(201).json(createdBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update an existing book
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updatedBook = req.body;
  try {
    const book = await Book.findByPk(id);
    if (!book) {
      res.status(404).json({ message: 'Book not found' });
    } else {
      await book.update(updatedBook);
      res.json(book);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a book
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByPk(id);
    if (!book) {
      res.status(404).json({ message: 'Book not found' });
    } else {
      await book.destroy();
      res.json({ message: 'Book deleted' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
