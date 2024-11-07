console.log("Async & Await");



// These are two keywords that are used to work with promises.
// Async is used to make a function asynchronous.
// Await is used to wait for a promise to resolve.


// - We use async to return a promise
// - We use await to wait and handle a promise.

function sayHola() {
    return 'Hola';
}

// function WrongUse() 
// {
//     const greet = await sayHola();
//     console.log(greet);
// }

// WrongUse();
// error - 'await' expressions are only allowed within async functions and at the top levels of modules


async function getUser() {
    const greet = await sayHola();
    // Function after await can be synchronous or asynchronous.
    // But await must be used inside of a async function.
    console.log(greet);
    return { name : "Lakshay" , username:'lb143'};
}

const user = await getUser();
console.log(user);


// Handling errors

const validateUsers = ({userId, password}) => {
    return new Promise((resolve,reject) => {
        if (userId && password){
            resolve("Authenticated");
        }else{
            reject({message : 'Invalid User Credentials'});
        }
    })
}


const app = async() => {
    const data = {
        userId : 'Lakshay',
        password : ''
    }

    try{
        
    const result = await validateUsers(data);
    console.log(result)
    }
    catch(e){
        console.log(e.message);
    }

}

app();