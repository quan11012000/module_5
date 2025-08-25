import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, deleteUser } from '../store/action';

export default function UserList() {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const { users, loading, deletingId, error } = useSelector((s) => s);

    const handleConfirm = (id) => {
        setSelectedId(id);
        setOpen(true);
    };

    const handleDelete = () => {
        if (selectedId) {
            dispatch(deleteUser(selectedId));
        }
        setOpen(false);
        setSelectedId(null);
    };

    return (
        <div className="p-6">
            <button
                onClick={() => dispatch(getUsers())}
                disabled={loading}
                className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-400"
            >
                {loading ? 'Loading…' : 'Get users'}
            </button>

            {error && (
                <div className="mt-3 text-red-600">Error: {error}</div>
            )}

            <table className="mt-4 w-full border border-gray-300">
                <thead className="bg-gray-100">
                <tr>
                    <th className="p-2 border">Id</th>
                    <th className="p-2 border">Name</th>
                    <th className="p-2 border">Email</th>
                    <th className="p-2 border">Website</th>
                    <th className="p-2 border">Action</th>
                </tr>
                </thead>
                <tbody>
                {users.map((u) => (
                    <tr key={u.id} className="text-center">
                        <td className="p-2 border">{u.id}</td>
                        <td className="p-2 border">{u.name}</td>
                        <td className="p-2 border">{u.email}</td>
                        <td className="p-2 border">{u.website}</td>
                        <td className="p-2 border">
                            <button
                                onClick={() => handleConfirm(u.id)}
                                disabled={deletingId === u.id}
                                className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 disabled:bg-gray-400"
                            >
                                {deletingId === u.id ? 'Deleting…' : 'Delete'}
                            </button>
                        </td>
                    </tr>
                ))}
                {!loading && users.length === 0 && (
                    <tr>
                        <td colSpan="5" className="text-center py-4 text-gray-500">
                            No data. Click "Get users".
                        </td>
                    </tr>
                )}
                </tbody>
            </table>

            {/* Modal Xác nhận */}
            {open && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/40">
                    <div className="bg-white rounded-lg shadow-lg w-96 p-6">
                        <h2 className="text-lg font-bold mb-4">Xác nhận xoá</h2>
                        <p className="mb-6">Bạn có chắc muốn xoá user này không?</p>
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
}
