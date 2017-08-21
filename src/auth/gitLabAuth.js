const passport = require('passport');
var GitLabStrategy = require('passport-gitlab2')

console.log(' WHAT IS THIS????', process.env.GIT_HUB_CLIENT_ID);
module.exports = passport.use( new GitLabStrategy({
    clientID: process.env.GIT_HUB_CLIENT_ID,
    clientSecret: process.env.GIT_HUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/gitlab",
    // baseURL: 'https://gitlab.example.com/oauth/authorize'
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(' What is the profile id???', profile);
    // User.findOrCreate({gitlabId: profile.id}, function (err, user) {
    //   return cb(err, user);
    // });
    cb(profile.id);
  }
));

// module.exports = passport;
