import React, {useEffect, useState} from "react";
import * as studentService from "../service/orderService.js";
import * as classService from "../service/tableService.js";
import {useNavigate} from "react-router-dom";
import {Field} from "formik";
import {toast} from "react-toastify";

const List = () => {
    const [orders, setOrders] = useState([]);
    const [tables, setTables] = useState([]);
    const [deleteId, setDeleteId] = useState(0);
    const [dateFirst, setDateFirst] = useState("");
    const [page, setPage] = useState(1);
    const [limit]=useState(2);
    const [total, setTotal] = useState(0);
    const [dateSencond, setDateSencond] = useState("");
    const [search, setSsearch] = useState("");
    const [selectTable, setselectTable] = useState("");
    const navigate = useNavigate();
    //xoa
    const [open, setOpen] = useState(false);
    useEffect(() =>{
        const getAll = async () => {
            const temp = await classService.getAllType();
            setTables(temp);
        }
        getAll();
    },[])

    useEffect(() => {
        const getAll = async (search,selectTable,dateFirst,dateSencond,page,limit) => {
            const result = await studentService.getAll(search,selectTable,dateFirst,dateSencond,page,limit);
            console.log(result);
            setOrders(result.data);
            setTotal(result.total/limit)
        }
        getAll(search,selectTable,dateFirst,dateSencond,page,limit);
    },[search,selectTable,dateFirst,dateSencond,page,limit]);
    // xoa
    const handleDelete = async () => {
        try {
            await studentService.deleteById(deleteId);
            setOpen(false);
            setOrders(prevState => prevState.filter(student => student.id !== deleteId));
            toast.success("Xoá thành công");
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
                        id="tableId"
                        name="tableId"
                        onChange={(e) => setselectTable(e.target.value)}
                        value={selectTable}
                        className="px-3 py-2 border rounded-lg w-52"
                    >
                        <option value="">-- Tất cả --</option>
                        {tables.map((t) => (
                            <option key={t.id} value={t.id}>
                                {t.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <input type="date" name="publicationDate" value={dateFirst}
                           onChange={(e) => setDateFirst(e.target.value)} />

                </div>
                <div>
                    <input type="date" name="publicationDate" value={dateSencond}
                           onChange={(e) => setDateSencond(e.target.value)} />

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
                    <th className="border p-2">Table</th>
                    <th className="border p-2">Item</th>
                    <th className="border p-2">Quantity</th>
                    <th className="border p-2">Price</th>
                    <th className="border p-2">Note</th>
                    <th className="border p-2">Status</th>
                    <th className="border p-2">OrderTime</th>
                    <th className="border p-2">Avt</th>
                </tr>
                </thead>
                <tbody>
                {orders.map((s) => (
                    <tr key={s.id} className="hover:bg-gray-50 text-center">
                        <td className="hidden border p-2 ">{s.id}</td>
                        <td className="border p-2">{s.table.name}</td>
                        <td className="border p-2">{s.item}</td>
                        <td className="border p-2">{s.quantity} </td>
                        <td className="border p-2">{s.price}</td>
                        <td className="border p-2">{s.note}</td>
                        <td className="border p-2">{s.status} </td>
                        <td className="border p-2">{s.orderTime}</td>
                        <td className="border p-2">
                            <div className="flex justify-center items-center space-x-2">
                                <button
                                    onClick={() => navigate("/detail/"+s.id)}
                                    className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm"
                                >
                                    Chi tiết
                                </button>
                                <button
                                    onClick={() => navigate("/edit/"+s.id)}
                                    className="bg-yellow-500 text-white px-3 py-1 rounded-lg text-sm"
                                >
                                    Sửa
                                </button>
                                <button
                                    onClick={()=>handleOpenDeleteModal(s.id)}
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
            <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-gray-600">
                    {total} orders • Trang {page} / {total}
                </div>

                <div className="flex space-x-1">
                    <button
                        disabled={page === 1}
                        onClick={() => setPage(page - 1)}
                        className={`px-3 py-1 border rounded-lg ${
                            page === 1
                                ? "text-gray-400 border-gray-200 cursor-not-allowed"
                                : "hover:bg-gray-100"
                        }`}
                    >
                        Prev
                    </button>
                    {[...Array(total)].map((_, idx) => {
                        const p = idx + 1;
                        return (
                            <button
                                key={p}
                                onClick={() => setPage(p)}
                                className={`px-3 py-1 border rounded-lg ${
                                    p === page
                                        ? "bg-blue-500 text-white border-blue-500"
                                        : "hover:bg-gray-100"
                                }`}
                            >
                                {p}
                            </button>
                        );
                    })}
                    <button
                        disabled={page === total}
                        onClick={() => setPage(page + 1)}
                        className={`px-3 py-1 border rounded-lg ${
                            page === total
                                ? "text-gray-400 border-gray-200 cursor-not-allowed"
                                : "hover:bg-gray-100"
                        }`}
                    >
                        Next
                    </button>
                </div>
            </div>
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

export default List;
