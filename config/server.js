//import modules
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

//initialization of express. express already contains the http modules to up the server
var app = express();

app.use(bodyParser.urlencoded( { extended : true }));
app.use(bodyParser.json());

consign().include('./app/routes')
            .then('./app/repository')
            .into(app);

module.exports = app;