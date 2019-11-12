const mongoose = require('mongoose');
const request = require('supertest');
const userModel = require('../models/User');
const { connectDB, disconnectDB } = require('../database/db');

describe('Connect Database', () => {
  it('connect database with mongoose', () => {
    beforeAll(async () => {
      try {
        await mongoose.connect(db, {
          useNewUrlParser: true,
          useCreateIndex: true,
          useFindAndModify: false,
          useUnifiedTopology: true
        });
      } catch (err) {
        console.error(err.message);
        process.exit(1);
      };
    });

    afterAll(() => {
      disconnectDB();
    });
  });
});

describe('CRUD data user in database', () => {
  it('Insert data user', async () => {
    let userData = {
      name: 'Testusername Testlastname',
      email: 'test.mail@gmail.com',
      password: '123456'
    };

    connectDB();

    let formData = new userModel(userData);
    let saveUser = await formData.save();

    expect(saveUser._id).toBeDefined();
    expect(saveUser.name).toBe(userData.name);
    expect(saveUser.email).toBe(userData.email);
  });
});