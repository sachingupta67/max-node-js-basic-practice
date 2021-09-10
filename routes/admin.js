const express = require('express');

const router = express.Router({ mergeParams: true });

// Path : /admin/add-product ==>GET

router.get('/add-product', (req, res) => {
  res.send(
    `<form action="/admin/add-product" method="POST">
           <input type="text" name="title"/>
           <button type="submit">Submit</button>
     </form>`
  );
});

// Path : /admin/add-product ==>POST

router.post('/add-product', (req, res) => {
  res.redirect('/');
});

module.exports = router;
