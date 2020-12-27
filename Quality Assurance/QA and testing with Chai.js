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

remember to add chai in package.json  https://www.npmjs.com/package/chai
chai assert documentation: https://www.chaijs.com/api/assert/
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

/* 
Quality Assurance and Testing with Chai - Use the Double Equals to Assert Equality

equal() compares objects using ==. Note that numbers are coerced into strings with ==

Within tests/1_unit-tests.js under the test labelled #5 in the Equality suite, change each assert to either assert.equal or assert.notEqual to make the test pass (should evaluate to true). Do not alter the arguments passed to the asserts. 

solution: */
// #5
test('#equal, #notEqual', function () {
    assert.equal(12, '12', 'numbers are coerced into strings with == ');
    assert.notEqual({ value: 1 }, { value: 1 }, '== compares object references'); //not equal bc objects are not pointing to the same reference
    assert.equal(6 * '2', '12', 'no more hints...');
    assert.notEqual(6 + '2', '12', 'type your error message if you want');
});

/* Quality Assurance and Testing with Chai - Use the Triple Equals to Assert Strict Equality

strictEqual() compares objects using ===. 

Within tests/1_unit-tests.js under the test labelled #6 in the Equality suite, change each assert to either assert.strictEqual or assert.notStrictEqual to make the test pass (should evaluate to true). Do not alter the arguments passed to the asserts. 

solution: */
// #6
test('#strictEqual, #notStrictEqual', function () {
    assert.notStrictEqual(6, '6');
    assert.strictEqual(6, 3 * 2);
    assert.strictEqual(6 * '2', 12);
    assert.notStrictEqual([1, 'a', {}], [1, 'a', {}]);
    });

/* Quality Assurance and Testing with Chai - Assert Deep Equality with .deepEqual and .notDeepEqual

deepEqual() asserts that two objects are deep equal. Asserts that actual is deeply equal to expected, instead of checking if objects point to the same reference. The test below shall pass (evaluate to true) */

assert.deepEqual({ tea: 'green' }, { tea: 'green' })

/*
Within tests/1_unit-tests.js under the test labelled #7 in the Equality suite, change each assert to either assert.deepEqual or assert.notDeepEqual to make the test pass (should evaluate to true). Do not alter the arguments passed to the asserts. 

solution: */

// #7
test('#deepEqual, #notDeepEqual', function () {
    assert.deepEqual({ a: '1', b: 5 }, { b: 5, a: '1' }, "keys order doesn't matter");
    assert.notDeepEqual({ a: [5, 6] }, { a: [6, 5] }, "array elements position does matter !!");
    });

/* Quality Assurance and Testing with Chai - Compare the Properties of Two Elements

Within tests/1_unit-tests.js under the test labelled #8 in the Comparisons suite, change each assert to either assert.isAbove or assert.isAtMost to make the test pass (should evaluate to true). Do not alter the arguments passed to the asserts.

.isAbove(valueToCheck, valueToBeAbove, [message])
Asserts valueToCheck is strictly greater than (>) valueToBeAbove.
assert.isAbove(5, 2, '5 is strictly greater than 2');

.isAtMost(valueToCheck, valueToBeAtMost, [message])
Asserts valueToCheck is less than or equal to (<=) valueToBeAtMost.
assert.isAtMost(3, 6, '3 is less than or equal to 6');
assert.isAtMost(4, 4, '4 is less than or equal to 4');

solution: */
// #8
test('#isAbove, #isAtMost', function () {
    assert.isAtMost('hello'.length, 5);
    assert.isAbove(1, 0);
    assert.isAbove(Math.PI, 3);
    assert.isAtMost(1 - Math.random(), 1); //Math.random() returns 0 to less than 1 (inclusive of 0, but not 1)
    });

/* Quality Assurance and Testing with Chai - Test if One Value is Below or At Least as Large as Another

Within tests/1_unit-tests.js under the test labelled #9 in the Comparisons suite, change each assert to either assert.isBelow or assert.isAtLeast to make the test pass (should evaluate to true). Do not alter the arguments passed to the asserts.

.isBelow(valueToCheck, valueToBeBelow, [message])
@param { Mixed } valueToCheck
@param { Mixed } valueToBeBelow
@param { String } message
Asserts valueToCheck is strictly less than (<) valueToBeBelow.
assert.isBelow(3, 6, '3 is strictly less than 6');

.isAtLeast(valueToCheck, valueToBeAtLeast, [message])
Asserts valueToCheck is greater than or equal to (>=) valueToBeAtLeast.
assert.isAtLeast(5, 2, '5 is greater or equal to 2');
assert.isAtLeast(3, 3, '3 is greater or equal to 3');

solution: */
// #9
test('#isBelow, #isAtLeast', function () {
    assert.isAtLeast('world'.length, 5);
    assert.isAtLeast(2 * Math.random(), 0);
    assert.isBelow(5 % 2, 2);
    assert.isBelow(2 / 3, 1);
    });

