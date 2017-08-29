const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log(' DO WE HAVE AUTH USER ON HOME ROUTER', req.user);
  res.render('home', { title: 'uTile'})
});

module.exports = router;
