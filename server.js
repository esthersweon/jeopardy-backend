require('dotenv').config();

var express = require('express');
var app = express();
var routes = require('./config/routes.js');
var bodyParser = require('body-parser');

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    if ('OPTIONS' === req.method) {
      res.send(200);
    } else {
      next();
    }
});

app.use(bodyParser.json());
app.use(routes);

let port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log(`Listening on port ${ port }`);
});