// Importing CSS
// import "./index.css";

// Use of spread operator

// const friends = ["john", "peter", "anna"];
// const newFriends = [...friends, "susan"];
// console.log(friends);
// console.log(newFriends);
// const someObject = {
//     name: "john",
//     job: "developer",
// };
// // COPY NOT A REFERENCE !!!!
// const newObject = { ...someObject, location: "florida" };
// console.log(someObject);
// console.log(newObject);

// Let's implement the actual components

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

const SpreadOp = () => {
    const randomValue = "Prop Drilling and React data flow";
    const display = () => {
        console.log(randomValue);
    };
    return (
        <div>
            <EventExamples />
            <section className="BookList">
                {books.map((book) => {
                    return <Book {...book} key={book.id} value={display} />;
                })}
            </section>
        </div>
    );
};

const EventExamples = () => {
    const handleFI = () => console.log("Form Input");
    const handleBtn = () => alert("Button Clicked");
    const handleFormSubmission = (event) => {
        event.preventDefault();
        console.log("Form Submitted");
    };
    return (
        <section style={{ margin: "2rem", padding: "2rem" }}>
            <form onSubmit={handleFormSubmission}>
                <h2>Form</h2>
                <input type="text" name="Example" onChange={handleFI} />
                <button type="submit">Submit the Form</button>
            </form>
            <button type="submit" onClick={handleBtn}>
                click me
            </button>
        </section>
    );
};

// Display Title button is to only show that components in react are independent.

const Book = ({ image, title, author, value }) => {
    const displayTitle = () => {
        console.log(title);
    };
    return (
        <article className="Book">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <button onClick={displayTitle}>Display Title</button><br />
            <button onClick={value}>Display Value</button>
            <h4>{author}</h4>
        </article>
    );
};

export default SpreadOp;
