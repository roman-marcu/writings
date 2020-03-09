'use strict';

const express = require('express');
const path = require('path');
const asciidoctor = require('asciidoctor')();
// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

// App
const app = express();

const router = express.Router();


app.get('/', (req, res) => {
  //res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);