console.log("Promise API");

// Promise.all() -> this method executes multiple promises in parallel and returns a new promise. 
// If any promise in all() rejects,the entire promise.all() will reject.

const red = new Promise( (resolve, reject) => {
    setTimeout(() => {
        resolve("Red");
    } , 1000);
})

const blue = new Promise( (resolve, reject) => {
    setTimeout(() => {
        resolve("Blue");
    } , 2000);
})

const green = new Promise( (resolve, reject) => {
    setTimeout(() => {
        reject("Error: Green is not available.");
    } , 0);
})

// const allPromises =  Promise.all([red,blue,green]);
// console.log(allPromises)
// allPromises.then( (data) =>{
//     console.log(data)
// }
// )

const testAll = async() => {

    try {
        const data = await Promise.all([green,blue,red]);
        data.forEach( (color) => {
            console.log(`Lovely ${color} color`);
        })
        
    } catch (error) {
        console.log(error);
        
    }
}

// testAll();

// To overcome the problem of Promise.all() we have Promise.allSettled() method.

const testAllSettled = async () => {
  try {
    const data = await Promise.allSettled([green, blue, red]);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// testAllSettled();

// Now let's see Promise.any()

const testAny = async () => {
  try {
    const data = await Promise.any([green, blue, red]);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// testAny();

// Promise.race()

const testRace = async () => {
  try {
    const data = await Promise.race([green, blue, red]);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

testRace();



