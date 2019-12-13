// Contents are taken from freecodecamp 'Functional Programming' tutorials. 
//This is only for my learning purpose.

//Introduction to the Functional Programming Challenges
/* Functional programming is an approach to software development based around the 
evaluation of functions. Like mathematics, functions in programming map input to output 
to produce a result. You can combine basic functions in many ways to build more and more
 complex programs.

Functional programming follows a few core principles:

Functions are independent from the state of the program or global variables. They only 
depend on the arguments passed into them to make a calculation

Functions try to limit any changes to the state of the program and avoid changes to the 
global objects holding data

Functions have minimal side effects in the program

The functional programming software development approach breaks a program into small, 
testable parts. This section covers basic functional programming principles in JavaScript. */


//Functional Programming: Learn About Functional Programming
/* Functional programming is a style of programming where solutions are simple, 
isolated functions, without any side effects outside of the function scope.

INPUT -> PROCESS -> OUTPUT

Functional programming is about:

1) Isolated functions - there is no dependence on the state of the program, which includes 
global variables that are subject to change

2) Pure functions - the same input always gives the same output

3) Functions with limited side effects - any changes, or mutations, to the state of the 
program outside the function are carefully controlled  */

/**
 * A long process to prepare tea.
 * @return {string} A cup of tea.
 **/
const prepareTea = () => 'greenTea';

/**
 * Get given number of cups of tea.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 **/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

const tea4TeamFCC = getTea(4); // ["greenTea","greenTea","greenTea","greenTea"]

console.log(tea4TeamFCC);



//Functional Programming: Understand Functional Programming Terminology
/* The FCC Team had a mood swing and now wants two types of tea: green tea and black tea.
 General Fact: Client mood swings are pretty common.

With that information, we'll need to revisit the getTea function from last challenge to
handle various tea requests. We can modify getTea to accept a function as a parameter to
be able to change the type of tea it prepares. This makes getTea more flexible, and gives
the programmer more control when client requests change.

But first, let's cover some functional terminology:

Callbacks are the functions that are slipped or passed into another function to decide the
invocation of that function. You may have seen them passed to other methods, for example 
in filter, the callback function tells JavaScript the criteria for how to filter an array.

Functions that can be assigned to a variable, passed into another function, or returned 
from another function just like any other normal value, are called *** first class functions ***. 
In JavaScript, all functions are first class functions.

The functions that take a function as an argument, or return a function as a return value 
are called ***higher order functions  ***.

When the functions are passed in to another function or returned from another function, 
then those functions which gets passed in or returned can be called a ***lambda ***.  */

/**
 * A long process to prepare green tea.
 * @return {string} A cup of green tea.
 **/
const prepareGreenTea = () => 'greenTea';

/**
 * A long process to prepare black tea.
 * @return {string} A cup of black tea.
 **/
const prepareBlackTea = () => 'blackTea';

/**
 * Get given number of cups of tea.
 * @param {function():string} prepareTea The type of tea preparing function.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 **/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13); 

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);  // returns array of 'greenTea' and 'blackTea'


//Functional Programming: Understand the Hazards of Using Imperative Code
/* Functional programming is a good habit. It keeps your code easy to manage, and saves
you from sneaky bugs. But before we get there, let's look at an imperative approach to 
programming to highlight where you may have issues.

In English (and many other languages), the imperative tense is used to give commands. 
Similarly, an imperative style in programming is one that gives the computer a set of 
statements to perform a task.

Often the statements change the state of the program, like updating global variables. 
A classic example is writing a for loop that gives exact directions to iterate over the 
indices of an array.

In contrast, functional programming is a form of declarative programming. You tell 
the computer what you want done by calling a method or function.

JavaScript offers many predefined methods that handle common tasks so you don't need to
write out how the computer should perform them. For example, instead of using the for 
loop mentioned above, you could call the map method which handles the details of
iterating over an array. This helps to avoid semantic errors, like the "Off By One Errors"
that were covered in the Debugging section.

Consider the scenario: you are browsing the web in your browser, and want to track the 
tabs you have opened. Let's try to model this using some simple object-oriented code.

A Window object is made up of tabs, and you usually have more than one Window open. The 
titles of each open site in each Window object is held in an array. After working in the 
browser (opening new tabs, merging windows, and closing tabs), you want to print the tabs
that are still open. Closed tabs are removed from the array and new tabs (for simplicity)
get added to the end of it.

The code editor shows an implementation of this functionality with functions for 
tabOpen(), tabClose(), and join(). The array tabs is part of the Window object that 
stores the name of the open pages.   */

// tabs is an array of titles of each site open within the window
var Window = function(tabs) {
    this.tabs = tabs; // we keep a record of the array inside the object
};
  
// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
    this.tabs.push('new tab'); // let's open a new tab for now
    return this;
};
  
// When you close a tab
Window.prototype.tabClose = function (index) {

    // Only change code below this line  - fixed

    var tabsBeforeIndex = this.tabs.slice(0, index); // get the tabs before the tab
    var tabsAfterIndex = this.tabs.slice(index+1); // get the tabs after the tab

    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // join them together

    // Only change code above this line

    return this;
};

