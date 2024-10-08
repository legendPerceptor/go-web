import BookShow from './BookShow'
import {useContext} from 'react';
import BooksContext from '../context/books';

function BookList() {
    const {books} = useContext(BooksContext);
    const book_list_jsx = books.map((book, index) => {
        return <BookShow book={book} key={index}/>
    })

    return (
        <div className="book-list">
            {book_list_jsx}
        </div>
    );
}

export default BookList;