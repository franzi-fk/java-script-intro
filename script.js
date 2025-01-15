// --------------------------------------------------------------
// Coding Task 1
// --------------------------------------------------------------
console.log("Hello World");

// --------------------------------------------------------------
// Coding Task 2
// --------------------------------------------------------------
//Use the concatenation operator to concatenate each letter of your firstname into a string one letter by one.
console.log("F" + "r" + "a" + "n" + "z" + "i");

// Error! Make it work
// console.log("Hallo";
console.log("Hallo");

// Error! Make it work
// console.log("That doesn"t work");
console.log("That doesn't work");

// should return true. Change only the operator to fix it.
// console.log(50 + 2 > 52);
console.log(50 + 2 >= 52);

// should be false. Change only the operator to fix it.
// console.log("333" == 333);
console.log("333" === 333);

// Wrong result: Expected 555 not 855. Change only the operator to fix it.
// console.log(600 + 510 / 2);
console.log((600 + 510) / 2);

// Wrong result: Expected a Number 4 received 22
// console.log("2" + 2);
console.log(2 + 2);

// Create a console.log that returns true when both division results are equal to 5
// console.log(25 / 5); // Result: 5
// console.log(50 / 10); // Result: 5
console.log(25 / 5 === 5 && 50 / 10 === 5);

// --------------------------------------------------------------
// Coding Task 3
// --------------------------------------------------------------
// Implement a welcomeMsg function.
function welcomeMsg(userName) {
  //defines function
  console.log("Welcome " + userName + "!");
}
welcomeMsg("Franzi"); //executes function

// Implement a calcGrossPrice function.
function calcGroddPrice(net, tax) {
  console.log(net + net * tax);
}
calcGroddPrice(20, 0.19);

// Implement an addPositive function
// If any of the arguments is a negative number, it should be handled
// as a positive number
function addPositive(a, b) {
  if (a < 0) a = -a;
  if (b < 0) b = -b;
  console.log(a + b);
}
addPositive(-3, 4);

// --------------------------------------------------------------
// Coding Task 4
// --------------------------------------------------------------
// Copy the following complete code block to your script.js file
// and try to spot and fix the errors.
/* const userName = Brad;
userName = "Jenna";
function getUserNameLength {
  return const result = name.length
}
console.log(getUserNameLength(userName) > 4)
// ^______________ Should log true */
let userName = "Brad";
userName = "Jenna";

function getUserNameLength(userName) {
  return userName.length;
}
console.log(getUserNameLength(userName) > 4);
// ^______________ Should log true

// --------------------------------------------------------------
// TODO: Implement the isString function
let isString = function (anything) {
  return typeof anything === "string";
};

console.log(isString("Hello"));
// result should be true

console.log(isString(3));
// result should be false

console.log(isString(undefined));
// result should be false

console.log(isString(""));
// result should be true

console.log(isString("John" + "Doe"));
// result should be true
