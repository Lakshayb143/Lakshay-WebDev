// Primitive Data Types -Values are stored int the stack

let firstName = "Lakshay";
let age = 20;

let name2 = firstName;
console.log(name2[0]);
// console.log(firstName);

name2 = "Krishna";
console.log(name2);
console.log(firstName);



// Reference types - Values are stored in heap and accessed by reference.

let nums = [2,3,5,6];

let copyArr = nums;

console.log(nums);
console.log(copyArr);

copyArr[0] = 10;
console.log(nums);
console.log(copyArr);

