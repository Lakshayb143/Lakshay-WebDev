// Nested Arrays

let fruits = ['apple', 'mango', 'grapes'];
let berries = ['strawberry', 'rasberry','bluberry'];
const vegetables = ['potato','onion','bottle guard'];


fruits.push(berries);
console.log(fruits);


const allItems = [vegetables,fruits];
console.log(allItems);

// Accessing elements

let item = allItems[1][3][1];
console.log(item);


console.log("\n");
console.log("\n");

// Concatenation in Arrays
fruits = ['apple', 'mango', 'grapes'];
berries = ['strawberry', 'rasberry','bluberry'];

let x = fruits.concat(berries);
// x = fruits + berries; // It will return a string with all elements
console.log(x);

// Or we can use to concatenate
// Spread Operator (...)
let array = [...vegetables , ...fruits , ...berries];
console.log(array);

console.log("\n");
console.log("\n");

// Flatten Arrays - If a array has nested arrays it will merge the elements in main array
const arr = [1 , 2, [3,4,5],6,7,[8]];
console.log(arr);

array = arr.flat();
console.log(array);


console.log("\n");
console.log("\n");
// Static Methods on Array Object

x = Array.prototype;

x = Array.isArray(fruits);

x = Array.from("Lakshay");

const a = 10;
const naam = "Lakshay";
const marks = 9.2;

x = Array.of(a , naam , marks);


console.log(x);

