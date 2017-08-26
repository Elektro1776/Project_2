
 const express = require('express');
const request = require("request");
 const router = express.Router();

 // Remove a Collaborator
 router.post('/api/github/removeCollaborator', (req, res)=>{
   let owner  = req.body.owner;
   let repo = req.body.repo;
   let username = req.body.username;
   let access = req.body.token;
   request({
     headers: {
       "Accept": "application/vnd.github.v3.full+json",
       "User-Agent": "request"
     },
     method: 'DELETE',
     json: true,
     url: 'https://api.github.com/repos/' + owner + '/' + repo + '/collaborators/' + username + '?access_token=' + access
   }, (err, response, body) => {
     console.log(' WHAT IS THE BODY?', body);
   })
     });

 // Delete the file
router.post('/api/github/deleteFile', (req, res)=>{
  let owner  = req.body.owner;
  let repo = req.body.repo;
  let path = req.body.path;
  let access = req.body.token;
  request({
    headers: {
      "Accept": "application/vnd.github.v3.full+json",
      "User-Agent": "request"
    },
    method: 'DELETE',
    json: true,
    url: 'https://api.github.com/repos/' + owner + '/' + repo + '/contents/' + path + '?access_token=' + access
  }, (err, response, body) => {
    console.log(' WHAT IS THE BODY?', body);
  })
    });

module.exports = router;
