let x;

// Here JS will convert int to string
x = 5 + "5";
console.log(x, typeof x);
// but in this case it will convert string to number
let a = 5 * '5';
console.log(a, typeof a);

// Here JS will convert string to int than addition
x  = 5 + +"5";
console.log(x, typeof x);

// Play with null
x = 5 + null;
console.log("Null numeric value ->",Number(null));
console.log(x, typeof x);

// boolean
console.log("Converting boolean values to numeric values");
console.log("True ->",Number(true), typeof Number(true));
console.log("False -> ",Number(false), typeof Number(false));

//Also
console.log(5 + true , typeof (5 + true));

