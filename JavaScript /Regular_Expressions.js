// Contents are taken from freecodecamp Introduction to the ES6 Challenges tutorials. 
//This is only for my learning purpose.

/*Introduction to the Regular Expression Challenges
Regular expressions are special strings that represent a search pattern. Also known 
as "regex" or "regexp", they help programmers match, search, and replace text.
 Regular expressions can appear cryptic because a few characters have special meaning.
  The goal is to combine the symbols and text into a pattern that matches what you want,
   but only what you want. This section will cover the characters, a few shortcuts, 
   and the common uses for writing regular expressions. */


//Regular Expressions: Using the Test Method
/* Regular expressions are used in programming languages to match parts of strings. 
You create patterns to help you do that matching.

If you want to find the word "the" in the string "The dog chased the cat", you could use
 the following regular expression: /the/. Notice that quote marks are not required within 
 the regular expression.

JavaScript has multiple ways to use regexes. 
One way to test a regex is using the .test() method. 
The .test() method takes the regex, applies it to a string (which is placed 
inside the parentheses), and returns true or false if your pattern finds something or not.*/

let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);  // Returns true

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line


//Regular Expressions: Match Literal Strings
//Here's another example searching for a literal match of the string "Kevin":

let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr); // Returns true
/* Any other forms of "Kevin" will not match. For example, the regex /Kevin/ will
not match "kevin" or "KEVIN".  */

let wrongRegex = /kevin/;
wrongRegex.test(testStr);  // Returns false


//Regular Expressions: Match a Literal String with Different Possibilities
/*Using regexes like /coding/, you can look for the pattern "coding" in another string.

This is powerful to search single strings, but it's limited to only one pattern. 
You can search for multiple patterns using the alternation or OR operator: |.

This operator matches patterns either before or after it. For example, if you wanted 
to match "yes" or "no", the regex you want is /yes|no/.

You can also search for more than just two patterns. You can do this by adding more
 patterns with more OR operators separating them, like /yes|no|maybe/.  */

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; 
let result = petRegex.test(petString); //true


//Regular Expressions: Ignore Case While Matching
/*Case (or sometimes letter case) is the difference between uppercase letters and 
lowercase letters. You can match both cases using what is called a flag. There are 
other flags but here you'll focus on the flag that ignores case - the i flag. You
can use it by appending it to the regex. An example of using this flag is /ignorecase/i.
This regex can match the strings "ignorecase", "igNoreCase", and "IgnoreCase". */

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // ignore case flag
let result = fccRegex.test(myString);


//Regular Expressions: Extract Matches
/* So far, you have only been checking if a pattern exists or not within a string.
 You can also extract the actual matches you found with the .match() method.

To use the .match() method, apply the method on a string and pass in the regex 
inside the parentheses. Here's an example:  */

"Hello, World!".match(/Hello/); // Returns ["Hello"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);  // Returns ["expressions"]

//Another example
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result = extractStr.match(codingRegex); // Returns ["coding"]



//Regular Expressions: Find More Than the First Match
//So far, you have only been able to extract or search a pattern once.

let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex); // Returns ["Repeat"]

//To search or extract a pattern more than once, you can use the g flag.
let repeatRegex = /Repeat/g;  //global case flag
testStr.match(repeatRegex); // Returns ["Repeat", "Repeat", "Repeat"]


let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig; // extract both "Twinkle" words from the string twinkleStar.
let result = twinkleStar.match(starRegex); // Returns ["Twinkle", "twinkle"]



//Regular Expressions: Match Anything with Wildcard Period
/* Sometimes you won't (or don't need to) know the exact characters in your patterns.
 Thinking of all words that match, say, a misspelling would take a long time.
  Luckily, you can save time using the wildcard character: .

The wildcard character . will match any one character. The wildcard is also called 
dot and period. You can use the wildcard character just like any other character in
 the regex. For example, if you wanted to match "hug", "huh", "hut", and "hum", you
  can use the regex /hu./ to match all four words. */

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr); // Returns true
huRegex.test(hugStr); // Returns true

//Another example
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; //   matches the strings "run", "sun", "fun", "pun", "nun", and "bun".
let result = unRegex.test(exampleStr);



