
 const express = require('express');
const request = require("request");
 const router = express.Router();

 // Remove a Collaborator
 router.post('/api/github/removeCollaborator', (req, res)=>{
   request({
     headers: {
       "Accept": "application/vnd.github.v3.full+json",
       "User-Agent": "request"
     },
     method: 'DELETE',
     json: true,
     url: 'https://api.github.com/repos/' + req.body.owner + '/' + req.body.repo + '/collaborators/' + req.body.username + '?access_token=' + req.body.github.token
   }, (err, response, body) => {
     console.log(' WHAT IS THE BODY?', body);
   })
     });

 // Delete the file
router.post('/api/github/deleteFile', (req, res)=>{
  request({
    headers: {
      "Accept": "application/vnd.github.v3.full+json",
      "User-Agent": "request"
    },
    method: 'DELETE',
    json: true,
    url: 'https://api.github.com/repos/' + req.body.owner + '/' + req.body.repo + '/contents/' + req.body.path + '?access_token=' + req.body.github.token
  }, (err, response, body) => {
    console.log(' WHAT IS THE BODY?', body);
  })
    });

module.exports = router;
