/* Introduction to the MongoDB and Mongoose Challenges

Install and Set Up Mongoose

Create a Model

Create and Save a Record of a Model

Create Many Records with model.create()

Use model.find() to Search Your Database

Use model.findOne() to Return a Single Matching Document from Your Database

Use model.findById() to Search Your Database By _id

Perform Classic Updates by Running Find, Edit, then Save

Perform New Updates on a Document Using model.findOneAndUpdate()

Delete One Document Using model.findByIdAndRemove

Delete Many Documents with model.remove()

Chain Search Query Helpers to Narrow Search Results */

/* MongoDB and Mongoose - Install and Set Up Mongoose
In this challenge, you will import the required projects, and connect to your Atlas database.

Add mongodb and mongoose to the project’s package.json. Then, require mongoose as mongoose in myApp.js. Store your MongoDB Atlas database URI in a private .env file as MONGO_URI. Surround the the URI with single or double quotes, and make sure no space exists between both the variable and the =, and the value and =. Connect to the database using the following syntax:

mongoose.connect(<Your URI>, { useNewUrlParser: true, useUnifiedTopology: true }); 

solution:   
in the terminal, install mongoose and mongodb
npm install mongodb
npm install mongoose

then check the package.json for mongoose; mongodb will not show up*/

let URI =
  "mongodb+srv://user01:" +
  process.env.PW +
  "@freecodecamp.ca81p.mongodb.net/database01?retryWrites=true&w=majority";
let mongoose = require("mongoose");
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

/* MongoDB and Mongoose - Create a Model
Create a person schema called personSchema having this prototype:

- Person Prototype -
--------------------
name : string [required]
age :  number
favoriteFoods : array of strings (*)
Use the Mongoose basic schema types. If you want you can also add more fields, use simple validators like required or unique, and set default values. See the Mongoose docs.

Now, create a model called Person from the personSchema 

solution:*/
let personSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: Number,
    favoriteFoods: [String]
  });
  let Person = mongoose.model("Person", personSchema);
/* 
MongoDB and Mongoose - Create and Save a Record of a Model
In this challenge you will have to create and save a record of a model.

Within the createAndSavePerson function, create a document instance using the Person model constructor you built before. Pass to the constructor an object having the fields name, age, and favoriteFoods. Their types must conform to the ones in the personSchema. Then, call the method document.save() on the returned document instance. Pass to it a callback using the Node convention. This is a common pattern; all the following CRUD methods take a callback function like this as the last argument.
*/
/* Example */

// ...
person.save(function(err, data) {
//   ...do your stuff here...
});

//solution:
let personSchema = new mongoose.Schema({
name: { type: String, required: true },
age: Number,
favoriteFoods: [String]
});
let Person = mongoose.model("Person", personSchema);

var createAndSavePerson = function(done) {
const John = new Person({
    name: "John",
    age: 25,
    favoriteFoods: ["Chicken Wings"]
});
John.save((err, data) => {
    if (err) {
    console.log(err);
    } else {
    done(null, data);
    }
});
};
/* 
MongoDB and Mongoose - Create Many Records with model.create()
Sometimes you need to create many instances of your models, e.g. when seeding a database with initial data. Model.create() takes an array of objects like [{name: 'John', ...}, {...}, ...] as the first argument, and saves them all in the db.

Modify the createManyPeople function to create many people using Model.create() with the argument arrayOfPeople.

Note: You can reuse the model you instantiated in the previous exercise.
solution */

const createManyPeople = (arrayOfPeople, done) => {
Person.create(arrayOfPeople, (error, data) => {
    if (error) {
    console.log(error)
    } else {
    done(null, data);  
    }
})
};

/* MongoDB and Mongoose - Use model.find() to Search Your Database
In its simplest usage, Model.find() accepts a query document (a JSON object) as the first argument, then a callback. It returns an array of matches. It supports an extremely wide range of search options. Read more in the docs.

Modify the findPeopleByName function to find all the people having a given name, using Model.find() -> [Person]

Use the function argument personName as the search key.

solution*/
const findPeopleByName = (personName, done) => {
    Person.find({ name: personName }, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        done(null, result);
      }
    });
  };  //findPeopleByName("Anne", function() {});

/* 
  MongoDB and Mongoose - Use model.findOne() to Return a Single Matching Document from Your Database

  Model.findOne() behaves like .find(), but it returns only one document (not an array), even if there are multiple items. It is especially useful when searching by properties that you have declared as unique.
  
  Modify the findOneByFood function to find just one person which has a certain food in the person's favorites, using Model.findOne() -> Person. Use the function argument food as search key. */