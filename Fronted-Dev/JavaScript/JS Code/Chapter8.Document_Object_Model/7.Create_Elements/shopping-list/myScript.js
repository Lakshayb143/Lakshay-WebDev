const createDiv = document.createElement("div");
createDiv.className = "js-element";
createDiv.id = "js-element-1";
createDiv.setAttribute("title", "my-element");

// createDiv.innerText = 'element created from javascript';
// Above one is not the best way
// We have another method for doing that

const text = document.createTextNode("Element from javascript");
// console.log(text);
createDiv.appendChild(text);

// console.log(createDiv);

// now let put our div element in the web page
// document.body.appendChild(createDiv);
document.querySelector('ul').appendChild(createDiv);
