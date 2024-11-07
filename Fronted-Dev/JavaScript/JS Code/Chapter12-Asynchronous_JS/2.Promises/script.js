console.log("Introduction to Promises");

// let promise = new Promise( (resolve , reject) => {
//     // Do something here
//     let value = 'water';
//     resolve(value);
// })

// let promiseError = new Promise( (resolve , reject) => {
//     // Do something here
//     reject(new Error("Water Fetching Failed"));
// })

// There are 3 states of a promise
// 1. Pending : when execution starts
// 2. Fulfilled : when resolves successfully.
// 3. Rejected : When promise is rejected

// If promise is fulfilled / rejected -> Settled.

// Types of Result of a Promise

// 1. undefined - Initial phase when state is pending.
// 2. value - When promise resolves successfully.
// 3. error - when promise rejects

// Promise handlers
// 1. .then()
// 2. .catch()
// 3. finally()

// let promise = new Promise((resolve,reject) => {

// })

let condition = false;

let promise = new Promise((resolve, reject) => {
  // Do something here
  if (condition) {
    let value = "water";
    resolve(value);
  } else {
    reject(new Error("Jack Fell from the hill...."));
  }
});

promise
  .then((result) => {
    console.log("Promise fulfilled successfully with value : " + result);
  })
  .catch((error) => console.log(error.message))
  .finally(() => console.log("Learned about promises"));

// the elegant feature of promises is that then() itself returns a promise, 
// which will be completed with the result of the function passed to it.