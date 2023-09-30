// Creating a Array Literals

const numbers = [23 , 2 , 73 , 11 , 10 , 45];
console.log(numbers);

// Array Constructor

const subjects = new Array('Mathematics-3', "Digital System Design","Data Structure and Algorithms");
// console.log(subjects);

// Array of mixed data types
const mixedArray = [45 , "Lakshay", 9.23 , null, true];
// console.log(mixedArray);

// Modifying the values
mixedArray[1] = "Lakshay Bhatia";
console.log(mixedArray);

// Accessing array elements
let element = numbers[0];// array[index]
console.log(element);

console.log(`My favorite subject is ${subjects[2]}`);

// Arrays Methods

let len = numbers.length;
console.log(len);

numbers.length = 3;
console.log(numbers);

// For adding a element in the end
numbers[3] = 33;
console.log(numbers);

numbers[numbers.length] = 100;
console.log(numbers);
