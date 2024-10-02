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

exports. patchBook = async (req, res) => {
  const { bookId } = req.params;
  const updateFields = req.body;

  try {
    const updatedBook = await Book.findOneAndUpdate(
      { BookId: bookId },
      { $set: updateFields },
      { new: true, runValidators: true } // Returns the updated document
    );

    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(400).json({ message: 'Error updating book', error: error.message });
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
