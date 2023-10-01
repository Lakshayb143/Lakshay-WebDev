function createNewItem(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  // const button = document.createElement('button');
  // button.className = 'remove-item btn-link text-red';

  const button = createButton(
    "remove-item btn-link text-red",
    "fa-solid fa-xmark"
  );

  // const icon = document.createElement('i');
  // icon.className = 'fa-solid fa-xmark';

  // button.appendChild(icon);
  li.appendChild(button);

  document.querySelector('.items').appendChild(li);
}

function createButton(buttonClass,iconClass){
  const button = document.createElement("button");
  button.className = buttonClass;

  const icon = createIcon(iconClass);

  button.appendChild(icon)

  return button;

}

function createIcon(iconClass) {
  const icon = document.createElement("i");
  icon.className = iconClass;
  return icon;
  
}

createNewItem('Cheese');
