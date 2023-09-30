/*

Logical Assignment



|| -> assigns the right side value only if the left is a falsy value.

&& -> Assign the right side value only if the left side a truthy value.

?? -> Assign the right side value only if the left side is null or undefined


*/

// Usecase 

// OR -> ||
let a = false;

// if(!a){
//     a = 20;
// }

// Short hand for above if
a = a || 20;

// console.log(a);

// AND -> &&

let b = 10;

// if(b){
//     b = 20;
// }

b = b && 20;

console.log(b);