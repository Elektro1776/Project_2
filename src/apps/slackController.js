const express = require('express');
const router = express.Router();

router.post('/slack', (req, res) => {
  console.log(' WHAT IS THE REQ????', req);
  res.send("Hey!");

})
