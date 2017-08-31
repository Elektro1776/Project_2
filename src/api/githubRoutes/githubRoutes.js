const express = require('express');
const request = require("request");
const router = express.Router();
var github = require("../../auth/ghkey.js");

// Get issues
router.post('/api/github/getIssues', (req, res)=>{
  console.log(req.body, "line 8");
  let currentUrl = 'https://api.github.com/repos/' + req.body.owner + '/' + req.body.repo + '/issues'
  console.log(currentUrl, "line 10");
  request({
    headers: {
      "Accept": "application/vnd.github.v3.full+json",
      "User-Agent": "request"
    },
    method: 'GET',
    json: true,
    url: 'https://api.github.com/repos/' + req.body.owner + '/' + req.body.repo + '/issues?access_token=' + req.body.github.token,
    body: {filter: "all",
    state: "open",
    sort: "created",
    direction: "desc"}
  }, (err, response, body) => {
    res.json(body);
  })
});

// Create an issue
router.post('/api/github/createIssue', (req, res)=>{
  let inputObj = req.body;
  function grabParametersCreateIssue (textObj) {
    let title = textObj.substring(textObj.indexOf('/title'), textObj.indexOf('/', 1));
    title = title.replace('/title', '').trim();
    let assignees = textObj.substring(textObj.indexOf('/assignees'), textObj.indexOf('/', textObj.indexOf('/assignees') + 1));
    assignees = assignees.replace('/assignees', '').trim();
    let body = textObj.substring(textObj.indexOf('/body'), textObj.length);
    body = body.replace('/body', '').trim();
    inputObj.title = title;
    inputObj.assignees = [assignees];
    inputObj.body = body;
  };
  grabParametersCreateIssue(inputObj.title)
  console.log(inputObj);
  request({
    headers: {
      "Accept": "application/vnd.github.v3.full+json",
      "User-Agent": "request"
    },
    method: 'POST',
    json: true,
    url: 'https://api.github.com/repos/' + inputObj.owner + '/' + inputObj.repo + '/issues?access_token=' + req.body.github.token, //req.body.token,
    body:{title: inputObj.title,
      body: inputObj.body,
      assignees: inputObj.assignees}
    }, (err, response, body) => {
      res.redirect('/projects');
    })
  });

  // Create a pull request
  router.post('/api/github/createPullRequest', (req, res)=>{
    var inputObj = req.body;
    function getParametersPull (enteredText) {
      let title = enteredText.substring(enteredText.indexOf('/title'), enteredText.indexOf('/', 1));
      title = title.replace('/title', '').trim();
      let head = enteredText.substring(enteredText.indexOf('/head'), enteredText.indexOf('/', enteredText.indexOf('/head') + 1));
      head = head.replace('/head', '').trim();
      let base = enteredText.substring(enteredText.indexOf('/base'), enteredText.length);
      base = base.replace('/base', '').trim();
      inputObj.title = title;
      inputObj.head = head;
      inputObj.base = base;
    };
    getParametersPull(inputObj.title);
    console.log(inputObj);
    request({
      headers: {
        "Accept": "application/vnd.github.v3.full+json",
        "User-Agent": "request"
      },
      method: 'POST',
      json: true,
      url: 'https://api.github.com/repos/' + inputObj.owner + '/' + inputObj.repo + '/pulls?access_token=' + req.body.github.token, //req.body.token
      body: {title: inputObj.title,
        head: inputObj.head,
        base: inputObj.base}
      }, (err, response, body) => {
        console.log(' WHAT IS THE BODY?', body);
        res.redirect('/projects');
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
        url: 'https://api.github.com/user/repos?access_token=' + req.body.github.token, //req.body.token,
        body: {name: req.body.name,
          allow_rebase_merge: true,
          description: req.body.description,
          'auto-init': true}
        }, (err, response, body) => {
          res.redirect('/projects');
        })
      });

      // Add assignees to issues
      router.post('/api/github/addAssignees', (req, res)=>{
        let inputObj = req.body;
        function getParametersAssignIssues(textObj) {
          let assignees = textObj.substring(textObj.indexOf('/assignees'), textObj.indexOf('/', 1));
          assignees = assignees.replace('/assignees', '').trim();
          let number = textObj.substring(textObj.indexOf('/number'), textObj.length);
          number = number.replace('/number', '').trim();
          inputObj.assignees = [assignees];
          inputObj.number = number;
        };
        getParametersAssignIssues(inputObj.assignees);
        console.log(inputObj);
        request({
          headers: {
            "Accept": "application/vnd.github.v3.full+json",
            "User-Agent": "request"
          },
          method: 'POST',
          json: true,
          url: 'https://api.github.com/repos/' + req.body.owner + '/' + req.body.repo + '/issues/' + req.body.number + '/assignees?access_token=' + req.body.github.token, //req.body.token
          body: {assignees: req.body.assignees}
        }, (err, response, body) => {
          res.redirect('/projects');
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
          url: 'https://api.github.com/repos/' + req.body.owner + '/' + req.body.repo + '/collaborators/' + req.body.username + '?access_token=' + req.body.github.token //req.body.token
        }, (err, response, body) => {
          res.redirect('/projects');
        })
      });
      module.exports = router;