//Regular Expressions: Match Single Character with Multiple Possibilities
/* You learned how to match literal patterns (/literal/) and wildcard character (/./). 
Those are the extremes of regular expressions, where one finds exact matches and the 
other matches everything. There are options that are a balance between the two extremes.

You can search for a literal pattern with some flexibility with character classes. 
Character classes allow you to define a group of characters you wish to match by placing 
them inside square ([ and ]) brackets.

For example, you want to match "bag", "big", and "bug" but not "bog". You can create 
the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match
 the characters "a", "i", or "u".    */
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex); // Returns ["big"]
bagStr.match(bgRegex); // Returns ["bag"]
bugStr.match(bgRegex); // Returns ["bug"]
bogStr.match(bgRegex); // Returns null

//Another example
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; // ignore and global case flags
let result = quoteSample.match(vowelRegex); //  find all the vowels in the string quoteSample.




//Regular Expressions: Match Letters of the Alphabet
/* You saw how you can use character sets to specify a group of characters to match, 
but that's a lot of typing when you need to match a large range of characters (for 
example, every letter in the alphabet). Fortunately, there is a built-in feature that
 makes this short and simple.

Inside a character set, you can define a range of characters to match using a hyphen 
character: -.

For example, to match lowercase letters a through e you would use [a-e]. */

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;  //hyphen character define a range of characters to match
catStr.match(bgRegex); // Returns ["cat"]
batStr.match(bgRegex); // Returns ["bat"]
matStr.match(bgRegex); // Returns null


let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // ignore and global case flags
let result = quoteSample.match(alphabetRegex); // Match all the letters in the string quoteSample.



//Regular Expressions: Match Numbers and Letters of the Alphabet
/* Using the hyphen (-) to match a range of characters is not limited to letters. 
It also works to match a range of numbers.

For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.

Also, it is possible to combine a range of letters and numbers in a single character set. */

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;  // matches all letters and numbers in jennyStr
jennyStr.match(myRegex);

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // matches a range of letters between h and s, and a range of numbers between 2 and 6.
let result = quoteSample.match(myRegex); 



//Regular Expressions: Match Single Characters Not Specified
/* So far, you have created a set of characters that you want to match, but you could
 also create a set of characters that you do not want to match. These types of character
  sets are called negated character sets.

To create a negated character set, you place a caret character (^) after the opening 
bracket and before the characters you do not want to match.

For example, /[^aeiou]/gi matches all characters that are not a vowel. Note that
 characters like ., !, [, @, / and white space are matched - the negated vowel 
 character set only excludes the vowel characters.  */

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/ig; // a single regex that matches all characters that are not a number or a vowel.
let result = quoteSample.match(myRegex);


//Regular Expressions: Match Characters that Occur One or More Times
/*Sometimes, you need to match a character (or group of characters) that appears one
 or more times in a row. This means it occurs at least once, and may be repeated.

You can use the + character to check if that is the case. Remember, the character or
 pattern has to be present consecutively. That is, the character has to repeat one after
  the other.

For example, /a+/g would find one match in "abc" and return ["a"]. Because of the +, 
it would also find a single match in "aabc" and return ["aa"].

If it were instead checking the string "abab", it would find two matches and return 
["a", "a"] because the a characters are not in a row - there is a b between them.
 Finally, since there is no "a" in the string "bcd", it wouldn't find a match.  */

let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // find matches when the letter s occurs one or more times
let result = difficultSpelling.match(myRegex);


//Regular Expressions: Match Characters that Occur Zero or More Times
/* The last challenge used the plus + sign to look for characters that occur one or 
more times. There's also an option that matches characters that occur zero or more times.

The character to do this is the asterisk or star: *.    */

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null

//Another example
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!"
let chewieRegex = /Aa*/; // match an uppercase "A" character immediately followed by zero or more lowercase "a" characters
let result = chewieQuote.match(chewieRegex); //Returns Aaaaaaaaaaaaaaaa"



//Regular Expressions: Find Characters with Lazy Matching
/* In regular expressions, a greedy match finds the longest possible part of a string
 that fits the regex pattern and returns it as a match. The alternative is called a 
lazy match, which finds the smallest possible part of the string that satisfies the 
regex pattern.

You can apply the regex /t[a-z]*i/ to the string "titanic". This regex is basically a
 pattern that starts with t, ends with i, and has some letters in between.

Regular expressions are by default greedy, so the match would return ["titani"]. 
It finds the largest sub-string possible to fit the pattern.

However, you can use the ? character to change it to lazy matching. "titanic" matched 
against the adjusted regex of /t[a-z]*?i/ returns ["ti"].

Note: Parsing HTML with regular expressions should be avoided, but pattern matching
 an HTML string with regular expressions is completely fine.  */

 let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>"
