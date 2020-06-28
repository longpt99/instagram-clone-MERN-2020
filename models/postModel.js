const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    _id: mongoose.Types.ObjectId,
    imageUrl: String,
    caption: String,
    userId: mongoose.Types.ObjectId,
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model('Post', postSchema, 'posts');

module.exports = Post;
