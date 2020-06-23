const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const User = require('../models/userModel');

module.exports.postLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    res.status(404).json('User not found');
    return;
  }

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    res.status(404).json('Wrong password');
    return;
  }

  const payload = { id: user.id };
  const token = jwt.sign(payload, process.env.SECRET_OR_KEY);
  res.json(token);
};

module.exports.postRegister = async (req, res) => {
  const { email, password, name, nickname } = req.body;

  const validUserEmail = await User.findOne({ email });
  if (validUserEmail) {
    res.status(404).json('Email has existed');
    return;
  }

  const validUserNickname = await User.findOne({ nickname });
  if (validUserNickname) {
    res.status(404).json('Nickname has existed');
    return;
  }

  await bcrypt.hash(password, 10, async (err, hash) => {
    const userId = new mongoose.Types.ObjectId();
    await User.create(
      {
        _id: userId,
        name,
        email,
        nickname,
        password: hash,
        profilePictureUrl: `https://api.adorable.io/avatars/55/${userId}`,
      },
      () => {
        const payload = { id: userId };
        const token = jwt.sign(payload, process.env.SECRET_OR_KEY);
        res.json(token);
      }
    );
  });
};
