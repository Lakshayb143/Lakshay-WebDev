// document.getElementbyId()

console.log(document.getElementById("app-title"));

// Get attributes of a element
console.log(document.getElementById("app-title").id);
console.log(document.getElementById("app-title").className);
console.log(document.getElementById("app-title").getAttribute("id"));

// Set attributes
document.getElementById("app-title").title = "List UI";
document.getElementById("app-title").setAttribute("data", "123");
console.log(document.getElementById("app-title"));
console.log(document.getElementById("app-title").getAttribute("title"));

// Storing in variable
const titleElement = document.getElementById("app-title"); // get first match
// console.log(titleElement);

// Get/Change Content
console.log(titleElement.textContent);
titleElement.textContent = "Hello from JS";
titleElement.innerText = "Hello from JavaScript";
titleElement.innerHTML = "<strong> Hello from JS </strong>";

console.log(titleElement);

// change styles
titleElement.style.color = "grey";
titleElement.style.backgroundColor = "#333";
titleElement.style.padding = "1rem";
titleElement.style.borderRadius = "10px";

// ----------------------------------------------------------------------------------------

// document.querySelector()

// Use any CSS Selector
console.log(document.querySelector("input"));
console.log(document.querySelector(".container"));
console.log(document.querySelector("li:nth-child(2)").innerText);

const secondItem = document.querySelector("li:nth-child(2)");
// console.log(secondItem);
secondItem.innerText = "Mango Shake";
console.log(document.querySelector("li:nth-child(2)").innerText);
secondItem.style.color = "cornflowerblue";

// use these methods on other elements
const list = document.querySelector("#item-list");
console.log(list);
list.style.color = "red";
const firstItem = list.querySelector('li');
firstItem.style.color = "green";
firstItem.style.textDecoration="underline";



