import { useState, useEffect } from "react";

const ToggleChallenge = () => {
  const [condition, setCondition] = useState(false);

  const toggleCondition = () => {
    setCondition(!condition);
  };

  return (
    <div>
      <button className="btn" onClick={toggleCondition}>
        {condition ? "Remove" : "Render"}
      </button>
      {condition && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  return (
    <div>
      <h4>Toggle Challenge</h4>
      <h4>Compenent will render Conditionally !!</h4>
    </div>
  );
};
export default ToggleChallenge;
