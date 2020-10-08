const express = require('express');
const http = require('http');
const app = express();
const server = require(http).Server(app);


app.get('/', function(req, res) {
    res.statusCode(200).send(Solid);
})


server.listen(3000)
