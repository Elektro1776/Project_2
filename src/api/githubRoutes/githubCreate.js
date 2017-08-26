
const express = require('express');
const request = require("request");
const router = express.Router();
// Create a file
router.post('/api/github/createFile', (req, res)=>{
  console.log('https://api.github.com/repos/' + req.body.owner + '/' + req.body.repo + '/contents/' + req.body.path + '?access_token=' + req.body.token);
  request({
    headers: {
      "Accept": "application/vnd.github.v3.full+json",
      "User-Agent": "request"
    },
    method: 'PUT',
    json: true,
    url: 'https://api.github.com/repos/' + req.body.owner + '/' + req.body.repo + '/contents/' + req.body.path + '?access_token=' + req.body.token,
    body: {message: req.body.message,
    content: req.body.content}
  }, (err, response, body) => {
    console.log(' WHAT IS THE BODY?', body);
  })
});

// Create an issue
router.post('/api/github/createIssue', (req, res)=>{
  request({
    headers: {
      "Accept": "application/vnd.github.v3.full+json",
      "User-Agent": "request"
    },
    method: 'POST',
    json: true,
    url: 'https://api.github.com/repos/' + req.body.owner + '/' + req.body.repo + '/issues?access_token=' + req.body.token,
    body:{title: req.body.title,
      body: req.body.body,
      assignees: req.body.assignees}
    }, (err, response, body) => {
      console.log(' WHAT IS THE BODY?', body);
    })
  });

  // Create a pull request
  router.post('/api/github/createPullRequest', (req, res)=>{
    request({
      headers: {
        "Accept": "application/vnd.github.v3.full+json",
        "User-Agent": "request"
      },
      method: 'POST',
      json: true,
      url: 'https://api.github.com/repos/' + req.body.owner + '/' + req.body.repo + '/pulls?access_token=' + req.body.token,
      body: {title: req.body.title,
      head: req.body.head,
      base: req.body.base,
      body: req.body.body}
    }, (err, response, body) => {
      console.log(' WHAT IS THE BODY?', body);
    })
  });

  // Create pull request comment
  router.post('/api/github/createPullRequestComment', (req, res)=>{
    request({
      headers: {
        "Accept": "application/vnd.github.v3.full+json",
        "User-Agent": "request"
      },
      method: 'POST',
      json: true,
      url: 'https://api.github.com/repos/' + req.body.owner + '/' + req.body.repo + '/pulls/' + req.body.number + '/comments?access_token=' + req.body.token,
      body: {body: req.body.body,
      commit_id: req.body.commit_id,
      path: req.body.path,
      position: req.body.position} //position must be passed as an integer
    }, (err, response, body) => {
      console.log(' WHAT IS THE BODY?', body);
    })
  });

  // Create a new repo
  router.post('/api/github/createRepo', (req, res)=>{
    request({
      headers: {
        "Accept": "application/vnd.github.v3.full+json",
        "User-Agent": "request"
      },
      method: 'POST',
      json: true,
      url: 'https://api.github.com/user/repos?access_token=' + req.body.token,
      body: {name: req.body.name,
      allow_rebase_merge: req.body.allow_rebase_merge,
      description: req.body.description,
      'auto-init': true,
      gitignore_template: req.body.gitignore_template}
    }, (err, response, body) => {
      console.log(' WHAT IS THE BODY?', body);
    })
  });

  // Add assignees to issues
  router.post('/api/github/addAssignees', (req, res)=>{
    request({
      headers: {
        "Accept": "application/vnd.github.v3.full+json",
        "User-Agent": "request"
      },
      method: 'POST',
      json: true,
      url: 'https://api.github.com/repos/' + req.body.owner + '/' + req.body.repo + '/issues/' + req.body.number + '/assignees?access_token=' + req.body.token,
      body: {assignees: req.body.assignees}
    }, (err, response, body) => {
      console.log(' WHAT IS THE BODY?', body);
    })
  });

  // Add collaborator
  router.post('/api/github/addCollaborator', (req, res)=>{
    request({
      headers: {
        "Accept": "application/vnd.github.v3.full+json",
        "User-Agent": "request"
      },
      method: 'PUT',
      json: true,
      url: 'https://api.github.com/repos/' + req.body.owner + '/' + req.body.repo + '/collaborators/' + req.body.username + '?access_token=' + req.body.token
    }, (err, response, body) => {
      console.log(' WHAT IS THE BODY?', body);
    })
  });


  // Edit a comment
  router.post('/api/github/editComment', (req, res)=>{
    request({
      headers: {
        "Accept": "application/vnd.github.v3.full+json",
        "User-Agent": "request"
      },
      method: 'PATCH',
      json: true,
      url: 'https://api.github.com/repos/' + req.body.owner + '/' + req.body.repo + '/issues/comments/' + req.body.id + '?access_token=' + req.body.token,
      body: {body: req.body.body}
    }, (err, response, body) => {
      console.log(' WHAT IS THE BODY?', body);
    })
  });

  // Fork repo - not working
  router.post('/api/github/fork', (req, res)=>{
    console.log(req.body);
    request({
      headers: {
        "Accept": "application/vnd.github.v3.full+json",
        "User-Agent": "request"
      },
      method: 'POST',
      json: true,
      url: 'https://api.github.com/repos/' + req.body.owner + '/' + req.body.repo + '?access_token=' + req.body.token
    }, (err, response, body) => {
      console.log(' WHAT IS THE BODY?', body);
    })
  });


  // Create comment on issue
  router.post('/api/github/createIssueComment', (req, res)=>{
    request({
      headers: {
        "Accept": "application/vnd.github.v3.full+json",
        "User-Agent": "request"
      },
      method: 'POST',
      json: true,
      url: 'https://api.github.com/repos/' + req.body.owner + '/' + req.body.repo + '/issues/' + req.body.number + '/comments?access_token=' + req.body.token,
      body: {body: req.body.body}
    }, (err, response, body) => {
      console.log(' WHAT IS THE BODY?', body);
    })
  });

  // Edit an issue
  router.post('/api/github/editIssue', (req, res)=>{
    request({
      headers: {
        "Accept": "application/vnd.github.v3.full+json",
        "User-Agent": "request"
      },
      method: 'PATCH',
      json: true,
      url: 'https://api.github.com/repos/' + req.body.owner + '/' + req.body.repo + '/issues/' + req.body.number + '?access_token=' + req.body.token,
      body: {title: req.body.title,
      body: req.body.body,
      assignees: req.body.assignees}
    }, (err, response, body) => {
      console.log(' WHAT IS THE BODY?', body);
    })
  });

  // Render markdown - not working
  router.post('/api/github/markdown', (req, res)=>{
    request({
      headers: {
        "Accept": "application/vnd.github.v3.full+json",
        "User-Agent": "request"
      },
      method: 'POST',
      'content_type': "text/plain",
      url: 'https://api.github.com/markdown/raw',
      body: JSON.stringify(req.body)
    }, (err, response, body) => {
      console.log(' WHAT IS THE BODY?', body);
    })
  });

  // Update a file - need to figure out why SHA number not working
  router.post('/api/github/updateFile', (req, res)=>{
    request({
      headers: {
        "Accept": "application/vnd.github.v3.full+json",
        "User-Agent": "request"
      },
      method: 'PUT',
      json: true,
      url: 'https://api.github.com/repos/' + req.body.owner + '/' + req.body.repo + '/contents/' + req.body.path + '?access_token=' + req.body.token,
      body: {message: req.body.message,
      content: req.body.content,
      sha: req.body.sha}
    }, (err, response, body) => {
      console.log(' WHAT IS THE BODY?', body);
    })
  });

  module.exports = router;
