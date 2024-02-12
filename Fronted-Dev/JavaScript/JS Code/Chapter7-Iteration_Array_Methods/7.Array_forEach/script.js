const socials = ['Twitter','LinkedIn','Instagram','Facebook','WhatsApp'];

// forEach() method


// socials.forEach(function (social){
//     console.log(social);
// })

// same we can do with more clean code
// socials.forEach((element) => console.log(element))

// or we can do
// socials.forEach((social) => {
//     if(social === "Instagram"){
//         console.log(social + " is my favorite social media platform");
//     }else{
//         console.log("$" + social);
//     }
// })


// We can pass more arguments
socials.forEach((social,index,arr) => console.log(`${index} -> ${social}`))

// Passing a defined fucntion

function login(social){
    console.log(`You have successfully logged in to ${social}`);
}

socials.forEach(login) // Don't put curly braces because we don't want to call the functions.
















