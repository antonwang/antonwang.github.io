// Contents are taken from freecodecamp Basic JavaScript tutorials. 
//This is only for my learning purpose.



//Iterate with JavaScript While Loops
/*You can run the same code multiple times by using a loop.

The first type of loop we will learn is called a while loop
 because it runs "while" a specified condition is true and stops
  once that condition is no longer true. */

var ourArray = [];
var i = 0;
while(i < 5) {
  ourArray.push(i);
  i++;
}
/*In the code example above, the while loop will execute 5 times 
and append the numbers 0 through 4 to ourArray.  */

var myArray = [];
var i = 5;
while (i >= 0) { //Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.
    myArray.push(i);
    i--;
}

//Iterate with JavaScript For Loops
/*You can run the same code multiple times by using a loop.

The most common type of JavaScript loop is called a for loop because it runs "for" a specific number of times.

For loops are declared with three optional expressions separated by semicolons:

for ([initialization]; [condition]; [final-expression])

The initialization statement is executed one time only before the 
loop starts. It is typically used to define and setup your loop variable.

The condition statement is evaluated at the beginning of every loop 
iteration and will continue as long as it evaluates to true. 
When condition is false at the start of the iteration, the loop will
 stop executing. This means if condition starts as false, your loop 
 will never execute.

The final-expression is executed at the end of each loop iteration,
 prior to the next condition check and is usually used to increment 
 or decrement your loop counter.

In the following example we initialize with i = 0 and iterate while
 our condition i < 5 is true. We'll increment i by 1 in each loop 
 iteration with i++ as our final-expression.
*/
var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);  //ourArray will now contain [0,1,2,3,4].
}

var myArray = [];
for (var i=1; i < 6; i++) {
  myArray.push(i);  //Using a for loop to work to push the values 1 through 5 onto myArray.
}

//Iterate Odd Numbers With a For Loop
/*For loops don't have to iterate one at a time. By changing our 
final-expression, we can count by even numbers.

We'll start at i = 0 and loop while i < 10. We'll increment i by 2 each
 loop with i += 2.
*/
var ourArray = [];
for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);  //ourArray will now contain [0,2,4,6,8]
}

//Let's change our initialization so we can count by odd numbers.
var myArray = [];
for (var i = 1; i < 10; i += 2) {
  myArray.push(i);   //Pushing the odd numbers from 1 through 9 to myArray using a for loop.
}

//Count Backwards With a For Loop
/* A for loop can also count backwards, so long as we can define the right conditions.

In order to count backwards by twos, we'll need to change our 
initialization, condition, and final-expression.

We'll start at i = 10 and loop while i > 0. We'll decrement 
i by 2 each loop with i -= 2.
*/
var ourArray = [];
for (var i=10; i > 0; i-=2) {
  ourArray.push(i);    //ourArray will now contain [10,8,6,4,2]
}

//Let's change our initialization and final-expression so we can count backward by twos by odd numbers.
var myArray = [];
for (var i = 9; i > 0; i -= 2) {
  myArray.push(i); //Pushing the odd numbers from 9 through 1 to myArray using a for loop.
}