// Let's create three browser windows
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); //  Entertainment sites

// Now perform the tab opening, closing, and other operations
var finalTabs = socialWindow
                    .tabOpen() // Open a new tab for cat memes
                    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
                    .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs); /* [ 'FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab',
'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab' ]  */


//Functional Programming: Avoid Mutations and Side Effects Using Functional Programming
/* If you haven't already figured it out, the issue in the previous challenge was with
the splice call in the tabClose() function. Unfortunately, splice changes the original 
array it is called on, so the second call to it used a modified array, and gave 
unexpected results.

This is a small example of a much larger pattern - you call a function on a variable, 
array, or an object, and the function changes the variable or something in the object.

One of the core principles of functional programming is to not change things. Changes 
lead to bugs. It's easier to prevent bugs knowing that your functions don't change 
anything, including the function arguments or any global variable.

The previous example didn't have any complicated operations but the splice method 
changed the original array, and resulted in a bug.

Recall that in functional programming, changing or altering things is called mutation,
and the outcome is called a side effect. A function, ideally, should be a pure function,
meaning that it does not cause any side effects.

Let's try to master this discipline and not alter any variable or object in our code.  */

// the global variable
var fixedValue = 4;

function incrementer () {
  // Add your code below this line
  /* Fill in the code for the function incrementer so it returns the value of the global
   variable fixedValue increased by one. */

  return fixedValue + 1;

  // Add your code above this line
}

var newValue = incrementer(); // Should equal 5
console.log(fixedValue); // Should print 4


//Functional Programming: Pass Arguments to Avoid External Dependence in a Function
/*  The last challenge was a step closer to functional programming principles, but there 
is still something missing.

We didn't alter the global variable value, but the function incrementer would not work
without the global variable fixedValue being there.

Another principle of functional programming is to always declare your dependencies 
explicitly. This means if a function depends on a variable or object being present, 
then pass that variable or object directly into the function as an argument.

There are several good consequences from this principle. The function is easier to test,
you know exactly what input it takes, and it won't depend on anything else in your program.

This can give you more confidence when you alter, remove, or add new code. You would 
know what you can or cannot change and you can see where the potential traps are.

Finally, the function would always produce the same output for the same set of inputs,
no matter what part of the code executes it.   */

// the global variable
var fixedValue = 4;

// Add your code below this line
// Write the incrementer function so it takes an argument, and then increases the value by one.
function incrementer (num) {
return num + 1;

  // Add your code above this line
}

var newValue = incrementer(fixedValue); // Should equal 5
console.log(fixedValue); // Should print 4


//Functional Programming: Refactor Global Variables Out of Functions
/* So far, we have seen two distinct principles for functional programming:

1) Don't alter a variable or object - create new variables and objects and return them
 if need be from a function.

2) Declare function arguments - any computation inside a function depends only on the 
arguments, and not on any global object or variable.

Adding one to a number is not very exciting, but we can apply these principles when 
working with arrays or more complex objects.   */

/* Rewrite the code so the global array bookList is not changed inside either function.
The add function should add the given bookName to the end of an array. The remove
function should remove the given bookName from an array. Both functions should 
return an array, and any new parameters should be added before the bookName parameter. */

// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before bookName

// Add your code below this line
function add (arr, bookName) {
  let list = [...arr];
  list.push(bookName);
  return list;
  
  // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove (arr, bookName) {
  let list = [...arr];
  var book_index = list.indexOf(bookName);
  if (book_index >= 0) {

    list.splice(book_index, 1);
    return list;

    // Add your code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
/* returns the following array   [ 'The Hound of the Baskervilles',
'On The Electrodynamics of Moving Bodies', 'Philosophiæ Naturalis Principia Mathematica',
'Disquisitiones Arithmeticae' ]  */


//Functional Programming: Use the map Method to Extract Data from an Array
/* So far we have learned to use pure functions to avoid side effects in a program. 
Also, we have seen the value in having a function only depend on its input arguments.

This is only the beginning. As its name suggests, functional programming is centered 
around a theory of functions.

It would make sense to be able to pass them as arguments to other functions, and return
a function from another function. Functions are considered first class objects in 
JavaScript, which means they can be used like any other object. They can be saved in 
variables, stored in an object, or passed as function arguments.

Let's start with some simple array functions, which are methods on the array object 
prototype. In this exercise we are looking at Array.prototype.map(), or more simply map.

The map method iterates over each item in an array and returns a new array containing 
the results of calling the callback function on each element. It does this without 
mutating the original array.

When the callback is used, it is passed three arguments. The first argument is the 
current element being processed. The second is the index of that element and the third 
is the array upon which the map method was called.

See below for an example using the map method on the users array to return a new array
containing only the names of the users as elements. For simplicity, the example only 
uses the first argument of the callback.  */

const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const names = users.map(user => user.name);
console.log(names); // [ 'John', 'Amy', 'camperCat' ]

/*The watchList array holds objects with information on several movies. Use map on
watchList to assign a new array of objects with only title and rating keys to the
ratings variable. The code in the editor currently uses a for loop to do this, so
you should replace the loop functionality with your map expression. */

//// the global variable
var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
    }
  ];
  
  // Add your code below this line  - fixed
  
  var ratings = watchList.map(item => ({title: item["Title"], rating: item["imdbRating"]}));
  
  // Add your code above this line
  
  console.log(JSON.stringify(ratings));
  /* [{"title":"Inception","rating":"8.8"},{"title":"Interstellar","rating":"8.6"},
  {"title":"The Dark Knight","rating":"9.0"},{"title":"Batman Begins","rating":"8.3"},
  {"title":"Avatar","rating":"7.9"}]   */

