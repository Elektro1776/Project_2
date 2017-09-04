const express = require('express');
const router = express.Router();
// const GitLabStrategy = require('../auth/gitLabAuth');
const GitHubStrategy = require('../auth/gitHubAuth.js');
const SlackStrategy = require('../auth/slackAuth');
// console.log(' WHAT IS THE STRATEGY', GitLabStrategy.authenticate);

// router.get('/login', (req, res) => {
//   console.log(' IS THIS FIRING ????');
//   res.render('login', { title: 'Trilll'});
// })
// router.get('/logout', (req, res) => {
//   req.logout();
//   console.log(' WHATtttt ,', req.logout);
//   res.redirect('/login')
// })
// router.get('/auth/gitlab',
//   GitLabStrategy.authenticate('gitlab'),
//   (req, res) => {
//     res.sendStatus(200)
//   }
// )
// router.get('/auth/gitlab/authorized',
//   GitLabStrategy.authenticate('gitlab', { failureRedirect: '/' }),
//   function(req, res) {
//     // Successful authentication
//     res.json(req.user);
// })
//Github authentification routes
router.get('/auth/github', function () {
  GitHubStrategy.authenticate('github', { scope: ['user:email'] })
});

router.get('/auth/github/callback', function () {
  GitHubStrategy.authenticate('github', {
    // successRedirect : '/',
    failureRedirect: '/login'
  }),
  (req, res) => {
    // console.log(' CALL BACK SUCCESSSS', req.user);
    res.redirect('/')
  }
});

  // Slack authorization routes
  // router.get('/auth/slack', SlackStrategy.authenticate('slack'));
  // router.get('/auth/slack/callback',
  //   SlackStrategy.authenticate('slack', { failureRedirect: '/login' }),
  //   function(req, res) {
  //     // Successful authentication, redirect home.
  //     res.redirect('/');
    // });
module.exports = router;
