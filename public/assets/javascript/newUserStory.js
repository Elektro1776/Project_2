const validateUserInput = function(userInput) {
  //set to assume true, and only set to false if it fails any test.
  let isUserInputValid = true;
  /* Validate in the following ways --- unnecessary but nice
  make sure user input is valid and expected for our database
  limit title to alphabet, number, dash, and underscore??
  Check for code injection (why not?!)
  description only needs to prevent code injection
  */

  if (isUserInputValid === false) {
    //return false if there was an error so we dont make an api call with bad user input
    return {
      status: false,
      reason: "Poor input" //reason for error to pass out reason failed -- to be dynamic with better testing
    };
  } else {
    //return true to validateUserInput so it can make the API call.

    return true;
  }
};

const postToApi = function() {
  let currentUserStory = {
    storyTitle: $("#userStory").val().trim(),
    storyDescription: $("#projectDescription").val().trim(),
    storyProgress: $("#projectStatus").val().trim(),
    storyDueDate: $("#dueDate").val().trim(),
    selectedMatrixSection: parseInt($("#githubDropDown").val())
  };
  let currentStory = validateUserInput(currentUserStory);

  if (currentStory === true) {
    //returns true then call api & show userstory on page
    console.log(currentUserStory);

    //append information to the page
    /*
    because of the format we force them to put
    the title in we will be able to use it as a key
    to retrieve and send to database
    */
    let newStory = `
    <div id="${currentUserStory.storyTitle}" class="userStory text-left"
    <h5>${currentUserStory.storyTitle}</h5>
    <p>${currentUserStory.storyDescription.substring(0, 30)}...</p>
    `;

    switch (currentUserStory.selectedMatrixSection) {
      case 4:
        $("#firstQuadrant").append(newStory);
        break;
      case 3:
        $("#secondQuadrant").append(newStory);
        break;
      case 2:
        $("#thirdQuadrant").append(newStory);
        break;
      case 1:
        $("#fourthQuadrant").append(newStory);
        break;
      default:
        console.log("Not all who wander are lost");
    }

    //make POST request to send to database and handle with controller
    $.post("/userstories", JSON.stringify(currentUserStory), function(data) {
      console.log("post done man");
    });

    //clear out text boxes incase they want to add multiple user stories
    $("#userStory").val("");
    $("#projectDescription").val("");

    //then close the modal
    $("#addModal").modal("hide");
  } else {
    //returns false with reason for fail....
    //Alert user and ask for reinput of information
  }
};

$(document).ready(function() {
  $("#userStorySubmit").click(function() {
    /*important tags
    #userStorySubmit - submit button - button clicky thing
    #userStory - story title - string
    #projectDescription - description - string
    #githubDropDown - ranked as value of 4 - 1 from top to bottom.... values can be
    used for "weighting" of tasks as well as prioritization
    */

    postToApi();
  });
});
