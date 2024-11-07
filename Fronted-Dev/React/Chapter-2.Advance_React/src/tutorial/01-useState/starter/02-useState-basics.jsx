import { useState } from "react";
import React from "react";

const UseStateBasics = () => {
    // we can also use React.useState
    // console.log(React.useState(1));
    // const value = useState('hello')[0];
    // const func = useState('hello')[1];
    // console.log(value);
    // console.log(func);

    // OR we can use Array Destructuring

    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount((prevCount) => prevCount + 1);
        console.log(count);
    };

    const decreaseCount = () => {
        if (count <= 0) {
            setCount(0);
            return;
        }
        setCount((prevCount) => prevCount - 1);
    };

    return (
        <div>
            <h2>You Clicked {count} times.</h2>
            <div className="container">
                <button
                    type="button"
                    className="btn"
                    onClick={increaseCount}
                    style={{ margin: "10px" }}
                >
                    Increase
                </button>
                <button className="btn" onClick={decreaseCount}>
                    Decrease
                </button>
            </div>
        </div>
    );
};

export default UseStateBasics;
