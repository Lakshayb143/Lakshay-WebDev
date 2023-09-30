
const arr = [32,45,12,21,4];
console.log(arr);

// Array Methods

// Methods for manipulating the array.
arr.push(100); // Adding the element at the end of arr.
console.log(arr);

arr.pop(); // Removing element from last .
console.log(arr);

arr.unshift(1); // Adding the element at start of arr.
console.log(arr);

arr.shift(); // Removing element from start
console.log(arr);

// arr.sort();
// console.log("Sorted : ", arr)

// Reversing the array
arr.reverse();
console.log(arr);
arr.reverse();

// Methods that returns some sort of value

let check = arr.includes(12);
console.log(check);
check= arr.includes('12');
console.log(check);

let x = arr.indexOf(45);

x = arr.indexOf(232);

x = arr.slice(1,4); // it doesn't change the original array.
console.log(x , arr);
// x = arr.splice(1,2); // It removes the slice part from original array.
// Second argument is how many elements you want to take.

// we can use splice to remove a element from middle
x = arr.splice(2,1);
console.log(x,arr);

