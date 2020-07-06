const mongoose = require('mongoose');

const Post = require('../models/postModel');
const User = require('../models/userModel');
const Comment = require('../models/commentModel');
const Reaction = require('../models/reactionModel');


module.exports.getAdmin = (req, res) => {
  res.json(req.user);
};

module.exports.searchUsername = async (req, res) => {
  const { q } = req.query;
  const users = await User.find({nickname: new RegExp(q, 'i')});
  res.json({users});
}

module.exports.getUserProfile = async (req, res) => {
  const { nickname } = req.params;
  const userInfo = await User.findOne({ nickname });
  const images = await Post.find({ userId: userInfo.id }).sort('-createdAt');
  res.json({ images, userInfo });
};

module.exports.getSuggestedUserList = async (req, res) => {
  const { followingId, id } = req.user;
  const users = await User.find()
  const getUsers = users.filter((user) => {
    if (!followingId.includes(user.id) && id !== user.id) return user;
  });
  res.json({users: getUsers});
};

module.exports.sendFollowerRequest = async (req, res) => {
  const { userId } = req.body;
  const { id } = req.user;
  const followingId = [...req.user.followingId];
  followingId.push(userId);
  await User.findByIdAndUpdate(id,{followingId});

  const user = await User.findById(userId);
  const followersId = [...user.followersId];
  followersId.push(id);
  await User.findByIdAndUpdate(userId, {followersId});

  res.json({userId})
};

module.exports.getFollowingPostList = async (req, res) => {
  const { followingId, id } = req.user;
  const getPosts = await Post.find();
  const posts = getPosts.filter((post) => {
    if (followingId.includes(post.userId)) {
      return post;
    }
    if (id === post.userId.toString()) {
      return post;
    }
  });
  const addPostInfo = await Promise.all(
    posts.map(async (post) => {
      const newPost = { ...post._doc };
      const user = await User.findById(post.userId);
      const comments = await Comment.find({ postId: newPost._id });
      const reactions = await Reaction.find({postId: newPost._id});
      const userInfo = {
        nickname: user.nickname,
        profilePictureUrl: user.profilePictureUrl,
      };
      const addCommentInfo = await Promise.all(
        comments.map(async (comment) => {
          const newComment = { ...comment._doc };
          const user = await User.findById(comment.userId);
          const userInfo = { nickname: user.nickname };
          newComment.userInfo = userInfo;
          return newComment;
        })
      );
      newPost.reactions = reactions;
      newPost.userInfo = userInfo;
      newPost.comments = addCommentInfo;
      return newPost;
    })
  );

  res.json({ posts: addPostInfo.reverse() });
};