// server.js
// where your node app starts

// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function(req, res) {
  res.json({ greeting: "hello API" });
});

//app.enable('trust proxy')  - this will show the true ip address from the original requester

//A request to /api/whoami should return a JSON object with your IP address in the ipaddress key.
//A request to /api/whoami should return a JSON object with your preferred language in the language key.
//A request to /api/whoami should return a JSON object with your software in the software key.
app.get("/api/whoami", (request, response) => {
  response.json({
    ipaddress: request.ip, //https://expressjs.com/en/4x/api.html#req.ip
    language: request.get("Accept-Language"), //http://expressjs.com/en/5x/api.html#req.acceptsLanguages
    software: request.get("User-Agent")  //https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent
  }); //
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
