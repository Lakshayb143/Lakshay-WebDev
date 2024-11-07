import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);

  const update = () => {
    // setCount(count + 1);
    //  to make this synchronous we need to update the state every time thhe changes count
    setCount((currentState) => {
      const newState = currentState + 1;
      console.log(newState);
      return newState;
    });
  };

  const handleClick = () => {
    setTimeout(() => {
      console.log("Clicked the button");
      setCount((currentState) => currentState + 10);
    }, 3000);
  };

  const increaseInterval = () => {
    setInterval(() => {
      console.log(count);
      setCount(count + 1);
    }, 2000);
  };

  return (
    <div>
      <h1>Your Count is {count}</h1>
      <button className="btn" onClick={update}>
        Increase
      </button>
      <br></br>
      <button className="btn" onClick={handleClick}>
        Increase Delay
      </button>
      <br></br>
      <button onClick={increaseInterval} className="btn">
        Increase with Interval
      </button>
    </div>
  );
};

export default UseStateGotcha;
