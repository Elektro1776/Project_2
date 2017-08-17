const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', { title: 'Trello but better'})
});

module.exports = router;
