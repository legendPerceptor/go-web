import BookShow from './BookShow'
import useBooksContext from '../hooks/use-books-context';

function BookList() {
    const {books} = useBooksContext();
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