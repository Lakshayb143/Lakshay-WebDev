// The main difference between forEach() and other high order array methods is that
// they return a value which in most cases is a array(modified)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter(function (number) {
//   return number % 2 === 0; // returns true if the condition is met else false
// });

// Short version for this

const evenNumbers = numbers.filter((number) => number%2===0)

console.log(evenNumbers);

// Let's try the above with forEach

// numbers.forEach((element,index) => {
//     if(element%2 !== 0){
//         numbers.splice(index,1);
//     }
// }); 

// Above code will modify the original array
const even = [];
numbers.forEach((element) =>{
    if(element%2 === 0){
        even.push(element);
    }
})

console.log(even);


// Let's do some more
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

// Get only retail companies
const retailCompanies = companies.filter((company) => {
    return company.category==='Retail';
 })

console.log(retailCompanies);

// Get companies that started in or after 1980 and ended in or before 2005

const earlyCompanies = companies.filter((company) => {
    return company.start >= 1980 && company.end <= 2005;
});

console.log(earlyCompanies);





