const express = require('express');
const router = express.Router();
const passport = require('passport');
const GitLabStrategy = require('../auth/gitLabAuth');
console.log(' WHAT IS THE STRATEGY', GitLabStrategy.authenticate);
router.get('/login', (req, res) => {
  res.render('login', { title: 'Trilll'});
})
router.get('/auth/gitlab',
  GitLabStrategy.authenticate('gitlab'),
  (req, res) => {
    res.sendStatus(200)
  }
)
  // res.json({message: 'Login bitttchhhhh'})
router.get('/auth/gitlab/authorized',
  GitLabStrategy.authenticate('gitlab', { failureRedirect: '/' }),
  function(req, res) {
    // console.log(' WHAT IS THIS????', req);
    // Successful authentication
    res.json(req.user);
})
// router.get('/auth/github/callback',
//   passportGithub.authenticate('github', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Successful authentication
//     res.json(req.user);
//   });
module.exports = router;
