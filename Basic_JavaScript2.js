/* Contents are taken from freecodecamp Basic JavaScript tutorials. 
This is only for my learning purpose.
*/

//Selecting from Many Options with Switch StatementsPassed
/*
If you have many options to choose from, use a switch statement. 
A switch statement tests a value and can have many case statements 
which define various possible values. Statements are executed from the 
first matched case value until a break is encountered.

Here is an example of a switch statement:

switch(lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}
case values are tested with strict equality (===). 
The break tells JavaScript to stop executing statements. 
If the break is omitted, the next statement will be executed.
 */
function caseInSwitch(val) {
  var answer = "";
  switch(val) {
    case 1:
    answer= "alpha";
    break;
    case 2:
    answer= "beta";
    break;
    case 3:
    answer= "gamma";
    break;
    case 4:
    answer= "delta";
    break;
  }
  return answer;
}
caseInSwitch(2); // returns beta
