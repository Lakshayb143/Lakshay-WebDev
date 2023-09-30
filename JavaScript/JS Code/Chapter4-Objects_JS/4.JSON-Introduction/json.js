const post =  {
    id : 2324,
    title : "My new Laptop",
    userName : "@brian"
}
console.log(post);

// Convert to JSON String
const str = JSON.stringify(post);
console.log(str)


// Parse JSON to object
const object = JSON.parse(str);
console.log(object);


// This all can be done with array of objects
const allPosts = [
    {
    id : 2324,
    title : "My new Laptop",
    userName : "@brian"
    },
    {
    id : 2333,
    title : "My new Range Rover",
    userName : "@brian"
    },
    {
    id : 2311,
    title : "My new iPad",
    userName : "@brian"
    },
]

const js = JSON.stringify(allPosts);
console.log(js);

console.log(JSON.parse(js));


