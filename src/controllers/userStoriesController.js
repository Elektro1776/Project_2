const express = require("express");
const router = express.Router();
const orm = require('../db/orm');
const validateUserInput = function(req, res) {
  orm.createUserStory(req.body).then(() => {
    res.redirect("/userstories");

  })
  //make sure the data is sent to database once implemented
};

router.get("/userstories", (req, res) => {
  console.log(' DO WE HAVE PARAMS HERE?', req.query);
  orm.getUserStory(req.query.project_id).then((userStories) => {
    res.render("userstories", { title: "uTile", project_id: req.query.project_id, userStory: userStories });

  })
  res.locals.project_id = req.query;
});

router.post("/userstories", (req, res) => validateUserInput(req, res));

module.exports = router;
