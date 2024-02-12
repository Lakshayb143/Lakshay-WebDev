// Type Conversions in JavaScript.

// Let's Look at explicit conversions of data types

let amount = '1000';

console.log(amount , typeof amount);

// Converting String to a number
// amount = parseInt(amount);
amount = +amount;
// amount  = Number(amount);

console.log(amount , typeof amount);

console.log("\n");
console.log("\n");

// Converting number to a String

let marks = 100;
console.log(marks , typeof marks);

// conversion
marks += ''; // Convert the value into string and add it with existing one

// marks = marks.toString();
// But here is a question -> As marks is a primitive type not a object , how it has a method toString().
// For answer check NN. -> Introduction to JS

// marks = String(marks);


console.log(marks , typeof marks);

console.log("\n");
console.log("\n");
// Converting String to decimal .
let sgpa = '9.9';
console.log(sgpa, typeof sgpa);
// conversion

sgpa = parseFloat(sgpa);
// sgpa = parseInt(sgpa);  // IT will basically return the integer part of decimal. So use parseFloat().

console.log(sgpa, typeof sgpa);


console.table("\n");
console.table("\n");

// Converting a number to boolean

let check = 100;
console.log(check , typeof check);

// Conversion
check = Boolean(check);
console.log(check , typeof check);

/* 
0 -> False 
1 and any other number gives True
When converted to boolean
*/





