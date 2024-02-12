import React from "react";
import ReactDOM from "react-dom/client";
import BookArray from "./JS_JSX";
import BookData from "./Props"
import SimpleList from "./SimpleList";
import SpreadOp from "./SpreadOp";
import MoreComplex from "./MoreComplex";
import Books from "./Books";

// Importing CSS
import "./index.css";

const BookList = () => {
    return (
        <section className="BookList">
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
};

const Book = () => {
    return (
        <article className="Book">
            <Image />
            <Title />
            <Author />
        </article>
    );
};

// Taking the image from the url

// const Image = () => (
//     <img
//         src="https://m.media-amazon.com/images/I/5134XJsE-CL._SX342_SY445_.jpg"
//         alt="Just Because"
//     />
// );

// Using local image saved in public folder
const Image = () => <img src="./Images/book-1.jpg" alt="Just Because" />;
// const Title = () => <h2>Just Because</h2>;

// const Author = () => {
//     return <h4>Matthew McConaughey</h4>;
// }

// CSS in JSX

const Author = () => {
    return (
        <h4 style={{ fontSize: "1rem", letterSpacing: "1px" }}>
            Matthew McConaughey
        </h4>
    );
};

// or we can do first create a js object and then pass it
const titleStyles = {
    textDecorationLine: "underline",
    // textDecorationStyle: "double",
    padding: "0.2rem",
};

const Title = () => <h2 style={titleStyles}>Just Because</h2>;

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<BookList />);
// root.render(<BookArray/>)
// root.render(<BookData/>)
// root.render(<SimpleList/>)
// root.render(<SpreadOp />);
// root.render(<MoreComplex />);
root.render(<Books/>)
