

// IIFE -> Immediately Invoked Function Expression
// There is way in JS that let us create or declare a function,
// and invoke it at the same time

// Why to use IIFE ?

// Reason 1 : to avoid global scope pollution
// let say Admin = 'lakshay' is defined in otherscript.js
// Now if i want to define it here

// const Admin = "lakshay bhatia"; // error -> already defined


// Syntax for IIFE  

(function () {
    const Admin = 'lakshay bhatia';
    console.log(Admin);
    const hello = () => console.log("Hello from IIFE");
    hello();
})();

// IIFE with parameters

(function (x,y) {
    console.log(x+y);
})(10,20);


// Named IIFE

(function hello() {
    console.log("Hello");
})();

// hello(); // You can't call it here.




