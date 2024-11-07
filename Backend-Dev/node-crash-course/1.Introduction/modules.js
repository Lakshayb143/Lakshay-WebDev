
// const getPeopleData = require('./peopleData'); // require runs the file we import

// console.log(getPeopleData)

// or we can do that
const { people } = require('./peopleData');
console.log(people.length);

// Node js builtin Modules to use
const os = require('os'); // Operating system
// console.log(os)
console.log(os.platform());
console.log(os.homedir());
