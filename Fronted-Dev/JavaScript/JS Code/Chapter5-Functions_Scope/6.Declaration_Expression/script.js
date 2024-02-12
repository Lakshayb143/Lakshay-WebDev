console.log(addDollarSign("{lakshay}")); // The reason for this is hoisting.

// In JS , all the function declaration are moved to the top of page before exection
// Hoisting is the process of moving all the function and variable declaration 
// at the top of code before it runs

// Function Declaration
function addDollarSign(value){
    return "$" + value;
}

console.log(addDollarSign("{lakshay}"));

// Function Expression

// console.log(addPlusSign(100)); // error

var addPlusSign = function (value){
    return '+' + value;
};

console.log(addPlusSign(100));







