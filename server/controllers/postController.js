const mongoose = require('mongoose');

const User = require('../models/userModel');
const Post = require('../models/postModel');
const Comment = require('../models/commentModel');
const Reaction = require('../models/reactionModel');

module.exports.getPostContent = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id);
  const newPost = { ...post._doc };
  const user = await User.findById(post.userId);
  const comments = await Comment.find({ postId: newPost._id });
  const userInfo = {
    nickname: user.nickname,
    profilePictureUrl: user.profilePictureUrl,
  };
  const addCommenterInFo = await Promise.all(
    comments.map(async (comment) => {
      const newComment = { ...comment._doc };
      const user = await User.findById(comment.userId);
      const userInfo = { nickname: user.nickname };
      newComment.userInfo = userInfo;
      return newComment;
    })
  );
  newPost.userInfo = userInfo;
  newPost.userNickname = userInfo.nickname;
  newPost.userProfileUrl = userInfo.profilePictureUrl;
  newPost.comments = addCommenterInFo.reverse();
  res.json({ post: newPost });
};

module.exports.postLikePhoto = async (req, res) => {
  debugger;
  await Reaction.create({
    _id: mongoose.Types.ObjectId(),
    postId: req.params.id,
    userId: req.user.id,
  }, (err, result) => {
    if (result) {
      return res.json('Reaction successfully')
    }
    return res.status(404).json({err: err.message})
  })
};

module.exports.deleteLikePhoto = async (req, res) => {
  debugger;
  await Reaction.findOneAndDelete({userId: req.user.id, postId: req.params.id})
}
