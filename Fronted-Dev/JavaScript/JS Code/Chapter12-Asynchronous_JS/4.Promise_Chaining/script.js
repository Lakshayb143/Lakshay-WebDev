console.log("Promise Chain.");

// Three things we can do inside .then()
// 1. Return a promise
// 2. Return a synchronous value
// 3.Return/throw an error

let getUser = new Promise((resolve, reject) => {
  const user = {
    name: "lakshay",
    username: "lb143",
    isAdmin : false,
  };

  resolve(user);
});

getUser
  .then((user) => {
    console.log(`Got user ${(user, name)}`);

    // returning a new promise
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve('Bangalore')
    //     }, 2000);
    //   });

    if (!user.isAdmin) {
        throw new Error('You are not allowed');
    }

    return user.username;
  })
  .then((city) => console.log(`User address is ${city}`))
  .catch( (error) => console.log(error));
