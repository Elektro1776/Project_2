
 const express = require('express');
 var request = require("request");
 const router = express.Router();
// Create a file
 router.post('/api/github/createFile', (req, res)=>{
   let owner  = req.body.owner;
   let repo = req.body.repo;
   let path = req.body.path;
   let access = req.body.token;
   console.log(req.body);

   request({
     method: 'PUT',
     json: true,
     url: 'https://api.github.com/repos/' + owner + '/' + repo + '/contents/' + path + '?access_token=' + access,
     message: req.body.title,
     content: req.body.body
   }, (err, response, body) => {
     console.log(' WHAT IS THE BODY?', body);
   })
     });

 // Create an issue
 router.post('/api/github/createIssue', (req, res)=>{
   let owner  = req.body.owner;
   let repo = req.body.repo;
   let access = req.body.token;
   request({
     method: 'POST',
     json: true,
     url: 'https://api.github.com/repos/' + owner + '/' + repo + '/issues?access_token=' + access,
     title: req.body.title,
     body: req.body.body,
     assignees: req.body.assignees
   }, (err, response, body) => {
     console.log(' WHAT IS THE BODY?', body);
   })
     });

 // Create a pull request
  router.post('/api/github/createPullRequest', (req, res)=>{
    let owner  = req.body.owner;
    let repo = req.body.repo;
    let access = req.body.token;
    request({
      method: 'POST',
      json: true,
      url: 'https://api.github.com/repos/' + owner + '/' + repo + '/pulls?access_token=' + access,
      title: req.body.title,
      head: req.body.head,
      base: req.body.base,
      body: req.body.body
    }, (err, response, body) => {
      console.log(' WHAT IS THE BODY?', body);
    })
      });

// Create pull request comment
router.post('/api/github/createPullRequestComment', (req, res)=>{
  let owner  = req.body.owner;
  let repo = req.body.repo;
  let number = req.body.number
  let access = req.body.token;
  request({
    method: 'POST',
    json: true,
    url: 'https://api.github.com/repos/' + owner + '/' + repo + '/pulls/' + number + '/comments?access_token=' + access,
    body: req.body.body,
    commit_id: req.body.commit_id,
    path: req.body.path,
    position: req.body.position
  }, (err, response, body) => {
    console.log(' WHAT IS THE BODY?', body);
  })
    });

// Create a new repo
router.post('/api/github/createRepo', (req, res)=>{
  let access = req.body.token;
  request({
    method: 'POST',
    json: true,
    url: 'https://api.github.com/user/repos/?access_token=' + access,
    name: req.body.name,
    allow_rebase_merge: req.body.allow_rebase_merge,
    description: req.body.description,
    'auto-init': true,
    gitignore_template: req.body.gitignore_template
  }, (err, response, body) => {
    console.log(' WHAT IS THE BODY?', body);
  })
    });

// Add assignees to issues
router.post('/api/github/addAssignees', (req, res)=>{
  let owner  = req.body.owner;
  let repo = req.body.repo;
  let number = req.body.number
  let access = req.body.token;
  request({
    method: 'POST',
    json: true,
    url: 'https://api.github.com/repos/' + owner + '/' + repo + '/issues/' + number + '/assignees?access_token=' + access,
    assignees: req.body.assignees
  }, (err, response, body) => {
    console.log(' WHAT IS THE BODY?', body);
  })
    });

// Add collaborator
router.post('/api/github/addCollaborator', (req, res)=>{
  let owner  = req.body.owner;
  let repo = req.body.repo;
  let username = req.body.username
  let access = req.body.token;
  request({
    method: 'PUT',
    json: true,
    url: 'https://api.github.com/repos/' + owner + '/' + repo + '/collaborators/' + username + '?access_token=' + access
  }, (err, response, body) => {
    console.log(' WHAT IS THE BODY?', body);
  })
    });


// Edit a comment
router.post('/api/github/editComment', (req, res)=>{
  let owner  = req.body.owner;
  let repo = req.body.repo;
  let id = req.body.id
  let access = req.body.token;
  request({
    method: 'PATCH',
    json: true,
    url: 'https://api.github.com/repos/' + owner + '/' + repo + '/issues/comments' + id + '?access_token=' + access,
    body: req.body.body
  }, (err, response, body) => {
    console.log(' WHAT IS THE BODY?', body);
  })
    });

// Fork repo
router.post('/api/github/fork', (req, res)=>{
  let owner  = req.body.owner;
  let repo = req.body.repo;
  let access = req.body.token;
  request({
    method: 'POST',
    json: true,
    url: 'https://api.github.com/repos/' + owner + '/' + repo + '?access_token=' + access
  }, (err, response, body) => {
    console.log(' WHAT IS THE BODY?', body);
  })
    });


// Creater comment on issue
router.post('/api/github/createIssueComment', (req, res)=>{
  let owner  = req.body.owner;
  let repo = req.body.repo;
  let number = req.body.number;
  let access = req.body.token;
  request({
    method: 'POST',
    json: true,
    url: 'https://api.github.com/repos/' + owner + '/' + repo + '/issues/' + number + '/comments?access_token=' + access,
    body: req.body.body
  }, (err, response, body) => {
    console.log(' WHAT IS THE BODY?', body);
  })
    });

// Edit an issue
router.post('/api/github/editIssue', (req, res)=>{
  let owner  = req.body.owner;
  let repo = req.body.repo;
  let number = req.body.number;
  let access = req.body.token;
  request({
    method: 'PATCH',
    json: true,
    url: 'https://api.github.com/repos/' + owner + '/' + repo + '/issues/' + number + '?access_token=' + access,
    title: req.body.title,
    body: req.body.body,
    assignees: req.body.assignees
  }, (err, response, body) => {
    console.log(' WHAT IS THE BODY?', body);
  })
    });

// Render markdown
router.post('/api/github/markdown', (req, res)=>{
  let access = req.body.token;
  request({
    method: 'POST',
    json: true,
    url: 'https://api.github.com/markdown/raw',
    body: req.body.body
  }, (err, response, body) => {
    console.log(' WHAT IS THE BODY?', body);
  })
    });

// Update a file - need to figure out why SHA number not working
router.post('/api/github/updateFile', (req, res)=>{
  let owner  = req.body.owner;
  let repo = req.body.repo;
  let path = req.body.path;
  let access = req.body.token;
  request({
    method: 'PUT',
    json: true,
    url: 'https://api.github.com/repos/' + owner + '/' + repo + '/contents/' + path + '?access_token=' + access,
    message: req.body.message,
    content: req.body.content,
    sha: req.body.sha
  }, (err, response, body) => {
    console.log(' WHAT IS THE BODY?', body);
  })
    });

module.exports = router;
