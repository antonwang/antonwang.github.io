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

//Basic JavaScript: Stand in Line
/*
In Computer Science a queue is an abstract Data Structure where items are kept in order. 
New items can be added at the back of the queue and old items are taken off from the front of the queue.

Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed.
*/
function nextInLine(arr, item) {
  arr.push(item);
  var remove = arr.shift();
  return remove; 
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr)); //"Before: [1,2,3,4,5]"
console.log(nextInLine(testArr, 6)); //1
console.log("After: " + JSON.stringify(testArr)); //"After: [2,3,4,5,6]"

//Understanding Boolean Values
/*
Another data type is the Boolean. 
Booleans may only be one of two values: true or false. 
They are basically little on-off switches, where true is "on" and false is "off." 
These two states are mutually exclusive.

Note: Boolean values are never written with quotes. 
The strings "true" and "false" are not Boolean and have no special meaning in JavaScript.
*/
function welcomeToBooleans() {
  return true; // return boolean value is true
}

//Use Conditional Logic with If Statements
/*
Pseudocode

if (condition is true) {
  statement is executed
}
 */
function test (myCondition) {
  if (myCondition) {
     return "It was true";
  }
  return "It was false";
}
test(true);  // returns "It was true"
test(false); // returns "It was false"

//Comparison with the Equality Operator
/*
The most basic operator is the equality operator ==.
 The equality operator compares two values and 
 returns true if they're equivalent or false 
 if they are not. Note that equality is different 
 from assignment (=), which assigns the value at the
  right of the operator to a variable in the left.
 */
function equalityTest(myVal) {
  if (myVal == 10) {
     return "Equal";
  }
  return "Not Equal";
}
 /* In order for JavaScript to compare two different 
 data types (for example, numbers and strings), 
 it must convert one type to another. 
 This is known as "Type Coercion". Once it does, 
 however, it can compare terms as follows:*/
1   ==  1   // true
1   ==  2   // false
1   == '1'  // true
"3" ==  3   // true

//Comparison with the Strict Equality Operator
/*
Strict equality (===) is the counterpart to the equality 
operator (==). However, unlike the equality operator,
 which attempts to convert both values being compared 
 to a common type, the strict equality operator does not
  perform a type conversion.

If the values being compared have different types, 
they are considered unequal, and the strict equality 
operator will return false.

Examples */
3 ===  3   // true
3 === '3'  // false
//In the second example, 3 is a Number type and '3' is a String type.

//
/* 
If the values being compared are not of the same type, the equality operator will perform a type conversion, and then evaluate the values. However, the strict equality operator will compare both the data type and value as-is, without converting one type to the other.

Examples*/
3 == '3'  // returns true because JavaScript performs type conversion from string to number
3 === '3' // returns false because the types are different and type conversion is not performed

//Note: In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:
typeof 3   // returns 'number'
typeof '3' // returns 'string'

//Comparison with the Inequality Operator
/*The inequality operator (!=) is the opposite of the 
equality operator. It means "Not Equal" and returns 
false where equality would return true and vice versa. 
Like the equality operator, the inequality operator will
convert data types of values while comparing. 
Examples*/
1 !=  2     // true
1 != "1"    // false
1 != '1'    // false
1 != true   // false
0 != false  // false

//Comparison with the Strict Inequality Operator
/*The strict inequality operator (!==) is the logical
 opposite of the strict equality operator. 
 It means "Strictly Not Equal" and returns false where
  strict equality would return true and vice versa. 
  Strict inequality will not convert data types.
 Examples */
3 !==  3   // false
3 !== '3'  // true
4 !==  3   // true

//Comparison with the Greater Than Operator
/*The greater than operator (>) compares the values of
 two numbers. If the number to the left is greater than
  the number to the right, it returns true. Otherwise, 
  it returns false.

Like the equality operator, greater than operator will
 convert data types of values while comparing.

Examples*/
5   >  3   // true
7   > '3'  // true
2   >  3   // false
'1' >  9   // false

function testGreaterThan(val) {
  if (val > 100) {  
    return "Over 100";
  }

  if (val > 10) {  
    return "Over 10";
  }

  return "10 or Under";
}
testGreaterThan(101);

//Comparison with the Greater Than Or Equal To Operator
/* 
Like the equality operator, greater than or equal to 
operator will convert data types while comparing.

Examples */

6   >=  6   // true
7   >= '3'  // true
2   >=  3   // false
'7' >=  9   // false*/

//Comparison with the Less Than Operator
/* 
 Like the equality operator, less than
 operator converts data types while comparing. */
2   < 5  // true
'3' < 7  // true
5   < 5  // false
3   < 2  // false
'8' < 4  // false

function testLessThan(val) {
  if (val < 25) {
    return "Under 25";
  }

  if (val <55) {
    return "Under 55";
  }
  
  return "55 or Over";
}

testLessThan(55);

//Comparison with the Less Than Or Equal To Operator
//Like the equality operator, less than or equal to converts data types.
//Examples
4   <= 5  // true
'7' <= 7  // true
5   <= 5  // true
3   <= 2  // false
'8' <= 4  // false

//Comparisons with the Logical And Operator
function testLogicalAnd(val) {

  if (val >=25 && val <= 50) {
    return "Yes";
  }
  return "No";
}
testLogicalAnd(30); // returns "Yes"

//Comparisons with the Logical Or OperatorPassed
function testLogicalOr(val) {
  if (val < 10 || val >20) {
    return "Outside";
  }
  return "Inside";
}
testLogicalOr(15); // returns inside
