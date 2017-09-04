const express = require("express");
const router = express.Router();
const orm = require('../db/orm');
const validateUserInput = function(req, res) {
  orm.createUserStory(req.body).then(() => {
    res.redirect(`/userstories/:project/:project_id`);

  })
  //make sure the data is sent to database once implemented
};

router.get("/userstories/:project/:project_id", (req, res, next) => {
  orm.getUserStory(req.params.project_id).then((userStories) => {
      res.render('userstories', { title: 'uTile', project_id: req.params.project_id})

  }).catch((e) => {
    console.log(' WHAT IS THE ERR', e);
  })
})

router.post("/userstories/:project/:project_id", (req, res) => validateUserInput(req, res));

module.exports = router;
