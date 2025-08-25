import { useState, useEffect } from "react";
import { getBookById, updateBook } from "../service/bookService";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({ title: "", author: "", category: "" });

    useEffect(() => {
        const book = getBookById(Number(id));
        if (book) setForm(book);
    }, [id]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateBook(Number(id), form);
        navigate("/");
    };

    return (
        <div>
            <h2>Edit Book</h2>
            <form onSubmit={handleSubmit}>
                <input name="title" value={form.title} onChange={handleChange} />
                <input name="author" value={form.author} onChange={handleChange} />
                <input name="category" value={form.category} onChange={handleChange} />
                <button type="submit">Update</button>
            </form>
        </div>
    );
};
export default EditBook;
