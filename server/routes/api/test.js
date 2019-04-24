const express = require('express');

const router = express.Router();

router.get('/test', (req, res) => {
  res.send('this is the server responding');
});

module.exports = router;
