const User = require('../models/userModel')
const Post = require('../models/postModel')
const Comment = require('../models/commentModel')

module.exports.getPostContent = async (req, res) => {
  debugger;
  const {id} = req.params;
  const post = await Post.findById(id);
  const newPost = {...post._doc}
  const user = await User.findById(post.userId);
  const comments = await Comment.find({postId: newPost._id});
  const userInfo = {nickname: user.nickname, profilePictureUrl: user.profilePictureUrl};
  const addCommenterInFo = await Promise.all(comments.map(async(comment) => {
    const newComment = {...comment._doc};
    const user = await User.findById(comment.userId);
    const userInfo = {nickname: user.nickname}
    newComment.userInfo = userInfo;
    return newComment;
  }
    ));
  newPost.userInfo = userInfo;
  newPost.comments = addCommenterInFo.reverse();
  res.json({post: newPost})
}