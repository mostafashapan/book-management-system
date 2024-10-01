const mongoose = require('mongoose');
const { expect } = require('chai');
const User = require('../models/user');

describe('User Model', () => {
  before(async () => {
    await mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
  });

  after(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  it('should create a user with valid data', async () => {
    const user = new User({
      username: 'testuser',
      password: 'password123',
    });

    const savedUser = await user.save();
    expect(savedUser._id).to.exist;
    expect(savedUser.username).to.equal('testuser');
  });

  it('should hash the password before saving', async () => {
    const user = new User({
      username: 'anotheruser',
      password: 'password123',
    });

    const savedUser = await user.save();
    expect(savedUser.password).to.not.equal('password123');
  });

  it('should not save a user without a username', async () => {
    const user = new User({ password: 'password123' });
    try {
      await user.save();
    } catch (error) {
      expect(error.errors.username).to.exist;
    }
  });
});
