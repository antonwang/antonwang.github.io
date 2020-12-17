// server.js
// where your node app starts

// init project
// we set up roots using express; notice that express is in package.json
var express = require("express");
// we can use app to create roots
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

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});

let responseObject = {};
// : is treated as a URL parameter, which is stored in the request parem object
app.get("/api/timestamp/:input", (request, response) => {
  //input captures the value in request.parems.input as a string
  let input = request.params.input;

  /* A request to /api/timestamp/:date? with a valid date (i.e. 2015-12-25) should return a 
  JSON object with a unix key that is a Unix timestamp of the input date in millisecond 
  
  A request to /api/timestamp/:date? with a valid date should return a JSON object with
  a utc key that is a string of the input date in the format: Thu, 01 Jan 1970 00:00:00 GMT
  
  Your project can handle dates that can be successfully parsed by new Date(date_string); i.e. 10 January 2013
  */
  if (input.includes("-") || input.includes(" ")) {
    //i.e. 2015-12-25 or 10 January 2013
    //getTime method converts the input date into unix timestamp in milliseconds
    responseObject["unix"] = new Date(input).getTime();
    //The toUTCString() method converts a Date object to a string, according to universal time.
    responseObject["utc"] = new Date(input).toUTCString(); //i.e. Thu, 01 Jan 1970 00:00:00 GMT
  } else {
    /* A request to /api/timestamp/1451001600000 should return
    { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }
    */
    let integerInput = parseInt(input); //converting input in string format to integer format; this is vanilla/plain JS
    //can't have new Date(regular string) - not one of the 4 ways to create a date object; hence we have integerInput
    responseObject["unix"] = new Date(integerInput).getTime();
    responseObject["utc"] = new Date(integerInput).toUTCString();
  }

  /*
  If the input date string is invalid, the api returns an object having the structure { error : "Invalid Date" }
  */
  if (
    responseObject["unix"] == null ||
    responseObject["utc"] == "Invalid Date"
  ) {
    response.json({ error: "Invalid Date" });
  }
  response.json(responseObject);
});

/*
An empty date parameter should return the current time in a JSON object with a unix key
An empty date parameter should return the current time in a JSON object with a utc key
*/
app.get("/api/timestamp", (request, response) => {
  //the new Date() constructor creates a new date object with the current date and time;
  //getTime method converts the date into unix timestamp in milliseconds
  //This is another way to return the json object instead of using responseObject
  response.json({ unix: new Date().getTime(), utc: new Date().toUTCString() });
});
