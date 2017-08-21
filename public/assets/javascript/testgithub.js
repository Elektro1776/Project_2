var request = require('request');


function getStuff () {
  let url = "https://api.github.com/";
  function getIssues (userArg, repoArg) {
    url += "repos/" + userArg + "/" + repoArg + "/issues";
    console.log(url);

    request.get({"url": url, headers: {
    'User-Agent': 'request'
  }}, function (error, res, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', res && res.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  for (let i = 0; i < body.length; i++) {
    console.log(body[i].number + " issue number");
    console.log(body[i].title + " issue title");
    console.log(body[i].user.login + " user name");
    console.log(body[i].assignee + " assignee");
    console.log(body[i].assignees + " assignees");
    console.log(body[i].comments + " comments");
    console.log(body[i].body + " body");
  }
});
  };
  getIssues("901david", "Flashcard-Fun");
};
getStuff();
