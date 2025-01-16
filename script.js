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
// Coding Task 5
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

// --------------------------------------------------------------
// Coding example: break
// --------------------------------------------------------------
function findFirstCharacterPosition(word, char) {
  let result;

  for (let index = 0; index < word.length; index++) {
    const currentChar = word[index]; // word[index] retrieves the character at the position index in the string word
    if (currentChar === char) {
      result = index;
      break;
    }
  }
  return result;
}
console.log(findFirstCharacterPosition("Hallo", "a"));

// --------------------------------------------------------------
// Coding Task 6
// --------------------------------------------------------------
/*TODO: Implement an oddNumbers function
 The function has two parameters, both are numbers.
 Iterate over all numbers between first number and the second number.
 Store all oddNumbers in string, seperated by a comma and return the string.
 Allowed are only positive numbers, add a check. */
function oddNumbers(start, end) {
  // Ensure the inputs are positive numbers
  if (
    typeof start !== "number" ||
    typeof end !== "number" ||
    start < 0 ||
    end < 0
  ) {
    return "Both inputs must be positive numbers";
  }

  // Ensure start is less than or equal to end
  if (start > end) {
    [start, end] = [end, start]; // Swap values
  }

  // Initialize an empty result string
  let result = "";

  // Iterate over the range
  for (let num = start; num <= end; num++) {
    if (num % 2 !== 0) {
      if (result) {
        result += ","; // Add a comma before appending the next number
      }
      result += num;
    }
  }

  return result;
}

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

// -----------------------------------------------------------

/* Implement a charCount function.
 The function has a first parameter for a word which is a string.
 The function has a second parameter which contains the character to search for which is a string.
 Check if the second parameter consists of only one character, if not, quit the function.
 The function returns the number of times the character from the second parameter is present in the word.
 The function should be case insensitive.*/
function charCount(word, char) {
  let count = 0; // Initialize the counter as 0

  // Ensure the second parameter consists of only one character
  if (char.length !== 1) {
    return "Second parameter must be a single character";
  }

  // word = word.toLowerCase(); // geht auch, aber würde das original überschreiben
  // char = char.toLowerCase(); // geht auch, aber würde das original überschreiben

  // Iterate over the word
  for (let index = 0; index < word.length; index++) {
    if (char.toLowerCase() === word[index].toLowerCase()) {
      count = count + 1;
    }
  }
  return count;
}

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "M"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3

// --------------------------------------------------------------
// Coding Task 7
// --------------------------------------------------------------
/* Implement a removeItem function.
 The first parameter is an array.
 The second parameter is a number. It's the non-zero-based index of the item that should get deleted.
 Remove the item and return an array.
 Ensure that the original array was not mutated.*/

function removeItem(array, number) {
  const arrayCopy = structuredClone(array);

  arrayCopy.splice(number - 1, 1);

  return arrayCopy;
}

const animals = ["Dog", "Cat", "Lion"];
console.log(removeItem(animals, 1));
// result should be: ["Cat", "Lion"]

console.log(animals);
// result should be still: ["Dog", "Cat", "Lion"]

const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]

// ----------------------------------------------------------
// Implement a sumOfCharacters function.
/*The function has one parameter, which is an array.
 Check the type of each array entry. If it's a string then store the count of characters.
 The function returns the total sum of all characters.*/

function sumOfCharacters(array) {
  let characCount = 0; // Initialize for summing lengths
  for (const arrayItem of array) {
    if (typeof arrayItem === "string") {
      characCount += arrayItem.length; // Add length of the string
    }
  }
  return characCount;
}

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));
// result should be: 17

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));
// result should be: 55
