// Contents are taken from freecodecamp Introduction to the ES6 Challenges tutorials. 
//This is only for my learning purpose.

//Introduction to the Basic Data Structure Challenges
/* Data can be stored and accessed in many different ways, both in JavaScript and 
other languages. This section will teach you how to manipulate arrays, as well as 
access and copy the information within them. It will also teach you how to manipulate 
and access the data within JavaScript objects, using both dot and bracket notation. 
When you're done with this section, you should understand the basic properties and 
differences between arrays and objects, as well as how to choose which to use for a 
given purpose.  */

//Basic Data Structures: Use an Array to Store a Collection of Data
/* The below is an example of the simplest implementation of an array data structure. 
This is known as a one-dimensional array, meaning it only has one level, or that it does
 not have any other arrays nested within it. Notice it contains booleans, strings, and 
 numbers, among other valid JavaScript data types:   */

let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length); // logs 7

/* All arrays have a length property, which as shown above, can be very easily accessed
 with the syntax Array.length. A more complex implementation of an array can be seen below.
  This is known as a multi-dimensional array, or an array that contains other arrays. 
  Notice that this array also contains JavaScript objects, which we will examine very 
  closely in our next section, but for now, all you need to know is that arrays are
   also capable of storing complex objects.  */

let complexArray = [
  [
    {
      one: 1,
      two: 2
    },
    {
      three: 3,
      four: 4
    }
  ],
  [
    {
      a: "a",
      b: "b"
    },
    {
      c: "c",
      d: "d"
    }
  ]
];

//Basic Data Structures: Access an Array's Contents Using Bracket Notation
/* The fundamental feature of any data structure is, of course, the ability to not
 only store data, but to be able to retrieve that data on command. So, now that 
 we've learned how to create an array, let's begin to think about how we can access
  that array's information.

When we define a simple array as seen below, there are 3 items in it:  */

let ourArray = ["a", "b", "c"];

/* In an array, each array item has an index. JavaScript arrays are zero-indexed, meaning 
that the first element of an array is actually at the zeroth position, not the first. 
In order to retrieve an element from an array we can enclose an index in brackets and 
append it to the end of an array, or more commonly, to a variable which references an 
array object. This is known as bracket notation. For example, if we want to retrieve 
the "a" from ourArray and assign it to a variable, we can do so with the following code: */

let ourVariable = ourArray[0]; // ourVariable equals "a"

//You can also set an index to a value using the same notation:
ourArray[1] = "not b anymore";  // ourArray now equals ["a", "not b anymore", "c"];


//Basic Data Structures: Add Items to an Array with push() and unshift()
/* Arrays can be defined with a length of any number of elements, and elements can be added
or removed over time; in other words, arrays are mutable. In this challenge, we will look
at two methods with which we can programmatically modify an array:
Array.push() and Array.unshift().

Both methods take one or more elements as parameters and add those elements to the array
 the method is being called on; the push() method adds elements to the end of an array, 
 and unshift() adds elements to the beginning. Consider the following:   */

let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
// now equals ['XIX', 'XX', 'XXI', 'XXII']

romanNumerals.push(twentyThree);
/* now equals ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']  
Notice that we can also pass variables, which allows us even greater flexibility in
dynamically modifying our array's data.  */

//Another example
function mixedNumbers(arr) {
    arr.unshift('I', 2, 'three');  // add 'I', 2, 'three' to the beginning of the array 
    arr.push(7, 'VIII', 9); //add to the end of the array
    return arr;
  }
console.log(mixedNumbers(['IV', 5, 'six'])); //["I",2,"three","IV",5,"six",7,"VIII",9]

//Basic Data Structures: Remove Items from an Array with pop() and shift()
/* Both push() and unshift() have corresponding methods that are nearly functional
 opposites: pop() and shift(). As you may have guessed by now, instead of adding,
  pop() removes an element from the end of an array, while shift() removes an element
   from the beginning. The key difference between pop() and shift() and their cousins 
   push() and unshift(), is that neither method takes parameters, and each only allows
    an array to be modified by a single element at a time.

Let's take a look: */

let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();
// now equals ['whats up?', 'hello']

greetings.shift();
// now equals ['hello']

//We can also return the value of the removed element with either method like this:
let popped = greetings.pop();
// returns 'hello'
// greetings now equals []

//Another example
function popShift(arr) {
    let popped = arr.pop(); // 'complete'
    let shifted = arr.shift(); // 'challenge'
    return [shifted, popped]; 
  }
  
// do not change code below this line
console.log(popShift(['challenge', 'is', 'not', 'complete'])); // challenge, complete


