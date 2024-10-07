import BookShow from './BookShow'

function BookList({books, onDelete, onModify}) {

    const book_list_jsx = books.map((book, index) => {
        return <BookShow book={book} key={index} onDelete={onDelete} onModify={onModify}/>
    })

    return (
        <div className="book-list">
            {book_list_jsx}
        </div>
    );
}

export default BookList;