const express = require('express');

const router = express.Router({ mergeParams: true });

router.get('/', (req, res) => {
  res.send(`<h1>Hello</h1>`);
});

module.exports = router;
