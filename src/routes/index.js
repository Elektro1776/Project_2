const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  console.log(' CAN WE HIT HOME ?', req.user, req.session);
  res.render('home', {title: 'uTile' });
})

module.exports = router;
