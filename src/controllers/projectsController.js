const express = require('express');
const router = express.Router();
const request = require('request');
var github = require("../auth/ghkey.js");
var parse = require('parse-link-header');


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
    // console.log(projects[0], " projects");
    var userName = projects[0].owner.login
    var issueArray = [];
    for (let i = 0; i < 5; i++) {
      let repoName = projects[i].name;
      issueArray.push(repoName);
      // issueArray.push({projects[i].name: []});
      request({
        headers: {
          "Accept": "application/vnd.github.v3.full+json",
          "User-Agent": "request"
        },
        method: 'GET',
        json: true,
        url: 'https://api.github.com/repos/' + userName + '/' + repoName + '/issues'
      }, (err, response, issues) => {
        var issueObj = {};
        for (let i = 0; i < issueArray.length - 1; i++) {

        }
        console.log(issueArray);
        console.log(repoName, ' lin 36')


        // issueObj[currentRepo] = issues;
        // console.log(' IssueObj', issueObj);
      })
    }
    // console.log('Issue obj ', issueArray);

    let linkHeader = response.headers.link;
    var parsed = parse(linkHeader);
    // console.log(parsed);

    let nextPage;
    let prevPage;
    let start;
    let end;
    if (parsed.first === undefined && parsed.prev === undefined) {
      nextPage = parsed.next.url.slice(parsed.next.url.length -1);
      prevPage = parsed.last.url.slice(parsed.last.url.length -1);
    }
    else if (parsed.next === undefined && parsed.last === undefined) {
      nextPage = parsed.first.url.slice(parsed.first.url.length -1);
      prevPage = parsed.prev.url.slice(parsed.prev.url.length -1);
    }
    else {
      nextPage = parsed.next.url.slice(parsed.next.url.length -1);
      prevPage = parsed.prev.url.slice(parsed.prev.url.length -1);
    }

    let pages = {"pageForward": nextPage, "pageBackward": prevPage};
    console.log(pages)
    res.render('projects', { title: 'uTile', projects, pages});
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
    let linkHeader = response.headers.link;
    var parsed = parse(linkHeader);
    // console.log(parsed);

    let nextPage;
    let prevPage;
    let start;
    let end;
    if (parsed.first === undefined && parsed.prev === undefined) {
      nextPage = parsed.next.url.slice(parsed.next.url.length -1);
      prevPage = parsed.last.url.slice(parsed.last.url.length -1);
    }
    else if (parsed.next === undefined && parsed.last === undefined) {
      nextPage = parsed.first.url.slice(parsed.first.url.length -1);
      prevPage = parsed.prev.url.slice(parsed.prev.url.length -1);
    }
    else {
      nextPage = parsed.next.url.slice(parsed.next.url.length -1);
      prevPage = parsed.prev.url.slice(parsed.prev.url.length -1);
    }

    let pages = {"pageForward": nextPage, "pageBackward": prevPage};
    console.log(pages)
    res.render('projects', { title: 'uTile', projects, pages});
  })
});

module.exports = router;
