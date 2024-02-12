const button = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2)');
const form = document.querySelector('form');


// Event Bubbling

button.addEventListener('click',(e) => {
    e.stopPropagation(); // It will stop event bubbling
    alert("Button was clicked");
});

// div parent of button
div.addEventListener('click',() => alert('div was clicked'));
form.addEventListener('click',() => alert("Form was clicked"))

document.body.addEventListener('click',() => alert("Body was clicked"))

// Now there might be cases you don't want this to happen,
// for that there is a function of event object that is stopPropagation()
