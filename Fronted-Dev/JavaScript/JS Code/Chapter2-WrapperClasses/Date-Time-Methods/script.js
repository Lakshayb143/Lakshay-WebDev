let date = new Date();
let x;

x = date.getFullYear();
console.log(x);

x = date.getMonth() + 1;
// 1 is added because months are indexed from 0 to 11;
console.log(x);

x = date.getDate();
console.log(x);

x = date.getDay();
console.log(x);

x = date.getHours();
console.log(x);

// similarly
x = date.getMinutes();
x = date.getSeconds();
x = date.getMilliseconds();

let today = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
console.log(today);

// Another Method
let y = date.toLocaleString("default",{month:'short'});
console.log(y);


// API - INTL FOR DATES


// hi-IN ->	Hindi (India)
// hi    -> Hindi
// mr-IN	Marathi (India)
// gu-IN	Gujarati (India)
// For more, refer the link - http://www.lingoes.net/en/translator/langcode.htm

// date = Intl.DateTimeFormat("mr-IN").format(date);
// console.log(date);
date = Intl.DateTimeFormat("default",{year : '2-digit', month:'long'}).format(date);
console.log(date);