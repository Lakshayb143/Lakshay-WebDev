// If we put script tag in head tag of html
// the page is not loaded

// document.querySelector('h1').textContent = "hello world"; it will show the below error
/*
Uncaught TypeError: Cannot set properties of null (setting 'textContent')
    at script.js:4:42

*/

// So what we can do is
window.onload = function() {
    document.querySelector("h1").textContent = "hello world";
    // console.log(document.querySelector('h1'));
}


// we can also do

// window.addEventListener('load',() => {
//     document.querySelector("h1").textContent = "hello world";
//     console.log(document.querySelector("h1"));
// })

// Another method
// window.addEventListener('DOMContentLoaded',() => {
//     document.querySelector("h1").textContent = "hello world";
//     console.log(document.querySelector("h1"));
// })

// Difference between load and DOMContentLoaded
// load waits for whole page to be loaded with all resouces that  is images 
// DOMContentLoaded runs as soon as DOM is parsed and Loaded
// to see the difference

window.addEventListener('load',() => {
    console.log("page is loaded");
})


window.addEventListener("DOMContentLoaded", () => {
    console.log('DOm is loaded');
});

// we can see dom is loaded faster

// Another way is to add defer attribute in script tag
    // <script src="./script.js" defer></script>;
// document.querySelector('h1').textContent = "Hello world"; /// NOw it works perfectly fine.


// Some other window function
window.addEventListener('resize',() => {
    document.querySelector("h1").textContent = `Resized to ${window.innerWidth} * ${window.innerHeight}`;
})

window.addEventListener('scroll',() => {
    console.log(`Scrolled : ${window.scrollX} * ${window.scrollY}`);
    if(window.scrollY > 52){
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';

    }else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
})

window.addEventListener('focus',()=>{
    document.querySelectorAll('p').forEach((p) => p.style.color = 'blue')
})

window.addEventListener('blur',()=>{
    document.querySelectorAll('p').forEach((p) => p.style.color = 'black')
})


















