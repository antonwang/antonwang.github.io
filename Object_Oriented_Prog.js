// Contents are taken from freecodecamp Object Oriented Programming tutorials.
// This is only for my learning purpose.


/*
Introduction to the Object Oriented Programming Challenges
At its core, software development solves a problem or achieves a result with computation.
The software development process first defines a problem, then presents a solution. 
Object oriented programming is one of several major approaches to the software development
process.

As its name implies, object oriented programming organizes code into object definitions.
These are sometimes called classes, and they group together data with related behavior.
The data is an object's attributes, and the behavior (or functions) are methods.

The object structure makes it flexible within a program. 
Objects can transfer information by calling and passing data to another object's methods.
Also, new classes can receive, or inherit, all the features from a base or parent class.
This helps to reduce repeated code.

Your choice of programming approach depends on a few factors. 
These include the type of problem, as well as how you want to structure your data and 
algorithms. This section covers object oriented programming principles in JavaScript. */

//Object Oriented Programming: Create a Basic JavaScript Object
/*Think about things people see every day, like cars, shops, and birds. 
These are all objects: tangible things people can observe and interact with.

What are some qualities of these objects? A car has wheels. Shops sell items. Birds have wings.

These qualities, or properties, define what makes up an object. Note that similar objects 
share the same properties, but may have different values for those properties. For example, 
all cars have wheels, but not all cars have the same number of wheels.

Objects in JavaScript are used to model real-world objects, giving them properties and 
behavior just like their real-world counterparts. Here's an example using these concepts to
create a duck object:  */

let duck = {
    name: "Aflac",
    numLegs: 2
  };
//This duck object has two property/value pairs: a name of "Aflac" and a numLegs of 2.
  
  
//Object Oriented Programming: Use Dot Notation to Access the Properties of an Object
/* The last challenge created an object with various properties. Now you'll see how to access
 the values of those properties. Here's an example: */

let duck = {
  name: "Aflac",
  numLegs: 2
};
console.log(duck.name); // This prints "Aflac" to the console
/*Dot notation is used on the object name, duck, followed by the name of the property, 
name, to access the value of "Aflac".  */

//Another example
let dog = {
    name: "Spot",
    numLegs: 4
  };
  console.log(dog.name, dog.numLegs)  //"Spot" 4



//Object Oriented Programming: Create a Method on an Object
/* Objects can have a special type of property, called a method.

Methods are properties that are functions. This adds different behavior to an object. 
Here is the duck example with a method: */

let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName(); // Returns "The name of this duck is Aflac."
/* The example adds the sayName method, which is a function that returns a sentence 
giving the name of the duck. Notice that the method accessed the name property in the
return statement using duck.name. The next challenge will cover another way to do this. */

//Another example
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " +dog.numLegs+" legs.";}
  };
  
  dog.sayLegs(); //"This dog has 4 legs."



//Object Oriented Programming: Make Code More Reusable with the this Keyword
/* The last challenge introduced a method to the duck object. It used duck.name dot notation
 to access the value for the name property within the return statement: */

sayName: function() {return "The name of this duck is " + duck.name + ".";}

/* While this is a valid way to access the object's property, there is a pitfall here. 
If the variable name changes, any code referencing the original name would need to be 
updated as well. In a short object definition, it isn't a problem, but if an object has
 many references to its properties there is a greater chance for error.

A way to avoid these issues is with the this keyword:  */

let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};
/* this is a deep topic, and the above example is only one way to use it. In the current 
context, this refers to the object that the method is associated with: duck. If the 
object's name is changed to mallard, it is not necessary to find all the references to
duck in the code. It makes the code reusable and easier to read.  */



//Object Oriented Programming: Define a Constructor Function
/* Constructors are functions that create new objects. They define properties and 
behaviors that will belong to the new object. Think of them as a blueprint for the 
creation of new objects.

Here is an example of a constructor:  */

function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
/*This constructor defines a Bird object with properties name, color, and numLegs set 
to Albert, blue, and 2, respectively. Constructors follow a few conventions:

Constructors are defined with a capitalized name to distinguish them from other functions
 that are not constructors. Constructors use the keyword this to set properties of the
  object they will create. Inside the constructor, this refers to the new object it will 
  create. Constructors define properties and behaviors instead of returning a value as 
  other functions might.  */

//Another example
function Dog() {
    this.name = "Winston";
    this.color = "golden";
    this.numLegs = 4;
}



//Object Oriented Programming: Use a Constructor to Create Objects
// Here's the Bird constructor from the previous challenge:

function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
  // "this" inside the constructor always refers to the object being created
}

let blueBird = new Bird();  
/* Notice that the new operator is used when calling a constructor. This tells JavaScript
to create a new instance of Bird called blueBird. Without the new operator, this inside 
the constructor would not point to the newly created object, giving unexpected results.
Now blueBird has all the properties defined inside the Bird constructor:   */

blueBird.name; // => Albert
blueBird.color; // => blue
blueBird.numLegs; // => 2
// Just like any other object, its properties can be accessed and modified:

blueBird.name = 'Elvira';
blueBird.name; // => Elvira


//Object Oriented Programming: Extend Constructors to Receive Arguments
/* The Bird and Dog constructors from last challenge worked well. However, notice that 
all Birds that are created with the Bird constructor are automatically named Albert, 
are blue in color, and have two legs. What if you want birds with different values for
name and color? It's possible to change the properties of each bird manually but that 
would be a lot of work:  */

