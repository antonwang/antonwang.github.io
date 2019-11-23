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