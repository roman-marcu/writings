'use strict';

const express = require('express');
const url = require('url');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;

  res.sendFile(filename);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);