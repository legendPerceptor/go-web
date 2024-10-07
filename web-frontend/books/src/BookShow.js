import {useState} from 'react'
import BookEdit from './BookEdit';

function BookShow({book, onDelete, onModify}) {

    const [showEdit, setShowEdit] = useState(false);

    const handleRemoveButtonClick = () => {
        onDelete(book.id);
    };

    const handleEditButtonClick = () => {
        setShowEdit(!showEdit);
    };


    let content = <div>
        <p>Book Title: {book.title}</p>
        <p>Author: {book.author}</p>
        <p>Published Date: {book.date}</p>
    </div>;
    if (showEdit) {
        content = <BookEdit book={book} onModify={onModify} setShowEdit={setShowEdit}/>
    }

    return (
    <div className="bookshow">
        <img src={book.image} alt={book.title + " image cover"}/> 
        <button onClick={handleRemoveButtonClick} className="delete"></button>
        <button onClick={handleEditButtonClick} className="edit">Edit</button>
        {content}
        
    </div>
    );
}

export default BookShow;