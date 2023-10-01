function removeClearButton() {
    const clearBtn = document.querySelector("#clear");

    clearBtn.remove();
    console.log("Button removed");
}


function removeFirstChild(){
    const parent = document.querySelector('ul');
    const firstItem = document.querySelector('li:first-child');


    parent.removeChild(firstItem);
    console.log("First Child removed");

}

function removeItem(itemNumber) {
    const parent = document.querySelector('ul');
    const item = document.querySelector(`li:nth-child(${itemNumber})`);

    parent.removeChild(item);
    console.log(`${itemNumber} removed successfully`);

}

// Also
function removeItem2(itemNumber){
    const list  = document.querySelectorAll('li');
    list[itemNumber - 1].remove();
    console.log(`${itemNumber} removed successfully`);

}

// We can shorten this up
const removeItem3 = (itemNumber) => document.querySelectorAll('li')[itemNumber - 1].remove();

removeClearButton();

// removeFirstChild();
// removeFirstChild();

// removeItem(3);
removeItem3(3);













