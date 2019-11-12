const mongoose = require('mongoose');
const db = 'mongodb://localhost:27017/user-test';

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  };
};

const disconnectDB = () => {
  mongoose.connection.close();
};

module.exports = { connectDB, disconnectDB };