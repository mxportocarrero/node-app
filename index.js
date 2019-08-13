// importing node framework
var express = require('express');

var app = express();

// Respond a Hello World for request at root '/'
app.get('/', (req,res) => {
    res.send('hello world');
    console.log("responding correctly")
});

// Escuchar al puerto 3000
app.listen(process.env.PORT || 3000);

module.exports = app;

