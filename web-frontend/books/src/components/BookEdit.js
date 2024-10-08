import {useContext, useState} from 'react';
import BooksContext from '../context/books';

function BookEdit({book, setShowEdit}) {
    const {modifyBookById: onModify} = useContext(BooksContext);
    const [title, setTitle] = useState(book.title);
    const [author, setAuthor] = useState(book.author);
    const [date, setDate] = useState(book.date);

    const handleSubmit = (event) => {
        event.preventDefault();
        const new_book = {
            ...book,
            title,
            author,
            date,
        }
        console.log(new_book);
        onModify(book.id, new_book);
        setShowEdit(false);
    }

    return <form className="book-edit" onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={(event) => {setTitle(event.target.value)}} />
        <label>Author</label>
        <input className="input" value={author} onChange={(event) => {setAuthor(event.target.value)}} />
        <label>Date</label>
        <input className="input" value={date} onChange={(event) => {setDate(event.target.value)}}/>
        <button className="button is-primary">
            Save
        </button>
    </form>
}

export default BookEdit;