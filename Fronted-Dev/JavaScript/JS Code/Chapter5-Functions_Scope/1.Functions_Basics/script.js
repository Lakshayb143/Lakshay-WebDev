// Declaring a function
function greet(){
    console.log("Hello World");
}

// Calling or Invoking a function
greet();

// Function with parameter x and y
function add(number1 , number2){
    sum = number1 + number2;
    console.log(sum);
}


// Calling function with 2 and 3 as arguments
add(3,5);

// But if we do
console.log(add(3,5)); // We see undefined because the functions doesn't reutrn anything

// Function with return statement

function greet(firstName){
    return `Hello ${firstName}.`;
}

output = greet("Lakshay");
console.log(`Output: ${output}`);







