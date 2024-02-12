// Object Destructuring & Naming in JavaScript

const firstName = "Lakshay";
const lastName = "Bhatia";
const age = 20;

const person = {
    firstName:"Tamanna",
    lastName,
    age,
}

// console.log(person);




const todo = {
    id : 12,
    name : "Complete the assignment",
    isCompleted:true,
    user : {
        userId : 2,
        userName: "Lakshay",
    }
}

// Destructuring the Object

let {
    id , 
    name : taskName,
    user : {userName}
} = todo;//destructing object

console.log(taskName);
console.log(userName);


// Destructing the Array

const numbers = [2,4,6,8,10,12];

const [element1 , element2 , element3 , ...others] = numbers;

// Here , ...others is known as rest operator

console.log(element1,element2,element3 , others);










