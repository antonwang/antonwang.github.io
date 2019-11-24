// Contents are taken from freecodecamp Basic JavaScript tutorials. This is only for my learning purpose.

var myStr; // Change this line 
myStr="FirstLine\n\t\\SecondLine\nThirdLine"
//FirstLinenewlinetabbackslashSecondLinenewlineThirdLine


//Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.
var ourStr = "I come first. " + "I come second."; 

// use the += operator to concatenate a string onto the end of an existing string variable.
var myStr = "This is the first sentence. "
myStr +="This is the second sentence."

var someAdjective = "fun!"; // Appending Variables to Strings
var myStr = "Learning to code is ";
myStr += someAdjective;

//find the length of a String value by writing .length after the string variable or string literal.
var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length; 

/*Bracket notation is a way to get a character at a specific index within a string.

Most modern programming languages, like JavaScript, don't start counting at 1 like humans do. They start at 0. This is referred to as Zero-based indexing.

For example, the character at index 0 in the word "Charles" is "C". 
So if var firstName = "Charles", 
you can get the value of the first letter of the string by using firstName[0].*/


//The individual characters of a string literal cannot be changed. 
var myStr = "Bob";
myStr[0] = "J"; //not allowed
var myStr = "Bob";
myStr = "Job"; //The only way to change myStr would be to assign it with a new string

//Use Bracket Notation to Find the Last Character in a String
var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];


//Use Bracket Notation to Find the Nth-to-Last Character in a String
var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length -2];

// Store Multiple Values in one Variable using JavaScript Arrays
var myArray = ["Anton", 31]; // it contains both a string and a number (in that order)

//Nest one Array within Another Array
var multiArray = [["Bulls", 23], ["White Sox", 45]]. //This is also called a multi-dimensional arrray.

//Access Array Data with Indexes
var array = [50,60,70];  
array[0]; // equals 50; Like strings, arrays use zero-based indexing
var data = array[1];  // equals 60
/*Note: There shouldn't be any spaces between the array name
 and the square brackets, like array [0]. 
 Although JavaScript is able to process this correctly,
  this may confuse other programmers reading your code. */

//Modify Array Data With Indexes
var ourArray = [50,40,30];
ourArray[0] = 15; // equals [15,40,30]
//Unlike strings, the entries of arrays are mutable and can be changed freely.

//Access Multi-Dimensional Arrays With Indexes
var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
];
arr[3]; // equals [[10,11,12], 13, 14]
arr[3][0]; // equals [10,11,12]
arr[3][0][1]; // equals 11
/*Note: There shouldn't be any spaces between 
the array name and the square brackets, 
like array [0][0] and even this array [0][0] is not allowed.
Although JavaScript is able to process this correctly, 
this may confuse other programmers reading your code. */

//Manipulate Arrays With push()
var arr = [1,2,3];
arr.push(4); // arr is now [1,2,3,4]	
//.push() takes one or more parameters and "pushes" them onto the end of the array.

//Manipulate Arrays With pop()
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop(); //.pop() removes the last element from an array and returns that element.
console.log(oneDown); // Returns 6
console.log(threeArr); // Returns [1, 4]
//Any type of entry can be "popped" off of an array - numbers, strings, even nested arrays.

//Manipulate Arrays With shift()
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift(); //shift() removes the first element instead of the last.
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].


//Manipulate Arrays With unshift()
/*.unshift() works exactly like .push(), 
but instead of adding the element at the end of the array, 
unshift() adds the element at the beginning of the array.*/
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy"); //unshift() adds the element at the beginning of the array.
// ourArray now equals ["Happy", "J", "cat"]

//Write Reusable JavaScript with Functions
/*Here's an example of a function: */
function functionName() {
  console.log("Hello World");
}
/*
You can call or invoke this function by using its name
 followed by parentheses, like this: functionName(); 
 Each time the function is called it will print out the
 message "Hello World" on the dev console.
  All of the code between the curly braces will 
  be executed every time the function is called.
*/

//Passing Values to Functions with Arguments
// Example
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
ourFunctionWithArgs(10, 5); // Outputs 5
/*Parameters are variables that act as placeholders for 
the values that are to be input to a function when it is
 called. The actual values that are input (or "passed") 
 into a function when it is called are known as arguments.*/

//Global Scope and Functions
/*In JavaScript, scope refers to the visibility of variables.
Variables which are defined outside of a function block 
have Global scope. This means, they can be seen everywhere
 in your JavaScript code. */
var myGlobal = 10; // this is a global variable b/c it is outside of a function.

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5; // this is a global variable b/c no var definition
}
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
/*
Variables which are used without the var keyword are
 automatically created in the global scope. This can 
 create unintended consequences elsewhere in your code 
 or when running a function again. You should always 
 declare your variables with var.
*/

//Local Scope and Functions
/*Variables which are declared within a function,
 as well as the function parameters have local scope.
 That means, they are only visible within that function.

Here is a function myTest with a local variable called loc.
*/
function myTest() {
  var loc = "foo";
  console.log(loc);
}
myTest(); // logs "foo"
console.log(loc); // loc is not defined
//loc is not defined outside of the function.

//Global vs. Local Scope in Functions
/* It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

In this example:*/
var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}
//The function myFun will return "Head" because the local version of the variable is present.

//Return a Value from a Function with Return
//We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.
// Example
function minusSeven(num) {
  return num - 7;
}

// Only change code below this line
function timesFive(num) {
  return num * 5;
}

console.log(minusSeven(10)); // returns 3
console.log(timesFive(10)); //returns 50

//Understanding Undefined Value returned from a Function
/*A function can include the return statement but it does 
not have to. In the case that the function doesn't have a 
return statement, when you call it, the function processes
 the inner code but the returned value is undefined.*/
var sum = 0;

function addSum(num) {
  sum = sum + num;
}
addSum(3); // sum will be modified but returned value is undefined

//addSum is a function without a return statement. The function 
//will change the global sum variable but the returned value of the function is undefined.