const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
  // res.send(`<h1>Hello</h1>`);
  // res.sendFile('./views/shop.html'); // TODO : it will cause absolute path error
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html')); // it will automatically concat path in Window and Linux
});

module.exports = router;
