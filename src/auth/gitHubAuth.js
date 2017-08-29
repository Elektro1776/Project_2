const passport = require('passport');
var express = require('express');
var GitHubStrategy = require('passport-github2').Strategy;
var github = require('./ghkey.js');
const orm = require('../db/orm');
console.log(' WHAT IS THE ORM', orm);
module.exports = passport.use(new GitHubStrategy({
    clientID: github.id,
    clientSecret: github.secret,
    callbackURL: "http://127.0.0.1:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    if (profile) {
      user = profile;
      console.log(accessToken, " access token");
      console.log(refreshToken, " refresh token");
      console.log(user.id, " profile");
      orm.createUser(user).then((results) => {
        return done(null, user);

      })
    }
    else {
      return done(null, false);
    }
})
);
