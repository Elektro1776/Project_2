var express = require("express");
var GitHubStrategy = require("passport-github2").Strategy;
var github = require("./ghkey.js") || null;
const orm = require("../db/orm");
module.exports = function(passport) {
  passport.serializeUser(function(profile, done) {
    const { id, username, email, provider, github } = profile;
    const user = {};
    user.id = id;
    user.username = username;
    user.email = email;
    user.provider = provider;
    user.github = { token: github.token };
    done(null, user);
  });
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });
  passport.use(
    new GitHubStrategy(
      {
        clientID: github.id || process.env.GITHUB_ID,
        clientSecret: github.secret || process.env.GITHUB_SECRET,
        callbackURL: "http://localhost:3000/auth/github/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        if (profile) {
          const { id, username, email, provider } = profile;
          const user = Object.create({});
          user.id = id;
          user.username = username;
          user.email = email;
          user.provider = provider;
          user.github = { token: accessToken };
          orm.createUser(user).then(results => {
            return done(null, user);
          });
        } else {
          return done(null, false);
        }
      }
    )
  );
};
