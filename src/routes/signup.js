// const express = require('express');
// const router = express.Router();
//
// router.get('/login', (req, res) => {
//   res.render()
// })
const dashboard = require('./index');

module.exports = (app, passport) => {
  app.get('/', isLoggedIn, dashboard);

  app.get('/auth/github',
    passport.authenticate('github', { scope: ['user:email'] })
  );
  app.get('/auth/github/callback',
    passport.authenticate('github', {

      failureRedirect: '/projects'
    }),
    (req, res) => {
      // console.log(' CALL BACK SUCCESSSS', req.user, new Date());
      setTimeout(function () {
        res.redirect('/')

      }, 10);
    }
  )
  app.get('/login', (req, res) => {
    console.log(' IS THIS FIRING ????');
    res.render('login', { title: 'Trilll'});
  });
  app.get('/logout', function(req, res){
    console.log('FIRE LOGOUT!!!!!!!!' );
    req.session.destroy(function (err) {
      res.redirect('/'); //Inside a callback… bulletproof!
    });
  });
  function isLoggedIn(req, res, next) {
    console.log(' WHAT IS THE REQ AUTH', req.isAuthenticated(), req.user);
        if (req.isAuthenticated()) {
          console.log(' WE SHOULD HAVE AUTH???' );
          return next();

        }
        // res.render('login')
        return res.redirect('/login');
    }
}
