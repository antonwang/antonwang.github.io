//Build a full stack JavaScript app that is functionally similar to this: https://url-shortener-microservice.freecodecamp.rocks/

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use("/public", express.static(`${process.cwd()}/public`));

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

// Your first API endpoint
app.get("/api/hello", function(req, res) {
  res.json({ greeting: "hello API" });
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});

let URI =
  "mongodb+srv://user01:" +
  process.env.PW +
  "@freecodecamp.ca81p.mongodb.net/database01?retryWrites=true&w=majority";
let mongoose = require("mongoose");
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

//Everything in Mongoose starts with a Schema.
//Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
let urlAddressSchema = new mongoose.Schema({
  //we are creating a Schema of the original url to be a string, and a short url to be a number
  original_url: { type: String, required: true },
  short_url: Number
});

//https://mongoosejs.com/docs/guide.html
//To use our schema definition, we pass it into mongoose.model(modelName, schema). By default, Mongoose adds an _id property to your schemas.
let URL = mongoose.model("URL", urlAddressSchema);

//You can POST a URL to /api/shorturl/new and get a JSON response with original_url and short_url properties.
//Here's an example: { original_url : 'https://freeCodeCamp.org', short_url : 1}

//https://www.npmjs.com/package/body-parser
let bodyParser = require("body-parser");
//See index.html, where form action="api/shorturl/new" method="POST", and input id="url_input" type="text" name="url"
//The middleware bodyParser.urlencoded({extended: false}) stores the user input in request using key:value, which the key is url,
//and the value is user input. Use request.body to get key:value object.
app.post(
  "/api/shorturl/new",
  bodyParser.urlencoded({ extended: false }),
  (request, response) => {
    let short_urlNum = 1; //the first url has a short_url number of 1
    URL.findOne({}) //empty object forces it to loop through all documents; https://mongoosejs.com/docs/api.html#model_Model.findOne
      .sort({ short_url: "desc" }) //sorts the short_url number in descending order. So the highest number, or most recent added one will be at the top
      .exec((error, data) => {
        //call back function to store the short_url number
        if (!error && data != undefined) {
          //if document with the highest short_url number is found, then increment short_urlNum by 1.
          short_urlNum = data.short_url + 1;
        }
        if (!error) {
          //https://mongoosejs.com/docs/api.html#model_Model.findOneAndUpdate
          URL.findOneAndUpdate(
            { original_url: request.body.url },
            { original_url: request.body.url, short_url: short_urlNum },
            { new: true, upsert: true },
            (error, data) => {
              if (!error) {
                response.json({
                  original_url: request.body.url,
                  short_url: data.short_url
                });
              }
            }
          );
        }
      });
  }
  //response.json({ original_url: request.body.url });
);

//When you visit /api/shorturl/<short_url>, you will be redirected to the original URL.

//If you pass an invalid URL that doesn't follow the valid http://www.example.com format,
//the JSON response will contain { error: 'invalid url' }
