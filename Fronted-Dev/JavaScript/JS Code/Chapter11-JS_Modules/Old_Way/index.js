
// Common Js Modules

// const calculator = require("./calculations.js");

// console.log(calculator.add(10, 5));

//  THe above line will give error because

// It seems like you're trying to use the require function, which is commonly used in Node.js environments, in a browser environment.
//  The require function is not natively supported in browsers because browsers do not have built-in support for loading modules using the CommonJS syntax.


import add from './calculations.js';
console.log(add(3,3));

// The above code will work in browser but not in Node.js