const passport = require('passport');
var express = require('express');
var GitHubStrategy = require('passport-github2').Strategy;
var github = require('./ghkey.js');
var orm = require('../db/orm');

module.exports = passport.use(new GitHubStrategy({
    clientID: github.id,
    clientSecret: github.secret,
    callbackURL: "http://127.0.0.1:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    if (profile) {
      const {id,username} = profile;
      console.log(accessToken, " access token");
      console.log(refreshToken, " refresh token");
      console.log(profile, " profile");
      const user = {
        initial_federation: 'github',
        utile_username: username,
        github_federation_id: id,
      }
      orm.createUser(user).then((auth) => {
       console.log(auth);
       return done(null, username);
      });
    }
    else {
      return done(null, false);
    }
}));
