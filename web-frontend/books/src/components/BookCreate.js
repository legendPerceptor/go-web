import {useState, useContext} from 'react';
import BooksContext from '../context/books';

function BookCreate() {
    const {handleAddBook} = useContext(BooksContext);

    const [bookTitle, setBookTitle] = useState("");
    const [date, setBookDate] = useState("");
    const [author, setAuthor] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("The submit event:", event);
        const book = {
            title: bookTitle,
            date: date,
            author: author,
        };
        console.log("The book to be added:", book);
        handleAddBook(book);
    };

    return (
        <form className="book-create" onSubmit={handleFormSubmit}>
            <h3>Add a Book</h3>
            <input id="book-title" className="input" value={bookTitle} onChange={(event) => {setBookTitle(event.target.value)}}/>
            <input id="date" type="date" className="input" value={date} onChange={(event) => {setBookDate(event.target.value)}}/>
            <input id="author" className="input" value={author} onChange={(event) => {setAuthor(event.target.value)}} />
            {/* how to handle an image file*/}
            <button id="add-book-button" className="button" type="submit">Add Book</button>
        </form>
    );
}

export default BookCreate;