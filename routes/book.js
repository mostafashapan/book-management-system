const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const { authenticate } = require('../middleware/authMiddleware');
// GET all books
router.get('/',  authenticate,bookController.getAllBooks);

// GET a specific book by BookId
router.get('/bookid/:bookId', bookController.getBookById);

// POST a new book
router.post('/', bookController.createBook);

// PUT update an existing book
router.put('/bookid/:bookId', bookController.updateBook);


router.patch('/bookid/:bookId', bookController.patchBook);
// DELETE a book
router.delete('/bookid/:bookId', bookController.deleteBook);

module.exports = router;
