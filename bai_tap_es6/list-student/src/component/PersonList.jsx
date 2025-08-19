import React, { useState } from "react";
import personData from "../data/dbPerson";

const PersonList = ({ onView, onAdd, onUpdate }) => {
    const [persons, setPersons] = useState(personData);
    const [searchTerm, setSearchTerm] = useState("");
    const [deleteId, setDeleteId] = useState(null);

    // lọc danh sách theo từ khóa
    const filteredPersons = persons.filter(
        (p) =>
            p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.phone.includes(searchTerm)
    );

    // Xóa 1 person
    const handleDelete = () => {
        setPersons(persons.filter((p) => p.id !== deleteId));
        setDeleteId(null);
    };

    return (
        <div className="p-6">
            {/* Thanh tìm kiếm + nút thêm mới */}
            <div className="flex justify-between mb-4">
                <div className="flex space-x-2">
                    <input
                        type="text"
                        placeholder="Tìm kiếm..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="px-3 py-2 border rounded-lg w-64"
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                        Tìm
                    </button>
                </div>
                <button
                    onClick={onAdd}
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
                {filteredPersons.map((p, index) => (
                    <tr key={p.id} className="hover:bg-gray-50 text-center">
                        <td className="border p-2 ">{index + 1}</td>
                        <td className="border p-2">{p.name}</td>
                        <td className="border p-2">{p.phone}</td>
                        <td className="border p-2">{p.email}</td>
                        <td className="border p-2 ">
                            <img
                                src={p.img}
                                alt={p.name}
                                className="w-12 h-12 object-cover rounded-full mx-auto"
                            />
                        </td>
                        <td className="border p-2">
                            <div className="flex justify-center items-center space-x-2">
                                <button
                                    onClick={() => onView(p)}
                                    className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm"
                                >
                                    Xem
                                </button>
                                <button
                                    onClick={() => onUpdate(p)}
                                    className="bg-yellow-500 text-white px-3 py-1 rounded-lg text-sm"
                                >
                                    Sửa
                                </button>
                                <button
                                    onClick={() => setDeleteId(p.id)}
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

            {/* Modal xác nhận xoá */}
            {deleteId && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                        <h2 className="text-lg font-semibold mb-4">Xác nhận xoá</h2>
                        <p>Bạn có chắc chắn muốn xoá person này không?</p>
                        <div className="mt-4 flex justify-end space-x-2">
                            <button
                                onClick={() => setDeleteId(null)}
                                className="px-4 py-2 bg-gray-300 rounded-lg"
                            >
                                Hủy
                            </button>
                            <button
                                onClick={handleDelete}
                                className="px-4 py-2 bg-red-500 text-white rounded-lg"
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

export default PersonList;
