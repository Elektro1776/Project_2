
 const express = require('express');
const request = require("request");
 const router = express.Router();

// Get repos for a user
 router.post('/api/github/getRepos', (req, res)=>{
  //  console.log(req.body);
   request({
     headers: {
       "Accept": "application/vnd.github.v3.full+json",
       "User-Agent": "request"
     },
     method: 'GET',
     json: true,
     url: 'https://api.github.com/users/' + req.body.id + '/repos'
   }, (err, response, body) => {
     console.log(' WHAT IS THE BODY?', body);
   })
     });

 // Get issues
 router.post('/api/github/getIssues', (req, res)=>{
  //  console.log(req.body);
   request({
     headers: {
       "Accept": "application/vnd.github.v3.full+json",
       "User-Agent": "request"
     },
     method: 'GET',
     json: true,
     url: 'https://api.github.com/repos/' + req.body.owner + '/' + req.body.repo + '/issues'
   }, (err, response, body) => {
     console.log(' WHAT IS THE BODY?', body);
   })
     });

 // Get comments from a specific issue
 router.post('/api/github/getIssueComments', (req, res)=>{
  //  console.log(req.body);
   request({
     headers: {
       "Accept": "application/vnd.github.v3.full+json",
       "User-Agent": "request"
     },
     method: 'GET',
     json: true,
     url: 'https://api.github.com/repos/' + req.body.owner + '/' + req.body.repo + '/issues/' + req.body.number + '/comments'
   }, (err, response, body) => {
     console.log(' WHAT IS THE BODY?', body);
   })
     });

 // Get Collaborators
 router.post('/api/github/getCollaborators', (req, res)=>{
  //  console.log(req.body);
   request({
     headers: {
       "Accept": "application/vnd.github.v3.full+json",
       "User-Agent": "request"
     },
     method: 'GET',
     json: true,
     url: 'https://api.github.com/repos/' + req.body.owner + '/' + req.body.repo + '/collaborators?access_token=' + req.user.github.token
   }, (err, response, body) => {
     console.log(' WHAT IS THE BODY?', body);
   })
     });

 // Get a branch
 router.post('/api/github/getBranch', (req, res)=>{
  //  console.log(req.body);
   request({
     headers: {
       "Accept": "application/vnd.github.v3.full+json",
       "User-Agent": "request"
     },
     method: 'GET',
     json: true,
     url: 'https://api.github.com/repos/' + req.body.owner + '/' + req.body.repo + '/branches/' + req.body.branch
   }, (err, response, body) => {
     console.log(' WHAT IS THE BODY?', body);
   })
     });

 // Get all pull requests
 router.post('/api/github/getPulls', (req, res)=>{
  //  console.log(req.body);
   request({
     headers: {
       "Accept": "application/vnd.github.v3.full+json",
       "User-Agent": "request"
     },
     method: 'GET',
     json: true,
     url: 'https://api.github.com/repos/' + req.body.owner + '/' + req.body.repo + '/pulls'
   }, (err, response, body) => {
     console.log(' WHAT IS THE BODY?', body);
   })
     });

 module.exports = router;
