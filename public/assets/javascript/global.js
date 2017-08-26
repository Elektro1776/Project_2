$(document).ready(function() {

  var sideslider = $('[data-toggle=collapse-side]');
  var sel = sideslider.attr('data-target');
  var sel2 = sideslider.attr('data-target-2');
  sideslider.click(function(event){
    $(sel).toggleClass('in');
    $(sel2).toggleClass('out');
  });

  (function(event){openNav()
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  })


function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}


$('.carousel').carousel({
pause: true,
interval: false
});

// for the modal

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
});

// for the popover search

$('#popover').popover({
    html : true,
    title: function() {
      return $("#popover-head").html();
    },
    content: function() {
      return $("#popover-content").html();
    }
});
// create click handler to send ajax GET request with the id from the button in
// the body of the ajax request. On the userStoriesController log out what the
// req.body is an you should see the id of the project that was clicked
$('.projectButton').click(function(e) {
  let projectId = $(this)[0].id;
  console.log('PROJECT ID TO SEND', projectId);
  //ajax shit;
  $.ajax({
    method: 'GET',
    url: '/userstories'
  }).done(function() {
    window.location.href = '/userstories'
    console.log(projectId,' WENT SOME WHERE???');
  })




})
// $( init );

// $(function init() {
//   $('.draggable').draggable();
// })
});
