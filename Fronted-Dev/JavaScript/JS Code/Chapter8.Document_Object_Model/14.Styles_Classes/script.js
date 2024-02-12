

// Selecting Some Elements
const para = document.querySelector('p');

const itemList = document.querySelector('.item-list');
// console.log(itemList);

const item = itemList.querySelectorAll('li');


function introClassList(){
    // class Name
    // console.log(itemList.classList);

    // para.className = 'card dark';


    // a better way -classList

    // itemList.classList.forEach((item) => console.log(item))
    // para.classList.add('dark');

    // useful method
    // para.classList.toggle('dark'); // When you click it will add the class dark and when you click again it will remove the class

    para.classList.remove('card');

    // para.classList.replace('card','dark');


}

function getRandomColor(){
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}



function changeStyle(){
    item.forEach((item,index) => {
        if ( index % 2 ===0){
            const style = `background : ${getRandomColor()}`;
            return item.setAttribute("style",style );
        }
    })
}




// document.querySelector('button').onclick = introClassList;
document.querySelector('button').onclick = changeStyle;





















