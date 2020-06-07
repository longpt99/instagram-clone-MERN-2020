const passport = require('passport');
const passportJWT = require('passport-jwt');
const mongoose = require('mongoose');

const User = require('../models/userModel');

const JwtStrategy = passportJWT.Strategy;
const { ExtractJwt } = passportJWT;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_OR_KEY,
};

const strategy = new JwtStrategy(opts, async (jwt_payload, next) => {
  await User.findById(jwt_payload.id, (err, user) => {
    if (user) {
      next(null, user);
    } else {
      next(null, false);
    }
  });
});

passport.use(strategy);

module.exports = passport;