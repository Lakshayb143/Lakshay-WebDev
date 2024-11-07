// Just like javascript in browser have window object

// Here in node we have global object
// console.log(global);

global.setTimeout(() => {
    console.log("In the timeout");
}, 3000);

// we global is global we can access directly
let int = setInterval( () => {
    console.log("In the Interval");
}, 3000)


// Some Important Properties
console.log(__dirname); // returns the current directory with absolute path
console.log(__filename); // same as above but includes the filename