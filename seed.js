const mongoose = require('mongoose');
const Book = require('./models/book'); // Adjust the path as needed
const Category = require('./models/category'); // Adjust the path as needed

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/books'; // Use environment variable or default

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
    });
    console.log('MongoDB connected successfully');

    // Clear existing data
    console.log('Clearing existing data...');
    await Category.deleteMany({});
    await Book.deleteMany({});
    console.log('Existing data cleared.');

    // Seed categories
    console.log('Seeding categories...');
    const categories = await Category.insertMany([
      { Name: 'Fiction', Description: 'Fictional books' },
      { Name: 'Non-Fiction', Description: 'Non-Fictional books' },
      { Name: 'Science Fiction', Description: 'Sci-Fi books' },
      { Name: 'Fantasy', Description: 'Fantasy books' },
      { Name: 'Mystery', Description: 'Mystery books' },
    ]);
    console.log('Categories inserted:', categories);

    // Seed books
    console.log('Seeding books...');
    const books = [
      {
        BookId: 1,
        Name: 'Sample Book 1',
        Description: 'A thrilling tale of adventure.',
        Price: mongoose.Types.Decimal128.fromString('19.99'),
        Author: 'Author One',
        Stock: 100,
        CategoryId: categories[0]._id, // Fiction
      },
      {
        BookId: 2,
        Name: 'Sample Book 2',
        Description: 'Insights into the world of economics.',
        Price: mongoose.Types.Decimal128.fromString('29.99'),
        Author: 'Author Two',
        Stock: 50,
        CategoryId: categories[1]._id, // Non-Fiction
      },
      {
        BookId: 3,
        Name: 'Sample Book 3',
        Description: 'A journey through space and time.',
        Price: mongoose.Types.Decimal128.fromString('15.99'),
        Author: 'Author Three',
        Stock: 80,
        CategoryId: categories[2]._id, // Science Fiction
      },
      {
        BookId: 4,
        Name: 'Sample Book 4',
        Description: 'An epic fantasy saga.',
        Price: mongoose.Types.Decimal128.fromString('25.99'),
        Author: 'Author Four',
        Stock: 60,
        CategoryId: categories[3]._id, // Fantasy
      },
      {
        BookId: 5,
        Name: 'Sample Book 5',
        Description: 'A gripping mystery thriller.',
        Price: mongoose.Types.Decimal128.fromString('9.99'),
        Author: 'Author Five',
        Stock: 120,
        CategoryId: categories[4]._id, // Mystery
      },
      {
        BookId: 6,
        Name: 'Sample Book 6',
        Description: 'A guide to the wonders of nature.',
        Price: mongoose.Types.Decimal128.fromString('22.50'),
        Author: 'Author Six',
        Stock: 30,
        CategoryId: categories[1]._id, // Non-Fiction
      },
      {
        BookId: 7,
        Name: 'Sample Book 7',
        Description: 'Exploring the depths of the ocean.',
        Price: mongoose.Types.Decimal128.fromString('14.99'),
        Author: 'Author Seven',
        Stock: 90,
        CategoryId: categories[2]._id, // Science Fiction
      },
      {
        BookId: 8,
        Name: 'Sample Book 8',
        Description: 'A heartwarming fantasy adventure.',
        Price: mongoose.Types.Decimal128.fromString('39.99'),
        Author: 'Author Eight',
        Stock: 20,
        CategoryId: categories[3]._id, // Fantasy
      },
      {
        BookId: 9,
        Name: 'Sample Book 9',
        Description: 'A deep dive into criminal psychology.',
        Price: mongoose.Types.Decimal128.fromString('12.99'),
        Author: 'Author Nine',
        Stock: 110,
        CategoryId: categories[4]._id, // Mystery
      },
      {
        BookId: 10,
        Name: 'Sample Book 10',
        Description: 'A historical account of ancient civilizations.',
        Price: mongoose.Types.Decimal128.fromString('19.99'),
        Author: 'Author Ten',
        Stock: 40,
        CategoryId: categories[1]._id, // Non-Fiction
      },
    ];

    await Book.insertMany(books);
    console.log('Books inserted');

  } catch (error) {
    console.error('Error seeding data:', error.message);
    console.error(error.stack);
  } finally {
    await mongoose.connection.close(); // Close the connection
  }
}

seedDatabase();
