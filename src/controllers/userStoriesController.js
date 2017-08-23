const express = require('express');
const router = express.Router();

router.get('/userstories', (req, res) => {
  res.render('userstories', { title: 'uTile'})
});

module.exports = router;
