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

function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  //key is an array of every property name in source
  let key = Object.keys(source);
  //filter creates a new arr that has matching collection and source's key and value 
  arr = collection.filter(obj => key.every(key => obj.hasOwnProperty(key) && obj[key] == source[key]))
  // Only change code above this line
  return arr;
}
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
//returns [ { first: 'Tybalt', last: 'Capulet' } ]


//Another solution from freecodecamp
function whatIsInAName(collection, source) {
   var srcKeys = Object.keys(source);
  return collection.filter(function(obj) {
    return srcKeys.every(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
//returns [ { first: 'Tybalt', last: 'Capulet' } ]




//Intermediate Algorithm Scripting: Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  //first replace() adds a space between lowercase and uppercase letter
  //second replace() changes any space character or underscore to a dash
  //toLowerCase() changes the string into all lower case
  return str.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/\s|_/g,"-").toLowerCase();
}
console.log(spinalCase('thisIsSpinalTap'));  //this-is-spinal-tap

//another solution from freecodecamp
function spinalCase(str) {
  /* Split the string at one of the following conditions (converted to an array)
  - a whitespace character [\s] is encountered
  - underscore character [_] is encountered
  - or is followed by an uppercase letter [(?=[A-Z])]
 Join the array using a hyphen (-)
 Lowercase the whole resulting string  */
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}
console.log(spinalCase('thisIsSpinalTap'));  //this-is-spinal-tap


//Intermediate Algorithm Scripting: Pig Latin
/* Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word,
moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

If a word does not contain a vowel, just add "ay" to the end.

Input strings are guaranteed to be English words in all lowercase.  */

function translatePigLatin(str) {
  return str
  .replace(/^[aeiou]\w*/, "$&way") //if aeiou is the first letter, just add way to the str
  .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay"); //move consonant to the end of the str, and add "ay"
  }
  console.log(translatePigLatin("algorithm"));

//Another solution from freecodecamp
function translatePigLatin(str) {
// The regex looks at the beginning of the string ^ for one of the specified characters [aeiou]
// If it does, you only need to return the original string with “way” appended on the end.
    if (str.match(/^[aeiou]/)) return str + "way";
  
//match() returns an Array with the matched string as the first element,
//which is all we want. Grab it with [0].    
    const consonantCluster = str.match(/^[^aeiou]+/)[0];
//first part is the original string w/o beginning cosonant...
    return str.substring(consonantCluster.length) + consonantCluster + "ay";
  }
translatePigLatin("consonant");

//another solution from freecodecamp
function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str
        .replace(consonantRegex, "")
        .concat(myConsonants)
        .concat("ay")
    : str.concat("way");
}

translatePigLatin("consonant");
/*Code Explanation
start at beginning and get longest match of everything not a vowel (consonants)
if regex pattern found, it saves the match; else, it returns null
if regex pattern found (starts with consonants), it deletes match, adds the match to the end, and adds “ay” to the end
if regex pattern not found (starts with vowels), it just adds “way” to the ending */


//Intermediate Algorithm Scripting: Search and Replace
/* Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing
it. For example if you mean to replace the word "Book" with the word "dog", it should be
replaced as "Dog"   */

function myReplace(str, before, after) {
  if (before[0] == before[0].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  return str.replace(before, after);
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));



//Intermediate Algorithm Scripting: DNA Pairing
/* The DNA strand is missing the pairing element. Take each character, get its pair, 
and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped
into one encapsulating array. */

function pairElement(str) {
  let basepairs = {  //create an object for base pairing
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  let arr = str.split("");  //splits a str into an array
  let newarr = arr.map(x => [x, basepairs[x]]); //map creates a new arr
  return newarr;
}
console.log(pairElement("GCG")); //[ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]

//Another solution from freecodecamp
function pairElement(str) {
  // Return each strand as an array of two elements, the original and the pair.
  var paired = [];
  // Function to check with strand to pair.
  var search = function(char) {
    switch (char) {
      case "A":
        paired.push(["A", "T"]);
        break;
      case "T":
        paired.push(["T", "A"]);
        break;
      case "C":
        paired.push(["C", "G"]);
        break;
      case "G":
        paired.push(["G", "C"]);
        break;
    }
  };
  // Loops through the input and pair.
  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }
  return paired;
}
pairElement("GCG"); ////[ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]



//Intermediate Algorithm Scripting: Missing letters
/* Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.  */

function fearNotLetter(str) {
  let abcstr = "abcdefghijklmnopqrstuvwxyz";
  let position = abcstr.indexOf(str[0]);
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== abcstr[position]) {
      return abcstr[position];
    }
    position++;
  }
  return undefined;
}

console.log(fearNotLetter("stvwx")); //u

//Another solution from freecodecamp

function fearNotLetter(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}
/* Code Explanation
Loop over the string
Check if the difference in char codes between adjacent characters in the string is more than 1 (check ASCII table)
Return the missing character ( +1 from where the gap was detected) */

