const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Category = require('./category');

const Book = sequelize.define('Book', {
  BookId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      min: 0
    }
  },
  Author: {
    type: DataTypes.STRING
  },
  Stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
  },
  CategoryId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  hooks: {
    beforeUpdate: (book, options) => {
      // Only update `updatedAt` if specific fields are updated
      if (book.changed('Name') || book.changed('Description') || book.changed('Price')) {
        book.updatedAt = new Date();
      }
    }
  }
});

// Define associations
Book.belongsTo(Category, { foreignKey: 'CategoryId' });
Category.hasMany(Book, { foreignKey: 'CategoryId' });

module.exports = Book;