/* Quality Assurance and Testing with Chai - Test if a Value Falls within a Specific Range

.approximately(actual, expected, delta, [message])
Asserts that the actual is equal to expected, to within a +/- delta range.

Within tests/1_unit-tests.js under the test labelled #10 in the Comparisons suite, change each assert to assert.approximately to make the test pass (should evaluate to true).

Choose the minimum range (3rd parameter) to make the test always pass. It should be less than 1.
 
solution: */
function weirdNumbers(delta) {
    return (1 + delta - Math.random());
  }

test('#approximately', function () {
    assert.approximately(weirdNumbers(0.5), 1, 0.5);
    assert.approximately(weirdNumbers(0.2), 1, 0.8);
});

/* Quality Assurance and Testing with Chai - Test if a Value is an Array

Within tests/1_unit-tests.js under the test labelled #11 in the Arrays suite, change each assert to either assert.isArray or assert.isNotArray to make the test pass (should evaluate to true). Do not alter the arguments passed to the asserts. 

.isArray(value, [message])
Asserts that value is an array.
var menu = [ 'green', 'chai', 'oolong' ];
assert.isArray(menu, 'what kind of tea do we want?'); 

Quality Assurance and Testing with Chai - Test if an Array Contains an Item

Within tests/1_unit-tests.js under the test labelled #12 in the Arrays suite, change each assert to either assert.include or assert.notInclude to make the test pass (should evaluate to true). Do not alter the arguments passed to the asserts.

.include(haystack, needle, [message])
@param { Array | String } haystack
@param { Mixed } needle
@param { String } message
Asserts that haystack includes needle. Can be used to assert the inclusion of a value in an array, a substring in a string, or a subset of properties in an object.

assert.include([1,2,3], 2, 'array contains value');
assert.include('foobar', 'foo', 'string contains substring');
assert.include({ foo: 'bar', hello: 'universe' }, { foo: 'bar' }, 'object contains property');
Strict equality (===) is used. When asserting the inclusion of a value in an array, the array is searched for an element that’s strictly equal to the given value. When asserting a subset of properties in an object, the object is searched for the given property keys, checking that each one is present and strictly equal to the given property value. For instance:

var obj1 = {a: 1}
  , obj2 = {b: 2};
assert.include([obj1, obj2], obj1);
assert.include({foo: obj1, bar: obj2}, {foo: obj1});
assert.include({foo: obj1, bar: obj2}, {foo: obj1, bar: obj2});

solutions: */

const winterMonths = ['dec,', 'jan', 'feb', 'mar'];
const backendLanguages = ['php', 'python', 'javascript', 'ruby', 'asp'];
suite('Arrays', function () {
  // #11
  test('#isArray, #isNotArray', function () {
    assert.isArray('isThisAnArray?'.split(''), 'String.prototype.split() returns an Array');
    assert.isNotArray([1, 2, 3].indexOf(2), 'indexOf returns a number.');
  });
  // #12
  test('Array #include, #notInclude', function () {
    assert.notInclude(winterMonths, 'jul', "It's summer in july...");
    assert.include(backendLanguages, 'javascript', 'JS is a backend language !!');
  });
});


/* Quality Assurance and Testing with Chai - Test if a Value is a String

isString or isNotString asserts that the actual value is a string.

.isString(value, [message])
Asserts that value is a string.
var teaOrder = 'chai';
assert.isString(teaOrder, 'order placed');

Within tests/1_unit-tests.js under the test labelled #13 in the Strings suite, change each assert to either assert.isString or assert.isNotString to make the test pass (should evaluate to true). Do not alter the arguments passed to the asserts. 
*/

/* Quality Assurance and Testing with Chai - Test if a String Contains a Substring

include() and notInclude() work for strings too! include() asserts that the actual string contains the expected substring.

.include(haystack, needle, [message])
Asserts that haystack includes needle. Can be used to assert the inclusion of a value in an array, a substring in a string, or a subset of properties in an object.

Within tests/1_unit-tests.js under the test labelled #14 in the Strings suite, change each assert to either assert.include or assert.notInclude to make the test pass (should evaluate to true). Do not alter the arguments passed to the asserts. */

