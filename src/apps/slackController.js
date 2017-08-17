const express = require('express');
const router = express.Router();

router.post('/slack', (req, res) => {
  res.send("Hey!");

})
