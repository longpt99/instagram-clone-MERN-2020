const passport = require('./passportMiddleware');

module.exports.tokenExp = (req, res, next) => {
  return req.user.msg ? res.status(401).json({msg: req.user.msg}) : next();
}