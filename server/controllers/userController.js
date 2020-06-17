const cloudinary = require('cloudinary').v2;
const mongoose = require('mongoose');

const Post = require('../models/postModel');
const User = require('../models/userModel');
const Comment = require('../models/commentModel');

cloudinary.
config({
  cloud_name: 'cloud-img-longpt99',
  api_key: '181469854372294',
  api_secret: 'WZkPqavk03tsbjALm48W7Ujj7_s',
});

module.exports.getAdmin = (req, res) => {
  res.json(req.user)
}

module.exports.postImage = async (req, res) => {
  const {caption} = req.body;
  const {file} = req.files;

  await file.mv(`./public/uploads/post/${file.name}`, async () => {
    await cloudinary.uploader.upload(
      `./public/uploads/post/${file.name}`, 
      {
        public_id: `instagram/POST/img_${file.md5}`
      },
      (error, result) => {
        const { url } = result;
        Post.create({
          _id: new mongoose.Types.ObjectId,
          imageUrl: url, 
          caption,
          userId: req.user.id,
        }, (err, data) => {
          console.log(data)
        })
      }
    );
  })
}

module.exports.getUserProfile = async (req, res) => {
  const {nickname} = req.query;
  const userInfo = await User.findOne({nickname});
  const images = await Post.find({userId: userInfo.id});
  res.json({images, userInfo});
}

module.exports.getSuggestedUsers = async (req, res) => {
  const {followingId, id} = req.user;
  await User.find((err, result) => {
    const filterUsers = result.filter(user => {
      if (!(followingId.includes(user.id)) && id !== user.id) return user; 
    })
    res.json(filterUsers);
  });
}

module.exports.sendFollowUser = async (req, res) => {
  const {userId} = req.body;
  const {id} = req.user;
  const arrsId = [...req.user.followingId];
  arrsId.push(userId)
  await User.findByIdAndUpdate(id, {
    followingId: arrsId,
  }, (err, result) => {
    console.log(result);
  })
}

module.exports.getFollowingPosts = async (req, res) => {
  const {followingId, id} = req.user;
  const posts = await Post.find((err, result) => {
    return result.filter((post) => {
      if (followingId.includes(post.userId) === true || id === post.userId) {
        return post
      }
    })
  });
  const addPostInfo = await Promise.all(posts.map(async(post) => {
    const newPost = {...post._doc}
    const user = await User.findById(post.userId);
    const comments = await Comment.find({postId: newPost._id});
    const userInfo = {nickname: user.nickname, profilePictureUrl: user.profilePictureUrl};
    newPost.userInfo = userInfo;
    newPost.comments = comments;
    return newPost;
  }))

  res.json({posts:addPostInfo})
}

module.exports.postComment = async (req, res) => {
  await Comment.create({
    _id: mongoose.Types.ObjectId(),
    ...req.body,
    userId: req.user.id
  }, (err, result) => {
    res.json({status: 'Add comment successfully'})
  })
}