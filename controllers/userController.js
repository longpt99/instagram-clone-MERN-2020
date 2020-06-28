const cloudinary = require('cloudinary').v2;
const mongoose = require('mongoose');

const Post = require('../models/postModel');
const User = require('../models/userModel');
const Comment = require('../models/commentModel');
const Reaction = require('../models/reactionModel');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_API_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports.getAdmin = (req, res) => {
  res.json(req.user);
};

module.exports.searchNickname = async (req, res) => {
  const { q } = req.query;
  // if (q.length > 0) {
  const users = await User.find({nickname: new RegExp(q, 'i')});
  res.json({users});
  // }
  // return res.json({users: []})
}

module.exports.postImage = async (req) => {
  const { caption } = req.body;
  const { file } = req.files;

  await file.mv(`./public/uploads/post/${file.name}`, async () => {
    await cloudinary.uploader.upload(
      `./public/uploads/post/${file.name}`,
      {
        public_id: `instagram/POST/img_${file.md5}`,
      },
      (_error, result) => {
        const { url } = result;
        Post.create(
          {
            _id: new mongoose.Types.ObjectId(),
            imageUrl: url,
            caption,
            userId: req.user.id,
          }
        );
      }
    );
  });
};

module.exports.getUserProfile = async (req, res) => {
  const { nickname } = req.query;
  const userInfo = await User.findOne({ nickname });
  const images = await Post.find({ userId: userInfo.id });
  res.json({ images, userInfo });
};

module.exports.getSuggestedUsers = async (req, res) => {
  const { followingId, id } = req.user;
  await User.find((_err, result) => {
    const filterUsers = result.filter((user) => {
      if (!followingId.includes(user.id) && id !== user.id) return user;
    });
    res.json(filterUsers);
  });
};

module.exports.sendFollowUser = async (req) => {
  const { userId } = req.body;
  const { id } = req.user;
  const arrsId = [...req.user.followingId];
  arrsId.push(userId);
  await User.findByIdAndUpdate(
    id,
    {
      followingId: arrsId,
    }
  );
  const user = await User.findById(userId);
  const arrFollowersId = [...user.followersId];
  debugger;
  arrFollowersId.push(id);
  await User.findByIdAndUpdate(userId, {
    followersId: arrFollowersId,
  })
};

module.exports.getFollowingPosts = async (req, res) => {
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
      newPost.comments = addCommentInfo.reverse();
      return newPost;
    })
  );

  res.json({ posts: addPostInfo.reverse() });
};

module.exports.postComment = async (req, res) => {
  debugger;
  await Comment.create(
    {
      _id: mongoose.Types.ObjectId(),
      ...req.body,
      userId: req.user.id,
    },
    () => {
      res.json({ status: 'Add comment successfully' });
    }
  );
};