//Basic Data Structures: Remove Items Using splice()
/* splice() allows us to: remove any number of consecutive elements from anywhere 
in an array.

splice() can take up to 3 parameters, but for now, we'll focus on just the first 2.
 The first two parameters of splice() are integers which represent indexes, or positions, 
 of the array that splice() is being called upon. And remember, arrays are zero-indexed, 
 so to indicate the first element of an array, we would use 0. splice()'s first parameter 
 represents the index on the array from which to begin removing elements, while the second
  parameter indicates the number of elements to delete. For example:  */

let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);
// remove 2 elements beginning with the 3rd element
// array now equals ['today', 'was', 'great']

/* splice() not only modifies the array it's being called on, but it also returns a new 
array containing the value of the removed elements:  */

let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);
// newArray equals ['really', 'happy']


//Basic Data Structures: Add Items Using splice()
/* Remember in the last challenge we mentioned that splice() can take up to three 
parameters? Well, you can use the third parameter, comprised of one or more element(s), 
to add to the array. This can be incredibly useful for quickly switching out an element, 
or a set of elements, for another.  */

const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
// the second entry of 12 is removed, and we add 13 and 14 at the same index
console.log(numbers);
// returns [ 10, 11, 12, 13, 14, 15 ]
/* Here we begin with an array of numbers. We then pass the following to splice(). 
The index at which to begin deleting elements (3), the number of elements to be deleted
(1), and the elements (13, 14) to be inserted at that same index. Note that there can
be any number of elements (separated by commas) following amountToDelete, each of which
gets inserted. */

//Another example
function htmlColorNames(arr) {
    arr.splice(0,2, 'DarkSalmon', 'BlanchedAlmond')
    return arr;
  }
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));
// ["DarkSalmon","BlanchedAlmond","LavenderBlush","PaleTurqoise","FireBrick"]


//Basic Data Structures: Copy Array Items Using slice()
/* The next method we will cover is slice(). slice(), rather than modifying an array, 
copies, or extracts, a given number of elements to a new array, leaving the array it is
 called upon untouched. slice() takes only 2 parameters — the first is the index at which
  to begin extraction, and the second is the index at which to stop extraction 
  (extraction will occur up to, but not including the element at this index). 
  Consider this:  */

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);
// todaysWeather equals ['snow', 'sleet'];
// weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']
// In effect, we have created a new array by extracting elements from an existing array.

function forecast(arr) {
    return arr.slice(2,4);   //["warm","sunny"]
  }
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


//Basic Data Structures: Copy an Array with the Spread Operator
/* While slice() allows us to be selective about what elements of an array to copy,
 among several other useful tasks, ES6's new spread operator allows us to easily copy
  all of an array's elements, in order, with a simple and highly readable syntax. The 
  spread syntax simply looks like this: ...   

In practice, we can use the spread operator to copy an array like so:  */

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
// thatArray equals [true, true, undefined, false, null]
// thisArray remains unchanged, and is identical to thatArray

function copyMachine(arr, num) {  //return a new array made up of num copies of arr. 
    let newArr = [];
    while (num >= 1) {
      newArr.push([...arr]);   
      num--;
    }
    return newArr;
  }
console.log(copyMachine([true, false, true], 2));  //[[true,false,true],[true,false,true]]


//Basic Data Structures: Combine Arrays with the Spread Operator
/* Another huge advantage of the spread operator, is the ability to combine arrays, or
 to insert all the elements of one array into another, at any index. With more traditional
  syntaxes, we can concatenate arrays, but this only allows us to combine arrays at the
   end of one, and at the start of another. Spread syntax makes the following operation 
   extremely simple:  */

let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
// thatArray now equals ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']
/* Using spread syntax, we have just achieved an operation that would have been more 
complex and more verbose had we used traditional methods. */

function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun'];
    return sentence;
  }
  
console.log(spreadOut());  //['learning', 'to', 'code', 'is', 'fun']


//Basic Data Structures: Check For The Presence of an Element With indexOf()
/* Since arrays can be changed, or mutated, at any time, there's no guarantee about 
where a particular piece of data will be on a given array, or if that element even still 
exists. Luckily, JavaScript provides us with another built-in method, indexOf(), that 
allows us to quickly and easily check for the presence of an element on an array. 
indexOf() takes an element as a parameter, and when called, it returns the position, or
 index, of that element, or -1 if the element does not exist on the array.

For example: */

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates'); // returns -1
fruits.indexOf('oranges'); // returns 2
fruits.indexOf('pears'); // returns 1, the first index at which the element exists
/* indexOf() can be incredibly useful for quickly checking for the presence of an element
 on an array. We have defined a function, quickCheck, that takes an array and an element
  as arguments. Modify the function using indexOf() so that it returns true if the passed
   element exists on the array, and false if it does not.  */