let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";
/* Suppose you were writing a program to keep track of hundreds or even thousands of 
different birds in an aviary. It would take a lot of time to create all the birds, then
change the properties to different values for every one. To more easily create different
Bird objects, you can design your Bird constructor to accept parameters:   */

function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
/* Then pass in the values as arguments to define each unique bird into the Bird 
constructor: */
let cardinal = new Bird("Bruce", "red"); 
/*This gives a new instance of Bird with name and color properties set to Bruce and red, 
respectively. The numLegs property is still set to 2. The cardinal has these properties: */

cardinal.name // => Bruce
cardinal.color // => red
cardinal.numLegs // => 2
/* The constructor is more flexible. It's now possible to define the properties for 
each Bird at the time it is created, which is one way that JavaScript constructors are
so useful. They group objects together based on shared characteristics and behavior and 
define a blueprint that automates their creation.  */

//Another example
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new Dog("Husky", "White");


//Object Oriented Programming: Verify an Object's Constructor with instanceof
/* Anytime a constructor function creates a new object, that object is said to be an
instance of its constructor. JavaScript gives a convenient way to verify this with the
instanceof operator. instanceof allows you to compare an object to a constructor,
returning true or false based on whether or not that object was created with the
constructor. Here's an example:  */

let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird; // => true
/* If an object is created without using a constructor, instanceof will verify that 
it is not an instance of that constructor:   */

let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};

canary instanceof Bird; // => false

//Another example

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }

let myHouse = new House(3);

console.log(myHouse instanceof House);  // true 



//Object Oriented Programming: Understand Own Properties
In the following example, the Bird constructor defines two properties: name and numLegs:

function Bird(name) {
  this.name  = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");
/* name and numLegs are called own properties, because they are defined directly on the 
instance object. That means that duck and canary each has its own separate copy of these
 properties. In fact every instance of Bird will have its own copy of these properties. 
 The following code adds all of the own properties of duck to the array ownProps:  */

let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps); // prints [ "name", "numLegs" ]

//Another example

function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  
  for (let own in canary) {
    if (canary.hasOwnProperty(own)) {
      ownProps.push(own);
    }
  }

console.log(ownProps); // prints [ "name", "numLegs" ]


//Object Oriented Programming: Use Prototype Properties to Reduce Duplicate Code
/* Since numLegs will probably have the same value for all instances of Bird, you 
essentially have a duplicated variable numLegs inside each Bird instance.

This may not be an issue when there are only two instances, but imagine if there are 
millions of instances. That would be a lot of duplicated variables.

A better way is to use Bird’s prototype. Properties in the prototype are shared among 
ALL instances of Bird. Here's how to add numLegs to the Bird prototype:   */

Bird.prototype.numLegs = 2;
// Now all instances of Bird have the numLegs property.

console.log(duck.numLegs);  // prints 2
console.log(canary.numLegs);  // prints 2
/* Since all instances automatically have the properties on the prototype, think of a 
prototype as a "recipe" for creating objects. Note that the prototype for duck and 
canary is part of the Bird constructor as Bird.prototype. Nearly every object in 
JavaScript has a prototype property which is part of the constructor function that 
created it.   */

//Another example
function Dog(name) {
    this.name = name;
  }
Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");
console.log(beagle.numLegs);


//Object Oriented Programming: Iterate Over All Properties
You have now seen two kinds of properties: own properties and prototype properties. Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype.

function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");
/* Here is how you add duck's own properties to the array ownProps and prototype properties
 to the array prototypeProps:  */

let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps); // prints ["name"]
console.log(prototypeProps); // prints ["numLegs"]

//Another example
function Dog(name) {
    this.name = name;
  }

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

for (let prop in beagle) {
    if (Dog.hasOwnProperty(prop)) {
        ownProps.push(prop);
    }
    else {
        prototypeProps.push(prop);
}
}

console.log(ownProps); //["name"]
console.log(prototypeProps); //["numLegs"]



//Object Oriented Programming: Understand the Constructor Property
/* There is a special constructor property located on the object instances duck and 
beagle that were created in the previous challenges:   */

let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird);  //prints true
console.log(beagle.constructor === Dog);  //prints true

/*Note that the constructor property is a reference to the constructor function that 
created the instance. The advantage of the constructor property is that it's possible 
to check for this property to find out what kind of object it is. Here's an example of
 how this could be used:   */

function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}
/* Note: Since the constructor property can be overwritten (which will be covered in the 
next two challenges) it’s generally better to use the instanceof method to check the
type of an object.  */

//Another example
function Dog(name) {
    this.name = name;
  }
function joinDogFraternity(candidate) {
    if(candidate.constructor === Dog) {
        return true;
    }
    else {
        return false;
    }
}


//Object Oriented Programming: Change the Prototype to a New Object
//Up until now you have been adding properties to the prototype individually:

Bird.prototype.numLegs = 2;
//This becomes tedious after more than a few properties.

Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}
/* A more efficient way is to set the prototype to a new object that already contains 
the properties. This way, the properties are added all at once:    */

Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

//Another example
function Dog(name) {
    this.name = name;
  }
  
Dog.prototype = {
    numLegs: 4,
    eat: function() {
        console.log("nom");
    },
    describe: function() {
        console.log(this.name + " loves its owner");
    }
};
