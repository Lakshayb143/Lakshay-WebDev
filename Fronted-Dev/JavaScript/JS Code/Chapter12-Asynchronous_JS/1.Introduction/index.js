// Async => Not occuring at the same time

// Fetch data from server
// Want to execute something with a delay
// Wany to execute something after an event

// 1. Browser APIs / Web APIs
// setTimeout, click, mouse over

// 2. Promises /

function printMe() {
  console.log("Print Me");
}

function test() {
  console.log("test");
}

setTimeout(printMe, 0);
test();

// Above code will first print test and then printMe because of callback queue and event loop.