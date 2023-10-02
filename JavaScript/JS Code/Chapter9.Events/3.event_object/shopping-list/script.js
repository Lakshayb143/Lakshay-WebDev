/*
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to (These are the same in this case
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsetY` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen
- `screenY` - The y position of the mouse click relative to the screen
*/


const image = document.querySelector('img');


// Actions on Events
const onClick = (e) => console.log(e.target); // Give whole info about pointerEvet







// Event Listeners


image.addEventListener('click',onClick);
// image.addEventListener("click",onClick,true);// false for capturing phase and true for bubbling phase
document.body.addEventListener('click',(e) => {
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.type);
})























