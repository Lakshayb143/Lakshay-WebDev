// Method 1
function replaceFirstItem() {
  const firstItem = document.querySelector("li:first-child");

  const newItem = document.createElement("li");
  newItem.textContent = "New Item After Replacement";

  firstItem.replaceWith(newItem);
}

replaceFirstItem();

// Method 2
function replaceSecondItem(){
    const secondItem = document.querySelector("li:nth-child(2)");

    secondItem.outerHTML = "<li> SecondItem Replaced </li>";

}

replaceSecondItem();

// Method 3
function replaceAllItems(){
    const itemsList=document.querySelectorAll('ul li');

    itemsList.forEach((item,index) =>{
        item.outerHTML = '<li> All Item Replaced </li>';
    })

}

replaceAllItems();

// method 4
function replaceChildHeading(){
    const header = document.querySelector('header');
    const heading1 = document.querySelector('header h1');

    const newHeading2 = document.createElement('h2');
    newHeading2.id = 'app-title';
    newHeading2.textContent = 'Shopping List (Replaced)';

    header.replaceChild(newHeading2,heading1);
}

replaceChildHeading();

