const form = document.getElementById('item-form');
form.setAttribute('autocomplete','off');


console.log(form);

// Action on Event

function onSubmit(e){
    e.preventDefault();

    const item  = document.getElementById('item-input');
    const priority = document.getElementById('priority-input');

    // form validation
    if(item.value === '' || priority.value === '0'){
        alert("Please fill all the fields");
        return;
    }


    console.log(item.value, priority.value);
}

// FormData() object
function onSubmit2(e)
{
    e.preventDefault();
    const formdata = new FormData(form);

    // console.log(formdata);

    const item = formdata.get('item'); // Here the name attribute is passed.
    const priority = formdata.get('priority');
    console.log(item,priority);

}

function submitEntries(e){
    e.preventDefault();
    const formdata = new FormData(form);

    const entries = formdata.entries(); // it will return a iterable object
    // console.log(entries);
    for (const entry of entries) {
        console.log(entry);
    }


}







// Event Listeners
form.addEventListener('submit',submitEntries);



