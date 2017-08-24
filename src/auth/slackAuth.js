const passport = require('passport');
var SlackStrategy = require('@aoberoi/passport-slack').default.Strategy;
module.exports = passport.use(new SlackStrategy({
  clientID: "164552682898.227203105009",
  clientSecret: "1738474b40e5aa3236c3a547479dfcbd",
  callbackURL: "http://localhost:3000/auth/slack/callback"
}, (accessToken, scopes, team, { bot, incomingWebhook }, { user: userProfile , team: teamProfile }, done) => {
  // Create your desired user model and then call `done()`
  // User.findOrCreate({ slackId: userProfile.id }, function (err, user) {
  //   return done(err, user);
  // });
}));
