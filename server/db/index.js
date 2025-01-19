// getting-started.js
const mongoose = require('mongoose');


async function connectDB() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/mmorpgtest');
    console.log('success connect to mongodb');
  } catch (err) {
    console.error('nonodb', err)
  }
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = {
  connectDB
}