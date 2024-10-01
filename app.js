const express = require('express');
require('dotenv').config();

const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('./config/database'); // Ensure this connects to MongoDB
const bookRoutes = require('./routes/book');
const categoryRoutes = require('./routes/category');
const authRoutes = require('./routes/authRoutes');
const { swaggerUi, swaggerDocs } = require('./config/swagger'); // Import Swagger config

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// Connect to MongoDB using Mongoose
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Set up Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Route handling
app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/auth', authRoutes); // Use auth routes
app.use('/api/book', bookRoutes);
app.use('/api/category', categoryRoutes);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
