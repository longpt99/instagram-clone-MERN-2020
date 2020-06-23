const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    _id: mongoose.Types.ObjectId,
    postId: mongoose.Types.ObjectId,
    userId: mongoose.Types.ObjectId,
    content: String,
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model('Comment', commentSchema, 'comments');

module.exports = Comment;
