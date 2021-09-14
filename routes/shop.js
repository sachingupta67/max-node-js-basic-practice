const express = require('express');
// const path = require('path');
// const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res) => {
  // res.send(`<h1>Hello</h1>`);
  // res.sendFile('./views/shop.html'); // TODO : it will cause absolute path error
  // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html')); // it will automatically concat path in Window and Linux
  // res.sendFile(path.join(rootDir, 'views', 'shop.html')); // TODO: Plane HTML
  const { products = [] } = adminData;
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  }); // TODO : default method render to run templet file , no add to attach views only give file name, no need to .pug already define in app js
});

module.exports = router;
