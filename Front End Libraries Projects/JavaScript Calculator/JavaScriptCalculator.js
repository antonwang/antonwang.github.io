/*
Completed

User Story #1: My calculator should contain a clickable element containing an = (equal sign) with a corresponding id="equals".

User Story #2: My calculator should contain 10 clickable elements containing one number each from 0-9, with the following corresponding IDs: id="zero", id="one", id="two", id="three", id="four", id="five", id="six", id="seven", id="eight", and id="nine".

User Story #3: My calculator should contain 4 clickable elements each containing one of the 4 primary mathematical operators with the following corresponding IDs: id="add", id="subtract", id="multiply", id="divide".

User Story #4: My calculator should contain a clickable element containing a . (decimal point) symbol with a corresponding id="decimal".

User Story #5: My calculator should contain a clickable element with an id="clear".

User Story #6: My calculator should contain an element to display values with a corresponding id="display".

User Story #7: At any time, pressing the clear button clears the input and output values, and returns the calculator to its initialized state; 0 should be shown in the element with the id of display.

User Story #8: As I input numbers, I should be able to see my input in the element with the id of display.

User Story #9: In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit =, the correct result should be shown in the element with the id of display.

User Story #10: When inputting numbers, my calculator should not allow a number to begin with multiple zeros.

User Story #11: When the decimal element is clicked, a . should append to the currently displayed value; two . in one number should not be accepted.

User Story #12: I should be able to perform any operation (+, -, *, /) on numbers containing decimal points.

User Story #13: If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign). For example, if 5 + * 7 = is entered, the result should be 35 (i.e. 5 * 7); if 5 * - 5 = is entered, the result should be -25 (i.e. 5 x (-5)).

User Story #14: Pressing an operator immediately following = should start a new calculation that operates on the result of the previous evaluation.

User Story #15: My calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, but you should be able to handle calculations like 2 / 7 with reasonable precision to at least 4 decimal places). 
*/

$(document).ready(function() {
  //store user input
  var userInput = [];
  //store a string of user input
  var inputAsString;
  //to validate operations
  var arithmeticOperator = ["+", "-", "/", "*"];
  //to validate input of a single decimal
  var decimalOperator = ["."];
  //numbers stored in array
  var integers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  //conditional logic to determine the next action for input (clicked button that is not AC, CE, =, 00)
  function processValue(input) {
    if (
      (userInput[userInput.length - 1] === "." && input === ".") ||
      (userInput.includes(".") &&
        !arithmeticOperator.some(x => userInput.indexOf(x) >= 0) &&
        input === ".")
    ) {
      //First part: We prevent consecutive decimal operator in an array, i.e 1..2  ||  Second part: Prohibits 5.5.5. but allowing 5.5 - 2.2 by making sure that array has . , that array does not include any arithmetic operator !(arithmeticOperator.some(x => userInput.indexOf(x) >=0)) , and that input is a .
    } else if (
      arithmeticOperator.includes(input) ||
      decimalOperator.includes(input)
    ) {
      //Add to array if input is any arithmetic operators
      userInput.push(input);
    } else if (integers.includes(Number(input))) {
      //converts input into a number. If input is a number, push it to the array
      userInput.push(input);
    }
    outputValue(); //display the stored userInput as a string after if-else statements
  }

  //display the stored userInput as a string
  function outputValue() {
    inputAsString = userInput.join(""); //converts an array into a string
    $("#display").html(inputAsString);
  }

  //Evaluate the userInput and display the total
  function getTotal() {
    inputAsString = userInput.join(""); //converts an array into a string

    //Regular expression: ending ($) in a number, then one or more operators, then one operator, then one or more numbers
    var regexOperator = /[0-9][+\/*-]+[+\/*-][0-9]+$/;

    //Regular expression: ending ($) in a number, then one operator excluding (-), then one (-) operator, then one or more numbers
    var regexOpMinus = /[0-9][+*\/][-][0-9]+$/;

    if (regexOpMinus.test(inputAsString)) {
      //if only two operators are entered consecutively and the last operator entered is a (-) sign, perform the operation as it. I.e. if 5 * - 5 = is entered, the result should be -25 (i.e. 5 x (-5)).
      displayTotal();
    } else if (regexOperator.test(inputAsString)) {
      //If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign because of previous if statement). I.e. if 5 + * 7 = is entered, the result should be 35 (i.e. 5 * 7).
      inputAsString = inputAsString.replace(
        /([0-9])([+\/*-]+)([+\/*-])([0-9]+)$/,
        "$1 $3 $4"
      ); //replaces the string by removing extra operators ([+\/*-]+)
      displayTotal();
    } else displayTotal();

    function displayTotal() {
      //a function within a function (nested function) to reduce repetition of code
      var total = eval(inputAsString); //eval() evaluates the argument and outputs the total
      userInput = []; //set userInput to an empty array
      if (total > total.toFixed(5)) {
        //if a total with decimal places is longer than the 5th decimal place, add totalFloat to array and display total float to <span>. Otherwise, add total to array and display it w/o forcing decimal places on it. This preserves a total with a few decimal places i.e. 5/4 = 1.25 instead of 1.25000...
        var totalFloat = total.toFixed(8);
        userInput.push(totalFloat); //stores the float in userInput array
        $("#display").text(totalFloat); //.text or .html seems to work
      } else {
        //if total has 5 or less decimal places, preserve the float, then store and display it
        userInput.push(total);
        $("#display").html(total); //.text or .html seems to work
      }
    }
  }

  $("button").click(function() {
    if (this.id === "clear") {
      //if the clicked button is AC, clear userInput array
      userInput = [];
      $("#display").html(0); //display 0
    } else if (this.id === "clear-entry") {
      //if the clicked button is CE, remove last item in array
      userInput.pop(); //pop off/remove the last item in array
      outputValue(); //calls outputValue() to display userInput as string
    } else if (this.id === "equals") {
      //if the clicked button is (=), calls getTotal() for evaluation
      getTotal();
    } else if (userInput[0] == "0" && $(this).val() == "0") {
      //if user clicked the zero button twice in a row, only display 1 zero as the output
      $("#display").html(0);
    } else {
      processValue($(this).val()); //if none of the above, evaluate value of clicked button in processValue()
    }
  });
});