let result = text.match(myRegex);


//Regular Expressions: Find One or More Criminals in a Hunt
/*Time to pause and test your new regex writing skills. 
A group of criminals escaped from jail and ran away, but you don't know how many.
 However, you do know that they stay close together when they are around other people. 
 You are responsible for finding all of the criminals at once.

Here's an example to review how to do this:

The regex /z+/ matches the letter z when it appears one or more times in a row.
 It would find matches in all of the following strings:  */

"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"

//But it does not find matches in the following strings since there are no letter z characters:
""
"ABC"
"abcabc"

// example crowd gathering
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /C+/;

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);  //Returns ["CCC"]



//Regular Expressions: Match Beginning String Patterns
/* In an earlier challenge, you used the caret character (^) inside a character set 
to create a negated character set in the form [^thingsThatWillNotBeMatched]. 
Outside of a character set, the caret is used to search for patterns at the beginning
 of strings.  */

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/; //caret is used to search for patterns at the beginning of strings.
firstRegex.test(firstString);  // Returns true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);  // Returns false

//Another example
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; //find "Cal" only in the beginning of the string
let result = calRegex.test(rickyAndCal);



//Regular Expressions: Match Ending String Patterns
// You can search the end of strings using the dollar sign character $ at the end of the regex.

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding); // Returns true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding); // Returns false

//Another example
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; 
let result = lastRegex.test(caboose);  // true


//Regular Expressions: Match All Letters and Numbers
/*Using character classes, you were able to search for all letters of the alphabet
 with [a-z]. This kind of character class is common enough that there is a shortcut
  for it, although it includes a few extra characters as well.

The closest character class in JavaScript to match the alphabet is \w. This shortcut 
is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters 
plus numbers. Note, this character class also includes the underscore character (_).
*/
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); // Returns true
shortHand.test(numbers); // Returns true
longHand.test(varNames); // Returns true
shortHand.test(varNames); // Returns true
//These shortcut character classes are also known as shorthand character classes.

//Another example
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\w/g; 
let result = quoteSample.match(nonAlphabetRegex).length; //count the number of alphanumeric characters in various quotes and strings.


//Regular Expressions: Match Everything But Letters and Numbers
/* You've learned that you can use a shortcut to match alphanumerics [A-Za-z0-9_] using \w.
A natural pattern you might want to search for is the opposite of alphanumerics.

You can search for the opposite of the \w with \W. Note, the opposite pattern uses a
 capital letter. This shortcut is the same as [^A-Za-z0-9_].  */

let shortHand = /\W/; //searches non-alphanumerics 
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand); // Returns ["%"]
sentence.match(shortHand); // Returns ["!"]

//Another example
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
let result = quoteSample.match(nonAlphabetRegex).length;  // count the number of non-alphanumeric characters in various quotes and strings.



//Regular Expressions: Match All Non-Numbers
/* The last challenge showed how to search for digits using the shortcut \d with a
 lowercase d. You can also search for non-digits using a similar shortcut that uses 
 an uppercase D instead.

The shortcut to look for non-digit characters is \D. This is equal to the character 
class [^0-9], which looks for a single character that is not a number between zero and nine.
*/

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // looks for characters that are not a number between zero and nine.
let result = movieName.match(noNumRegex).length; //count the number of non-digits


//Regular Expressions: Match All Numbers
/*You've learned shortcuts for common string patterns like alphanumerics. 
Another common pattern is looking for just digits or numbers.

The shortcut to look for digit characters is \d, with a lowercase d. This is equal
 to the character class [0-9], which looks for a single character of any number 
 between zero and nine. */

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // looks for characters of any number between zero and nine
let result = movieName.match(numRegex).length; //count how many digits are in movie titles.


//*Regular Expressions: Restrict Possible Usernames
/*Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

You need to check all the usernames in a database. Here are some simple rules that 
users have to follow when creating their username.

1) Usernames can only use alpha-numeric characters.

2) The only numbers in the username have to be at the end. 
There can be zero or more of them at the end.

3) Username letters can be lowercase and uppercase.

4) Usernames have to be at least two characters long. 
A two-character username can only use alphabet letters as characters. */

