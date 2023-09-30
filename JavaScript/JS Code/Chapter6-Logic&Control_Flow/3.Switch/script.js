const date = new Date();
console.log(date);

const month = 90;
console.log(month);

const hour = date.getHours();


switch (month) {
    case 1:
        console.log("January");
        break;
    
    case 2 :
        console.log("February");
        break;
    
    case 3 :
        console.log("March");
        break;
    
    case 4:
        console.log("April");
        break;
    
    case 5:
        console.log("May");
        break;
    
    case 6:
        console.log("June");
        break;
    
    case 9 :
        console.log("September");
        break;

    default: // If none of the case matches , it will run.
        console.log("Invalid input");
        break;
}


// Also use for ranges

switch (true) {


    case hour < 18:
        console.log("Good afternoon");
        break;
    
    
    case hour < 12:
        console.log("Good morning");
        break;



    default:
        console.log("Invalid output");
        break;
}






