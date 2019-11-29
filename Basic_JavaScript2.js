/* Contents are taken from freecodecamp Basic JavaScript tutorials. 
This is only for my learning purpose.
*/

//Selecting from Many Options with Switch StatementsPassed
/*
If you have many options to choose from, use a switch statement. 
A switch statement tests a value and can have many case statements 
which define various possible values. Statements are executed from the 
first matched case value until a break is encountered.

Here is an example of a switch statement:

switch(lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}
case values are tested with strict equality (===). 
The break tells JavaScript to stop executing statements. 
If the break is omitted, the next statement will be executed.
 */
function caseInSwitch(val) {
  var answer = "";
  switch(val) {
    case 1:
    answer= "alpha";
    break;
    case 2:
    answer= "beta";
    break;
    case 3:
    answer= "gamma";
    break;
    case 4:
    answer= "delta";
    break;
  }
  return answer;
}
caseInSwitch(2); // returns beta

//Adding a Default Option in Switch Statements
/*In a switch statement you may not be able to specify all possible values
as case statements. Instead, you can add the default statement which will
 be executed if no matching case statements are found. Think of it 
 like the final else statement in an if/else chain.

A default statement should be the last case.

switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}
*/

function switchOfStuff(val) {
  var answer = "";
  switch (val) {
    case "a":
    answer = "apple";
    break;
    case "b":
    answer = "bird";
    break;
    case "c":
    answer = "cat";
    break;
    default:
    answer = "stuff";
    break;
  }
  return answer;
}

switchOfStuff("d"); // returns stuff


//Multiple Identical Options in Switch Statements

/*If the break statement is omitted from a switch statement's case,
 the following case statement(s) are executed until a break is
  encountered. If you have multiple inputs with the same output, 
  you can represent them in a switch statement like this:
*/
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3"; //Cases for 1, 2, and 3 will all produce the same result.
    break;
  case 4:
    result = "4 alone";
}

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
    answer = "Low";
    break;
    case 4:
    case 5:
    case 6:
    answer = "Mid";
    break;
    case 7:
    case 8:
    case 9:
    answer = "High";
    break;
  }
  return answer;
}
sequentialSizes(3); // returns "Low"

//Replacing If Else Chains with Switch
/*
If you have many options to choose from, a switch statement 
can be easier to write than many chained if/else if statements.
The following:

if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}

can be replaced with:

switch(val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}
*/
function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line

  switch (val) {
    case "bob":
    answer = "Marley";
    break;
    case 42:
    answer = "The Answer";
    break;
    case 1:
    answer = "There is no #1";
    break;
    case 99:
    answer = "Missed me by this much!";
    break;
    case 7:
    answer = "Ate Nine";
    break;
  }
  return answer;
}
chainToSwitch(99); //returns "Missed me by this much!""

//Returning Boolean Values from Functions
/*You may recall from Comparison with the Equality Operator that
 all comparison operators return a boolean true or false value.

Sometimes people use an if/else statement to do a comparison, like this:

function isEqual(a,b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

But there's a better way to do this.
 Since === returns true or false, we can return the result 
 of the comparison:

function isEqual(a,b) {
  return a === b;
}
*/
function isLess(a, b) {
  return a < b;
}
isLess(10, 19); // returns true


