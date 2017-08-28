const express = require('express');
const request = require("request");
const router = express.Router();
var github = require("../../auth/ghkey.js");
// Get repos for a user

 // router.post('/api/github/getRepos', (req, res)=>{
 //   console.log(req.body);
 //  let pageNumber;
 //   if (req.body.urlForward) {
 //     pageNumber = req.body.urlForward;
 //
 //   }
 //   else if (req.body.urlBackward) {
 //     pageNumber = req.body.urlBackward;
 //   }
 //   else {
 //     pageNumber = 1;
 //     console.log("I really hope this never falls to this.");
 //   }
 //  console.log(pageNumber, " page number");
 //   request({
 //     headers: {
 //       "Accept": "application/vnd.github.v3.full+json",
 //       "User-Agent": "request"
 //     },
 //     method: 'GET',
 //     json: true,
 //     url: 'https://api.github.com/user/repos?access_token=' + github.token + '&per_page=5&sort=created&direction=desc&page=' + pageNumber,
 //   }, (err, response, projects) => {
 //     let forwardLink = response.headers.link;
 //     let pages = {};
 //     const pullString = function(stringToCheck) {
 //       const myRegex = /(http[^>]*)/g;
 //       let links = [];
 //       let match = myRegex.exec(stringToCheck);
 //       while (match != null) {
 //         // console.log(match[0]);
 //         links.push(match[0]);
 //         //redefine match
 //         match = myRegex.exec(stringToCheck);
 //       }
 //       pages.pageBackwardLink = links[1];
 //       pages.pageForwardLink = links[0];
 //     };
 //
 //     pullString(forwardLink);
 //     var pageForward = pages.pageForwardLink.slice(pages.pageForwardLink.length-1);
 //     var pageBackward = pages.pageBackwardLink.slice(pages.pageBackwardLink.length-1);
 //     pages = {"pageForward": pageForward, "pageBackward": pageBackward};
 //    //  console.log(pages);
 //
 //
 //     res.render('projects', { title: 'uTile', projects, pages});
 //   })
 //     });

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
module.exports = router;
