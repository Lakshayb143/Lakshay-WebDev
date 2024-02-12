

const newItem = document.createElement('li');
newItem.textContent = "Custom Insert After";


const firstItem = document.querySelector("li:first-child");








// Custom insertAfter()
function insertAfter(newItem , referenceItem){
    referenceItem.parentNode.insertBefore(newItem, referenceItem.nextSibling);
}


insertAfter(newItem,firstItem);







