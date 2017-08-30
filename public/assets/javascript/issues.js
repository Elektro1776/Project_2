$(document).ready(()=>{
  $('.panel-default').on('click', function(){
    $('.issueTextAppend').empty();
    let currentObj = {};
    let collapseChild = $(this).children('.panel-collapse');
    collapseChild.toggleClass('collapse')
    let userName = $(this).find('.userArg').text().slice(11).trim();
    // console.log(userName);
    let repoName = $(this).find('.nameArg').text().trim();
    currentObj.owner = userName;
    currentObj.repo = repoName;

    $.post('/api/github/getIssues', currentObj, function (data) {
      console.log(data);
        for (issues in data) {
                let assignees;
                let assigneesLink;
                if (data[issues].assignee !== null) {
                  assignees = data[issues].assignee.login;
                  assigneesLink = '<a href="https://github.com/' + assignees + '">' + assignees + '</a>';

                }
                else {
                  assigneesLink = "Currently None";
                }
                let bodyText;
                if (data[issues].body === "") {
                  bodyText = "Currently None";
                }
                else {
                  bodyText = data[issues].body;
                }
                collapseChild.children('.issueTextAppend').append('<p>Title: ' + data[issues].title + '<span>   |   </span>Created By: <a href="https://github.com/' + data[issues].user.login + '">' + data[issues].user.login + '</a><span>   |   </span>Issue #: ' + data[issues].number + '<span>   |   </span>Assignee: ' + assigneesLink + '</p><p>Body: ' + data[issues].body + '</p><hr/>');

        }
    });
  });
});
