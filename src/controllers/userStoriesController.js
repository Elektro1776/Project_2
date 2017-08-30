const express = require("express");
const router = express.Router();
const orm = require('../db/orm');
const validateUserInput = function(req, res) {
  orm.createUserStory(req.body);
  res.redirect("/userstories");
  //make sure the data is sent to database once implemented
};

router.get("/userstories", (req, res) => {
  res.render("userstories", { title: "uTile" });
});

router.post("/userstories", (req, res) => validateUserInput(req, res));

module.exports = router;