// Return Early Pattern for Functions
function abTest(a, b) {
  if (a < 0 || b < 0) {
     return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
abTest(-2,2); //returns undefined


//Counting CardsPassed
/*In the casino game Blackjack, a player can gain an advantage
 over the house by keeping track of the relative number of high 
 and low cards remaining in the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player. 
Each card is assigned a value according to the table below.
When the count is positive, the player should bet high. 
When the count is zero or negative, the player should bet low.

Count Change  Cards
+1            2, 3, 4, 5, 6
0             7, 8, 9
-1            10, 'J', 'Q', 'K', 'A'
You will write a card counting function. 
It will receive a card parameter, which can be a number or a string,
 and increment or decrement the global count variable according to
  the card's value (see table). The function will then return a 
  string with the current count and the string Bet if the count is 
  positive, or Hold if the count is zero or negative. The current count
   and the player's decision (Bet or Hold) should be separated by a 
   single space.

Example Output
-3 Hold
5 Bet
*/
var count = 0;

function cc(card) {
    switch (card){
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        count = count+1;
        break;
      case 7:
      case 8:
      case 9:
        break;
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
        count = count-1;
        break;
    }
    if (count <= 0) {
      return count + " Hold";
    }
    if (count > 0) {
      return count + " Bet";
    }
}
cc(7);



//Build JavaScript Objects
/*
Objects are similar to arrays, except that instead of using 
indexes to access and modify their data, you access the data
 in objects through what are called properties.

Objects are useful for storing data in a structured way, 
and can represent real world objects, like a cat.

Here's a sample cat object:
*/
var cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
/*
In this example, all the properties are stored as strings, 
such as - "name", "legs", and "tails". However, you can also use
 numbers as properties. You can even omit the quotes for 
 single-word string properties, as follows:
*/
var anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
/*
However, if your object has any non-string properties, 
JavaScript will automatically typecast them as strings.
*/

//Accessing Object Properties with Dot Notation
/*There are two ways to access the properties of an object:
dot notation (.) and bracket notation ([]), similar to an array.

Dot notation is what you use when you know the name of the property
 you're trying to access ahead of time.

Here is a sample of using dot notation (.) to read an object's property:
*/
var myObj = {
  prop1: "val1",
  prop2: "val2"
};
var prop1val = myObj.prop1; // val1
var prop2val = myObj.prop2; // val2

//Another example:
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
var hatValue = testObj.hat;      // ballcap
var shirtValue = testObj.shirt;    // jersey

//Accessing Object Properties with Bracket Notation

/*
The second way to access the properties of an object is 
bracket notation ([]). If the property of the object you 
are trying to access has a space in its name, you will need
 to use bracket notation.

However, you can still use bracket notation on object properties
 without spaces.

Here is a sample of using bracket notation to read an object's property:
*/
var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};
myObj["Space Name"]; // Kirk
myObj['More Space']; // Spock
myObj["NoSpace"];    // USS Enterprise
/*
Note that property names with spaces in them must be in quotes
 (single or double).
*/
//another example
// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

var entreeValue = testObj["an entree"];   // hamburger
var drinkValue = testObj['the drink'];    // water

//Accessing Object Properties with Variables
/*
Another use of bracket notation on objects is to access a 
property which is stored as the value of a variable. 
This can be very useful for iterating through an object's 
properties or when accessing a lookup table.

Here is an example of using a variable to access a property:
*/
var dogs = {
  Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed); // "Doberman"
/*Another way you can use this concept is when the property's name
 is collected dynamically during the program execution, as follows:
*/
var someObj = {
  propName: "John"
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
console.log(someObj[someProp]); // "John"
/*
Note that we do not use quotes around the variable name when using 
it to access the property because we are using the value of the 
variable, not the name.
*/
//Another example
// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
var playerNumber = 16;       
var player = testObj[playerNumber];   // Montana

//Updating Object PropertiesPassed
/*After you've created a JavaScript object, you can update
 its properties at any time just like you would update any
  other variable. You can use either dot or bracket notation to update.
*/
// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.name = "Happy Camper";

//Another example
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.name = "Happy Coder";

//Add New Properties to a JavaScript Object
/*You can add new properties to existing JavaScript objects
 the same way you would modify them.

Here's how we would add a "bark" property to ourDog: */

ourDog.bark = "bow-wow";

//or

ourDog["bark"] = "bow-wow";

//Now when we evaluate ourDog.bark, we'll get his bark, "bow-wow".

//Delete Properties from a JavaScript Object
//We can also delete properties from objects like this:

delete ourDog.bark;

//Another example
// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
delete myDog.tails; // or delete myDog["tails"]

//Using Objects for Lookups
/*Objects can be thought of as a key/value storage, 
like a dictionary. If you have tabular data, 
you can use an object to "lookup" values rather than
 a switch statement or an if/else chain. 
 This is most useful when you know that your input data
  is limited to a certain range.

Here is an example of a simple reverse alphabet lookup:

var alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};
alpha[2]; // "Y"
alpha[24]; // "C"

var value = 2;
alpha[value]; // "Y"  
*/

function phoneticLookup(val) {
  var result = "";

  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  }
  result = lookup[val]
  return result;
}

phoneticLookup("delta"); //Denver

//Testing Objects for Properties
/*
Sometimes it is useful to check if the property of a given object
 exists or not. We can use the .hasOwnProperty(propname) method 
 of objects to determine if that object has the given property name. 
 .hasOwnProperty() returns true or false if the property is found or not.

Example
*/
var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");    // true
myObj.hasOwnProperty("middle"); // false



//Testing Objects for PropertiesPassed
/* Sometimes it is useful to check if the property of a given 
object exists or not. We can use the .hasOwnProperty(propname) 
method of objects to determine if that object has the given
 property name. .hasOwnProperty() returns true or false if 
 the property is found or not.

Example */

var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");    // true
myObj.hasOwnProperty("middle"); // false
/*
Modify the function checkObj to test myObj for checkProp. 
If the property is found, return that property's value. 
If not, return "Not Found".
*/
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp) == true) {
    return myObj[checkProp];
  }
  return "Not Found";
}

