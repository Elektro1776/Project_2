var request = require('request');


function getStuff () {
  let url = "https://api.github.com/";
  function getIssues (userArg, repoArg) {
    url += "repos/" + userArg + "/" + repoArg + "/issues";
    // console.log(url);

    request({"url": url, headers: {
    'User-Agent': 'request'
  }}, function (error, res, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', res && res.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage

  let gitRepoObj = JSON.parse(res.body);

  for (let i = 0; i < body.length; i++) {
    console.log(gitRepoObj[i].title + " issue title");
    console.log(gitRepoObj[i].user.login + " user name");
    console.log(gitRepoObj[i].assignee + " assignee");
    console.log(gitRepoObj[i].assignees + " assignees");
    console.log(gitRepoObj[i].comments + " comments");
    console.log(gitRepoObj[i].body + " body");
  }
});
  };
  getIssues("901david", "Flashcard-Fun");
};
getStuff();
