var passport = require('passport');

// Implementing new strategy
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));

// Serializing user
passport.serializeUser(function(user, done) {
  done(null, user.id);
});
 // de serializing user
passport.deserializeUser(function(id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

// To use Passport in an Express or Connect-based application, configure it with the required passport.initialize() middleware. If your application uses persistent login sessions (recommended, but not required), passport.session() middleware must also be used.
// app.use(passport.initialize());
// app.use(passport.session());

// Passport provides an authenticate() function, which is used as route middleware to authenticate requests.
// app.post('/login',
//   passport.authenticate('local', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/');
//   });
