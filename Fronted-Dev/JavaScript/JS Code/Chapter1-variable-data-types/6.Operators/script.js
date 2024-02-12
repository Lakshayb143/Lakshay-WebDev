// Operators in JS

// 1. Arithmetic Operator

console.log("Arithmetic Operators");

let a = 10;
let b = 10;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);


// Exponent
console.log(a ** b);

// concatenation
console.log("Lakshay" + " " +"Bhatia");


// Assignment operator
let i = 1;

// Increment operator
// i = i+1;
console.log(i++);
console.log(++i);


// Decrement Operator
// i = i - 1;
i--;
--i;

console.log(i);


// Assginment and arithmetic operator

let num = 10;
num += 10;
// num = num + 10;
num -= 10;
num *= 10;
num %= 10;
num /= 10;

num = 10;
num **= 2;



console.log(num);


// 2. Comparison Operators

let check = (2 == '2'); // This checks the value only
console.log(check);
check = (2 === '2'); // it evaluates value and type
// Try to use === .

console.log(check);

check = (2 != '2');
console.log(check);
check = (2 !== '2');
console.log(check);


let x = 10 > 5;
x = 10 < 5;
x = 10 >= 5;
x = 10 <= 5;



// 3. Logical Operators


console.log(true && false); // And 
console.log(true || false); // or
console.log(!false); // not