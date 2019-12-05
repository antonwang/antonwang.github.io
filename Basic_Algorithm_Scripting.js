/* Contents are taken from freecodecamp Basic JavaScript tutorials. 
This is only for my learning purpose.
*/



//Introduction to Basic Algorithm Scripting

/* A computer algorithm is a sequence of steps that is followed to achieve a particular
 outcome. To write an algorithm, you must first understand a problem, and then solve it with
  coding.

To make solving problems easier, it can be helpful to break them down into many chunks. 
Then, each chunk can be solved one by one. For example, if you are building a calculator,
 don't try to solve the problem as a whole. First, consider how to get inputs. Then, 
 determine each arithmetic operation one by one. Finally, display the results.

In this section we will learn to solve basic algorithm problems using JavaScript. This will
 help you improve your problem solving skills and prepare you to later solve more complex 
 problems.

Hint: If you get stuck, try using console.log() to log variable values to the console. This will
 help to debug problems. */

 //Basic Algorithm Scripting: Convert Celsius to FahrenheitPassed
 function convertToF(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }

  convertToF(30);


//Basic Algorithm Scripting: Reverse a StringPassed
/* Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.  */

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}
reverseString("hello");

// or the following function that combines all the three methods together

function reverseString(str) {
    return str.split("").reverse().join("");
    // ["h", "e", "l", "l", "o"] --> ["o", "l", "l", "e", "h"] --> "olleh"
 
}
 
reverseString("hello");

// or using for iteration
function reverseString(str) {
    for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }


//Basic Algorithm Scripting: Factorialize a Number
/* Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of 
all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.   */

function factorialize(num) {
    if (num == 0) { 
        //returns 1;
    }
    for (let total = 1; num > 0; num--) {
      total *= num;
    }
    return total;
  }
  
console.log(factorialize(5));  //  returns 120

//or using recursion

function factorialize(num) {
    if (num === 0) {
      return 1;
    }
    return num * factorialize(num - 1);
  }
  
  factorialize(5);


  //Basic Algorithm Scripting: Find the Longest Word in a String
/* Return the length of the longest word in the provided sentence.
Your response should be a number.    */

function findLongestWordLength(str) {
    let arr = str.split(" ");
    //["The","quick","brown","fox","jumped","over","the","lazy","dog"]
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > num) {
        num = arr[i].length;
      }
    }
    return num;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
  

//Basic Algorithm Scripting: Return Largest Numbers in Arrays
/* Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member
 with array syntax arr[i].  */

 function largestOfFour(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      let largestnum = arr[i][0];  //takes into consideration of negative numbers
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] > largestnum) {
          largestnum = arr[i][j];  //largest number from each sub array
        }
      }
      newArr.push(largestnum);  //adds largest number from each sub array to new array
    }
    return newArr;
  }
  
  console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
  

//Basic Algorithm Scripting: Confirm the Ending
/* Check if a string (first argument, str) ends with the given target string 
(second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
 But for the purpose of this challenge, we would like you to use one of the JavaScript 
 substring methods instead.  */


function confirmEnding(str, target) {
  if (str.substr(str.length-target.length) == target) {
    return true;
  }
  return false;
}

console.log(confirmEnding("Bastian", "n"));

//or using slice.method

function confirmEnding(str, target) {
    return str.slice(str.length - target.length) == target;
  }
  
console.log(confirmEnding("Bastian", "n"));

//or using regex 
function confirmEnding(str, target) {
    let reg = new RegExp(target + "$", "i");
  
    return reg.test(str);
  }
  
console.log(confirmEnding("Bastian", "n"));


//Basic Algorithm Scripting: Repeat a String Repeat a StringPassed
/* Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number.   */

function repeatStringNumTimes(str, num) {
    if (num <= 0) {
      return "";
    }
    return str + repeatStringNumTimes(str, num-1);
  }
  
  repeatStringNumTimes("abc", 3);

//Basic Algorithm Scripting: Truncate a String
/*  Truncate a string (first argument) if it is longer than the given maximum string 
length (second argument). Return the truncated string with a ... ending.  */

function truncateString(str, num) {
    let newstr = str
    if (str.length > num) {
        newstr = str.substr(0, num) + '...';
    }
    return newstr;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); // "A-tisket..."


