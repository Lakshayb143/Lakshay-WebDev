/*
There are three ways to declare a variable in javascript

1. var
2. let
3. const

*/

let firstName = "Lakshay";
let lastName = "Bhatia";
console.log(firstName + lastName);
// console.log(firstName,lastName , age);
// console.log(firstName,lastName , age2);

/* 
    here both are intialised after the console.log
    But the variable declared with var is showing undefined
    And variable declared with let is showing error.

    ** The reason for above case is Hoisting ** . // learn Later

*/

var age = 30; 
let age2 = 25;


// Now Why we use let instead of var
// Reason 1
// -> We can declare a variable after initialising it using var and it will still work
myName = "Lakshay";

var myName;

// Reason 2
// While using var , we can declare a same  variable as many times as we like
var score = 100;
var score = 100;
var score = 100;
var score = 101;
console.log(score);


// Constants in JavaScript

const marks = 120; // They cannot be reinitialzed
// marks=98;// This line will give an error because constants cannot change their value
// const name; // Const should be initialised with declaration. They can't be delcared only


console.log(marks);

// Non Primitive data types
const arr = [1,2,3,4,5];
console.log(arr);
arr.push(10);
arr[6] = 6;
console.log("After adding element at index six");
console.log(arr)

console.log(arr[0]);


//also
let arr2 = [1,2,3,4,5];
arr2["name"]="lakshay" ;   /// this way also works but not recommended to do so
console.log('after adding object');
console.log(arr2);// now the array has two elements one is number other is string

// Objects

const person = {
    name : "Lakshay" ,
    email : "lakshay@gmail.com"
};
person.name = "Lakshay Bhatia";
console.log(person);


// Declare multiple values at once
let a ,b,c;

const d = 10 , e = 12 , f = 15;
console.log(d,e,f);
