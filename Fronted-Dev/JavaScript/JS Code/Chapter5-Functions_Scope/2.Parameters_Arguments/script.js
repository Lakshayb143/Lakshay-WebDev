
function registerUser(user){
    return `${user} is registered on the server.`;
}

// console.log(registerUser("Lakshay143"));

// But if we don't pass a value
console.log(registerUser());
// Output is -> undefined is registered on the server.

// To prevent this we can pass default parameters.

// Old way - before es2015

function registerUser2(user){
    if(!user){
        user = "Bot";
    }
    return `${user} is registered on the server.`;

}
// console.log(registerUser2());

// But now we have a better way to add Default Parameters

function registerUser3(user = "Bot"){
    return `${user} is registered on the server.` ;  // We are passing Bot as parameter by default and it will be used only when there
}

console.log(registerUser3());
console.log(registerUser3("Lakshay"));

console.log("\n");
console.log("\n");

// Rest Parameters
// What if we don't know how many number of parameters are required

function sum(...numbers){
    sum = 0;
    for (const number of numbers) {
        sum += number;
    }
    return sum;
}

console.log(sum(1,2,3,4,100)); // It basically creates a array of all arguments passed



// Objects as Parameters

function loginUser(user){
    return `The user ${user.userName} with id ${user.id} is logged in`;

}

const user1 = {
    id : 212,
    userName : "Lakshay132",
}

console.log(loginUser(user1));
//or
console.log(loginUser({
    id : 323,
    userName : "Priya32"
}));


// Arrays as parameters

function getRandom(arr){
    return arr[Math.floor((Math.random() * arr.length))];
}

console.log(getRandom([1,2,3,4,5,6,7,8,9,10,11,12,13]));

