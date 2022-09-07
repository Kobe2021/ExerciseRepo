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

  //E. Driver's Ed
  let age = 24
  if(age >= 16){
    console.log("Here are the keys!")
  } else {
    console.log("Sorry, you're too young.")
  }

// Loops
//A. The basics
for(let i = 0; i <= 10; i++){
    console.log(i)
}
//Write a loop that will print out all the numbers from 10 up to and including 400
for(let i = 10; i <= 400; i++){
    console.log(i)
}
//Write a loop that will print out every third number starting with 12 and going no higher than 4000
for(let i = 12; i <= 4000; i+=3){
    console.log(i)
}

//B. Get even
for(let i = 1; i < 100; i++){
    if(i % 2 === 0){
        console.log(i + " is an even number")
    } else {
        console.log(i)
    }
}

//C. Give me Five
for(let i = 0; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("I found a " + i + " Three is a crowd");
        console.log("I found a " + i + " High five!")
    } else if(i % 5 ===0){
        console.log("I found a " + i + " High five!")
    } else if(i % 3 === 0){
        console.log("I found a " + i + " Three is a crowd")
    }
}

//D. Savings account
//Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
let bank_account = 0
for(let i = 0; i <= 10; i++){
    bank_account += i
}
console.log(`Bank Account: ${bank_account}`);
for(let i = 0; i <= 100; i++){
    bank_account += i
}
console.log(`Bank Account: ${bank_account * 2}`);

// III. Arrays & Control flow
// A. Talk about it:

//1. The things in an array are called elements
//2. Arrays do gur=arantee those things will be in order
//3. A real-life thing to model with an array is a classroom of students

//B. Easy Does It
let quotes = ["Be yourself; everyone else is already taken.", "So many books, so little time.", "A room without books is like a body without a soul."]

//C. Accessing Elements
const randomThings = [1, 10, "Hello", true]
//1. To access the first element, type the name of the array, square brackets, 0 inside the brackets to represent index 0
randomThings[2] = "World"
//3. Check the value of the array to make sure it updated the array. How? Why, yes!
console.log(randomThings)

//D. Change Values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

ourClass[2] //Access the 3rd elemets
ourClass[4] = "Octocat"
ourClass.push("Cloud City");
console.log(ourClass)

//E. Mix It Up
const myArray = [5, 10, 500, 20]
myArray.shift()
myArray.unshift("Bob Marley")
myArray.reverse()
console.log(myArray)


//F. Biggie Smalls
let num = 90
if(num < 100){
    console.log("little number")
} else {
    console.log("big number")
}

//G. Monkey in the Middle
num = 6
if(num < 5){
    console.log("little number")
} else if(num > 10){
    console.log("big number")
} else {
    console.log("monkey")
}

//H. What's in Your Closet?
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  //1. 
  console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);
  //2.
  kristynsCloset.push("raybans")
  //3.
  kristynsCloset[5] = "stained knit hat"
  //4.
  thomsCloset[0][0]
  //5.
  thomsCloset[1][0]
  //6. 
  thomsCloset[2][0]
  //7.
  console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][0]} and ${thomsCloset[2][0]}`)
  //8.
  thomsCloset[1][2] = "Footie Pajamas"
