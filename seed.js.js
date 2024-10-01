const mongoose = require('mongoose');
const Book = require('./models/book'); // Adjust the path as needed
const Category = require('./models/category'); // Adjust the path as needed

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/books'; // Use environment variable or default

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');

    // Clear existing data
    await Category.deleteMany({});
    await Book.deleteMany({});

    // Seed categories
    const categories = await Category.insertMany([
      { Name: 'Fiction', Description: 'Fictional books' },
      { Name: 'Non-Fiction', Description: 'Non-Fictional books' },
      { Name: 'Science Fiction', Description: 'Sci-Fi books' },
      { Name: 'Fantasy', Description: 'Fantasy books' },
      { Name: 'Mystery', Description: 'Mystery books' },
    ]);

    console.log('Categories inserted:', categories);

    // Seed books
    const books = [
      {
        BookId: 1,
        Name: 'Sample Book 1',
        Description: 'This is a sample book description.',
        Price: 19.99,
        Author: 'Author One',
        Stock: 100,
        CategoryId: categories[0]._id // Fiction
      },
      {
        BookId: 2,
        Name: 'Sample Book 2',
        Description: 'This is another sample book description.',
        Price: 29.99,
        Author: 'Author Two',
        Stock: 50,
        CategoryId: categories[1]._id // Non-Fiction
      },
      {
        BookId: 3,
        Name: 'Sample Book 3',
        Description: 'This is a sample book description for Book 3.',
        Price: 15.99,
        Author: 'Author Three',
        Stock: 80,
        CategoryId: categories[2]._id // Science Fiction
      },
      {
        BookId: 4,
        Name: 'Sample Book 4',
        Description: 'This is a sample book description for Book 4.',
        Price: 25.99,
        Author: 'Author Four',
        Stock: 60,
        CategoryId: categories[3]._id // Fantasy
      },
      {
        BookId: 5,
        Name: 'Sample Book 5',
        Description: 'This is a sample book description for Book 5.',
        Price: 9.99,
        Author: 'Author Five',
        Stock: 120,
        CategoryId: categories[4]._id // Mystery
      },
      {
        BookId: 6,
        Name: 'Sample Book 6',
        Description: 'This is a sample book description for Book 6.',
        Price: 22.50,
        Author: 'Author Six',
        Stock: 30,
        CategoryId: categories[0]._id // Fiction
      },
      {
        BookId: 7,
        Name: 'Sample Book 7',
        Description: 'This is a sample book description for Book 7.',
        Price: 14.99,
        Author: 'Author Seven',
        Stock: 90,
        CategoryId: categories[1]._id // Non-Fiction
      },
      {
        BookId: 8,
        Name: 'Sample Book 8',
        Description: 'This is a sample book description for Book 8.',
        Price: 39.99,
        Author: 'Author Eight',
        Stock: 20,
        CategoryId: categories[2]._id // Science Fiction
      },
      {
        BookId: 9,
        Name: 'Sample Book 9',
        Description: 'This is a sample book description for Book 9.',
        Price: 12.99,
        Author: 'Author Nine',
        Stock: 110,
        CategoryId: categories[3]._id // Fantasy
      },
      {
        BookId: 10,
        Name: 'Sample Book 10',
        Description: 'This is a sample book description for Book 10.',
        Price: 19.99,
        Author: 'Author Ten',
        Stock: 40,
        CategoryId: categories[4]._id // Mystery
      },
    ];

    await Book.insertMany(books);
    console.log('Books inserted');

  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await mongoose.connection.close(); // Close the connection
  }
}

seedDatabase();
