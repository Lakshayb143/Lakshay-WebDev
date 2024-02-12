// Strings in JS

const myName = "Lakshay Bhatia";
console.log(typeof myName);
const age = new String(20); // This happens when we use a                               method or property.
console.log(typeof age);

console.log("\n");

let str = "Hello , my name is " + myName + ' and I am ' + age + " years old.";

// Template Literals || Templaet strings
// Template literals came after es2015 or es2016 update
str =  `Hello , my name is ${myName} and I am ${age} years old`

console.log(str);
console.log("\n");


// Strings Property and methods
const firstName = "Lakshay";
console.log(firstName);
console.log("length of first Name : ", firstName.length) // length property returns the number of characters present inside a string.

console.log(firstName[0]); // Accessing characters string of using index


// **ZB**
let allStringMethods = str.__proto__;
// or we can do
let s = new String();
console.log(s);

// Using some of the Methods
let x;
x = firstName.toUpperCase();
console.log(x);

x = firstName.toLowerCase();
console.log(x);

x = firstName.charAt(0); // This is same as firstName[0]
console.log(x);

x = firstName.indexOf('k'); // This is case sensitive
console.log(x);

x = firstName.substring(0,4); // It excludes the last index that 4
console.log(x);

x = firstName.slice(-7,-4);
console.log(x);

spacedName = '                   Lakshay                  ';
console.log(spacedName);
x = spacedName.trim();
console.log(x);


let fullName = "Lakshay Kumar";
fullName = fullName.replace('Kumar','Bhatia');
fullNameArray = fullName.split(" ");   // Splitting a word into array by space
console.log(fullNameArray);
fullNameArray = fullName.split("a");   // Splitting a word into array by space
console.log(fullNameArray);
fullNameArray = fullName.split(""); // Creating array of characters
console.log(fullNameArray);

let check = firstName.includes("Bhatia");
console.log(check);
check = fullName.includes("Bhatia");
console.log(check);


x = firstName.valueOf(); // returns the primitive value of the object.
console.log(x);


















