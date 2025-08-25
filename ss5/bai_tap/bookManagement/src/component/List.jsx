import React, {useEffect, useState} from "react";
import * as studentService from "../service/studentService.js";
import {useNavigate} from "react-router-dom";

const StudentList = () => {
    const [students, setStudents] = useState([]);
    const [search, setSsearch] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const getAllStudent = async (search) => {
            const temp = await studentService.getAllStudentsByName(search);
            setStudents(temp);
        }
        getAllStudent(search);
    },[search]);
    return (
        <div className="p-6">
            {/* Thanh tìm kiếm + nút thêm mới */}
            <div className="flex justify-between mb-4">
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
                    <th className="border p-2">STT</th>
                    <th className="border p-2">Name</th>
                    <th className="border p-2">Phone</th>
                    <th className="border p-2">Email</th>
                    <th className="border p-2">Img</th>
                    <th className="border p-2">Act</th>
                </tr>
                </thead>
                <tbody>
                {students.map((s) => (
                    <tr key={s.id} className="hover:bg-gray-50 text-center">
                        <td className="border p-2 ">{s.id}</td>
                        <td className="border p-2">{s.name}</td>
                        <td className="border p-2">{s.phone}</td>
                        <td className="border p-2">{s.email}</td>
                        <td className="border p-2 ">
                            <img
                                src={s.img}
                                alt={s.name}
                                className="w-12 h-12 object-cover rounded-full mx-auto"
                            />
                        </td>
                        <td className="border p-2">
                            <div className="flex justify-center items-center space-x-2">
                                <button
                                    className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm"
                                >
                                    Xem
                                </button>
                                <button
                                    className="bg-yellow-500 text-white px-3 py-1 rounded-lg text-sm"
                                >
                                    Sửa
                                </button>
                                <button
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
        </div>
    );
};




export default StudentList;
