console.log("Learning Callbacks");

// Callbacks are functions that are passed as arguments to other functions.
// Callbacks are used to handle asynchronous operations.
// Callbacks are used to make sure that a function is not executed before a task is completed.

// function foo(bar){
//     bar();
// }


// foo(() => console.log("Callback function"));


// Pizza application 

function orderPizza(type, name, Callback){
    console.log(`Pizza ${type} ${name} is ordered`);

    setTimeout( () => {
        // console.log("Your pizza is ready");
        const message = `Yeahh !! Pizza ${type} ${name} is ready`;
        Callback(message);
    }, 3000);
}




orderPizza('veg', 'cheese barbeque' , (message) => console.log(message));

