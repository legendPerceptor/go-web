
import BookCreate from './BookCreate'
import BookList from './BookList';
import {useState, useEffect} from 'react';
import axios from 'axios'

function App() {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    }

    useEffect(()=> {
        fetchBooks();
    }, []);

    const handleAddBook = async (book) => {
        const response = await axios.post('http://localhost:3001/books', {
            title: book.title,
            author: book.author,
            date: book.date,
            image: `https://picsum.photos/seed/${Math.round(Math.random() * 9999)}/300/200`
        })
        setBooks([...books, response.data]);
    }

    const removeBookById = async (id) => {
        const response = await axios.delete(`http://localhost:3001/books/${id}`);
        console.log(response);
        const new_books = books.filter((book)=>{
            return book.id !== id;
        });
        setBooks(new_books);
    }

    const modifyBookById = async (id, new_book) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, new_book);
        console.log(response);
        const new_books = books.map((book) => {
            if(book.id === id) {
                return response.data;
            }
            return book;
        })
        setBooks(new_books);
    }

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList books={books} onDelete={removeBookById} onModify={modifyBookById}/>
            <BookCreate onCreateBook={handleAddBook}/>
        </div>
    )
}

export default App;