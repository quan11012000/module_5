import React, { useState } from "react";

const PersonAdd = ({ onBack }) => {
    const [form, setForm] = useState({ name: "", phone: "", email: "", img: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Thêm mới:", form);
        onBack();
    };

    return (
        <div className="p-6">
            <button onClick={onBack} className="mb-4 bg-gray-400 text-white px-3 py-1 rounded">
                ← Quay lại
            </button>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 space-y-4">
                <input name="name" onChange={handleChange} placeholder="Tên" className="border p-2 w-full" />
                <input name="phone" onChange={handleChange} placeholder="Số điện thoại" className="border p-2 w-full" />
                <input name="email" onChange={handleChange} placeholder="Email" className="border p-2 w-full" />
                <input name="img" onChange={handleChange} placeholder="Link ảnh" className="border p-2 w-full" />
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Thêm mới</button>
            </form>
        </div>
    );
};

export default PersonAdd;
