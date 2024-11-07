function f1(){
    console.log('f1')

}
function f2(){
    console.log('f2')

}

function main(){
    console.log('main');

    setTimeout(f1,0);

    new Promise( (resolve, reject) => {
        resolve('The promise is resolved successfully');
    }).then( (result) => console.log(result));

    f2();
}


main();