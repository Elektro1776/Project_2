const express = require("express");
const router = express.Router();
const orm = require('../db/orm');
const validateUserInput = function(req, res) {
  console.log(' WE HAVE THE ID HERE ?', req.query.project_id);
  orm.createUserStory(req.body).then(() => {
    res.redirect(`/userstories/${req.query.project_id}`);

  })
  //make sure the data is sent to database once implemented
};

router.get("/userstories", (req, res) => {
  console.log(' WHAT IS THE PROJECT ID?', req.query);
  orm.getUserStory(req.query.project_id).then((userStories) => {
    res.render("userstories", { title: "uTile", project_id: req.query.project_id, userStory: userStories });

  }).catch((e) => {
    console.log(' WHAT IS THE ERR', e);
  })
  res.locals.project_id = req.query;
});

router.post("/userstories", (req, res) => validateUserInput(req, res));

module.exports = router;