let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i;
let result = userCheck.test(username);
/*explanation of solution
^ - start of input
[a-z] - first character is a letter
[0-9][0-9]+ - ends with two or more numbers
| - or
[a-z]+ - has one or more letters next
\d* - and ends with zero or more numbers
$ - end of input
i - ignore case of input  */


//Regular Expressions: Match Whitespace
/* The challenges so far have covered matching letters of the alphabet and numbers. 
You can also match the whitespace or spaces between letters.

You can search for whitespace using \s, which is a lowercase s. This pattern not 
only matches whitespace, but also carriage return, tab, form feed, and new line 
characters. You can think of it as similar to the character class [ \r\t\f\n\v].   */

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex); // Returns [" ", " "]

//Another example
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // search for multiple whitespace characters in a string
let result = sample.match(countWhiteSpace);


//Regular Expressions: Match Non-Whitespace Characters
/* You learned about searching for whitespace using \s, with a lowercase s. 
You can also search for everything except whitespace.

Search for non-whitespace using \S, which is an uppercase s. This pattern 
will not match whitespace, carriage return, tab, form feed, and new line characters.
 You can think of it being similar to the character class [^ \r\t\f\n\v]. */

let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length; // Returns 32

//Another example
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; //  look for multiple non-whitespace characters in a string.
let result = sample.match(countNonWhiteSpace);


//Regular Expressions: Specify Upper and Lower Number of Matches
/* Recall that you use the plus sign + to look for one or more characters and 
the asterisk * to look for zero or more characters. These are convenient but 
sometimes you want to match a certain range of patterns.

You can specify the lower and upper number of patterns with quantity specifiers. 
Quantity specifiers are used with curly brackets ({ and }). You put two numbers
 between the curly brackets - for the lower and upper number of patterns.

For example, to match only the letter a appearing between 3 and 5 times in the
 string "ah", your regex would be /a{3,5}h/. */

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;  //match only the letter a appearing between 3 and 5 times in the string
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false

//Another example
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // match the entire phrase "Oh no" only when it has 3 to 6 letter h's.
let result = ohRegex.test(ohStr);


//Regular Expressions: Specify Only the Lower Number of Matches
/* You can specify the lower and upper number of patterns with quantity specifiers 
using curly brackets. Sometimes you only want to specify the lower number of patterns
 with no upper limit.

To only specify the lower number of patterns, keep the first number followed by a comma.

For example, to match only the string "hah" with the letter a appearing at least 3 times, 
your regex would be /ha{3,}h/. */

let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false
multipleA.test(A100); // Returns true

//Another example
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; //  match the word "Hazzah" only when it has four or more letter z's.
let result = haRegex.test(haStr);



//Regular Expressions: Specify Exact Number of Matches
/* You can specify the lower and upper number of patterns with quantity specifiers 
using curly brackets. Sometimes you only want a specific number of matches.

To specify a certain number of patterns, just have that one number between the 
curly brackets.

For example, to match only the word "hah" with the letter a 3 times, your regex 
would be /ha{3}h/.  */

let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4); // Returns false
multipleHA.test(A3); // Returns true
multipleHA.test(A100); // Returns false

//Another example
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; //  match the word "Timber" only when it has four letter m's.
let result = timRegex.test(timStr);



//Regular Expressions: Check for All or None
/* Sometimes the patterns you want to search for may have parts of it that may or
 may not exist. However, it may be important to check for them nonetheless.

You can specify the possible existence of an element with a question mark, ?. 
This checks for zero or one of the preceding element. You can think of this symbol
 as saying the previous element is optional.

For example, there are slight differences in American and British English and you 
can use the question mark to match both spellings.  */

let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american); // Returns true
rainbowRegex.test(british); // Returns true

//Another example
let favWord = "favorite";
let favRegex = /favou?rite/; // match both the American English (favorite) and the British English (favourite) version of the word.
let result = favRegex.test(favWord);


