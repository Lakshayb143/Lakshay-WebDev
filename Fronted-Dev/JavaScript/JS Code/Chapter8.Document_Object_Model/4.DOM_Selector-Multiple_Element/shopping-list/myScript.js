// querySelectorAll() 
// Returns a Node List

const listItems = document.querySelectorAll(".item");
console.log(listItems);

// Access Elements by index
let firstItem = listItems[0]; // First Element in the array
console.log(firstItem.innerText);

// Setting color for a specified element
listItems[1].style.color = 'gold';

// we can use forEach() on a NodeList
listItems.forEach((item,index) => {
    item.style.color = 'blue';
    if(index === 1){
        item.style.color = 'green';
    }
    if (index === 0) {
    item.innerHTML = ` Dragon Fruit
    <button class="remove-item btn-link text-red">
      <i class="fa-solid fa-xmark"></i>
    </button>`;
    }
})

// getElementsByClassName()
// Returns an HTMLCollection

const listItems2 = document.getElementsByClassName('item');
console.log(listItems2);

console.log(listItems2[0].innerText);

const listItemArray = Array.from(listItems2);

listItemArray.forEach((item) => {
    console.log(item.innerText);
})

// getElementsByTagName()
const listItems3 = document.getElementsByTagName('li');
console.log(listItems3);

console.log(listItems3[0].innerText);










