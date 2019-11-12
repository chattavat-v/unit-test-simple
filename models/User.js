const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String }
});

module.exports = Member = mongoose.model('user', MemberSchema);