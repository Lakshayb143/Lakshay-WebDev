import { books } from "./BooksData";

const Books = () => {
    return (
        <div className='container'>
            <h1>Amazon Best Sellers</h1>
            <section className="BookList">
                {books.map((book,index) => {
                    return <Book {...book} key={book.id} number={index} />;
                })}
            </section>
        </div>
    );
};



const Book = ({ image, title, author , number}) => {


    return (
        <article className="Book">
            <span className="Number">{number + 1}</span>
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    );
};

export default Books;
