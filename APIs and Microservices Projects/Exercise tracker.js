const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const mongoose = require("mongoose");
let URI =
  "mongodb+srv://user01:" +
  process.env.PW +
  "@freecodecamp.ca81p.mongodb.net/database01?retryWrites=true&w=majority";
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

//Everything in Mongoose starts with a Schema. 1a) Create Schemas
//Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
let exerciseDetailSchema = new mongoose.Schema({
  //we are creating a Schema with required string in description and required number in duration
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: String
});

let userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  log: [exerciseDetailSchema]
});

/*https://mongoosejs.com/docs/guide.html
To use our schema definition, we pass it into mongoose.model(modelName, schema). By default, Mongoose adds an _id property to your schemas.
1b) Create collections. First one declares the name of the collection. 
Mongoose automatically convert the first parameter to lowercased plural form to set the collection name. 
So, the colllection name is “details” in this case.*/
let detail = mongoose.model("detail", exerciseDetailSchema);
let user = mongoose.model("user", userSchema);

//https://www.npmjs.com/package/body-parser
let bodyParser = require("body-parser");

/*User story #1:You can POST to /api/exercise/new-user with form data username to create a new user. 
The returned response will be an object with username and _id properties.  */

//See index.html, where form action="/api/exercise/new-user" method="POST", and name="username" placeholder="username"
//The middleware bodyParser.urlencoded({extended: false}) capture the data from the user input in request using key:value,
//which the key is username, and the value is user input (see index.html). Use request.body to get key:value object.
app.post(
  "/api/exercise/new-user",
  bodyParser.urlencoded({ extended: false }),
  (request, response) => {
    let newUsername = new user({ username: request.body.username }); //1c) Create a new document within the collection
    // 1d) Save the document
    newUsername.save((error, savedUsername) => {
      if (!error) {
        response.json({
          username: savedUsername.username,
          _id: savedUsername.id //savedUsername._id or savedUsername.id works either way
        });
      }
    });
    //console.log(request.body);
    //response.json({});
  }
);

/* User story #2: You can make a GET request to api/exercise/users to get an array of all users. 
Each element in the array is an object containing a user's username and _id.*/
app.get("/api/exercise/users", (request, response) => {
  //https://mongoosejs.com/docs/api.html#model_Model.find
  user.find({}, (error, arrayUsers) => {
    //finds all documents in the model and passes result to callback
    response.json(arrayUsers); //arrayUsers is an array of objects
  });
});

/* User story #3: You can POST to /api/exercise/add with form data userId=_id, description, duration, and optionally date. 
If no date is supplied, the current date will be used. 
The response returned will be the user object with the exercise fields added. */

//The middleware bodyParser.urlencoded({extended: false}) capture the data from the user input in request using key:value,
//which the keys are: name="userId", name="description", name="duration", name="date" (see index.html)
//, and the values are the user inputs. Use request.body to get key:value object.

app.post(
  "/api/exercise/add",
  bodyParser.urlencoded({ extended: false }),
  (request, response) => {
    let newDetail = new detail({
      description: request.body.description,
      duration: parseInt(request.body.duration), //converts a string to an integer
      date: request.body.date
    });

    if (request.body.date == "") {
      //https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
      newDetail.date = new Date().toISOString().substring(0, 10);
    }
    //https://mongoosejs.com/docs/api/model.html#model_Model.findByIdAndUpdate
    //model.findByIdAndUpdate(id, update, options, callback); option of {new: true} returns the updated data
    //https://docs.mongodb.com/manual/reference/operator/update/push/
    user.findByIdAndUpdate(
      request.body.userId,
      { $push: { log: newDetail } },
      { new: true },
      (error, updatedUser) => {
        if (!error) {
          response.json({
            _id: updatedUser.id,
            username: updatedUser.username,
            date: new Date(newDetail.date).toDateString(), // "Thu Jan 01 1970"
            duration: newDetail.duration,
            description: newDetail.description
          });
        }
      }
    );

    //console.log(request);
    //response.json({});
  }
);

/* User Story #4: You can make a GET request to /api/exercise/log with a parameter of userId=_id 
to retrieve a full exercise log of any user. The returned response will be the user object with a 
log array of all the exercises added. Each log item has the description, duration, and date properties. */

/* User Story #5: A request to a user's log (/api/exercise/log) returns an object with a count property 
representing the number of exercises returned. */

/* User Story #6: You can add from, to and limit parameters to a /api/exercise/log request to retrieve 
part of the log of any user. from and to are dates in yyyy-mm-dd format. limit is an integer of how many logs to send back. */

app.get("/api/exercise/log", (request, response) => {
  user.findById(request.query.userId, (error, data) => {
    if (!error) {
      let responseObj = data;

      if (request.query.from || request.query.to) {
        let fromDate = new Date(0); //earliest date of UNIX - January 1, 1970 in UTC.
        let toDate = new Date(); //current date of running code

        if (request.query.from) {
          // i.e. (url: ...&from=2020-12-22)
          fromDate = new Date(request.query.from);
        }

        if (request.query.to) {
          // i.e. (url: ...&to=2020-12-22)
          toDate = new Date(request.query.to);
        }

        let fromTime = fromDate.getTime(); //Return the number of milliseconds since 1970/01/01
        let toTime = toDate.getTime(); //Return the number of milliseconds since 1970/01/01

        responseObj.log = responseObj.log.filter(newDetail => {
          //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
          let newDetailTime = new Date(newDetail.date).getTime();
          return fromTime <= newDetailTime && newDetailTime <= toTime;
        });
      }
      if (request.query.limit) {
        //if request.query.limit exists -> i.e. (url: ...&limit=3), then we want to show 3 logs
        responseObj.log = data.log.slice(0, request.query.limit); //slice here shall start at array position 0, and ends at limit
      }

      response.json({
        _id: request.query.userId,
        username: responseObj.username,
        count: responseObj["log"].length,
        log: responseObj.log
      });
    }
  });
});