/* Quality Assurance and Testing with Chai - Use Regular Expressions to Test a String

match() asserts that the actual value matches the second argument regular expression.

.match(value, regexp, [message])
@param { Mixed } value
@param { RegExp } regexp
@param { String } message
Asserts that value matches the regular expression regexp.

assert.match('foobar', /^foo/, 'regexp matches');

Within tests/1_unit-tests.js under the test labelled #15 in the Strings suite, change each assert to either assert.match or assert.notMatch to make the test pass (should evaluate to true). Do not alter the arguments passed to the asserts.

solutions: */
const formatPeople = function (name, age) {
    return '# name: ' + name + ', age: ' + age + '\n';
  };
  suite('Strings', function () {
    // #13
    test('#isString, #isNotString', function () {
      assert.isNotString(Math.sin(Math.PI / 4), 'a float is not a string');
      assert.isString(process.env.PATH, 'env vars are strings (or undefined)');
      assert.isString(JSON.stringify({ type: 'object' }), 'a JSON is a string');
    });
    // #14
    test('String #include, #notInclude', function () {
      assert.include('Arrow', 'row', "Arrow contains row...");
      assert.notInclude('dart', 'queue', "But a dart doesn't contain a queue");
    });
    // #15
    test('#match, #notMatch', function () {
      const regex = /^#\sname\:\s[\w\s]+,\sage\:\s\d+\s?$/;
      assert.match(formatPeople('John Doe', 35), regex);
      assert.notMatch(formatPeople('Paul Smith III', 'twenty-four'), regex);
    });
  });

/* Quality Assurance and Testing with Chai - Test if an Object has a Property

property asserts that the actual object has a given property.

.property(object, property, [message])
@param { Object } object
@param { String } property
@param { String } message
Asserts that object has a direct or inherited property named by property.
*/
assert.property({ tea: { green: 'matcha' }}, 'tea');

/*Within tests/1_unit-tests.js under the test labelled #16 in the Objects suite, change each assert to either assert.property or assert.notProperty to make the test pass (should evaluate to true). Do not alter the arguments passed to the asserts.
*/

/* Quality Assurance and Testing with Chai - Test if a Value is of a Specific Data Structure Type

#typeOf asserts that value's type is the given string, as determined by Object.prototype.toString.

.typeOf(value, name, [message])
@param { Mixed } value
@param { String } name
@param { String } message
Asserts that value’s type is name, as determined by Object.prototype.toString.
*/
assert.typeOf({ tea: 'chai' }, 'object', 'we have an object');
assert.typeOf(['chai', 'jasmine'], 'array', 'we have an array');
assert.typeOf('tea', 'string', 'we have a string');
assert.typeOf(/tea/, 'regexp', 'we have a regular expression');
assert.typeOf(null, 'null', 'we have a null');
assert.typeOf(undefined, 'undefined', 'we have an undefined');
/*
Within tests/1_unit-tests.js under the test labelled #17 in the Objects suite, change each assert to either assert.typeOf or assert.notTypeOf to make the test pass (should evaluate to true). Do not alter the arguments passed to the asserts. */


/* Quality Assurance and Testing with Chai - Test if an Object is an Instance of a Constructor

#instanceOf asserts that an object is an instance of a constructor.

.instanceOf(object, constructor, [message])
@param { Object } object
@param { Constructor } constructor
@param { String } message
Asserts that value is an instance of constructor. */

var Tea = function (name) { this.name = name; }
  , chai = new Tea('chai');

assert.instanceOf(chai, Tea, 'chai is an instance of tea');

/* Within tests/1_unit-tests.js under the test labelled #18 in the Objects suite, change each assert to either assert.instanceOf or assert.notInstanceOf to make the test pass (should evaluate to true). Do not alter the arguments passed to the asserts.
solutions: */

const Car = function () {
    this.model = 'cedan';
    this.engines = 1;
    this.wheels = 4;
  };

  const Plane = function () {
    this.model = '737';
    this.engines = ['left', 'right'];
    this.wheels = 6;
    this.wings = 2;
  };

  const myCar = new Car();
  const airlinePlane = new Plane();

  suite('Objects', function () {
    // #16
    test('#property, #notProperty', function () {
      assert.notProperty(myCar, 'wings', 'A car has not wings');
      assert.property(airlinePlane, 'engines', 'planes have engines');
      assert.property(myCar, 'wheels', 'Cars have wheels');
    });
    // #17
    test('#typeOf, #notTypeOf', function () {
      assert.typeOf(myCar, 'object');
      assert.typeOf(myCar.model, 'string');
      assert.notTypeOf(airlinePlane.wings, 'string');
      assert.typeOf(airlinePlane.engines, 'array');
      assert.typeOf(myCar.wheels, 'number');
    });
    // #18
    test('#instanceOf, #notInstanceOf', function () {
      assert.notInstanceOf(myCar, Plane);
      assert.instanceOf(airlinePlane, Plane);
      assert.instanceOf(airlinePlane, Object, 'everything is an Object');
      assert.notInstanceOf(myCar.wheels, String);
    });
  });

