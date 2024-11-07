// * Static Imports

// import { sayHi , sayHola } from './greeting.js';

// sayHi();
// sayHola();

// * Dynamic Imports

// const condition = parseInt(prompt("You want to import ?"));

// if ( condition) {
//     const { sayHi , sayHola } = await import('./greeting.js');
//     console.log("Import successful");
//     sayHi();
//     sayHola();
// }else{
//     console.log("Import failed");
// }


// * Advance Topic
const promises = Promise.all( [
    await import('./greeting.js'),  
    await import('../calculations.js')
])

console.log(promises);

promises.then( result => {
    console.log(result);
    result[0].sayHi();
    console.log(result[1].subtract(200, 5));
})