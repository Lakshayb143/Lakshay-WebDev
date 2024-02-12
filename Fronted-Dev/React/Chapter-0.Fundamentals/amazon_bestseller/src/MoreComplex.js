

const books = [
    {
        image: "./Images/book-1.jpg",
        title: "Just Because",
        author: "Matthew McConaughey",
        id: 1,
    },
    {
        image: "https://m.media-amazon.com/images/I/91bYsX41DVL._SY466_.jpg",
        title: "Atomic Habits",
        author: "James Clear",
        id: 2,
    },
];









const MoreComplex = () => {
    const getBook = (id) => {

        const book = books.find((book) => book.id === id)
        console.log(book);
    }


    return (
        <div>
            <section className="BookList">
                {books.map((book) => {
                    return <Book {...book} key={book.id} get={getBook}/>;
                })}
            </section>
        </div>
    );
}


const Book = ({ image, title, author, get, id }) => {
    const helper = () => get(id);
    
    return (
        <article className="Book">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <button onClick={helper}>Find the Book</button>
            <h4>{author}</h4>
        </article>
    );
};

















export default MoreComplex