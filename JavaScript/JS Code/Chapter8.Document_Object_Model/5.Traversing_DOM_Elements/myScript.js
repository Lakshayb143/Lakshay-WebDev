let output;

// Getting child element from a parent
const parent = document.querySelector(".parent");
output = parent;
output = parent.children;

output = parent.children[1].nodeName; // returns the html tag i.e. DIV , H1 , A(anchor tag)
output = parent.children[1].className;

parent.children[1].innerText = "Child Two";
parent.children[1].style.color = "red";

output = parent.firstElementChild;
parent.firstElementChild.innerText = "Child One";
parent.lastElementChild.innerText = "Child Three";

// Getting parent elements from child
const child = document.querySelector('.child');
output = child;

const parentFromChild = child.parentElement;
output  = parentFromChild;

parentFromChild.style.border = '5px solid #333';
//or
child.parentElement.style.padding = '15px';


// Get sibling elements

const secondChild = document.querySelector('.child:nth-child(2)');
output = secondChild;

// accessing siblings
secondChild.previousElementSibling.style.color = 'blue';
secondChild.nextElementSibling.style.color = 'darkgreen';

output = secondChild.nextElementSibling;


const mainParent = document.querySelector('.container');
output = mainParent.children[1].children;

console.log(output);
