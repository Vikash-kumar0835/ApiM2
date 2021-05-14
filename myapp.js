// server.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));


app.get('/api/whoami',function(req,res){
  var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
  var ln= req.headers["accept-language"];
  var st= req.headers['user-agent'];
  res.json({ipaddress:ip , language:ln , software:st});

});

var listener= app.listen(process.env.PORT, function(){
  console.log('your app is listening on port'+ " " +listener.address().port);
});


/*
// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

*/