//Functional Programming: Implement map on a Prototype
/* As you have seen from applying Array.prototype.map(), or simply map() earlier, the map
method returns an array of the same length as the one it was called on. It also doesn't
alter the original array, as long as its callback function doesn't.

In other words, map is a pure function, and its output depends solely on its inputs. 
Plus, it takes another function as its argument.

It would teach us a lot about map to try to implement a version of it that behaves 
exactly like the Array.prototype.map() with a for loop or Array.prototype.forEach().

Note: A pure function is allowed to alter local variables defined within its scope, 
although, it's preferable to avoid that as well.

Write your own Array.prototype.myMap(), which should behave exactly like 
Array.prototype.map(). You may use a for loop or the forEach method.   */

// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Add your code below this line  - done
  this.forEach(a => newArray.push(callback(a))); //forEach is like a for loop
  // Add your code above this line
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});

//or another solution

// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Add your code below this line - done
  for (let i = 0; i <this.length; i++) {
    newArray.push(callback(this[i]));
}
  // Add your code above this line
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});



//Functional Programming: Use the filter Method to Extract Data from an Array
/* Another useful array function is Array.prototype.filter(), or simply filter().

filter calls a function on each element of an array and returns a new array containing
only the elements for which that function returns true. In other words, it filters 
the array, based on the function passed to it. Like map, it does this without needing
to modify the original array.

The callback function accepts three arguments. The first argument is the current 
element being processed. The second is the index of that element and the third is 
the array upon which the filter method was called.

See below for an example using the filter method on the users array to return a 
new array containing only the users under the age of 30. For simplicity, the example
only uses the first argument of the callback.   */

const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersUnder30 = users.filter(user => user.age < 30);
console.log(usersUnder30); // [ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ]

/* The watchList array holds objects with information on several movies. Use map on
watchList to assign a new array of objects with only title and rating keys to the 
ratings variable. The code in the editor currently uses a for loop to do this, so
you should replace the loop functionality with your map expression.  */

// the global variable
var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
    }
  ];
  
// Add your code below this line - done
var list = watchList.filter(item => item["imdbRating"] >= 8.0)
var filteredList = list.map(item => ({title: item["Title"], rating: item["imdbRating"]}));
// Add your code above this line

console.log(filteredList);
/* [ { title: 'Inception', rating: '8.8' },
{ title: 'Interstellar', rating: '8.6' },
{ title: 'The Dark Knight', rating: '9.0' },
{ title: 'Batman Begins', rating: '8.3' } ]  */




// Functional Programming: Implement the filter Method on a Prototype
/* It would teach us a lot about the filter method if we try to implement a version
of it that behaves exactly like Array.prototype.filter(). It can use either a for 
loop or Array.prototype.forEach().

Note: A pure function is allowed to alter local variables defined within its scope, 
although, it's preferable to avoid that as well.

Write your own Array.prototype.myFilter(), which should behave exactly like 
Array.prototype.filter(). You may use a for loop or the Array.prototype.forEach() method. */

// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];
  // Add your code below this line
  this.forEach(a => {     //using ES6 syntax  function (a)  is just   a
    if (callback(a) == true) {
      newArray.push(a);
    }
  });
  // Add your code above this line
  return newArray;
};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});

//or another solution using for loop

// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];
  // Add your code below this line
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i]) === true) {
      newArray.push(this[i]);
    }
  }
  // Add your code above this line
  return newArray;
};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});



//Functional Programming: Return Part of an Array Using the slice Method
/* The slice method returns a copy of certain elements of an array. It can take
two arguments, the first gives the index of where to begin the slice, the 
second is the index for where to end the slice (and it's non-inclusive). If the 
arguments are not provided, the default is to start at the beginning of the array
through the end, which is an easy way to make a copy of the entire array. The slice
method does not mutate the original array, but returns a new one.

Here's an example:  */

var arr = ["Cat", "Dog", "Tiger", "Zebra"];
var newArray = arr.slice(1, 3);
// Sets newArray to ["Dog", "Tiger"]

/*Use the slice method in the sliceArray function to return part of the anim array
given the provided beginSlice and endSlice indices. The function should return an array. */

function sliceArray(anim, beginSlice, endSlice) {
    // Add your code below this line  - done
    let arr = [...anim];
    return arr.slice(beginSlice, endSlice);
    // Add your code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
console.log(sliceArray(inputAnim, 1, 3)); //prints  [ 'Dog', 'Tiger' ]
