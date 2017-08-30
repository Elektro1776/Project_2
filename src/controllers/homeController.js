const express = require('express');
const router = express.Router();
const sessionStore = require('../../server');
// console.log(' DO WE HAVE SESSION STORE', sessionStore);

exports.dashboard = (req, res) => {
  res.render('home', { title: 'uTile' })
}
