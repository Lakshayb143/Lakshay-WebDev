import { useState, useEffect } from "react";

const CleanupFunction = () => {
  const [value, setValue] = useState(false);

  console.log("render");
  return (
    <div>
      <h2>Cleanup function</h2>
      <button className="btn" onClick={() => setValue(!value)}>
        Toggle
      </button>
      {value && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    console.log("THis is interesting");
    const intId = setInterval(() => {
      console.log("Hello from Interval");
    }, 1000);

    return () => {
      clearInterval(intId);
      console.log("Clean Up");
    };
  }, []);

  return <h4>Hello , Hope you are fine !!</h4>;
};

const RandomComponent2 = () => {
  useEffect(() => {
    const someFunc = () => {
      console.log("Event listener in React and Clean up");
    };

    window.addEventListener("scroll", someFunc);
    return () => window.removeEventListener("scroll", someFunc);
  }, []);
};

export default CleanupFunction;
