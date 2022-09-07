/*
1. How do we assign a value to a variable? A. With the assignment operator
2. How do we change the value of a variable? With a reassignment statement.
3. How do we assign an existing variable to a new variable? Say let <new variable> = <existing variable>
4. Remind me, what are declare, assign, and define? Declare is to create an identifier of a variable, function, etc. Assign is to store a value to a variable. Define is to declare and put an algorithm in a function.
5. What is pseudocoding and why should you do it? A basic English interpretation of code
6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? 90% thinking and 10% typing
...
*/

let firstVariable = "Hello World"
firstVariable = 12
let secondVariable = firstVariable
secondVariable = "Hello"
// firstVariable is 12
let yourName = "Kobe Wright"
console.log("Hello, my name is " + yourName)

// Part C. Booleans
const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false && false && false && false && false || true);
  console.log(false == false)
  console.log(e === 'Kevin');
  console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');

  // D. The farm
  let animal = "cow"
  if(animal === "cow"){
    console.log("mooooo")
  } else {
    console.log("Hey! You're not a cow.")
  }