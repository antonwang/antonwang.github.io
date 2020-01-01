// Contents are taken from freecodecamp Basic JavaScript tutorials. 
//This is only for my learning purpose.



//Iterate with JavaScript While Loops
/*You can run the same code multiple times by using a loop.

The first type of loop we will learn is called a while loop
 because it runs "while" a specified condition is true and stops
  once that condition is no longer true. */

var ourArray = [];
var i = 0;
while(i < 5) {
  ourArray.push(i);
  i++;
}
/*In the code example above, the while loop will execute 5 times 
and append the numbers 0 through 4 to ourArray.  */

var myArray = [];
var i = 5;
while (i >= 0) { //Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.
    myArray.push(i);
    i--;
}

//Iterate with JavaScript For Loops
/*You can run the same code multiple times by using a loop.

The most common type of JavaScript loop is called a for loop because it runs "for" a specific number of times.

For loops are declared with three optional expressions separated by semicolons:

for ([initialization]; [condition]; [final-expression])

The initialization statement is executed one time only before the 
loop starts. It is typically used to define and setup your loop variable.

The condition statement is evaluated at the beginning of every loop 
iteration and will continue as long as it evaluates to true. 
When condition is false at the start of the iteration, the loop will
 stop executing. This means if condition starts as false, your loop 
 will never execute.

The final-expression is executed at the end of each loop iteration,
 prior to the next condition check and is usually used to increment 
 or decrement your loop counter.

In the following example we initialize with i = 0 and iterate while
 our condition i < 5 is true. We'll increment i by 1 in each loop 
 iteration with i++ as our final-expression.
*/
var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);  //ourArray will now contain [0,1,2,3,4].
}

var myArray = [];
for (var i=1; i < 6; i++) {
  myArray.push(i);  //Using a for loop to work to push the values 1 through 5 onto myArray.
}

//Iterate Odd Numbers With a For Loop
/*For loops don't have to iterate one at a time. By changing our 
final-expression, we can count by even numbers.

We'll start at i = 0 and loop while i < 10. We'll increment i by 2 each
 loop with i += 2.
*/
var ourArray = [];
for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);  //ourArray will now contain [0,2,4,6,8]
}

//Let's change our initialization so we can count by odd numbers.
var myArray = [];
for (var i = 1; i < 10; i += 2) {
  myArray.push(i);   //Pushing the odd numbers from 1 through 9 to myArray using a for loop.
}

//Count Backwards With a For Loop
/* A for loop can also count backwards, so long as we can define the right conditions.

In order to count backwards by twos, we'll need to change our 
initialization, condition, and final-expression.

We'll start at i = 10 and loop while i > 0. We'll decrement 
i by 2 each loop with i -= 2.
*/
var ourArray = [];
for (var i=10; i > 0; i-=2) {
  ourArray.push(i);    //ourArray will now contain [10,8,6,4,2]
}

//Let's change our initialization and final-expression so we can count backward by twos by odd numbers.
var myArray = [];
for (var i = 9; i > 0; i -= 2) {
  myArray.push(i); //Pushing the odd numbers from 9 through 1 to myArray using a for loop.
}


//Iterate Through an Array with a For Loop
/*A common task in JavaScript is to iterate through the contents of an array. 
One way to do that is with a for loop. 
This code will output each element of the array arr to the console: */

var arr = [10,9,8,7,6];
for (var i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
/*Remember that arrays have zero-based indexing, which means 
the last index of the array is length - 1. Our condition for 
this loop is i < arr.length, which stops the loop when i is equal
 to length. In this case the last iteration is i === 4 
 i.e. when i becomes equal to arr.length and outputs 6 to the console. */

// Example
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}   //totals the values inside myArr

//Nesting For Loops
/*If you have a multi-dimensional array, you can use the same 
logic as the prior waypoint to loop through both the array and 
any sub-arrays. Here is an example:  */

var arr = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
/* This outputs each sub-element in arr one at a time. Note that
 for the inner loop, we are checking the .length of arr[i], 
  since arr[i] is itself an array. */

//Modify function multiplyAll so that it multiplies the product 
//variable by each number in the sub-arrays of arr
function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];  
    }
  }
   return product;
}
multiplyAll([[1,2],[3,4],[5,6,7]]);

