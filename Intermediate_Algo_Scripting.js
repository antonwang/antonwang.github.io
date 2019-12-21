/* Contents are taken from freecodecamp Intermediate Algorithm Scripting tutorials. 
This is only for my learning purpose.
*/

// Intermediate Algorithm Scripting: Sum All Numbers in a Range
/* We'll pass you an array of two numbers. Return the sum of those two numbers plus
 the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 
and 4 (both inclusive) is 10. */

function sumAll(arr) {
  let sum = 0;
  if (arr[0] < arr[1]) {
    for (let i=arr[0]; i<=arr[1]; i++) {
      sum += i;
    }
  }
  if (arr[0] > arr[1]) {
    for (let i=arr[1]; i<=arr[0]; i++) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumAll([1, 4]));

//Another solution
function sumAll(arr) {
  var sum = 0;
  for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  } //Math.max() finds the maximum value of two numbers, and Math.min finds the min value
  return sum;
}
sumAll([1, 4]);



//Intermediate Algorithm Scripting: Diff Two Arrays
/* Compare two arrays and return a new array with any items only found in one of 
the two given arrays, but not both. In other words, return the symmetric difference 
of the two arrays.  */

function diffArray(arr1, arr2) {
  var newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      newArr.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      newArr.push(arr2[i]);
    }
  }
  return newArr;
}
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"],
 ["diorite", "andesite", "grass", "dirt", "dead shrub"])); //[ 'pink wool', 'diorite' ]

//another solution using functional programming
function diffArray(arr1, arr2) {
  var newArr = [];

  function onlyInFirst(first, second) {
    // Looping through an array to find elements that don't exist in another array
    for (var i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        // Pushing the elements unique to first to newArr
        newArr.push(first[i]);
      }
    }
  }

  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//Another solution from freecodecamp

function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


//Intermediate Algorithm Scripting: Seek and Destroy
/* You will be provided with an initial array (the first argument in the
destroyer function), followed by one or more arguments. Remove all elements 
from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.  */

function destroyer(arr) {
  var newarr = [];
  //Create an array of arguments and store it in the variable args.
  var args = Array.prototype.slice.call(arguments);
  for (let i = 0; i < arr.length; i++) {
    if (args.indexOf(arr[i]) === -1) {  //if args is not in arr, push to newarr
      newarr.push(arr[i]);
    }
  }
  return newarr;
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // [1, 1]

//another solution from freecodecamp
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        //If the value at current index === in both arrays, use delete to remove it from arr.
        delete arr[i]; 
      }
    }
  }
  //Outside of the nested loops: return the modified array using the Boolean object
  //as a filter for any null's created by the delete operator.
  return arr.filter(Boolean);
}

//another solution from freecodecamp using from() and slice()
function destroyer(arr) {
  //use the slice() method on args starting from the second index, 1.
  var args = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    //Return the filtered array, using includes() in the callback function to check 
    //if val is not in args; returning true to keep the value in the original array
    // or false to remove it.
    return !args.includes(val);
  });
}

//another solution from freecodecamp using ES6 
const destroyer = (arr, ...valsToRemove) => arr.filter(elem => !valuesToRemove.includes(elem));
//Code using ES6 syntax to declare function using arrow functions.
//Using spread operator to retrieve the arguments.
//Return the filtered array, using includes().




//Intermediate Algorithm Scripting: Wherefore art thou
/* Make a function that looks through an array of objects (first argument) and 
returns an array of all objects that have matching name and value pairs (second argument).
Each name and value pair of the source object has to be present in the object from the
collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" },
{ first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, then you must return the third 
object from the array (the first argument), because it contains the name and its
value, that was passed on as the second argument.  */

