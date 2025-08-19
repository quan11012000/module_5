import React, { useState } from "react";

const PersonUpdate = ({ person, onBack }) => {
    const [form, setForm] = useState(person);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Cập nhật:", form);
        onBack();
    };

    return (
        <div className="p-6">
            <button onClick={onBack} className="mb-4 bg-gray-400 text-white px-3 py-1 rounded">
                ← Quay lại
            </button>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 space-y-4">
                <input name="name" value={form.name} onChange={handleChange} className="border p-2 w-full" />
                <input name="phone" value={form.phone} onChange={handleChange} className="border p-2 w-full" />
                <input name="email" value={form.email} onChange={handleChange} className="border p-2 w-full" />
                <input name="img" value={form.img} onChange={handleChange} className="border p-2 w-full" />
                <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded">Cập nhật</button>
            </form>
        </div>
    );
};

export default PersonUpdate;
