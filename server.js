var express = require('express');
var app = express();







var port = process.env.PORT || 8080;
app.listen(port);
console.log("Okie, server is going on "+ port);
exports = module.exports = app;