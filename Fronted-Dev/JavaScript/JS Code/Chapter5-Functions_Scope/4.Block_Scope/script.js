
const x = 100;

if(1){
    const y = 200; // block scope var
    console.log(x+y);
}

console.log(x);
// console.log(y); // error

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// console.log(i); // error because i is a block scope



// Let look at the difference between var & let

if(1){
    const a = 100;
    let b = 200;
    var c = 300;
}
// console.log(a); //error
// console.log(b); // error
console.log(c) // It is working.

function sample(){
    const d = 100;
    let e = 200;
    var f = 100;
}


sample();
// console.log(f); // It is giving error because var is function and gloabal scoped 


// Important baat
// When we can a variable with var it is added in window section
var g = "global";
// console.log(window);

 

























