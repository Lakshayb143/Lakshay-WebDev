import React from "react";
import ReactDOM from "react-dom/client";

// Importing CSS
import "./index.css";

const FirstBook = {
    image_src: "./Images/book-1.jpg",
    title: "Just Because",
    author: "Matthew McConaughey",
};

const SecondBook = {
    image_src: "https://m.media-amazon.com/images/I/91bYsX41DVL._SY466_.jpg",
    title: "Atomic Habits",
    author: "James Clear",
};

const BookData = () => {
    return (
        <section className="BookList">
            <Book author={FirstBook.author} title={FirstBook.title} image={FirstBook.image_src} >
                <p>This is one of our best selling books</p>
                <button type="submit">Buy Now</button>
            </Book>
            <Book author={SecondBook.author} title={SecondBook.title} image={SecondBook.image_src} />
        </section>
    );
};

const Book = ({image , title , author , children}) => {
    return (
        <article className="Book">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
            {/* <p>{props.job}</p>
            <p>{props.title}</p>
            <p>{props.rank}</p> */}
            {children}
        </article>
    );
};

export default BookData;
