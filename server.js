var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(methodOverride('X-HTTP-Method-Override')); 

app.use(express.static(__dirname+'/public'));
require('./app/routes')(app);
var port = process.env.PORT || 8080;
app.listen(port);
console.log("Okie, server is going on "+ port);
exports = module.exports = app;