// insertAdjacentElement Example
function insertElement(){
  const filter = document.querySelector('.filter');


  const heading1 = document.createElement('h1');
  heading1.textContent = "insertAdjacentElement";

  filter.insertAdjacentElement('beforebegin',heading1);


}

// insertElement();


// insertAdjacentText Example

function insertText(){
  const firstItem = document.querySelector('li:first-child');

  firstItem.insertAdjacentText("afterbegin"," insertAdjacentText ");


}

// insertText();

// insertAdjacentHTML example

function insertHTML(){
  const clearButton = document.querySelector("#clear");
  const html = "<h2> HTML Inserted </h2>";

  clearButton.insertAdjacentHTML('afterend',html);

}

insertHTML();

// insertBefore Example


function insertBeforeItem(){
  // Selecting the parent element.
  const list = document.querySelector('ul');

  // Creating the new element.
  const newItem = document.createElement('li');
  newItem.setAttribute('class','item');
  newItem.textContent = 'insertBefore';

  const thirdItem = document.querySelector("li:nth-child(1)");
  list.insertBefore(newItem,thirdItem);

}

insertBeforeItem();



// Positions

/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/
