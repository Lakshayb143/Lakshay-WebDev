import React from "react";
import ReactDOM from "react-dom/client";
import Nesting from "./Nesting";

// First way - JSX (JavaScript XML)

const Greeting = () => {
    return (
        // <React.Fragment>
        //     <h1>Hello React World</h1>
        // </React.Fragment>
        <>
            <h1>Hello React World</h1>
        </>
            
        
    );
};

// Second way

// const Greeting2 = () => {
//     return React.createElement('h2', {},"Element Created By React")
// }

const Greeting2 = () => {
    return React.createElement(
        "div",
        {},
        React.createElement("h2", {}, "Created by React under div")
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Greeting2 />)
// root.render(
//     <div>
//         <Greeting />
//         <Greeting2 />
//     </div>
// );

root.render(<Nesting/>)
