const express = require("express");
const router = express.Router();
const sessionStore = require("../../server");

exports.dashboard = (req, res) => {
  res.render("home", { title: "uTile" });
};
