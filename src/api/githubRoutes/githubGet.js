
 const express = require('express');

 const router = express.Router();

// Get repos for a user
 router.post('/api/github/getRepos', (req, res)=>{
   let id  = req.body.id;
   console.log(req.body);
   request({
     method: 'GET',
     json: true,
     url: 'https://api.github.com/users/' + id + '/repos'
   }, (err, response, body) => {
     console.log(' WHAT IS THE BODY?', body);
   })
     });

 // Get issues
 router.post('/api/github/getIssues', (req, res)=>{
   let owner  = req.body.owner;
   let repo  = req.body.repo;
   console.log(req.body);
   request({
     method: 'GET',
     json: true,
     url: 'https://api.github.com/repos/' + owner + '/' + repo + '/issues'
   }, (err, response, body) => {
     console.log(' WHAT IS THE BODY?', body);
   })
     });

 // Get comments from a specific issue
 router.post('/api/github/getIssueComments', (req, res)=>{
   let owner  = req.body.owner;
   let repo  = req.body.repo;
   let number  = req.body.number;
   console.log(req.body);
   request({
     method: 'GET',
     json: true,
     url: 'https://api.github.com/repos/' + owner + '/' + repo + '/issues/' + number + '/comments'
   }, (err, response, body) => {
     console.log(' WHAT IS THE BODY?', body);
   })
     });

 // Get Collaborators
 router.post('/api/github/getCollaborators', (req, res)=>{
   let owner  = req.body.owner;
   let repo  = req.body.repo;
   console.log(req.body);
   request({
     method: 'GET',
     json: true,
     url: 'https://api.github.com/repos/' + owner + '/' + repo + '/collaborators'
   }, (err, response, body) => {
     console.log(' WHAT IS THE BODY?', body);
   })
     });

 // Get a branch
 router.post('/api/github/getBranch', (req, res)=>{
   let owner  = req.body.owner;
   let repo  = req.body.repo;
   let branch = req.body.branch;
   console.log(req.body);
   request({
     method: 'GET',
     json: true,
     url: 'https://api.github.com/repos/' + owner + '/' + repo + '/branches/' + branch
   }, (err, response, body) => {
     console.log(' WHAT IS THE BODY?', body);
   })
     });

 // Get all pull requests
 router.post('/api/github/getPulls', (req, res)=>{
   let owner  = req.body.owner;
   let repo  = req.body.repo;
   console.log(req.body);
   request({
     method: 'GET',
     json: true,
     url: 'https://api.github.com/repos/' + owner + '/' + repo + '/pulls'
   }, (err, response, body) => {
     console.log(' WHAT IS THE BODY?', body);
   })
     });

 module.exports = router;
