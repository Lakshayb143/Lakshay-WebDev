// Numbers in JS

// Number as a primitive
const x = 5;
console.log(x , typeof x);


// Number as a object
let num = new Number(5);
console.log(num, typeof num);

// Methods

let number = num.toString();
console.log(number, typeof number);

// number of digits.
number = 50000;
let len = number.toString().length;
console.log(len);


num = new Number(5.423483423423);
number = num.toFixed(4);  // Number of numbers after decimals
console.log(number, typeof number);


number = num.toPrecision(3); // It is total number of digits
console.log(number);

num = new Number(5);
number = num.toExponential(1);
console.log(number);
 
number = num.toLocaleString("en-US");
number = num.toLocaleString("ar-EG");
console.log(number);

number = num.valueOf();
console.log(number);

