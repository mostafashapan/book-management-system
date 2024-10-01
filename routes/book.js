const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// GET all books
router.get('/', bookController.getAllBooks);

// GET a specific book by BookId
router.get('/bookid/:bookId', bookController.getBookById);

// POST a new book
router.post('/', bookController.createBook);

// PUT update an existing book
router.put('/bookid/:bookId', bookController.updateBook);

// DELETE a book
router.delete('/bookid/:bookId', bookController.deleteBook);

module.exports = router;
