const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const User = require('../models/userModel');

module.exports.postLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ email: { msg: 'User not found' } });
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return res.status(404).json({ password: { msg: 'Wrong password' } });
  }

  const payload = {
    sub: user.id,
    iat: Date.now(),
    exp: Date.now() + 2 * 24 * 60 * 60 * 1000,
  };
  const token = jwt.sign(payload, process.env.SECRET_OR_KEY);
  debugger;
  return res.json({ token });
};

module.exports.postRegister = async (req, res) => {
  const { email, password, name, nickname } = req.body;
  const validUserEmail = await User.findOne({ email });
  if (validUserEmail) {
    return res.status(404).json({ email: { msg: 'Email has existed' } });
  }

  const validUserNickname = await User.findOne({ nickname });
  if (validUserNickname) {
    return res.status(404).json({ nickname: { msg: 'Nickname has existed' } });
  }

  return bcrypt.hash(password, 10, async (err, hash) => {
    const userId = mongoose.Types.ObjectId();
    const user = await User.create({
      _id: userId,
      name,
      email,
      nickname,
      password: hash,
      profilePictureUrl: `https://api.adorable.io/avatars/200/${userId}`,
    });
    const payload = {
      sub: user.id,
      iat: Date.now(),
      exp: Date.now() + 2 * 24 * 60 * 60 * 1000,
    };
    const token = jwt.sign(payload, process.env.SECRET_OR_KEY);
    res.json({ token });
  });
};
