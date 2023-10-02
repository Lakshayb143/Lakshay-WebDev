console.log('Starting Events');

// There are multiple ways to add event listeners

// 1 . inline listners -> We add these in the HTML .
// But this is not recommended and we shouldn't use it.

/*

<button onclick="alert('clear')" id="clear" class="btn-clear">
  Clear All
</button>;

*/

// 2. JavaScript Event Listeners

const clearBtn = document.querySelector('#clear');

// action on event
function sample(){
    alert("clearing Items")
}

function sample2(){
    console.log('clear');
}

// adding event listener
// clearBtn.onclick = sample;
// clearBtn.onclick = sample2; // we will not get a alert, it will only run sample2()

// 3. addEventListner() - most modern and recommended

// clearBtn.addEventListener('click',sample);
// clearBtn.addEventListener('click',sample2);

// It will first call sample() , then sample2();

/*
** ZB **
alert is a blocking operation -> More on this on synchronous and asynchronous

*/

// setTimeout(() => clearBtn.removeEventListener('click',sample),5000);

// setTimeout(() => clearBtn.click(),5000);


// ---------------------------------------------------------------------------------------

function clearAll(){
    const itemList = document.querySelectorAll('ul li');
    // console.log(itemList);

    itemList.forEach((item) => item.remove());
}

function clearAll2(){
    const list = document.querySelector('ul');
    list.innerHTML = '';
}

function clearAll3(){
    const itemList = document.querySelector('ul');

    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    }

}
clearBtn.addEventListener('click',clearAll3);


