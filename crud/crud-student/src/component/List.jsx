import React, {useEffect, useState} from "react";
import * as bookService from "../service/bookService.js";
import * as typeBookService from "../service/typeBookService.js";
import {useNavigate} from "react-router-dom";
import {Field} from "formik";

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [typeBook, setTypeBook] = useState([]);
    const [deleteId, setDeleteId] = useState(0);
    const [search, setSsearch] = useState("");
    const [selectTypeBook, setselectTypeBook] = useState("");
    const navigate = useNavigate();
    //xoa
    const [open, setOpen] = useState(false);
    useEffect(() =>{
        const getAllTypeBooks = async () => {
            const temp = await typeBookService.getAllTypeBook();
            setTypeBook(temp);
        }
        getAllTypeBooks();
    },[])
    useEffect(() => {
        const getAllBook = async (search,selectTypeBook) => {
            const temp = await bookService.getAllBookByTitle(search,selectTypeBook);
            setBooks(temp);
        }
        getAllBook(search,selectTypeBook);
    },[search,selectTypeBook]);
    // xoa
    const handleDelete = async () => {
        try {
            await bookService.deleteBook(deleteId);
            setOpen(false);
            setBooks(prevState => prevState.filter(book => book.id !== deleteId));
        } catch (err) {
            console.error(err);
        }
    };
    const handleOpenDeleteModal = (id) => {
        setOpen(true);
        setDeleteId(id);
    }
    return (
        <div className="p-6">
            {/* Thanh tìm kiếm + nút thêm mới */}
            <div className="flex justify-between mb-4 items-center">
                <div className="flex space-x-2">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSsearch(e.target.value)}
                        placeholder="Tìm kiếm..."
                        className="px-3 py-2 border rounded-lg w-64"
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                        Tìm
                    </button>
                </div>
                <div className="flex ">
                    <select
                        id="typeBookId"
                        name="typeBookId"
                        onChange={(e) => setselectTypeBook(e.target.value)}
                        value={selectTypeBook}
                        className="px-3 py-2 border rounded-lg w-52"
                    >
                        <option value="">-- Tất cả --</option>
                        {typeBook.map((t) => (
                            <option key={t.id} value={t.id}>
                                {t.name}
                            </option>
                        ))}
                    </select>
                </div>

                <button
                    onClick={() => navigate("/create")}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg"
                >
                    + Thêm mới
                </button>
            </div>


            {/* Bảng danh sách */}
            <table className="w-full border-collapse border border-gray-300 shadow-md">
                <thead className="bg-gray-100 ">
                <tr>
                    <th className="border p-2">Title</th>
                    <th className="border p-2">Quantity</th>
                    <th className="border p-2">Type Book</th>
                    <th className="border p-2">Act</th>
                </tr>
                </thead>
                <tbody>
                {books.map((b) => (
                    <tr key={b.id} className="hover:bg-gray-50 text-center">
                        <td className="hidden border p-2 ">{b.id}</td>
                        <td className="border p-2">{b.title}</td>
                        <td className="border p-2">{b.quantity}</td>
                        <td className="border p-2">{b.typeBook.name}</td>
                        <td className="border p-2">
                            <div className="flex justify-center items-center space-x-2">
                                <button
                                    onClick={() => navigate("/edit/"+b.id)}
                                    className="bg-yellow-500 text-white px-3 py-1 rounded-lg text-sm"
                                >
                                    Sửa
                                </button>
                                <button
                                    onClick={()=>handleOpenDeleteModal(b.id)}
                                    className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm"
                                >
                                    Xoá
                                </button>
                            </div>
                        </td>

                    </tr>
                ))}
                </tbody>
            </table>
            {open && (
                <div className="fixed inset-0 flex items-center justify-center ">
                    <div className="bg-white rounded-lg shadow-lg w-96 p-6">
                        <h2 className="text-lg font-bold mb-4">Xác nhận xoá</h2>
                        <p className="mb-6">Bạn có chắc muốn xoá sách này không?</p>
                        <div className="flex justify-end gap-3">
                            <button
                                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                                onClick={() => setOpen(false)}
                            >
                                Huỷ
                            </button>
                            <button
                                className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
                                onClick={handleDelete}
                            >
                                Xoá
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
};

export default BookList;
