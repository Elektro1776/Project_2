$(document).ready(() => {
  $(".panel-default").on("click", ".panel-heading", function() {
    $(".issueTextAppend").empty();
    let currentObj = {};
    let collapseChild = $(this).parent().children()[2];
    $(collapseChild).toggleClass("collapse");
    collapseChild = $(this).parent(".panel-default")[0];
    let userName = $(collapseChild).find(".userArg").text().slice(11).trim();
    let repoName = $(collapseChild).find(".nameArg").text().trim();
    currentObj.owner = userName;
    currentObj.repo = repoName;
    collapseChild = $(collapseChild).children(".panel-collapse");

    $.post("/api/github/getIssues", currentObj, function(data) {
      // console.log(data);
      for (issues in data) {
        let assignees;
        let assigneesLink;
        if (data[issues].assignee !== null) {
          assignees = data[issues].assignee.login;
          assigneesLink = "https://github.com/";
        } else {
          assignees = "Currently None";
          assigneesLink = "#";
        }
        let bodyText;
        if (data[issues].body === "") {
          bodyText = "Currently None";
        } else {
          bodyText = data[issues].body;
        }
        collapseChild
          .children(".issueTextAppend")
          .append(
            "<p>Title: " +
              data[issues].title +
              '<span>   |   </span>Created By: <a href="https://github.com/' +
              data[issues].user.login +
              '">' +
              data[issues].user.login +
              "</a><span>   |   </span>Issue #: " +
              data[issues].number +
              '<span>   |   </span>Assignee: <a href="' +
              assigneesLink +
              assignees +
              '">' +
              assignees +
              "</a></p><p>Body: " +
              data[issues].body +
              "</p><hr/>"
          );
      }
    });
  });
});
