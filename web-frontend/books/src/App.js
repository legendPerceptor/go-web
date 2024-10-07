
import BookCreate from './BookCreate'
import BookList from './BookList';
import {useState} from 'react';

function App() {
    const [books, setBooks] = useState([]);
    const handleAddBook = (book) => {
        setBooks([...books, book]);
    }

    const removeBookById = (id) => {
        const new_books = books.filter((book)=>{
            return book.id !== id;
        });
        setBooks(new_books);
    }

    const modifyBookById = (id, new_book) => {
        const new_books = books.map((book) => {
            if(book.id === id) {
                return new_book;
            }
            return book;
        })
        setBooks(new_books);
    }

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList books={books} onDelete={removeBookById} onModify={modifyBookById}/>
            <BookCreate onCreateBook={handleAddBook} id={books.length}/>
        </div>
    )
}

export default App;