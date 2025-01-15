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

// --------------------------------------------------------------
// Coding Task 4
// --------------------------------------------------------------
// Copy the following complete code block to your script.js file
// and try to spot and fix the errors.
/* const size = 25;
let result;
if (size > 10) {
  result = "Greater than 10";
} else if (size > 20) {
  result = "Greater than 20";
} else {
  result = "Lower than 10";
}
console.log(result);
// Returns Greater than 10 but should return Greater than 20 */
const size = 25;
let result;

if (size > 10 && size <= 20) {
  result = "Greater than 10";
} else if (size > 20) {
  result = "Greater than 20";
} else {
  result = "Lower than 10";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20

// --------------------------------------------------------------
// TODO: Implement a oddEven function.
// The function has one parameter which is a number
// If the number is an even number, the function returns the string even
// If the number is an od number, the function returns the string odd
function oddEven(number) {
  if (number % 2 === 0) {
    // The remainder (%) operator returns the remainder left over when one operand is divided by a second operand
    return "even";
  }
  return "odd";
}

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even

// --------------------------------------------------------------
// TODO: Implement an oldYoung function.
/* The function has one parameter which is a number
 If the number is less than 16, return "children"
 If the number is less than 50, return "young person"
 Otherwise return "elder person"
 If the number is not a number or a negative number a string invalid parameter */

function oldYoung(age) {
  if (typeof age !== "number" || age < 0) {
    return "invalid";
  } else if (age < 16) {
    return "child";
  } else if (age < 50) {
    return "young person";
  } else return "elder person";
}

console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person
