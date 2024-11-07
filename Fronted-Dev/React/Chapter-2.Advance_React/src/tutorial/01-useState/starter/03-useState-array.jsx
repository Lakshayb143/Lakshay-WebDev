import { data } from "../../../data";
import React from "react";

const UseStateArray = () => {
    const [people, setPeople] = React.useState(data);

    const removePerson = (id) => {
        const newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    };

    const removeAll = () => {
        setPeople([]);
    };

    return (
        <div>
            {people.map((person) => {
                const { id, name } = person;
                console.log(person);
                return (
                    <div key={id}>
                        <h3>{name}</h3>
                        <button onClick={() => removePerson(id)}>remove</button>
                    </div>
                );
            })}

            <button
                className="btn"
                // onClick={removeAll}
                onClick={() => setPeople([])}
                style={{ margin: "1.5rem" }}
            >
                Clear Items
            </button>
        </div>
    );
};

export default UseStateArray;
