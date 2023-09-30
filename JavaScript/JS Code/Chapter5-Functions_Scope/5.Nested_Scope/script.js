function first(){
    const a = 100;


    function second(){
        const b = 200; //  We can access all the variables in parent scope inside the child
        console.log(a+b);
    }
    // console.log(b); // But we cannot access varialbes of child in parent
    second();
}

first();

// This works same for block

if(1){
    const x = 100;

    if(x == 100){
        const y = 200;
        console.log(x + y);
    }

    // console.log(y); // error due to same reason as function().
}





