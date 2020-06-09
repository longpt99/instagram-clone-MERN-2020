const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    _id: mongoose.Types.ObjectId,
    email: String,
    password: String,
    name: String,
    nickname: String,
    friendsId: Array,
    profilePictureUrl: String
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;