import React, {useEffect, useState} from "react";
import * as studentService from "../service/studentService.js";
import * as classService from "../service/classService.js";
import {useNavigate} from "react-router-dom";
import {Field} from "formik";
import {toast} from "react-toastify";

const List = () => {
    const [students, setStudents] = useState([]);
    const [classes, setclasses] = useState([]);
    const [deleteId, setDeleteId] = useState(0);
    const [dateFirst, setDateFirst] = useState("");
    const [dateSencond, setDateSencond] = useState("");
    const [search, setSsearch] = useState("");
    const [selectClass, setselectClass] = useState("");
    const navigate = useNavigate();
    //xoa
    const [open, setOpen] = useState(false);
    useEffect(() =>{
        const getAll = async () => {
            const temp = await classService.getAllType();
            setclasses(temp);
        }
        getAll();
    },[])
    useEffect(() => {
        const getAll = async (search,selectClass,dateFirst,dateSencond) => {
            const temp = await studentService.getAll(search,selectClass,dateFirst,dateSencond);
            setStudents(temp);
        }
        getAll(search,selectClass,dateFirst,dateSencond);
    },[search,selectClass,dateFirst,dateSencond]);
    // xoa
    const handleDelete = async () => {
        try {
            await studentService.deleteById(deleteId);
            setOpen(false);
            setStudents(prevState => prevState.filter(student => student.id !== deleteId));
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
                        id="classId"
                        name="classId"
                        onChange={(e) => setselectClass(e.target.value)}
                        value={selectClass}
                        className="px-3 py-2 border rounded-lg w-52"
                    >
                        <option value="">-- Tất cả --</option>
                        {classes.map((t) => (
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
                    <th className="border p-2">Name</th>
                    <th className="border p-2">Class</th>
                    <th className="border p-2">Dob</th>
                    <th className="border p-2">Gender</th>
                    <th className="border p-2">Email</th>
                    <th className="border p-2">AdmissionDate</th>
                    <th className="border p-2">Status</th>
                    <th className="border p-2">Avt</th>
                </tr>
                </thead>
                <tbody>
                {students.map((s) => (
                    <tr key={s.id} className="hover:bg-gray-50 text-center">
                        <td className="hidden border p-2 ">{s.id}</td>
                        <td className="border p-2">{s.name}</td>
                        <td className="border p-2">{s.class.name}</td>
                        <td className="border p-2">{s.dob} </td>
                        <td className="border p-2">{s.gender}</td>
                        <td className="border p-2">{s.email}</td>
                        <td className="border p-2">{s.admissionDate} </td>
                        <td className="border p-2">{s.status}</td>
                        <td className="border p-2">
                            <div className="flex justify-center items-center space-x-2">
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
