let output;

document.querySelector('.container').style.border = '5px solid #333'

const parent = document.querySelector('.parent');

parent.style.border = '4px solid #333';
parent.style.padding = '20px';

output = parent.childNodes;

output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;

output = parent.childNodes[3].textContent;
output = parent.childNodes[3].outerHTML;

parent.childNodes[3].innerText = 'Child One';
parent.childNodes[3].style.color = 'purple';
parent.childNodes[3].style.backgroundColor = 'yellow';

parent.childNodes[5].innerText = 'Child Two';
parent.childNodes[5].style.color = 'purple';
parent.childNodes[5].style.backgroundColor = 'lightgreen';

parent.childNodes[7].innerText = 'Child Three';
parent.childNodes[7].style.color = 'purple';
parent.childNodes[7].style.backgroundColor = 'lightblue';


output = parent.firstChild;
output = parent.lastChild;

// parent.lastChild.textContent = 'sample from javascript';

// Parent node

const child = document.querySelector(".child");

const parentFromChild = child.parentNode;
output = parentFromChild;

parentFromChild.style.backgroundColor = '#ccc';

//  Siblings

const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem.previousSibling.previousSibling;
output = secondItem.nextSibling.nextSibling;




console.log(output);