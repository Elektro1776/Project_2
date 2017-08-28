const express = require('express');
const router = express.Router();
const request = require('request');
var github = require("../auth/ghkey.js");


router.get('/projects', (req, res) => {
  let pageNumber = 1;
  request({
    headers: {
      "Accept": "application/vnd.github.v3.full+json",
      "User-Agent": "request"
    },
    method: 'GET',
    json: true,
    url: 'https://api.github.com/user/repos?access_token=' + github.token + '&per_page=5&sort=created&direction=desc&page=' + pageNumber,
  }, (err, response, projects) => {
    // console.log(projects, " projects");
    // request({
    //   headers: {
    //     "Accept": "application/vnd.github.v3.full+json",
    //     "User-Agent": "request"
    //   },
    //   method: 'GET',
    //   json: true,
    //   url: 'https://api.github.com/repos/901david/' + req.body.repo + '/issues'
    // }, (err, response, issues) => {
    //   console.log(' WHAT IS THE BODY?', issues);
    // })
    let forwardLink = response.headers.link;
    let pages = {};
    const pullString = function(stringToCheck) {
      const myRegex = /(http[^>]*)/g;
      let links = [];
      let match = myRegex.exec(stringToCheck);
      while (match != null) {
        // console.log(match[0]);
        links.push(match[0]);
        //redefine match
        match = myRegex.exec(stringToCheck);
      }
      pages.pageBackwardLink = links[1];
      pages.pageForwardLink = links[0];
    };

    pullString(forwardLink);
    var pageForward = pages.pageForwardLink.slice(pages.pageForwardLink.length-1);
    var pageBackward = pages.pageBackwardLink.slice(pages.pageBackwardLink.length-1);
    pages = {"pageForward": pageForward, "pageBackward": pageBackward};
    console.log(pages);


    res.render('projects', { title: 'uTile', projects, pages});
    // console.log(projects);
  })
});
router.post('/projects', (req, res) => {
  let pageNumber;
   if (req.body.urlForward) {
     pageNumber = req.body.urlForward;

   }
   else if (req.body.urlBackward) {
     pageNumber = req.body.urlBackward;
   }
   else {
     pageNumber = 1;
     console.log("I really hope this never falls to this.");
   }
  request({
    headers: {
      "Accept": "application/vnd.github.v3.full+json",
      "User-Agent": "request"
    },
    method: 'GET',
    json: true,
    url: 'https://api.github.com/user/repos?access_token=' + github.token + '&per_page=5&sort=created&direction=desc&page=' + pageNumber,
  }, (err, response, projects) => {
    // console.log(projects, " projects");
    // request({
    //   headers: {
    //     "Accept": "application/vnd.github.v3.full+json",
    //     "User-Agent": "request"
    //   },
    //   method: 'GET',
    //   json: true,
    //   url: 'https://api.github.com/repos/901david/' + req.body.repo + '/issues'
    // }, (err, response, issues) => {
    //   console.log(' WHAT IS THE BODY?', issues);
    // })
    console.log(response.headers.link);
    let forwardLink = response.headers.link;
    let pages = {};
    const pullString = function(stringToCheck) {
      const myRegex = /(http[^>]*)/g;
      let links = [];
      let match = myRegex.exec(stringToCheck);
      while (match != null) {
        // console.log(match[0]);
        links.push(match[0]);
        //redefine match
        match = myRegex.exec(stringToCheck);
      }
      pages.pageBackwardLink = links[1];
      pages.pageForwardLink = links[0];
    };

    pullString(forwardLink);
    var pageForward = pages.pageForwardLink.slice(pages.pageForwardLink.length-1);
    var pageBackward = pages.pageBackwardLink.slice(pages.pageBackwardLink.length-1);
    pages = {"pageForward": pageForward, "pageBackward": pageBackward};
    console.log(pages);


    res.render('projects', { title: 'uTile', projects, pages});
    // console.log(projects);
  })
});

module.exports = router;
