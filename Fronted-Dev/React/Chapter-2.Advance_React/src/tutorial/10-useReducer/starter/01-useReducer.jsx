import React from "react";
import { data } from "../../../data";


const ReducerBasics = () => {
  const [people, setPeople] = React.useState(data);
  // const [ isReset , setIsReset ] = React.useState(false);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
    // if (newPeople.length === 0){
    //   setIsReset(true);
    // }
  };

  const clearList = () => {
    setPeople([]);
    // setIsReset(true);
  }

  const resetList = () => {
    setPeople(data);
    // setIsReset(false);

  }

  return (
    // <div>
    //   { !isReset ? <div>
    //   {people.map((person) => {
    //     const { id, name } = person;
    //     return (
    //       <div key={id} className="item">
    //         <h4>{name}</h4>
    //         <button onClick={() => removeItem(id)}>remove</button>
    //       </div>
    //     );
    //   })}
    //   <button
    //     className="btn"
    //     style={{ marginTop: "2rem" }}
    //     onClick={clearList}
    //   >
    //     clear items
    //   </button>
    // </div> : <button className="btn" onClick={resetList}>reset</button>}
    // </div>

    // Better Approach
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {!(people.length < 1) ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearList}
        >
          clear items
        </button>
      ) : (
        <button className="btn" onClick={resetList}>
          reset
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
