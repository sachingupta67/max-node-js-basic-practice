const express = require('express');
// const path = require('path');
// const rootDir = require('../util/path');

const router = express.Router();

const products = []; // TODO : Temporary Storage

// Path : /admin/add-product ==>GET
router.get('/add-product', (req, res) => {
  // res.send(
  //   `<form action="/admin/add-product" method="POST">
  //          <input type="text" name="title"/>
  //          <button type="submit">Submit</button>
  //    </form>`
  // );

  // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html')); // TODO : replacement of above code for serving html
  // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html')); // TODO : No slash required this could be alternative of above code as well
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html')); // same as above only we use utility for that
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

// Path : /admin/add-product ==>POST

router.post('/add-product', (req, res) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

// module.exports = router;

exports.routes = router;
exports.products = products;
