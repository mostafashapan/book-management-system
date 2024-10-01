const mongoose = require('mongoose');
const { expect } = require('chai');
const request = require('supertest');
const app = require('../app'); // Your main app file
const User = require('../models/user');

describe('Auth Controller', () => {
  before(async () => {
    await mongoose.connect('mongodb://localhost:27017/books', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  after(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  describe('POST /api/auth/register', () => {
    it('should register a new user with a unique username', async () => {
      const res = await request(app)
        .post('/api/auth/register')
        .send({ username: 'unique_user', password: 'newSecurePassword!' });

      expect(res.status).to.equal(201);
      expect(res.body.message).to.equal('User registered successfully!');
    });

    it('should not register a user with an existing username', async () => {
      await request(app)
        .post('/api/auth/register')
        .send({ username: 'unique_user', password: 'newSecurePassword!' });

      const res = await request(app)
        .post('/api/auth/register')
        .send({ username: 'unique_user', password: 'anotherPassword!' });

      expect(res.status).to.equal(409);
      expect(res.body.error).to.equal('Username already exists');
    });
  });

  describe('POST /api/auth/login', () => {
    it('should login a user with valid credentials', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({ username: 'unique_user', password: 'newSecurePassword!' });

      expect(res.status).to.equal(200);
      expect(res.body.message).to.equal('Login successful!');
      expect(res.body.token).to.exist;
    });

    it('should not login a user with invalid credentials', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({ username: 'unique_user', password: 'wrongPassword!' });

      expect(res.status).to.equal(401);
      expect(res.body.error).to.equal('Invalid credentials');
    });
  });

  describe('GET /api/auth/users', () => {
    it('should return all users without passwords', async () => {
      // Login to get token
      const loginResponse = await request(app)
        .post('/api/auth/login')
        .send({ username: 'unique_user', password: 'newSecurePassword!' });

      const token = loginResponse.body.token;

      const res = await request(app)
        .get('/api/auth/users')
        .set('Authorization', `Bearer ${token}`);

      console.log('Response from /api/auth/users:', res.body); // Debugging log

      expect(res.status).to.equal(200);
      expect(res.body).to.be.an('array');
      
      // Check each user does not have a password
      res.body.forEach(user => {
        expect(user).to.not.have.property('password');
        expect(user).to.have.property('username'); // Ensure username exists
      });

      // Check for the specific user
      const userExists = res.body.some(user => user.username === 'unique_user');
      expect(userExists).to.be.true; // Ensure 'unique_user' is present
    });
  });
});
