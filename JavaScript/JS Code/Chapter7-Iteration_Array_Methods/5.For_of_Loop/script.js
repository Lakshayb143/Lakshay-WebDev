
// A better method to loop through iterable objects

const food = ['pav-bhaji','chole bhature','matar panner','dal tadka'];

// for loop
// for(let i = 0 ; i < food.length ; i++){
//     console.log(`food item ${i+1} is : ${food[i]}`);
// }


// better way to iterate -> for of loop 
for (const food_item of food) {
    console.log(food_item);
    
}


const users = [
    {
        id:1,
        name : "Lakshay"
    },
    {
        id : 2,
        name : "Bipin"
    },
    {
        id : 3,
        name : "Roy"
    }
]


for(let user of users){
    console.log(`User Name -> ${user.name}`);
}


// Loop over strings

let fullName = "Lakshay Bhatia"
for (const letter of fullName){
    console.log(letter);
}


// Loop over maps

let person = new Map();
person.set("id",567894); // key value pair
person.set("name","Lakshay");
person.set("age",20);

console.log(person);

for(const [key,value] of person){
    console.log([key,value]);
}



while(true){
    console.log("Lakshay Bhatia");
}





