function quickCheck(arr, elem) {
    if (arr.indexOf(elem) == -1) { 
    //eturns true if the passed element exists on the array, and false if it does not.
    return false;
    }
    return true;
  }
console.log(quickCheck(['mushrooms', 'onions', 'shallots'], 'mushrooms')); //true


//Basic Data Structures: Iterate Through All an Array's Items Using For Loops
/* Sometimes when working with arrays, it is very handy to be able to iterate through 
each item to find one or more elements that we might need, or to manipulate an array 
based on which data items meet a certain set of criteria. JavaScript offers several built 
in methods that each iterate over arrays in slightly different ways to achieve different 
results (such as every(), forEach(), map(), etc.), however the technique which is most
 flexible and offers us the greatest amount of control is a simple for loop.

Consider the following:  */

function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]); // returns [12, 14, 80]
/* Using a for loop, this function iterates through and accesses each element of the array,
 and subjects it to a simple test that we have created. In this way, we have easily and 
 programmatically determined which data items are greater than 10, and returned a new array
  containing those items.  */

/* return a filtered version of the passed array such that any array nested within arr 
containing elem has been removed.  */

function filteredArray(arr, elem) {
let newArr = [];

for (let i = 0; i<arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
    newArr.push(arr[i]);
    }
}
return newArr;
}
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)); // []



//Basic Data Structures: Create complex multi-dimensional arrays
/* Awesome! You have just learned a ton about arrays! This has been a fairly high level 
overview, and there is plenty more to learn about working with arrays, much of which you 
will see in later sections. But before moving on to looking at Objects, lets take one more
 look, and see how arrays can become a bit more complex than what we have seen in previous
  challenges.

One of the most powerful features when thinking of arrays as data structures, is that 
arrays can contain, or even be completely made up of other arrays. We have seen arrays 
that contain arrays in previous challenges, but fairly simple ones. However, arrays can 
contain an infinite depth of arrays that can contain other arrays, each with their own 
arbitrary levels of depth, and so on. In this way, an array can very quickly become very 
complex data structure, known as a multi-dimensional, or nested array. Consider the
 following example:  */

let nestedArray = [ // top, or first level - the outer most array
  ['deep'], // an array within an array, 2 levels of depth
  [
    ['deeper'], ['deeper'] // 2 arrays nested 3 levels deep
  ],
  [
    [
      ['deepest'], ['deepest'] // 2 arrays nested 4 levels deep
    ],
    [
      [
        ['deepest-est?'] // an array nested 5 levels deep
      ]
    ]
  ]
];

/*While this example may seem convoluted, this level of complexity is not unheard of, 
or even unusual, when dealing with large amounts of data. However, we can still very 
easily access the deepest levels of an array this complex with bracket notation:  */

console.log(nestedArray[2][1][0][0][0]);
// logs: deepest-est?

//And now that we know where that piece of data is, we can reset it if we need to:
nestedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]);
// now logs: deeper still

//Another example
let myNestedArray = [  //1st level
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],  //2nd level
    [
        ['deep'], ['loop', 'shift', 6, 7, 1000, 'method']  //3rd level
    ], 
    [   [
            ['concat', false, true, 'spread', 'array'], ['deeper'] //4th level
        ],  
        [
            [   
                ['mutate', 1327.98, 'splice', 'slice', 'push'],  //5th level
                ['deepest'], ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
            ]
        ] 
    ]
];


//sic Data Structures: Add Key-Value Pairs to JavaScript Objects
/*  At their most basic, objects are just collections of key-value pairs, or in other 
words, pieces of data mapped to unique identifiers that we call properties or keys. 
Let's take a look at a very simple example:  */

let FCC_User = {
  username: 'awesome_coder',
  followers: 572,
  points: 1741,
  completedProjects: 15
};
/* The above code defines an object called FCC_User that has four properties, each of 
which map to a specific value. If we wanted to know the number of followers FCC_User has,
 we can access that property by writing:  */

let userData = FCC_User.followers;
// userData equals 572
/* This is called dot notation. Alternatively, we can also access the property with
 brackets, like so:  */

let userData = FCC_User['followers'];
// userData equals 572
/* Notice that with bracket notation, we enclosed followers in quotes. This is because
 the brackets actually allow us to pass a variable in to be evaluated as a property 
 name (hint: keep this in mind for later!). Had we passed followers in without the 
 quotes, the JavaScript engine would have attempted to evaluate it as a variable, 
 and a ReferenceError: followers is not defined would have been thrown.  */

 let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  
//Add three more entries:
foods.bananas = 13;
foods["grapes"] = 35;
foods.strawberries = 27;

console.log(foods); //{"apples":25,"oranges":32,"plums":28,"bananas":13,"grapes":35,"strawberries":27}
  

