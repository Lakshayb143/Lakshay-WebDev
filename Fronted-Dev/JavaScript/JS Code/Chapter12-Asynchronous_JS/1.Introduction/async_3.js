const first_promise = new Promise((resolve, reject) => {
  resolve("This promise is resolved");
});

// The callback function passed in Promise constructor is known as Executor function

first_promise.then((result) => console.log(result));
