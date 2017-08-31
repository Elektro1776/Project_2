// const passport = require('passport');
var express = require('express');
var GitHubStrategy = require('passport-github2').Strategy;
var github = require('./ghkey.js');
const orm = require('../db/orm');
console.log(' WHAT IS THE ORM', orm);
module.exports = function(passport) {
  passport.serializeUser(function(profile, done){
    const {id, username, email, provider, github} = profile;
    // console.log("user data serialized", profile);
    console.log('SERIALIZING USER NOW', profile);
    const user = {};
    user.id = id;
    user.username = username;
    user.email = email;
    user.provider = provider;
    user.github = { token: github.token} ;
    done(null, user);
  })
  passport.deserializeUser(function(user, done){
    // console.log(' WHEN IS DESERIALIZE CALLED ', );
    done(null, user);
  })
  passport.use(new GitHubStrategy({
    clientID: github.id || process.env.GITHUB_ID,
    clientSecret: github.secret || process.env.GITHUB_SECRET,
    callbackURL: "https://trill-board.herokuapp.com/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    if (profile) {
      const {id, username, email, provider} = profile;
      // console.log(accessToken, "access token");
      const user = Object.create({});
      user.id = id;
      user.username = username;
      user.email = email;
      user.provider = provider;
      user.github = { token: accessToken} ;
      // console.log(user, " profile");
      // console.log(refreshToken, " refresh token");
      orm.createUser(user).then((results) => {
        // console.log(' WHAT IS DONE?', user);

        return done(null, user);

      })
    }
    else {
      return done(null, false);
    }
})
);
}
