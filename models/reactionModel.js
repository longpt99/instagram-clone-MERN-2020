const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  postId: mongoose.Types.ObjectId,
  userId: mongoose.Types.ObjectId,
});

const Reaction = mongoose.model('Reaction', reactionSchema, 'reactions');

module.exports = Reaction;
