/* Module overview
--
Introduction to the Quality Assurance with Chai Challenges

Learn How JavaScript Assertions Work

Test if a Variable or Function is Defined

Use Assert.isOK and Assert.isNotOK

Test for Truthiness

Use the Double Equals to Assert Equality

Use the Triple Equals to Assert Strict Equality

Assert Deep Equality with .deepEqual and .notDeepEqual

Compare the Properties of Two Elements

Test if One Value is Below or At Least as Large as Another

Test if a Value Falls within a Specific Range

Test if a Value is an Array

Test if an Array Contains an Item

Test if a Value is a String

Test if a String Contains a Substring

Use Regular Expressions to Test a String

Test if an Object has a Property

Test if a Value is of a Specific Data Structure Type

Test if an Object is an Instance of a Constructor

Run Functional Tests on API Endpoints using Chai-HTTP

Run Functional Tests on API Endpoints using Chai-HTTP II

Run Functional Tests on an API Response using Chai-HTTP III - PUT method

Run Functional Tests on an API Response using Chai-HTTP IV - PUT method

Run Functional Tests using a Headless Browser

Run Functional Tests using a Headless Browser II

Simulate Actions Using a Headless Browser

-- */

/* 
Introduction to Quality Assurance with Chai Challenges
As your programs become more complex, you need to test them often to make sure any new code you add doesn't break the program's original functionality. Chai is a JavaScript testing library that helps you check that your program still behaves the way you expect it to after you make changes. Using Chai, you can write tests that describe your program's requirements and see if your program meets them.

Working on these challenges will involve you writing your code on Repl.it on our starter project. After completing each challenge you can copy your public Repl.it URL (to the homepage of your app) into the challenge screen to test it! Optionally you may choose to write your project on another platform but it must be publicly visible for our testing. */

/* Quality Assurance and Testing with Chai - Learn How JavaScript Assertions Work
As a reminder, this project is being built upon the following starter project on Repl.it, or cloned from GitHub.

Within tests/1_unit-tests.js under the test labelled #1 in the Basic Assertions suite, change each assert to either assert.isNull or assert.isNotNull to make the test pass (should evaluate to true). Do not alter the arguments passed to the asserts. 

solution: */
// #1
test('#isNull, #isNotNull', function () {
    assert.isNull(null, 'this is an optional error description - e.g. null is null');
    assert.isNotNull(1, '1 is not null');
    });

/* Quality Assurance and Testing with Chai - Test if a Variable or Function is Defined

Within tests/1_unit-tests.js under the test labelled #2 in the Basic Assertions suite, change each assert to either assert.isDefined() or assert.isUndefined() to make the test pass (should evaluate to true). Do not alter the arguments passed to the asserts.
 
solution: */
// #2
test('#isDefined, #isUndefined', function () {
    assert.isDefined(null, 'null is not undefined');
    assert.isUndefined(undefined, 'undefined IS undefined');
    assert.isDefined('hello', 'a string is not undefined');
    });

/* Quality Assurance and Testing with Chai - Use Assert.isOK and Assert.isNotOK

isOk() will test for a truthy value, and isNotOk() will test for a falsy value.

To learn more about truthy and falsy values, try our Falsy Bouncer challenge. 
Remove all falsy values from an array.
***Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.***
*/
function bouncer(arr) {
  let newArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) newArray.push(arr[i]);
  }
  return newArray;
}
//or
function bouncer(arr) {
    return arr.filter(Boolean);
  }
/*
Within tests/1_unit-tests.js under the test labelled #3 in the Basic Assertions suite, change each assert to either assert.isOk() or assert.isNotOk() to make the test pass (should evaluate to true). Do not alter the arguments passed to the asserts.

solution: */
// #3
test('#isOk, #isNotOk', function () {
    assert.isNotOk(null, 'null is falsey');
    assert.isOk("I'm truthy", 'a string is truthy');
    assert.isOk(true, 'true is truthy');
    });

/* Quality Assurance and Testing with Chai - Test for Truthiness

isTrue() will test for the boolean value true and isNotTrue() will pass when given anything but the boolean value of true.
 */

assert.isTrue(true, 'this will pass with the boolean value true');
assert.isTrue('true', 'this will NOT pass with the string value 'true');
assert.isTrue(1, 'this will NOT pass with the number value 1');

/* isFalse() and isNotFalse() also exist, and behave similarly to their true counterparts except they look for the boolean value of false.

Within tests/1_unit-tests.js under the test labelled #4 in the Basic Assertions suite, change each assert to either assert.isTrue or assert.isNotTrue to make the test pass (should evaluate to true). Do not alter the arguments passed to the asserts. */

// #4
test('#isTrue, #isNotTrue', function () {
    assert.isTrue(true, 'true is true');
    assert.isTrue(!!'double negation', 'double negation of a truthy is true');
    assert.isNotTrue({ value: 'truthy' }, 'A truthy object is NOT TRUE (neither is false...)');
    });