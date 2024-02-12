const iteminput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');


// Actions on Events


function onInput(e){
    // console.log(e.target.value);
    heading.textContent = e.target.value;
}

function onChecked(e) {
    console.log(e.target.checked); // returns true or false
    
}

function onFocus(){
    console.log("focus");
    iteminput.style.outline = '3px double black';
}

function onBlur(){
    console.log("input is out of focus");
    iteminput.style.removeProperty('outline');
}



// Event Listeners

iteminput.addEventListener('input',onInput);
priorityInput.addEventListener('input',onInput);
// priorityInput.addEventListener('change',onInput);


checkbox.addEventListener('input',onChecked);

// There are 2 more for inputs
iteminput.addEventListener('focus',onFocus);
iteminput.addEventListener('blur',onBlur);







