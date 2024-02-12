// Another way of creating object in JS

const todo = new Object();

todo.id = 1;
todo.taskName = 'Learn JavaScript';
todo.isCompleted = false;

console.log(todo);


// Spread operator with Objects (...)

const obj1 = {a:1,b:2};
const obj2 = {c:3,d:4};

const obj3 = {obj1 , obj2};
let x = obj3;

console.log(x);

// Better way is to use spread operator(...) or Object.assign()

const obj4 = {...obj1,...obj2};
x = obj4;
console.log(x);
// or we can do
const obj5 = Object.assign({},obj1,obj2);
console.log(obj5);


// Array of objects
const todo_list = [
    {id:1, taskName:"Buy an Ipad" , isCompleted:false},
    {id:2, taskName:"Upgrade your ram" , isCompleted:true},
    {id:3, taskName:"Netflix" , isCompleted:false},
];

console.log(todo_list[0].taskName);


// Some Object() Methods.
x = Object.keys(todo);
console.log(x);

x = Object.values(todo);
console.log(x);

x = Object.entries(todo);
console.log(x);

x = Object.defineProperty(todo, 'assignedPerson',{
    value :"Lakshay",
    writable : true,
    enumerable:true,
});


console.log(todo);



let check = todo.hasOwnProperty('id');
console.log(check);

    // Imp Method.
// As we know we can add and delete properties, but what we don't want anyone to add or delete
Object.seal(todo); // Now we can't add or delete properties
todo.id  = 23;
todo.assignedPerson = "Rahul";
delete todo.taskName;
console.log(todo);

// we can check also
console.log(Object.isSealed(todo));

// After sealing we cant' delete or add properties but we can modify the values.
// To prevent this
// So we can use
Object.freeze(todo);
todo.id=456789;
todo.assignedPerson="Lakshay";

console.log(todo);

console.log(Object.isFrozen(todo));

