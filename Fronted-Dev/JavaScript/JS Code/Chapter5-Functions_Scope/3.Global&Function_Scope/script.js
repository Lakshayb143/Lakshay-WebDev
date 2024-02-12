// Global scope means the things we can access anywhere
/*
Like if we do window on console ,we will get it
window.alert() is a global function
and we use alert() only

or we can use
window.innerWidth

*/

// alert("Hello World")
// console.log(window.innerWidth);


// Variables in Global Scope
// If variable is not created inside any function or block , it is in the global scope

const firstName = "lakshay";
let x = 100;

console.log(firstName + " in global scope");


function add(x,y)
{
    let sum = x + y;
    console.log(`sum variable with value ${sum} is in the function scope`);
    
}


add(500,400);
// if we try to access it outside the function scope

// console.log(sum); // we will get a error 

function add(){
    const y = 10;
    const x = 1; // variable shadowing - overriding the global var
    console.log(x+y);
}
console.log(x); // We will get the value of global x
// console.log(y); // error
add();


if(1){
    let userName="Lakshay" ;   /// var keyword defines variables which are accessible everywhere and also they have their own local scope .
    console.log(userName + " in the block scope");
}

// console.log(userName); // error







