/**
 * This server is to run your build locally
 */

const express = require('express');
const path = require('path');

const port = process.env.PORT || 8080;
const app = express();

// const rukou = require('./server/index');

// serve static assets normally
app.use(express.static(`${__dirname}/public`));

// console.log('☞☞☞ 9527 server 16', rukou);
// app.use('/', rukou);

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port);
console.log(`server started on port ${port}`);
