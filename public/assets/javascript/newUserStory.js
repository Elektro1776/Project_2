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

    return false;
  } else {
    //return true to validateUserInput so it can make the API call.

    return true;
  }
};

const postToApi = function() {
  let currentUserStory = {
    storyTitle: $("#userStory").val().trim(),
    storyDescription: $("#projectDescription").val().trim(),
    selectedMatrixSection: parseInt($("#githubDropDown").val())
  };

  if (validateUserInput(currentUserStory)) {
    //returns true then call api

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
