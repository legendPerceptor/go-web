import BookShow from './BookShow'
import {useContext} from 'react';
import BooksContext from '../context/books';

function BookList({books, onDelete, onModify}) {
    const {count, incrementCount} = useContext(BooksContext);

    const book_list_jsx = books.map((book, index) => {
        return <BookShow book={book} key={index} onDelete={onDelete} onModify={onModify}/>
    })

    return (
        <div className="book-list">
            {count}
            <button onClick={incrementCount}>Click</button>
            {book_list_jsx}
        </div>
    );
}

export default BookList;