import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("Lakshay");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div style={{ border: "4px solid black" }}>
      <h1>short circuit - examples</h1>
      <h2>{text || "Default Value"}</h2>
      {name && (
        <div>
          <h2>Processing...</h2>
          <h2>{name}</h2>
        </div>
      )}
      {/* {!name && (
        <div>
          <h2>Processing...</h2>
          <h2>{name}</h2>
        </div>
      )} */}
      {name && <SomeComponent {...user}/>}
      <br />
      <h2>Ternary Operator</h2>
      <button className="btn" onClick={() => setIsEditing(!isEditing)}>{isEditing ? 'edit' : 'add'}</button>
      {user ? <div>
        <h2>Hello there , {user.name}</h2>
        </div>: <div>
          <h2>Please Login !!</h2>
        </div>}
    </div>
  );
};

const SomeComponent = ({ name }) => {
  return (
    <div style={{ border: "4px solid black", padding: "2rem" ,margin:'2rem'}}>
      <h2>Using Short Circuit with Component</h2>
      <h3>{name}</h3>
    </div>
  );
};

export default ShortCircuitExamples;