/* Quality Assurance and Testing with Chai - Run Functional Tests on API Endpoints using Chai-HTTP

Mocha allows testing asyncronous operations. There is a small (BIG) difference. Can you spot it?

We can test our API endpoints using a plugin, called chai-http. Let's see how it works. And remember, API calls are asynchronous.

The following is an example of a test using chai-http for the 'GET /hello?name=[name] => "hello [name]"' suite. The test sends a name string in a url query string (?name=John) using a GETrequest to the server. In the end method's callback function, the response object (res) is received and contains the status property. The first assert.equal checks if the status is equal to 200. The second assert.equal checks that the response string (res.text) is equal to "hello John".
 */
suite('GET /hello?name=[name] => "hello [name]"', function () {
  test("?name=John", function (done) {
    chai
      .request(server)
      .get("/hello?name=John")
      .end(function (err, res) {
        assert.equal(res.status, 200, "response status should be 200");
        assert.equal(
          res.text,
          "hello John",
          'response should be "hello John"'
        );
        done();
      });
  });

/* Notice the done parameter in the test's callback function. Calling it at the end without an argument is necessary to signal successful asynchronous completion.

Within tests/2_functional-tests.js, alter the 'Test GET /hello with no name' test (// #1) to assert the status and the text response to make the test pass. Do not alter the arguments passed to the asserts.

There should be no name in the query; the endpoint responds with hello Guest. */


/* Quality Assurance and Testing with Chai - Run Functional Tests on API Endpoints using Chai-HTTP II

Within tests/2_functional-tests.js, alter the 'Test GET /hello with your name' test (// #2) to assert the status and the text response to make the test pass.

Send your name in the query, appending ?name=<your_name> to the route. The endpoint responds with 'hello <your_name>'. */

// #2
test("Test GET /hello with your name", function (done) {
    chai
        .request(server)
        .get("/hello?name=xy_z")
        .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.text, "hello xy_z");
        done();
        });

/* Quality Assurance and Testing with Chai - Run Functional Tests on an API Response using Chai-HTTP III - PUT method

In the next example we'll see how to send data in a request payload (body). We are going to test a PUT request. The '/travellers' endpoint accepts a JSON object taking the structure:
 */
{
  "surname": [last name of a traveller of the past]
}
// The route responds with :

{
  "name": [first name], "surname": [last name], "dates": [birth - death years]
}

/* See the server code for more details.

Within tests/2_functional-tests.js, alter the 'send {surname: "Colombo"}' test (// #3):

Send the following JSON response as a payload:
 */
{
  "surname": "Colombo"
}
/* Check for the following, within the request.end callback:

status
type
body.name
body.surname
Follow the assertion order above - we rely on it. Be sure to remove assert.fail(), once complete.
 */

// #3
test('send {surname: "Colombo"}', function (done) {
    chai
        .request(server)
        .put("/travellers")
        .send ({surname: "Colombo"})
        .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.type, 'application/json');
        assert.equal(res.body.name, 'Cristoforo');
        assert.equal(res.body.surname, 'Colombo');
        done();
        });

/* Quality Assurance and Testing with Chai - Run Functional Tests on an API Response using Chai-HTTP IV - PUT method

Now that you have seen how it is done, it is your turn to do it from scratch.

Within tests/2_functional-tests.js, alter the 'send {surname: "da Verrazzano"}' test (// #4):

Send the following JSON response as a payload to the /travellers route: */

{
  "surname": "da Verrazzano"
}
/* Check for the following, within a request.end callback:

status
type
body.name
body.surname
Follow the assertion order above - we rely on it. Be sure to remove assert.fail(), once complete. */

// #4
test('send {surname: "da Verrazzano"}', function (done) {
    chai
        .request(server)
        .put("/travellers")
        .send ({surname: "da Verrazzano"})
        .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.type, 'application/json');
        assert.equal(res.body.name, 'Giovanni');
        assert.equal(res.body.surname, 'da Verrazzano');
        done();
        });