//Iterate with JavaScript Do...While Loops
/*The next type of loop you will learn is called a do...while loop.
 It is called a do...while loop because it will first do one pass 
 of the code inside the loop no matter what, and then continue to
  run the loop while the specified condition evaluates to true.
*/
var ourArray = [];
var i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5);
/*The example above behaves similar to other types of loops, and the
 resulting array will look like [0, 1, 2, 3, 4]. However, what makes
  the do...while different from other loops is how it behaves when 
  the condition fails on the first check. Let's see this in action: 
  Here is a regular while loop that will run the code in the loop as
   long as i < 5: */

var ourArray = []; 
var i = 5;
while (i < 5) {
  ourArray.push(i);
  i++;
}
/* In this example, we initialize the value of ourArray to an empty 
array and the value of i to 5. When we execute the while loop, the 
condition evaluates to false because i is not less than 5, so we do 
not execute the code inside the loop. The result is that ourArray 
will end up with no values added to it, and it will still look like 
[] when all of the code in the example above has completed running.
 Now, take a look at a do...while loop:  */

var ourArray = []; 
var i = 5;
do {
  ourArray.push(i);
  i++;
} while (i < 5);
/* In this case, we initialize the value of i to 5, just like we did
 with the while loop. When we get to the next line, there is no
  condition to evaluate, so we go to the code inside the curly braces
   and execute it. We will add a single element to the array and then
    increment i before we get to the condition check. When we finally
   evaluate the condition i < 5 on the last line, we see that i is
    now 6, which fails the conditional check, so we exit the loop 
    and are done. At the end of the above example, the value of 
    ourArray is [5]. Essentially, a do...while loop ensures that the 
    code inside the loop will run at least once.  */

var myArray = [];
var i = 10;
do {   // the loop will push only the number 10 to myArray
  myArray.push(i);  
  i++;
} while (i < 5);

//Replace Loops using Recursion
/* Recursion is the concept that a function can be expressed in 
terms of itself. To help understand this, start by thinking about
 the following task: multiply the elements from 0 to n inclusive in
  an array to create the product of those elements. Using a for 
  loop, you could do this:   */
function multiply(arr, n) {
  var product = arr[0];
  for (var i = 1; i <= n; i++) {
      product *= arr[i];
  }
  return product;
}
/*However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n]. 
That means you can rewrite multiply in terms of itself and never need
 to use a loop.  */

function multiply(arr, n) {
  if (n <= 0) {
    return arr[0];
  } else {
    return multiply(arr, n - 1) * arr[n];
  }
}
/* The recursive version of multiply breaks down like this. 
In the base case, where n <= 0, it returns the result, arr[0]. 
For larger values of n, it calls itself, but with n - 1. 
That function call is evaluated in the same way, calling multiply
 again until n = 0. At this point, all the functions can return 
 and the original multiply returns the answer.

Note: Recursive functions must have a base case when they return
 without calling the function again (in this example, when n <= 0)
 , otherwise they can never finish executing.  */

//returns the sum of the elements from 0 to n inclusive in an array arr.
function sum(arr, n) {  
  if (n <= 0) {
    return arr[0];
  } else {
    return sum(arr, n - 1) + arr[n];
  }
}

//Profile Lookup
/*We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) 
as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName
 and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return "No such contact".

If prop does not correspond to any valid properties of a contact
 found to match name then return "No such property".   */

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop){
    for (var i = 0; i < contacts.length; i++) {
        if (name === contacts[i]["firstName"]) {
            if (contacts[i].hasOwnProperty(prop)) {
               return contacts[i][prop];   
            } else return "No such property";
        } 
    }
    return "No such contact";
}
lookUpProfile("Akira", "likes");

//Generate Random Fractions with JavaScript
/* Random numbers are useful for creating random behavior.

JavaScript has a Math.random() function that generates a random 
decimal number between 0 (inclusive) and not quite up to 1 (exclusive). 
hus Math.random() can return a 0 but never quite return a 1

Note: Like Storing Values with the Equal Operator, all function 
calls will be resolved before the return executes, so we can return 
the value of the Math.random() function.  */

function randomFraction() {
  return Math.random(); // 0 to 0.9??
}

//Generate Random Whole Numbers with JavaScript
/* It's great that we can generate random decimal numbers, but it's
 even more useful if we use it to generate random whole numbers.
*/
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
/*
Use Math.random() to generate a random decimal.
We are calling Math.random(), multiplying the result by 20,
 then passing the value to Math.floor() function to round the 
 value down to the nearest whole number.
Remember that Math.random() can never quite return a 1 and, 
because we're rounding down, it's impossible to actually get 20. 
This technique will give us a whole number between 0 and 19.  */

