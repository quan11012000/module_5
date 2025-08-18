// src/components/AddPersonForm.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPerson } from "../features/personSlice";

export default function AddPersonForm() {
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        name: "",
        phone: "",
        gender: "",
        gmail: "",
        img: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPerson(form));
        setForm({ name: "", phone: "", gender: "", gmail: "", img: "" });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
            <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
            <input name="gender" placeholder="Gender" value={form.gender} onChange={handleChange} />
            <input name="gmail" placeholder="Gmail" value={form.gmail} onChange={handleChange} />
            <input name="img" placeholder="Image URL" value={form.img} onChange={handleChange} />
            <button type="submit">Add Person</button>
        </form>
    );
}
