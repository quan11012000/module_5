// src/components/UpdatePersonForm.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePerson } from "../features/personSlice";

export default function UpdatePersonForm({ person, onClose }) {
    const dispatch = useDispatch();
    const [form, setForm] = useState(person);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updatePerson({ id: form.id, data: form }));
        onClose();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={form.name} onChange={handleChange} />
            <input name="phone" value={form.phone} onChange={handleChange} />
            <input name="gender" value={form.gender} onChange={handleChange} />
            <input name="gmail" value={form.gmail} onChange={handleChange} />
            <input name="img" value={form.img} onChange={handleChange} />
            <button type="submit">Update</button>
            <button type="button" onClick={onClose}>Cancel</button>
        </form>
    );
}
