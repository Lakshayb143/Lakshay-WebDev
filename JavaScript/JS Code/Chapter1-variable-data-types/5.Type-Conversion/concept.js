// Here we will discuss the concept of Nan

// For all the theory refer to NN
// Nan -> Not a number

// 5 ways to get a Nan
let firstName = "Lakshay";

firstName = +firstName;
console.log(firstName , typeof firstName);

console.log(Number(undefined));
console.log(Math.sqrt(-1));
console.log(10 + NaN);
console.log(undefined + undefined);
console.log('str' / 3);

let num = 0;
console.log(num/num); // Indeterminate forms


// Indeterminate form (e.g. 0 * Infinity, 1 ** Infinity, Infinity / Infinity, Infinity - Infinity)
