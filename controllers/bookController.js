const Book = require('../models/book');

// GET all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET a specific book by BookId
exports.getBookById = async (req, res) => {
  const { bookId } = req.params;
  try {
    const book = await Book.findOne({ BookId: parseInt(bookId) });
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST a new book
exports.createBook = async (req, res) => {
  const newBook = new Book(req.body);
  try {
    const createdBook = await newBook.save();
    res.status(201).json(createdBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT update an existing book
exports.updateBook = async (req, res) => {
  const { bookId } = req.params;
  try {
    const book = await Book.findOneAndUpdate({ BookId: parseInt(bookId) }, req.body, { new: true });
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE a book
exports.deleteBook = async (req, res) => {
  const { bookId } = req.params;
  try {
    const book = await Book.findOneAndDelete({ BookId: parseInt(bookId) });
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json({ message: 'Book deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
