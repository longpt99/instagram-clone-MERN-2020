const passport = require('passport');
const passportJWT = require('passport-jwt');

const User = require('../models/userModel');

const JwtStrategy = passportJWT.Strategy;
const { ExtractJwt } = passportJWT;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_OR_KEY,
};

const strategy = new JwtStrategy(opts, async (jwt_payload, next) => {
  const isExpired = (jwt_payload.exp - Date.now());
  if (isExpired < 0) {
    return next(false, {msg: 'Token Expired'});
  }
  const user = await User.findById(jwt_payload.sub);
  if (user) {
    return next(null, user);
  } else {
    return next(null, false);
  }
});

passport.use(strategy);

module.exports = passport;