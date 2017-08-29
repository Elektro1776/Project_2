$(document).ready(()=>{
  $('.panel-default').on('click', function(){
      // console.log(this);
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
          collapseChild.children('.issueTextAppend').html('<p>Title: ' + data[issues].title + '</p><p>Created By: ' + data[issues].user.login + '</p><p>Body: ' + data[issues].body + '</p><p>Body: ' + data[issues].assignees[0].login + '</p>');

        }
        // console.log(collapseChild);



      });



  });
});
