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
