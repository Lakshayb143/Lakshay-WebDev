const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sum = numbers.reduce(function (accumulator,currentValue){
//     return currentValue + accumulator;
// },0);

// Short hand value

const sum = numbers.reduce((acc,cValue) => acc + cValue,0);

console.log(sum);