function randomWholeNum() {
  return Math.floor(Math.random() * 10);  //random number between 0 & 9
}

//Generate Random Whole Numbers within a Range
/* Instead of generating a random number between zero and a given 
number like we did before, we can generate a random number that 
falls within a range of two specific numbers.

To do this, we'll define a minimum number min and a maximum number max.

Here's the formula we'll use. Take a moment to read it and try to
 understand what this code is doing:

Math.floor(Math.random() * (max - min + 1)) + min
*/
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

randomRange(10,30);

//Use the parseInt Function
/*  The parseInt() function parses a string and returns an integer.
 Here's an example: */

var a = parseInt("007");
/* The above function converts the string "007" to an integer 7.
 If the first character in the string can't be converted into a 
 number, then it returns NaN. */

 function convertToInteger(str) {
    return parseInt(str);
}

convertToInteger("56");

//Use the parseInt Function with a Radix
/* The parseInt() function parses a string and returns an integer.
 It takes a second argument for the radix, which specifies the base
  of the number in the string. The radix can be an integer between
   2 and 36.

The function call looks like:

parseInt(string, radix);

And here's an example:

var a = parseInt("11", 2);

The radix variable says that "11" is in the binary system, 
or base 2. This example converts the string "11" to an integer 3. */

function convertToInteger(str) {
    return parseInt(str, 2);
}

convertToInteger("10011");

//Use the Conditional (Ternary) Operator
/* The conditional operator, also called the ternary operator, 
can be used as a one line if-else expression.

The syntax is:

condition ? statement-if-true : statement-if-false;

The following function uses an if-else statement to check a condition:
*/
function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
//This can be re-written using the conditional operator:

function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater";
}

function checkEqual(a, b) {
    return a==b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);

//Use Multiple Conditional (Ternary) Operators
/* In the previous challenge, you used a single conditional operator. 
You can also chain them together to check for multiple conditions.

The following function uses if, else if, and else statements
 to check multiple conditions:
*/
function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
//The above function can be re-written using multiple conditional operators:

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}
//However, this should be used with care as using multiple conditional
// operators without proper indentation may make your code hard to read. For example:

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}

function checkSign(num) { //check if a number is positive, negative or zero. 
    return (num > 0) ? "positive"
     : (num < 0) ? "negative"
     : "zero";
}

checkSign(10);

//Use Recursion to Create a Range of Numbers
/* In a previous challenge, you learned how to use recursion to
 replace a for loop. Now, let's look at a more complex function 
 that returns an array of consecutive integers starting with 1 
 through the number passed to the function.

As mentioned in the previous challenge, there will be a base case.
 The base case tells the recursive function when it no longer needs
  to call itself. It is a simple case where the return value is 
  already known. There will also be a recursive call which executes
   the original function with different arguments. If the function
    is written correctly, eventually the base case will be reached.

For example, say you want to write a recursive function that returns
 an array containing the numbers 1 through n. This function will need
  to accept an argument n representing the final number. Then it will
   need to call itself with progressively smaller values of n until 
   it reaches 1. You could write the function as follows:  */

function count(n) {
  if (n === 1) {
    return [1];
  } else {
    var numbers = count(n - 1); 
    numbers.push(n);
    return numbers;
  }
}
/* At first this is counterintuitive since the value of n decreases,
 but the values in the final array are increasing. This happens 
 because the push happens last, after the recursive call has returned.
  At the point where n is pushed into the array, count(n - 1) 
  has already been evaluated and returned [1, 2, ..., n - 1].
  */

/*The function should return an array of integers which begins with
 a number represented by the startNum parameter and ends with a number
  represented by the endNum parameter. The starting number will always
   be less than or equal to the ending number. Your function must use 
   recursion by calling itself and not use loops of any kind. 
   It should also work for cases where both startNum and endNum 
   are the same.*/
  function rangeOfNumbers(startNum, endNum) {
  if (startNum == endNum) {
    return [endNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

rangeOfNumbers(1,5);  //[1, 2, 3, 4, 5] 


/* We have defined a function called countdown with two parameters. 
The function should take an array in the myArray parameter and 
append the numbers n through 1 based on the n parameter.
For example, calling this function with n = 5 will pad the array 
with the numbers [5, 4, 3, 2, 1] inside of it. Your function must
 use recursion by calling itself and must not use loops of any kind. */

function countdown(myArray, n){
  if (n <= 0) {
    return [];
  } else {
    myArray.push(n);
    return myArray = countdown(myArray, n-1);
  }
}

