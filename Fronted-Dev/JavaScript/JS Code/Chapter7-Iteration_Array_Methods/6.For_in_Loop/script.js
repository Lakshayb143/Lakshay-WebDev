
// for iterating object's values
const colorValues = {
    c1 : "Red",
    c2 : "Blue",
    c3 : "Green",
    c4 : "Yellow",
    c5 : "Purple",
    c6 : "Navy",
}

// for(const key of colorValues){
//     console.log(key);
// }

// above code will show error because a object is not a iterable quantity.

// We will use For in Loop here
// It iterates through the key of the object
for(const key in colorValues){
    console.log(`${key} -> ${colorValues[key]}`);
}


// const person = {
//     name : "lakshay",
//     age : 30,
//     isAuth : true,

// }


// for (const key in person) {
//     console.log(person[key]);

// }


// for in with arrays

const colorArr = ["Red","Blue","Yellow"];

// for(const color in colorArr){
//     console.log(color); // IT will return the index values i.e. key assoicated with it
// }

for (const color in colorArr){
    console.log(colorArr[color]);
}