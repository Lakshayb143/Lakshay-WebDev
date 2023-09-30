// Date
console.log(Date);

const today = new Date();
console.log(today);
console.log(typeof today);

let tod = today.toString();
console.log(today);


// Setting the custom date
let date  = new Date(2021 , 2 , 14 , 18 , 30 ,23); // Months are indexed from 0 to 11
console.log(date);

// or we can do that
date  = new Date('2022-03-14T12:30:15');
date  = new Date('03/14/2023 12:30:15' );

// Issue
date = new Date('2022-07-10')
//  https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
console.log(date);

// Time
date = Date.now();
console.log(date);

date = new Date("03/14/2023 12:30:15");
let t = date.getTime();
console.log(t);


date = new Date(1678777215000); // it will return the date
console.log(date);

// to get time in seconds
date = Math.floor(Date.now() / 1000);
console.log(date);



// Storing a date
let now = new Date();
console.log(today);

let storeDate = new Date(now);
console.log(storeDate);