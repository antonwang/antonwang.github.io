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

Modify the findOneByFood function to find just one person which has a certain food in the person's favorites, using Model.findOne() -> Person. Use the function argument food as search key.
solution: */

const findOneByFood = (food, done) => {
    Person.findOne({ favoriteFoods: { $all: [food] } }, (error, data) => {
      if (error) {
        console.log(error);
      } else {
        done(null, data);
      }
    });
  };

/* MongoDB and Mongoose - Use model.findById() to Search Your Database By _id
When saving a document, MongoDB automatically adds the field _id, and set it to a unique alphanumeric key. Searching by _id is an extremely frequent operation, so Mongoose provides a dedicated method for it.

Modify the findPersonById to find the only person having a given _id, using Model.findById() -> Person. Use the function argument personId as the search key.

solution: */

const findPersonById = (personId, done) => {
    Person.findById(personId, (error, data) => {
      if (error) {
        console.log(error);
      } else {
        done(null, data);
      }
    });
  };

/* MongoDB and Mongoose - Perform Classic Updates by Running Find, Edit, then Save
In the good old days, this was what you needed to do if you wanted to edit a document, and be able to use it somehow (e.g. sending it back in a server response). Mongoose has a dedicated updating method: Model.update(). It is bound to the low-level mongo driver. It can bulk-edit many documents matching certain criteria, but it doesn’t send back the updated document, only a 'status' message. Furthermore, it makes model validations difficult, because it just directly calls the mongo driver.

Modify the findEditThenSave function to find a person by _id (use any of the above methods) with the parameter personId as search key. Add "hamburger" to the list of the person's favoriteFoods (you can use Array.push()). Then - inside the find callback - save() the updated Person.

Note: This may be tricky, if in your Schema, you declared favoriteFoods as an Array, without specifying the type (i.e. [String]). In that case, favoriteFoods defaults to Mixed type, and you have to manually mark it as edited using document.markModified('edited-field'). See Mongoose documentation
solution: */

const findEditThenSave = (personId, done) => {
    const foodToAdd = "hamburger";
    Person.findById(personId, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        result.favoriteFoods.push(foodToAdd);
        result.save((error, updatedresult) => {
          if (error) {
            console.log(error);
          } else {
            done(null, updatedresult);
          }
        });
      }
    });
  };
/* 
MongoDB and Mongoose - Perform New Updates on a Document Using model.findOneAndUpdate()
Recent versions of Mongoose have methods to simplify documents updating. Some more advanced features (i.e. pre/post hooks, validation) behave differently with this approach, so the classic method is still useful in many situations. findByIdAndUpdate() can be used when searching by id.

Modify the findAndUpdate function to find a person by Name and set the person's age to 20. Use the function parameter personName as the search key.

Note: You should return the updated document. To do that, you need to pass the options document { new: true } as the 3rd argument to findOneAndUpdate(). By default, these methods return the unmodified object. 
solution: */

const findAndUpdate = (personName, done) => {
    const ageToSet = 20;
    Person.findOneAndUpdate(
      { name: personName },
      { age: ageToSet },
      { new: true },
      (error, updatedresult) => {
        if (error) {
          console.log(error);
        } else {
          done(null, updatedresult);
        }
      }
    );
  };

/* MongoDB and Mongoose - Delete One Document Using model.findByIdAndRemove
findByIdAndRemove and findOneAndRemove are like the previous update methods. They pass the removed document to the db. As usual, use the function argument personId as the search key.

Modify the removeById function to delete one person by the person's _id. You should use one of the methods findByIdAndRemove() or findOneAndRemove(). 

solution: */

const removeById = (personId, done) => {
    Person.findByIdAndRemove(personId, (error, removedresult) => {
      if (error) {
        console.log(error);
      } else {
        done(null, removedresult);
      }
    });
  };


/* MongoDB and Mongoose - Delete Many Documents with model.remove()
Model.remove() is useful to delete all the documents matching given criteria.

Modify the removeManyPeople function to delete all the people whose name is within the variable nameToRemove, using Model.remove(). Pass it to a query document with the name field set, and a callback.

Note: The Model.remove() doesn’t return the deleted document, but a JSON object containing the outcome of the operation, and the number of items affected. Don’t forget to pass it to the done() callback, since we use it in tests.

solution:
 */
const removeManyPeople = done => {
    const nameToRemove = "Mary";
    Person.remove({ name: nameToRemove }, (error, JSONdata) => {
      if (error) {
        console.log(error);
      } else {
        done(null, JSONdata);
      }
    });
  };

/* MongoDB and Mongoose - Chain Search Query Helpers to Narrow Search Results
If you don’t pass the callback as the last argument to Model.find() (or to the other search methods), the query is not executed. You can store the query in a variable for later use. This kind of object enables you to build up a query using chaining syntax. The actual db search is executed when you finally chain the method .exec(). You always need to pass your callback to this last method. There are many query helpers, here we'll use the most commonly used.

Modify the queryChain function to find people who like the food specified by the variable named foodToSearch. Sort them by name, limit the results to two documents, and hide their age. Chain .find(), .sort(), .limit(), .select(), and then .exec(). Pass the done(err, data) callback to exec().

Further Readings
If you are eager to learn and want to go deeper, You may look at:

Indexes ( very important for query efficiency ),
Pre/Post hooks,
Validation,
Schema Virtuals and Model, Static, and Instance methods,

solution: */
const queryChain = done => {
  const foodToSearch = "burrito";
  Person.find({ favoriteFoods: { $all: foodToSearch } })
    .sort({ name: "asc" })
    .limit(2)
    .select("-age")
    .exec((error, data) => {
      if (error) {
        console.log(error);
      } else {
        done(null, data);
      }
    });
};

/* Introduction to the APIs and Microservices Projects
Time to put your newly learnt skills to work! By working on projects you would have the opportunity of applying all the skills, principles and concepts you have learnt so far including npm packages, basic Node, basic Express, MongoDB, and Mongoose.

In this section you get the chance to:

Build a Timestamp Microservice
Build a Request Header Parser Microservice
Build a URL Shortener Microservice
Build a Exercise Tracker
Build a File Metadata Microservice
By the end of this, you would have 5 microservices under your belt that you can show off to friends, family, employers, etc. Have fun and remember to use the Read-Search-Ask method if you get stuck. */