const numbers = [1, 2, 3, 4, 5, 6];

let doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers);

// Adding String to the array

const stringArray = numbers.map((number) => "Number " + number);
console.log(stringArray);

// doing double using forEach()

doubledNumbers = [];
numbers.forEach((number) => {
  doubledNumbers.push(number * 2);
});
console.log(doubledNumbers);

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

// Create an array of company names
const companyNames = companies.map((company) => company.name);

console.log(companyNames);

// Create an array of company category

const companyInfo = companies.map((company) => {
  return {
    name: company.name,
    category: company.category,
  };
});

console.log(companyInfo);

// Chain map method

const doubleAndSqrt = numbers
  .map((number) => number * 2)
  .map((number) => Math.sqrt(number));

console.log(doubleAndSqrt);

// Chaining different methods

// first filter out even values and then double them

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const chain = arr
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2);

console.log(chain);
