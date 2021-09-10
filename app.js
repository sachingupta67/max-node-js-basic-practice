const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// app.use(bodyParser.urlencoded());  // use for parsing request body but now its deprecated

/* *******REQ BODY PARSING *****  */
// app.use(express.json());
// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );

app.use(bodyParser.urlencoded({ extended: false })); // It will remove the warning but its deprecated
/* *******REQ BODY PARSING END  *****  */

// ROUTERS

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res) => {
  res.status(404).send('<h1>Page not found</h1>');
});

const server = http.createServer(app);
server.listen(5000);