//Regular Expressions: Positive and Negative Lookahead
/*Lookaheads are patterns that tell JavaScript to look-ahead in your string to 
check for patterns further along. This can be useful when you want to search for 
multiple patterns over the same string.

There are two kinds of lookaheads: positive lookahead and negative lookahead.

A positive lookahead will look to make sure the element in the search pattern is 
there, but won't actually match it. A positive lookahead is used as (?=...) 
where the ... is the required part that is not matched.

On the other hand, a negative lookahead will look to make sure the element in the
 search pattern is not there. A negative lookahead is used as (?!...) where the ... is
  the pattern that you do not want to be there. The rest of the pattern is returned if
   the negative lookahead part is not present.

Lookaheads are a bit confusing but some examples will help.  */

let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex); // Returns ["q"]
noquit.match(qRegex); // Returns ["q"]

/* A more practical use of lookaheads is to check two or more patterns in one string.
 Here is a (naively) simple password checker that looks for between 3 and 6 characters
  and at least one number: */

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); // Returns true


//Another example
let sampleWord = "astronaut";
let pwRegex = /^(?=\w{6,})(?=\D+\d\d)/; // or /^(?=\w{6,})(?=\D+\d{2})/
let result = pwRegex.test(sampleWord);
//Explanation of solution
//^(?=\w{6,}) match passwords that are greater than 5 characters long,
//(?=\D+\d\d) match passwords that do not begin with numbers, and have two consecutive digits.



//Regular Expressions: Check For Mixed Grouping of Characters
/* Sometimes we want to check for groups of characters using a Regular Expression 
and to achieve that we use parentheses ().

If you want to find either Penguin or Pumpkin in a string, you can use the following
 Regular Expression: /P(engu|umpk)in/g

Then check whether the desired string groups are in the test string by using the 
test() method.  */

let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/g;
testRegex.test(testStr); // Returns true

//Another example
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/; 
let result = myRegex.test(myString);
 //checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case sensitive 
 //manner and it should make concessions for middle names.


//Regular Expressions: Reuse Patterns Using Capture Groups
/*Some patterns you search for will occur multiple times in a string. It is wasteful 
to manually repeat that regex. There is a better way to specify when you have multiple
 repeat substrings in your string.

You can search for repeat substrings using capture groups. Parentheses, ( and ), are 
used to find repeat substrings. You put the regex of the pattern that will repeat in
 between the parentheses.

To specify where that repeat string will appear, you use a backslash (\) and then a number.
This number starts at 1 and increases with each additional capture group you use. 
An example would be \1 to match the first group.

The example below matches any word that occurs twice separated by a space:  */

let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]
//Using the .match() method on a string will return an array with the string it matches, along with its capture group.

//Example

let testString = "test test test";
let reRegex = /(test)(\s)\1\2\1/;
let result = reRegex.test(testString); //result will match whole test test test because:
//  \1 repeats (test)   \2 repeats (\s)

//Example
let testString = "test test test test test test";
let reRegex = /(test)(\s)\1\2\1/g;
let result = reRegex.test(testString);
// because we used \g, our Regex doesn’t return after first full match (test test test) and matched all repetitions.

//Another example
let repeatNum = "42 42 42";
let reRegex = /^(\d+)(\s)\1\2\1$/; // match numbers that are repeated only three times in a string, each separated by a space.
let result = reRegex.test(repeatNum);


//Regular Expressions: Use Capture Groups to Search and Replace
/*Searching is useful. However, you can make searching even more powerful when it
 also changes (or replaces) the text you match.

You can search and replace text in a string using .replace() on a string. 
The inputs for .replace() is first the regex pattern you want to search for. 
The second parameter is the string to replace the match or a function to do something.  */

let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue"); // Returns "The sky is blue."

//You can also access capture groups in the replacement string with dollar signs ($).
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');  // Returns "Camp Code"

//Another example
let huhText = "This sandwich is good.";
let fixRegex = /good/; // search for the string "good"
let replaceText = "okey-dokey"; //the string to replace the match
let result = huhText.replace(fixRegex, replaceText);


//Regular Expressions: Remove Whitespace from Start and End
/*Sometimes whitespace characters around strings are not wanted but are there. 
Typical processing of strings is to remove the whitespace at the start and end of it.

Write a regex and use the appropriate string methods to remove whitespace at the 
beginning and end of strings.

Note: The .trim() method would work here, but you'll need to complete this challenge 
using regular expressions.  */

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // searches whitespace at the beginning and end of strings.
let result = hello.replace(wsRegex, ""); // returns "Hello, World"