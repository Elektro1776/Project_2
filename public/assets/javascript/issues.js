$(document).ready(()=>{
  $('.panel-default').on('click', function(){
    $('.issueTextAppend').empty();
    let currentObj = {};
    let collapseChild = $(this).children('.panel-collapse');
    collapseChild.toggleClass('collapse').toggleClass('in');
    let userName = $(this).find('.userArg').text().slice(11).trim();
    // console.log(userName);
    let repoName = $(this).find('.nameArg').text().trim();
    currentObj.owner = userName;
    currentObj.repo = repoName;

    $.post('/api/github/getIssues', currentObj, function (data) {
      console.log(data);
        for (issues in data) {
          for (users in data[issues].assignees) {
              collapseChild.children('.issueTextAppend').append('<p>Title: ' + data[issues].title + '<span>   |   </span>Created By: <a href="https://github.com/' + data[issues].user.login + '">' + data[issues].user.login + '</a><span>   |   </span>Issue #: ' + data[issues].number + '<span>   |   </span>Assignees: <a href="https://github.com/' + data[issues].assignees[users].login + '">' + data[issues].assignees[users].login + '</a></p><p>Body: ' + data[issues].body + '</p><hr/>');
          }
        }
    });



  });
});
