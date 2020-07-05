const cloudinary = require('cloudinary').v2;
const mongoose = require('mongoose');

const User = require('../models/userModel');
const Post = require('../models/postModel');
const Comment = require('../models/commentModel');
const Reaction = require('../models/reactionModel');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_API_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports.getPostContent = async (req, res) => {
  debugger;
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
  const react = await Reaction.create({
    _id: mongoose.Types.ObjectId(),
    postId: req.params.id,
    userId: req.user.id,
  })
  const data = {...react._doc};
  data.userInfo = req.user;
  res.json({data})
};

module.exports.deleteLikePhoto = (req, res) => {
  const {id} = req.user;
  Reaction.findOneAndDelete({userId: id, postId: req.params.id}, () => {
    res.json({userId: id})
  })
}

module.exports.postComment = async (req, res) => {
  const cmt = await Comment.create({
    _id: mongoose.Types.ObjectId(),
    ...req.body,
    postId: req.params.id,
    userId: req.user.id,
  });
  const data = {...cmt._doc};
  data.userInfo = req.user;
  res.json({data})
};

module.exports.uploadImage = (req, res) => {
  const {id} = req.user
  const { caption } = req.body;
  const { file } = req.files;
  const idPost = new mongoose.Types.ObjectId();

  file.mv(`./public/uploads/posts/${file.name}`, () => {
    cloudinary.uploader.upload(
      `./public/uploads/posts/${file.name}`,
      {
        public_id: `instagram/posts/${id}/img_${file.md5}`,
      },
      async (_error, result) => {
        const { url } = result;
        const post = await Post.create(
          {
            _id: idPost,
            imageUrl: url,
            caption,
            userId: req.user.id,
          }
        );
      res.json({post})
      }
    );
  });
};