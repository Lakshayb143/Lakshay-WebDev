import { useState } from "react";
import { useEffect } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  const sayHello = () => {
    console.log("hello there");
  };

  sayHello();

  // use effect
  // useEffect( () => {
  //   console.log('hello there from useEffect');
  // })

  useEffect(() => {

    const someFunc = async () => {
      await fetch
    }

    someFunc();
    console.log("Initial render only");
  }, []);

  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};

export default UseEffectBasics;
