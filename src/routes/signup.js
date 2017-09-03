
const dashboard = require('./index');
module.exports = (app, passport) => {
  app.get('/', isLoggedIn, dashboard);

  app.get('/auth/github',
    passport.authenticate('github', { scope: ['user:email'] })
  );
  app.get('/auth/github/callback',
    passport.authenticate('github', {
      failureRedirect: '/login'
    }),
    (req, res) => {
      setTimeout(function () {
        res.redirect('/')

      }, 10);
    }
  )
  app.get('/login', (req, res) => {
    res.render('login', { title: 'Trilll'});
  });
  app.get('/logout', function(req, res){
    req.session.destroy(function (err) {
      res.redirect('/'); //Inside a callback… bulletproof!
    });
  });
  function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
          return next();

        }
        return res.redirect('/login');
    }
}
