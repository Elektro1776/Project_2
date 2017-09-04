const passport = require('passport');
var express = require('express');
var GitHubStrategy = require('passport-github2').Strategy;
var github = require('./ghkey.js') || null;
const orm = require('../db/orm');
module.exports = function(passport) {
  passport.serializeUser(function(profile, done){
    const {id, username, email, provider, github} = profile;
    const user = {};
    user.id = id;
    user.username = username;
    user.email = email;
    user.provider = provider;
    user.github = { token: github.token} ;
    done(null, user);
  })
  passport.deserializeUser(function(user, done){
    done(null, user);
  })
  let devHub
  if (process.env.NODE_ENV === 'development') {
    devHub = {
      clientID: github.id ,
      clientSecret: github.secret ,
      callbackURL: "http://localhost:3000/auth/github/callback"
    };

  } else {
    devHub = {
      clientID: github.id ,
      clientSecret: github.secret ,
      callbackURL: "http://ec2-34-212-47-239.us-west-2.compute.amazonaws.com/auth/github/callback"
    }
  }
  passport.use(new GitHubStrategy(devHub,
  function(accessToken, refreshToken, profile, done) {
    if (profile) {
      const { id, username, email, provider } = profile;
      const user = Object.create({});
      user.id = id;
      user.username = username;
      user.email = email;
      user.provider = provider;
      user.github = { token: accessToken}
       ;
      orm.createUser(user).then((results) => {
        return done(null, user);

      })
    }
    else {
      return done(null, false);
    }
})
);
}
