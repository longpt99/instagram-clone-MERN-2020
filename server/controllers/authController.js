const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/userModel');

module.exports.login = (req, res) => {
  debugger;
};

module.exports.postLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    res.status(404).json('User not found')
    return;
  }

  const valid = await bcrypt.compare(password, user.password);
  
  if (!valid) {
    res.status(404).json('Wrong password')
    return;
  }

  const payload = { id: user.id };
  const token = jwt.sign(payload, process.env.SECRET_OR_KEY);
  res.json(token);
};