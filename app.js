const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
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
  //   res.status(404).send('<h1>Page not found</h1>');
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

const server = http.createServer(app);
server.listen(5000);
