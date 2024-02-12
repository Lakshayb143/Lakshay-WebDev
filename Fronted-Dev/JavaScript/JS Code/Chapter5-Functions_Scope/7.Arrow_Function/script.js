// Arrow functions were introduced in JS in 2015(es2015)

// function declaration
// function add(x,y){
//     return x + y;
// }


// Creating above function with arrow function
const add = (x,y) => {
    return x + y;
};

// if it returns a single line , we can also do
// This is known as Implicit return   
const subtract = (x,y) => x - y;

// When we have a single parameter
const square = a => a*a;

// Returning a object
const createObject = () => ({
    id : 1,
    isAdmin:true,
})

console.log(add(23,23));
console.log(subtract(50,15));
console.log(square(9));
console.log(createObject());


// Some more use of arrow function

const numbers = [23 ,54, 64,12,99];

// numbers.forEach(function (n){
//     console.log(n);
// })

// we can use arrow function in callbacks
// Callbacks are when we pass functions into another functions
numbers.forEach(n => console.log(n));