checkObj("pet"); //kitten

//Manipulating Complex Objects
/*Sometimes you may want to store data in a flexible Data Structure.
 A JavaScript object is one way to handle flexible data. 
 They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.

Here's an example of a complex data structure:
*/
var ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];
/*
This is an array which contains one object inside. 
The object has various pieces of metadata about an album. 
It also has a nested "formats" array. 
If you want to add more album records, you can do this by
 adding records to the top level array. 
 Objects hold data in a property, which has a key-value format. 
 In the example above, "artist": "Daft Punk" is a property that
  has a key of "artist" and a value of "Daft Punk". 
  JavaScript Object Notation or JSON is a related data 
  interchange format used to store data. 
*/
//Another example
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }, //Note: You will need to place a comma after every object in the array,
   //unless it is the last object in the array.
  {
    "artist": "Celine Dion",
    "title": "My heart will go on",
    "release_year": 2000,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];

//Accessing Nested Objects
/*The sub-properties of objects can be accessed by chaining 
together the dot or bracket notation.

Here is a nested object:  */

var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
ourStorage.cabinet["top drawer"].folder2;  // "secrets"
ourStorage.desk.drawer; // "stapler"

//Another example
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"]; // maps

//Accessing Nested Arrays
/*As we have seen in earlier examples, objects can contain both
 nested objects and nested arrays. Similar to accessing nested objects,
Array bracket notation can be chained to access nested arrays.

Here is an example of how to access a nested array: */

var ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];
ourPets[0].names[1]; // "Fluffy"
ourPets[1].names[0]; // "Spot"

//Another example
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];
var secondTree = myPlants[1].list[1]; // pine


//
// Setup
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [ ]
  },
  5439: {
    album: "ABBA Gold"
  }
};

//Record Collection
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [ ]
  },
  5439: {
    album: "ABBA Gold"
  }
};
//Hints: Use bracket notation when accessing object properties with variables.
function updateRecords(id, prop, value) {
  if (prop != "tracks" && value != "") {   //If prop isn't "tracks" and value isn't empty (""), update or set the value for that record album's property.
    collection[id][prop] = value;  
  }
  if (prop == "tracks" && collection[id].hasOwnProperty(prop) == false) { //If prop isn't "tracks" and value isn't empty (""), update or set the value for that record album's property.
    collection[id][prop] = [];
    collection[id][prop].push(value);

  }
  if (prop == "tracks" && collection[id][prop][0] != "") { //If prop is "tracks" and value isn't empty (""), push the value onto the end of the album's existing tracks array.
    collection[id][prop].push(value);
  }
  if (value == "") {  //If value is empty (""), delete the given prop property from the album.
    delete collection[id][prop];
  }

  return collection;
}
updateRecords(2548, "artist", "Addicted to Love");