//Basic Algorithm Scripting: Finders Keepers
/*  Create a function that looks through an array (first argument) and returns the first 
element in the array that passes a truth test (second argument). If no element passes the 
test, return undefined.  */

function findElement(arr, func) {
    let num = 0;
    for ( let i = 0; i < arr.length; i++) {
      if (func(arr[i]) == true){
      return arr[i];
      }
    }
    return undefined;
  }
  
  console.log(findElement([1, 2, 3, 4], num => num % 2 === 0)); // 2


//Basic Algorithm Scripting: Boo who
/* Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.  */

function booWho(bool) {
  if (bool === true | bool === false) {
    return true;
  }
  return false;
}

booWho(null);


//Basic Algorithm Scripting: Title Case a Sentence
/* Return the provided string with the first letter of each word capitalized. Make sure 
the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like 
"the" and "of".  */

function titleCase(str) {
  let newarr = str.toLowerCase().split(" ");
  let capStr = newarr.map(function(val) {
    let letter = val.charAt(0).toUpperCase();
    return val.replace(val.charAt(0), letter);
  });
  return capStr.join(" ");
}

console.log(titleCase("I'm a little tea pot")); //"I'm A Little Tea Pot"


//Basic Algorithm Scripting: Slice and SplicePassed
/* You are given two arrays and an index.
Use the array methods slice and splice to copy each element of the first array into 
the second array, in order.

Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the 
function runs. */

function frankenSplice(arr1, arr2, n) {
  let arr3 = arr2;
  for (let i = 0; i < arr1.length; i++) {
  arr3.splice(n+i, 0, arr1[i]);
  }
  return arr3;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));  // [4,1,2,3,5,6]



//Basic Algorithm Scripting: Falsy Bouncer
/*Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean.  */

function bouncer(arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
        newarr.push(arr[i]);
     }
  }
  return newarr;
}

console.log(bouncer([7, "ate", "", false, 9])); //[7,"ate",9]

// or using filter()
function bouncer(arr) {
  return arr.filter(Boolean);  // filters out falsey of the arr
}

//Basic Algorithm Scripting: Where do I Belong
/* Return the lowest index at which a value (second argument) should be inserted 
into an array (first argument) once it has been sorted. The returned value should be
 a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1
 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been 
sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 
(index 1).  */

function getIndexToIns(arr, num) {
  if (arr.length == 0) {
    return 0;
    }
  arr.sort(function(a, b){return a-b});
  
  if (num > arr[arr.length - 1]) {
    return arr.length;
  }
  
  for (let i = 0; i < arr.length; i++) {
    if (num == arr[i]) {
      return i;
      }
    if (num > arr[i] && num < arr[i+1]) {
      return i+1;
      }
  }
}

console.log(getIndexToIns([2, 5, 10], 15));

//or a more simplified version that pushes num into arr first before sorting;
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a, b) {
    return a - b;
  });
  return arr.indexOf(num);
}

//or another simplified version
function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num) return a;
  }

  return arr.length;
}


//Basic Algorithm Scripting: Mutations
/* Return true if the string in the first element of the array contains all of the 
letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the
 second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not 
contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are
 present in "Alien".   */

function mutation(arr) {
  let str1arr = arr[0].toLowerCase().split("");
  let str2arr = arr[1].toLowerCase().split("");
  console.log(str1arr, str2arr);
  for (let i = 0; i < str2arr.length; i++) {
    if (str1arr.indexOf(str2arr[i]) == -1) {
    // for each char in str 2 arr, cycle it through str 1 arr. Return false if no matches

      return false;
    }
  }
  return true;
}

console.log(mutation(["hello", "hey"]));

//A better solution without using .split("")
function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (var i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

//Another solution using declarative function and 'every'
/*Every will basically give you letter by letter to compare, which we do by using indexOf 
on the first string. indexOf will give you -1 if the current letter is missing.   */
function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(function(letter) {
      return arr[0].toLowerCase().indexOf(letter) != -1;
    });
}

//Basic Algorithm Scripting: Chunky Monkey
/* Write a function that splits an array (first argument) into groups the length 
of size (second argument) and returns them as a two-dimensional array. */

function chunkArrayInGroups(arr, size) {
  let multiarr = [];
  for (let i =0; i < arr.length; i += size) {
    // Break it up.
    multiarr.push(arr.slice(i, i+size));
  }
  return multiarr;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));