


const logo = document.querySelector('img');
console.log(logo);

// Actions on  Events

const onClick = () => console.log('click event');
const onDoubleClick = () => {
    let sp = document.body.style;

    if(sp.backgroundColor !== 'black'){
        sp.backgroundColor = 'black';
        sp.color = 'whitesmoke';

    }else{
        sp.backgroundColor = "white";
        sp.color = "black";
    }
}

const onMouseDown = () => console.log("Mouse Down Event");
const onMouseUp = () => console.log("Mouse Up Event");
const onMouseWheel = () => console.log("Mouse Wheel");
const onMouseHover = () => {
    let image = document.querySelector('img');
    image.setAttribute('title','icon');
    image.style.border = '3px solid black';
    image.style.padding = '5px';
    console.log("Mouse Hover Event");
}
const onMouseOut = () => {
    console.log("Mouse Out Event");
    let image = document.querySelector('img');
    image.style.removeProperty('border');

}

const onDrag = () => {
    console.log("Dragging the object");
}

const onDragEnd = () => {
    console.log("Object is dropped at its destination.");

}

// Event Listeners
logo.addEventListener('click',onClick);
logo.addEventListener('dblclick',onDoubleClick); // Double Click

logo.addEventListener('contextmenu',(e) => {
    e.preventDefault();
    console.log("RIght click");
});                                             // Right Click

logo.addEventListener('mousedown',onMouseDown);
logo.addEventListener('mouseup',onMouseUp);
logo.addEventListener('wheel',onMouseWheel);

// Hover Events

logo.addEventListener('mouseover',onMouseHover);
logo.addEventListener('mouseout',onMouseOut);

// Dragging Events

// logo.addEventListener('dragstart',(e) => e.preventDefault());

logo.addEventListener('drag',onDrag);
logo.addEventListener('dragend',onDragEnd);



