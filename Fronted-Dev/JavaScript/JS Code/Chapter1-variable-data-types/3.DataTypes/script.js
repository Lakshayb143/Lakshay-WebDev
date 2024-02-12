// Data Types in Java Script

/*

=> Primitive Data Types

1. String : Sequence of Characters.
            Must be stored in quotes or bacticks

2. Integer : Integers as well as floating point numbers.

3. Boolean : Logical entity -> true / false

4. Null : Intentional absence of any object value.

5. Undefined : A variable that has not yet been defined or assigned.

6. Symbol : A Built-In object whos constructor returns a unique symbol.

7. BigInt : Numbers that are greater than the Number data type are handled by this.



=> Reference Types or Objects

Reference types or objects are non primitive values
and when assigned to a variable , the variable is given a reference to that variable.

Object literals , functions and arrays are all reference types.





*/
// Strings
const firstName = "Lakshay";
console.log(firstName); // Lakshay
// console.log("Data type of {%s} -> ",firstName,typeof firstName);


let output = firstName;
console.log(output ,typeof output);

// Boolean

let check = true;
check = 6 < 3;
// console.log(check);

check = ("Lakshay" == "Lakshay");

output = check;
console.log(output , typeof output);

// Numbers

const age = 15;
let temp = 45;

output = temp;
console.log(output , typeof output);

// Null

const invoiceNo = null;

output = invoiceNo;
console.log(output, typeof output);

// undefined
let lastName ;
let score = undefined;

let variable = printer();
console.log(variable);

function printer() {
    return;
}

output = lastName;
console.log(output , typeof output);

// symbol

const id = Symbol('id');

output = id;
console.log(output , typeof output);

// BigInt
const population = 939329329329329329329324324324324324324324329n;
output = population ;
console.log(output, typeof output)

console.log(variable)