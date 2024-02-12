import React from "react";
import ReactDOM from "react-dom/client";

// Importing CSS
import "./index.css";

const books = [
    {
        image: "./Images/book-1.jpg",
        title: "Just Because",
        author: "Matthew McConaughey",
        id: 1,
    },
    {
        image:
            "https://m.media-amazon.com/images/I/91bYsX41DVL._SY466_.jpg",
        title: "Atomic Habits",
        author: "James Clear",
        id: 2,
    },
];
// const SimpleList = () => {
//     return (
//         <section className="BookList">
//             {books.map(({ image_src, title, author ,id }) => {
//                 return <Book image={image_src} author={author} title={title} key={id} />;
//             })}
//         </section>
//     );
// };




// const Book = ({ image, title, author }) => {
//     return (
//         <article className="Book">
//             <img src={image} alt={title} />
//             <h2>{title}</h2>
//             <h4>{author}</h4>
//         </article>
//     );
// };


// alternative : we can pass the object and then destructure it

const SimpleList = () => {
    return (
        <section className="BookList">
            {books.map((book) => {
                return (
                    <Book
                        book={book}
                    />
                );
            })}
        </section>
    );
};





const Book = ({ book: { image, title, author } }) => {
    return (
        <article className="Book">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    );
};


export default SimpleList;
