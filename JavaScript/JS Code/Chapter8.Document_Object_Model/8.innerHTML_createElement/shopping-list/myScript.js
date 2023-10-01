// Quick and Dirty Way
function createListItem(item){
    const li = document.createElement('li');
    li.innerHTML = `${item}
      <button class="remove-item btn-link text-red">
    <i class="fa-solid fa-xmark"></i>
    </button>`;

    document.querySelector('.items').appendChild(li);


}





// Clean and performance
function createNewListItem(item){
    const li = document.createElement('li');
    const text = document.createTextNode(item);


    const removeBtn =document.createElement("button");  //create a button element to add in the list item
    removeBtn.className = "remove-item btn-link text-red";

    const icon = document.querySelector('i');
    icon.className = "fa-solid fa-xmark";

    removeBtn.appendChild(icon);
    li.appendChild(text);
    li.appendChild(removeBtn);

    document.querySelector('.items').appendChild(li);

}






createListItem('Fruits');
createNewListItem('Vegetables');