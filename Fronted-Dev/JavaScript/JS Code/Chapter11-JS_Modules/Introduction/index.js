
// * Named Exports
import { sum as add_numbers , subtract} from '../calculations.js';


// * Default Exports
import {default as MyName} from '../Introduction.js';

// or , better way
import MyIntroduction from '../Introduction.js';

// Using Namespaces
import * as calc from '../math_calc.js';


console.log("Learning JS Modules");


// console.log(sum(20,20));
console.log(add_numbers(20,20));    
console.log(subtract(20,30));


MyIntroduction();
MyName();

console.log(calc.divide(20,10));
console.log(calc.multiply(10,20));
