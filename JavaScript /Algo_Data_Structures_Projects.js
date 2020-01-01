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





//JavaScript Algorithms and Data Structures Projects: Telephone Number Validator
/* Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the 
format of a valid US number. The following are examples of valid formats for US 
numbers (refer to the tests below for other variants):
 */
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
/* 
For this challenge you will be presented with a string such as 800-692-7753 
or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based 
on any combination of the formats provided above. The area code is required. If the 
country code is provided, you must confirm that the country code is 1. Return true if 
the string is a valid US phone number; otherwise return false. */

/* telephoneCheck("555-555-5555") should return a boolean.
telephoneCheck("1 555-555-5555") should return true.
telephoneCheck("1 (555) 555-5555") should return true.
telephoneCheck("5555555555") should return true.
telephoneCheck("555-555-5555") should return true.
telephoneCheck("(555)555-5555") should return true.
telephoneCheck("1(555)555-5555") should return true.
telephoneCheck("555-5555") should return false.
telephoneCheck("5555555") should return false.
telephoneCheck("1 555)555-5555") should return false.
telephoneCheck("1 555 555 5555") should return true.
telephoneCheck("1 456 789 4444") should return true.
telephoneCheck("123**&!!asdf#") should return false.
telephoneCheck("55555555") should return false.
telephoneCheck("(6054756961)") should return false
telephoneCheck("2 (757) 622-7382") should return false.
telephoneCheck("0 (757) 622-7382") should return false.
telephoneCheck("-1 (757) 622-7382") should return false
telephoneCheck("2 757 622-7382") should return false.
telephoneCheck("10 (757) 622-7382") should return false.
telephoneCheck("27576227382") should return false.
telephoneCheck("(275)76227382") should return false.
telephoneCheck("2(757)6227382") should return false.
telephoneCheck("2(757)622-7382") should return false.
telephoneCheck("555)-555-5555") should return false.
telephoneCheck("(555-555-5555") should return false.
telephoneCheck("(555)5(55?)-5555") should return false. */

function telephoneCheck(str) {
    var regex = /^[1]?[\s]?[(]?[\d]{3}[\s]?[)]?[-\s]?[\d]{3}[-\s]?[\d]{4}$/;
/* /^[1]?[\s]?[(]?[\d]{3}[\s]?[)]?[-\s]?[\d]{3}[-\s]?[\d]{4}$/
regex: begins with zero or one of digit 1, zero or one of space, zero or one of open parenthesis,
three consecutive digits from 0-9, zero or one of space, zero or one of close parenthesis, 
zero or one of dash or space, three consecutive digits from 0-9, zero or one of dash
or space, then ending in four consecutive digits from 0-9.
*/

    var ans = regex.test(str); //validates phone number with country code 1, but not full parentheses
    var regexparen1 = /^[1]?[\s]?[(]{1}[\d]{3}[)]{1}/; //checks if numbers have full parentheses
    var regexparen0 = /^[1]?[\s]?[\d]{3}[-\s]*[\d]{3}/; //checks if numbers do not have any parentheses

    if ((ans && regexparen1.test(str)) || (ans &&regexparen0.test(str))) {
        //if validated numbers have full or zero parentheses, return true
      return true;
    }
    else return false;
}

console.log(telephoneCheck("1 555)555-5555")); //returns false





//JavaScript Algorithms and Data Structures Projects: Cash Register
/* Design a cash register drawer function checkCashRegister() that accepts purchase 
price as the first argument (price), payment as the second argument (cash), and 
cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key 
and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the 
change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key
change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and
bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (DOLLAR)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED) */

function checkCashRegister(price, cash, cid) {
    var changeReturn = cash - price;  //change amount to return to customer
    
    var cidTotal = 0;
    for (let i = 0; i < cid.length; i++) {
      cidTotal += cid[i][1];
      }
  
    if (changeReturn == cidTotal) {   //if change amount to return is the same as "cash in drawer"  - return following statement
      return {status: "CLOSED", change: cid};
    }
  
    var changeArr = [];
    //create a new array for comparison and calculation (see following for-if-while loop)
    var cashRegister = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]];
  
    var count = 0; //to keep track of # of cash type  i.e. 4 ten dollar bills
    var total = 0; //to keep track of total in cash type  i.e. 40 dollars
  
    //to create a new array of cash type and # of cash type to return to customer
    for (let i = cid.length - 1; i >= 0; i--) { //to loop through new array of cash type
      if (changeReturn >= cashRegister[i][1] && cid[i][1] > 0 && changeReturn > 0) {
        //if change amount to return is greater than cash type (i.e. one hundred), and "cash in drawer" and change amount to return are greater than 0
        while (changeReturn >= cashRegister[i][1] && cid[i][1] > 0 && changeReturn > 0) {
        //loops through while condition is met, keeping track of change amount to return and "cash in drawer"
          cid[i][1] -= cashRegister[i][1]; 
          changeReturn -= cashRegister[i][1];

          cid[i][1] = cid[i][1].toFixed(2); //fix numeric number to 2 decimal point; to correct floating point error in base 2 computing
          changeReturn = changeReturn.toFixed(2); //fix numeric number to 2 decimal point
          count++; //to keep track of # of cash type
        }
        total = count * cashRegister[i][1]; //to keep track of total in cash type
        changeArr.push([cashRegister[i][0], total]); //push an array of cash type and total in cash type
  
        total = 0; //reset tracking of total in cash type
        count = 0; //reset tracking of # of cash type
      }
    }
  
    
    if (changeReturn > 0) {  //if change amount to return is greater than cash in drawer, return following statement
      return {status: "INSUFFICIENT_FUNDS", change: []};
      }
    else return {status: "OPEN", change: changeArr}; // or else return this statement
  
  }
  
  // Example cash-in-drawer array:
  // [["PENNY", 1.01],
  // ["NICKEL", 2.05],
  // ["DIME", 3.1],
  // ["QUARTER", 4.25],
  // ["ONE", 90],
  // ["FIVE", 55],
  // ["TEN", 20],
  // ["TWENTY", 60],
  // ["ONE HUNDRED", 100]]
  
  checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);