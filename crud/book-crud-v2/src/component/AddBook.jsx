import { useEffect, useState } from "react";
import { getBooks, deleteBook } from "../service/bookService";
import { Link } from "react-router-dom";

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        setBooks(getBooks());
    }, []);

    const handleDelete = (id) => {
        deleteBook(id);
        setBooks(getBooks());
    };

    return (
        <div>
            <h2>Book List</h2>
            <Link to="/add">Add New Book</Link>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        {book.title} - {book.author} ({book.category})
                        <Link to={`/edit/${book.id}`}> Edit </Link>
                        <button onClick={() => handleDelete(book.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default BookList;
