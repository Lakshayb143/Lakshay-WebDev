import { useEffect, useState } from "react";

const MultipleReturnsBasics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const unLoad = () => setIsLoading(false);
  const load = () => setIsLoading(true);

  useEffect(() => {
    setTimeout(() => {
      // done fetching the data
      unLoad();
    }, 3000);
  } , [])



  if (isLoading) {
    return (
      <div>
        <h2>Loading....</h2>
        <button className="btn" onClick={load}>
          Start Loading
        </button>
        <button className="btn" onClick={unLoad}>
          Stop Loading
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2>Multiple Return Basics</h2>
      <button className="btn" onClick={load}>
        Start Loading
      </button>
      <button className="btn" onClick={unLoad}>
        Stop Loading
      </button>
    </div>
  );
};
export default MultipleReturnsBasics;
