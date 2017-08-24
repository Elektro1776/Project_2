const passport = require('passport');
var GitLabStrategy = require('passport-gitlab2');

module.exports = passport.use( new GitLabStrategy({
    clientID: process.env.GIT_HUB_CLIENT_ID,
    clientSecret: process.env.GIT_HUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/gitlab/authorized",
  },
  function(accessToken, refreshToken, profile, cb) {
    // TODO: add our schema method to create user or find user if they have already signed up.
    console.log(' WHAT IS OUR ACCESS TOKEN???', accessToken, refreshToken, profile);
    // User.findOrCreate({gitlabId: profile.id}, function (err, user) {
    //   return cb(err, user);
    // });
    cb(profile.id);
  }
));

// module.exports = passport;
