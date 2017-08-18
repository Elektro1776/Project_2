const express = require('express');
const router = express.Router();

router.post('/slack', (req, res) => {
  console.log(' WHAT IS THE REQ????', req);
  res.send("Hey yall we got slack integration!");

});
router.post('/slack/getProjectTasks', (req, res) => {
  res.send('We got tasks!')
})

module.exports = router;
