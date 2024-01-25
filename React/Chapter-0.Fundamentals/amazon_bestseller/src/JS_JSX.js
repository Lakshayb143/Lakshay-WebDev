import React from "react";
import ReactDOM from "react-dom/client";

// Importing CSS
import "./index.css";

const BookArray = () => {
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
            <img src="./Images/book-1.jpg" alt="Just Because" />
            <h2>Just Because</h2>
            <h4>Matthew McConaughey</h4>
        </article>
    );
};

export default BookArray;

