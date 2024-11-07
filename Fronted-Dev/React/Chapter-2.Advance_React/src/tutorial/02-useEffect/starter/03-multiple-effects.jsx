import { useState } from "react";
import { useEffect } from "react";

const MultipleEffects = () => {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  useEffect(() => {
    console.log("Hello from first useEffect");
  }, [firstValue]);

  useEffect(() => {
    console.log("Hello from second useEffect");
  }, [secondValue]);

  return (
    <div>
      <h1>Value : {firstValue}</h1>
      <button className="btn" onClick={() => setFirstValue(firstValue + 1)}>
        Increase First Value
      </button>
      <h1>Value : {secondValue}</h1>
      <button className="btn" onClick={() => setSecondValue(secondValue + 1)}>
        Increase Second Value
      </button>
    </div>
  );
};

export default MultipleEffects;
