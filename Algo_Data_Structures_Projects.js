// Introduction to the JavaScript Algorithms and Data Structures Projects
/* Time to put your new JavaScript skills to work! These challenges will be similar 
to the algorithm scripting challenges but more difficult. This will allow you to 
prove how much you have learned.

In this section you will create the following small JavaScript programs:

Palindrome Checker
Roman Numeral Converter
Caesars Cipher
Telephone Number Validator
Cash Register */


//JavaScript Algorithms and Data Structures Projects: Palindrome Checker
/* Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward,
ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols)
and turn everything into the same case (lower or upper case) in order to check for
palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR"
among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and 
"2_A3*3#A2". */

/* 
palindrome("eye") should return a boolean.
palindrome("eye") should return true.
palindrome("_eye") should return true.
palindrome("race car") should return true.
palindrome("not a palindrome") should return false.
palindrome("A man, a plan, a canal. Panama") should return true.
palindrome("never odd or even") should return true.
palindrome("nope") should return false.
palindrome("almostomla") should return false.
palindrome("My age is 0, 0 si ega ym.") should return true.
palindrome("1 eye for of 1 eye.") should return false.
palindrome("0_0 (: /-\ :) 0-0") should return true.
palindrome("five|\_/|four") should return false. */


function palindrome(str) {
    //removes spaces, special characters, and underscores throughout the str, then convert str to lower case
    var lowerStr = str.replace(/[\s\W_]/g, "").toLowerCase();  
    console.log(lowerStr);  //checking that the str follows the regex and is lower case
    var tailChar = lowerStr.length - 1;
    var midChar = Math.round(lowerStr.length/2) - 1;
    console.log(midChar);
    for (let i = 0; i < lowerStr.length; i++) { //moves front char closer to the middle by one
      if (lowerStr[i] == lowerStr[tailChar]) {  //checks the front char vs tail char;
        if (tailChar == midChar) {  //if the tail char is already at the middle, return true
          return true;
        }
        tailChar--; //moves tail char closer to the middle by one
        continue; //skips the else statement below when the first if statement is true
      }
      else return false; //if the the front char != tail char, return false
    }
  }
  //eye   length = 3
  //012  <-- str position  ; midChar would be 1
  palindrome("eye"); // return true
  



// JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
/* Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case. */

/* convertToRoman(2) should return "II".
convertToRoman(3) should return "III".
convertToRoman(4) should return "IV".
convertToRoman(5) should return "V".
convertToRoman(9) should return "IX".
convertToRoman(12) should return "XII".
convertToRoman(16) should return "XVI".
convertToRoman(29) should return "XXIX".
convertToRoman(44) should return "XLIV".
convertToRoman(45) should return "XLV"
convertToRoman(68) should return "LXVIII"
convertToRoman(83) should return "LXXXIII"
convertToRoman(97) should return "XCVII"
convertToRoman(99) should return "XCIX"
convertToRoman(400) should return "CD"
convertToRoman(500) should return "D"
convertToRoman(501) should return "DI"
convertToRoman(649) should return "DCXLIX"
convertToRoman(798) should return "DCCXCVIII"
convertToRoman(891) should return "DCCCXCI"
convertToRoman(1000) should return "M"
convertToRoman(1004) should return "MIV"
convertToRoman(1006) should return "MVI"
convertToRoman(1023) should return "MXXIII"
convertToRoman(2014) should return "MMXIV"
convertToRoman(3999) should return "MMMCMXCIX" */

function convertToRoman(num) {
    var romanSymbols = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }
    var romanNum = "", i;
    for (i in romanSymbols) {
        while (num >= romanSymbols[i]) { //as long as num >= value of property i
            console.log(romanNum += i);  //roman numeric becomes current str + current property
            console.log(num -= romanSymbols[i]); //num becomes current num - property value
        }
    }
    return romanNum;
}

console.log(convertToRoman(36));
/* output:
X
26
XX
16
XXX
6
XXXV
1
XXXVI
0 
XXXVI*/



// JavaScript Algorithms and Data Structures Projects: Caesars Cipher
/* One of the simplest and most widely known ciphers is a Caesar cipher, also known 
as a shift cipher. In a shift cipher the meanings of the letters are shifted by some
set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted
by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character 
(i.e. spaces, punctuation), but do pass them on.
 */
//https://en.wikipedia.org/wiki/List_of_Unicode_characters
function rot13(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
      let char13 = str[i].charCodeAt(); //getting the unicode at each position
      if (char13 > 64 && char13 < 91) {   //preserves punctuations and spaces
      //unicode 65 - 90 inclusively is A - Z
      char13 += 13; //if unicode is A-Z, move unicode by 13 positions
      }
      if (char13 > 90) { //if new unicode is over 90, move it to letter A [unicode 65], and store it in newStr
        let temp = 64 + (char13 - 90);
        newStr += String.fromCharCode(temp); 
      }
      if (char13 <= 90) { //if new unicode is within 90, store it in newStr
        newStr += String.fromCharCode(char13);
      }
    }
    return newStr;
  }
console.log(rot13("SERR PBQR PNZC")); //FREE CODE CAMP
  