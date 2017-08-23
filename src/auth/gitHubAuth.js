const passport = require('passport');
var GitHubStrategy = require('passport-github2').Strategy;
var github = require('./ghkey.js');
passport.use(new GitHubStrategy({
    clientID: github.id,
    clientSecret: github.secret,
    callbackURL: "http://127.0.0.1:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ githubId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));


// // Use the GitHubStrategy within Passport.
// //   Strategies in Passport require a `verify` function, which accept
// //   credentials (in this case, an accessToken, refreshToken, and GitHub
// //   profile), and invoke a callback with a user object.
// passport.use(new GitHubStrategy({
//     clientID: GITHUB_CLIENT_ID,
//     clientSecret: GITHUB_CLIENT_SECRET,
//     callbackURL: "http://127.0.0.1:3000/auth/github/callback"
//   },
//   function(accessToken, refreshToken, profile, done) {
//     // asynchronous verification, for effect...
//     process.nextTick(function () {
//
//       // To keep the example simple, the user's GitHub profile is returned to
//       // represent the logged-in user.  In a typical application, you would want
//       // to associate the GitHub account with a user record in your database,
//       // and return that user instead.
//       return done(null, profile);
//     });
//   }
// ));
