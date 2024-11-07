const people = [
    {
        name : "Lakshay",
        username : "lb143",
        location : { street : "133 Defence Colony" , 
        timezone : { offset : '+7:00'}},
    },
    {
        name : "Charlie",
        username : 'Charlie133',
        location : { street : '143 Malibu'},
        
    }, 
    {
        name : 'Susan',
        username : 'sus45',
        location : { street : '34 Apple street', 
        timezone : { offset : '+9:00'}},
    }
]


people.forEach( (person) => {
    // console.log(person.location.street); // Works fine
    // console.log(person.location.timezone.offset) // this will give an error because timezone is undefined for 2 object

    // console.log(
    //     person.location && person.location.timezone && person.location.timezone.offset
    // );

    // Using Optional Chaining
    console.log(person?.location?.timezone?.offset || 'Default Value' );
})