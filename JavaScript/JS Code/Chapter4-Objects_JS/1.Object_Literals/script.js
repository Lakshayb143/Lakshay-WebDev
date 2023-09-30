// Objects in JS

let x;

const person = {
    // Properties of Object
    name : "Lakshay Bhatia",
    age : "15",
    Admin : true,
    address : {
        House_no : "13",
        town : "NIT",
        city : "Sonipat",
        state : "Haryana",
        country : "India",
    },
    hobbies : ['music','sports','coding'],

    // Methods of Object
    getName(){
        return this.name;
    },
    isAdmin(){
        return this.Admin;
    },
    toString(){
        return `Name: ${this.getName()} Age:${this.age} Is admin?${this.isAdmin()}`;
    }
    
};

console.log(person);
x=Object.keys(person);  //console.table(x);
x=Object.values(person); //console.log(x);
x=Object.entries(person);// returns array with key value pair as object inside it

// console.log(x);
// Accessing the properties
x = person.name;
x = person['name']; // We can also access using this.


x = person.address.state;
console.log(x)

x = person.hobbies[2];

console.log(x);

// Updating the properties

person.hobbies.push('Dance');
console.log(person.hobbies);


// Deleting a property

delete person.age;
console.log(person.age);


// Adding a new property

person.isMarried = true;
console.log(person);


// Adding methods to the Object - 2 way

person.introduction = function (){
    return `Hi, I am ${this.name}.`;
}

console.log(person.introduction());




// let firstName = person.getName();
// console.log(firstName , typeof firstName);

// console.log(person.isAdmin());

// x = person.toString();
// console.log(x);



