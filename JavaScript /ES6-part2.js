// Contents are taken from freecodecamp Introduction to the ES6 Challenges tutorials. 
//This is only for my learning purpose.

//ES6: Use getters and setters to Control Access to an Object
/*You can obtain values from an object and set the value of a property within an object.

These are classically called getters and setters.

Getter functions are meant to simply return (get) the value of an object's private 
variable to the user without the user directly accessing the private variable.

Setter functions are meant to modify (set) the value of an object's private variable 
based on the value passed into the setter function. This change could involve 
calculations, or even overwriting the previous value completely.  */

class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const lol = new Book('anonymous');
console.log(lol.writer);  // anonymous
lol.writer = 'wut';
console.log(lol.writer);  // wut
/*Notice the syntax used to invoke the getter and setter. They do not even look like
 functions. Getters and setters are important because they hide internal implementation
  details. Note: It is convention to precede the name of a private variable with an 
  underscore (_). However, the practice itself does not make a variable private. */

//example
 class Thermostat {
     constructor (fahrenheit) {
         this.fahrenheit = fahrenheit;
     } 
     get temperature() {
         return (5/9) * (this.fahrenheit - 32);
     }
     set temperature(celsius) {
         this.fahrenheit = (celsius * 9 / 5) + 32;
     } 
 }

const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C


//ES6: Create a Module Script
/* JavaScript started with a small role to play on an otherwise mostly HTML web. 
Today, it’s huge, and some websites are built almost entirely with JavaScript.
 In order to make JavaScript more modular, clean, and maintainable; 
 ES6 introduced a way to easily share code among JavaScript files. 
 This involves exporting parts of a file for use in one or more other files,
  and importing the parts you need, where you need them. In order to take advantage 
  of this functionality, you need to create a script in your HTML document with a 
  type of module. Here’s an example: 

<script type="module" src="filename.js"></script>

 A script that uses this module type can now use the import and export features
 you will learn about in the upcoming challenges. */

 /*
 <html>
  <body>
    <!-- add your code below -->
    <script type="module" src="index.js"></script>
    <!-- add your code above -->
  </body>
</html>
*/


//ES6: Use export to Share a Code Block
/*  Imagine a file called math_functions.js that contains several functions related
 to mathematical operations. One of them is stored in a variable, add, that takes in 
 two numbers and returns their sum. You want to use this function in several different
  JavaScript files. In order to share it with these other files, you first need to export it.
*/
export const add = (x, y) => {
  return x + y;
}
//The above is a common way to export a single function, but you can achieve the same thing like this:

const add = (x, y) => {
  return x + y;
}

export { add };

/*When you export a variable or function, you can import it in another file and use 
it without having to rewrite the code. You can export multiple things by repeating 
the first example for each thing you want to export, or by placing them all in the 
export statement of the second example, like this: */

export { add, subtract };

//example
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}
export {uppercaseString, lowercaseString};



//ES6: Reuse Javascript Code Using import
/*import allows you to choose which parts of a file or module to load. In the previous
 lesson, the examples exported add from the math_functions.js file. Here's how you 
 can import it to use in another file: */

import { add } from './math_functions.js';
/*Here, import will find add in math_functions.js, import just that function for you
 to use, and ignore the rest. The ./ tells the import to look for the math_functions.js 
 file in the same folder as the current file. The relative file path (./) and file 
 extension (.js) are required when using import in this way.

You can import more than one item from the file by adding them in the import statement like this:
*/
import { add, subtract } from './math_functions.js';

//example
import {uppercaseString, lowercaseString} from './string_functions.js';
uppercaseString("hello");
lowercaseString("WORLD!");




//ES6: Use * to Import Everything from a File
/*Suppose you have a file and you wish to import all of its contents into the current file.
This can be done with the import * as syntax. Here's an example where the contents of 
a file named math_functions.js are imported into a file in the same directory:  */

import * as myMathModule from "./math_functions.js";
/* The above import statement will create an object called myMathModule. This is just 
a variable name, you can name it anything. The object will contain all of the exports
from math_functions.js in it, so you can access the functions like you would any other
 object property. Here's how you can use the add and subtract functions that
  were imported:  */

myMathModule.add(2,3);
myMathModule.subtract(5,3);

//example
import * as stringFunctions from "./string_functions.js";

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");




//ES6: Create an Export Fallback with export default
/*In the export lesson, you learned about the syntax referred to as a named export.
 This allowed you to make multiple functions and variables available for use in other files.

There is another export syntax you need to know, known as export default.
 Usually you will use this syntax if only one value is being exported from a file. 
 It is also used to create a fallback value for a file or module.

Below are examples using export default:  */

// named function
export default function add(x, y) {
  return x + y;
}

// anonymous function
export default function(x, y) {
  return x + y;
}
/* Since export default is used to declare a fallback value for a module or file, 
you can only have one value be a default export in each module or file. Additionally, 
you cannot use export default with var, let, or const */

//Example
export default function subtract(x, y) {
  return x - y;
}



//ES6: Import a Default Export
/*To import a default export, you need to use a different import syntax.
 In the following example, add is the default export of the math_functions.js file.
  Here is how to import it:  */

import add from "./math_functions.js";
/* The syntax differs in one key place. The imported value, add, is not surrounded 
by curly braces ({}). add here is simply a variable name for whatever the default 
export of the math_functions.js file is. You can use any name here when importing a default.
*/

//example
import subtract from "./math_functions.js";
subtract(7,4);


//ES6: Create a JavaScript Promise
/*  A promise in JavaScript is exactly what it sounds like - you use it to make 
a promise to do something, usually asynchronously. When the task completes, you 
either fulfill your promise or fail to do so. Promise is a constructor function, 
so you need to use the new keyword to create one. It takes a function, as its 
argument, with two parameters - resolve and reject. These are methods used to
 determine the outcome of the promise. The syntax looks like this:  */

const myPromise = new Promise((resolve, reject) => {

});


//ES6: Complete a Promise with resolve and reject
/*A promise has three states: pending, fulfilled, and rejected. 
The promise you created in the last challenge is forever stuck in the pending state
 because you did not add a way to complete the promise. The resolve and reject parameters
  given to the promise argument are used to do this. resolve is used when you want
   your promise to succeed, and reject is used when you want it to fail. These are 
   methods that take an argument, as seen below. */

const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
/*The example above uses strings for the argument of these functions, but it can 
really be anything. Often, it might be an object, that you would use data from, to 
put on your website or elsewhere. */

//example
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    resolve("We got the data");	
  } else {  
    reject("Data not received");
  }
});


//ES6: Handle a Fulfilled Promise with then
/*Promises are most useful when you have a process that takes an unknown amount
 of time in your code (i.e. something asynchronous), often a server request. 
 When you make a server request it takes some amount of time, and after it completes
  you usually want to do something with the response from the server. This can be
   achieved by using the then method. The then method is executed immediately after
    your promise is fulfilled with resolve. Here’s an example:  */

myPromise.then(result => {
  // do something with the result.
});
//result comes from the argument given to the resolve method.

//example
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
makeServerRequest.then(result => {
  console.log(result); //Using result as the parameter of its callback function and log result to the console.
});


//ES6: Handle a Rejected Promise with catch
/* catch is the method used when your promise has been rejected. It is executed 
immediately after a promise's reject method is called. Here’s the syntax:  */

myPromise.catch(error => {
  // do something with the error.
});
//error is the argument passed in to the reject method.
//Note: the then and catch methods can be chained to the promise declaration if you choose.

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

makeServerRequest.catch(error => {
  console.log(error); //Using error as the parameter of its callback function and log error to the console.
});
