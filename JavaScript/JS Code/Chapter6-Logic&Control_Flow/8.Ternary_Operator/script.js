// const age = prompt("Enter your age = ");
let age = 20;
// Using if statement

if( age >= 18){
    console.log("Adult");
}else{
    console.log("Not an Adult.");
}


// Using a ternary operator
age >= 18 ? console.log("Adult") : console.log("Not an Adult");


// Assigning it to a variable

let check = age>=18 ? "You can vote" : "You cannot vote";
check = age>18 ? true : false;
console.log(check);


// Multiple Statements

let auth = 1;

const redirect = auth ? (console.log('Welcome to dashboard'),"dashboard"):(console.log("Acess denied"),"login page");

console.log(redirect);

// Shorthand for ternary

// auth ? console.log("you are a user") : null;

auth && console.log("You are a user") ; // As && returns right side value only if first is truthy.
