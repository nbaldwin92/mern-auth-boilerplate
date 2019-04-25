const express = require('express');

const router = express.Router();

const User = require('../../models/User');

router.get('/getaccounts', (req, res) => {
  const { id } = req.query;

  User.find({ _id: { $ne: id } }, (err, accounts) => {
    if (err) return handleError(err);
    res.json(accounts);
  });
});

module.exports = router;
