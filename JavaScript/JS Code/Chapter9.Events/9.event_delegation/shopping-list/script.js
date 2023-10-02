const listitems = document.querySelectorAll('li');

// listitems.forEach((item) => {
//     item.addEventListener('click', (e) =>{
//         e.target.remove();
//     })
// })


// Now another way
const list = document.querySelector('ul');
list.addEventListener('click',(e) => {
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
})