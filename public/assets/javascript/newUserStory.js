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

const postToApi = function(modalType) {
  let currentUserStory;
  if (modalType === "create") {
    currentUserStory = {
      storyTitle: $("#userStory").val().trim(),
      storyDescription: $("#projectDescription").val().trim(),
      storyProgress: $("#projectStatus").val().trim(),
      storyDueDate: $("#createDate").val().trim(),
      selectedMatrixSection: $("#githubDropDown").val(),
      method: "create"
    };
  } else if (modalType === "update") {
    currentUserStory = {
      storyTitle: $("#individUserStoryModal").val().trim(),
      storyDescription: $("#updateDescription").val().trim(),
      storyProgress: $("#updateStatus").val().trim(),
      storyDueDate: $("#updateDate").val().trim(),
      selectedMatrixSection: $("#updateMatrix").val(),
      method: "update"
    };
  }

  let currentStory = validateUserInput(currentUserStory);

  if (currentStory === true) {
    //returns true then call api & show userstory on page
    var progressStyle;

    switch (parseInt(currentUserStory.storyProgress)) {
      case 0:
        progressStyle = "notStarted";
        break;
      case 1:
        progressStyle = "inProgress";
        break;
      case 2:
        progressStyle = "completed";
        break;
    }

    //append information to the page
    /*
    because of the format we force them to put
    the title in we will be able to use it as a key
         <p>Description: ${currentUserStory.storyDescription.substring(0, 30)}...</p>
    to retrieve and send to database
    */

    if (modalType === "create") {
      currentUserStory = {
        storyTitle: $("#userStory").val().trim(),
        storyDescription: $("#projectDescription").val().trim(),
        storyProgress: $("#projectStatus").val().trim(),
        storyDueDate: $("#createDate").val().trim(),
        selectedMatrixSection: $("#githubDropDown").val(),
        method: "create"
      };

      let newStory = `
      <div data-storyTitle="${currentUserStory.storyTitle}"
        data-storyDescription="${currentUserStory.storyDescription}"
        data-storyProgress="${currentUserStory.storyProgress}"
        data-storyDueDate="${currentUserStory.storyDueDate}"
        data-selectedMatrixSection="${currentUserStory.selectedMatrixSection}"
        class="userStory ${progressStyle}">
      <p id="storyHeader">${currentUserStory.storyTitle}</p>

      `;
      switch (currentUserStory.selectedMatrixSection) {
        case "4":
          $("#firstQuadrant").append(newStory);
          break;
        case "3":
          $("#secondQuadrant").append(newStory);
          break;
        case "2":
          $("#thirdQuadrant").append(newStory);
          break;
        case "1":
          $("#fourthQuadrant").append(newStory);
          break;
        default:
          console.log("Not all who wander are lost");
      }
    } else if (modalType === "update") {
      let updateStory = `
      <div data-storyTitle="${currentUserStory.storyTitle}"
        data-storyDescription="${currentUserStory.storyDescription}"
        data-storyProgress="${currentUserStory.storyProgress}"
        data-storyDueDate="${currentUserStory.storyDueDate}"
        data-selectedMatrixSection="${currentUserStory.selectedMatrixSection}"
        class="userStory ${progressStyle}">
      <p id="storyHeader">${currentUserStory.storyTitle}</p>

      `;
      switch (currentUserStory.selectedMatrixSection) {
        case "4":
          $("#firstQuadrant").append(updateStory);
          break;
        case "3":
          $("#secondQuadrant").append(updateStory);
          break;
        case "2":
          $("#thirdQuadrant").append(updateStory);
          break;
        case "1":
          $("#fourthQuadrant").append(updateStory);
          break;
        default:
          console.log("Not all who wander are lost");
      }
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
  $(function() {
    $(".dueDate").datepicker({
      showOtherMonths: true,
      dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    });
  });

  $("#userStorySubmit").click(function() {
    /*important tags
    #userStorySubmit - submit button - button clicky thing
    #userStory - story title - string
    #projectDescription - description - string
    #githubDropDown - ranked as value of 4 - 1 from top to bottom.... values can be
    used for "weighting" of tasks as well as prioritization
    */

    postToApi("create");
  });

  $("#userStoryUpdate").click(function(event) {
    /*important tags
    #userStorySubmit - submit button - button clicky thing
    #userStory - story title - string
    #projectDescription - description - string
    #githubDropDown - ranked as value of 4 - 1 from top to bottom.... values can be
    used for "weighting" of tasks as well as prioritization
    */

    postToApi("update");
  });

  $(".quadrant").on("click", ".userStory", function(event) {
    event.preventDefault();
    console.log(this);
    let temp = $("#individUserStoryModal")[0];
    $(temp).text($(this).attr("data-storytitle"));
    temp = $("#updateDescription")[0];
    $(temp).text($(this).attr("data-storydescription"));
    temp = $("#updateStatus")[0];
    $(temp).val($(this).attr("data-storyprogress"));
    temp = $("#updateDate")[0];
    $(temp).val($(this).attr("data-storyduedate"));
    temp = $("#updateMatrix")[0];
    $(temp).val($(this).attr("data-selectedmatrixsection"));

    $("#otherModal").modal("show");
  });
});
