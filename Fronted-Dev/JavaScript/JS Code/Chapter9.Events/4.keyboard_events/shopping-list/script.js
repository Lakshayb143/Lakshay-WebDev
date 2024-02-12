
const itemInput = document.getElementById('item-input');



// Action on Event
const onKeyPress = () => {
    console.log('Key Pressed');
}


const onKeyUp = (e) => {
    console.log("Key Up");
}

const onKeyDown = (e) => {
  // Keys
//   console.log(e.key);
  // if(e.key === 'Enter'){
  //     alert('You pressed Enter');
  // }

  // KeyCodes
  //https://www.toptal.com/developers/keycode
  if(e.keyCode === 13){
    alert("You pressed enter");
  }

 
  // Codes
  if(e.code === 'Digit1'){
    console.log("You pressed 1");
  }
  console.log(e.code);

  // 
  if(e.repeat){
    console.log("You are holding a key" + e.key);
  }

  console.log("Shift :" + e.shiftKey);
  console.log("Contorl :" + e.ctrlKey);
  console.log("Alt :" + e.altKey);
}




// keyBoard Events
// itemInput.addEventListener('keypress',onKeyPress);
// itemInput.addEventListener('keyup',onKeyUp);
itemInput.addEventListener('keydown',onKeyDown);

