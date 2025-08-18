// src/components/PersonList.jsx
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPersons, deletePerson } from "../features/personSlice";
import UpdatePersonForm from "./Update";

export default function PersonList() {
    const dispatch = useDispatch();
    const { persons, loading } = useSelector((state) => state.person);
    const [editingPerson, setEditingPerson] = useState(null);

    useEffect(() => {
        dispatch(fetchPersons());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h2>Person List</h2>
            <ul>
                {persons.map((p) => (
                    <li key={p.id}>
                        <img src={p.img} alt={p.name} width={50} />
                        {p.name} - {p.phone} - {p.gender} - {p.gmail}
                        <button onClick={() => setEditingPerson(p)}>Edit</button>
                        <button onClick={() => dispatch(deletePerson(p.id))}>Delete</button>
                    </li>
                ))}
            </ul>

            {editingPerson && (
                <UpdatePersonForm
                    person={editingPerson}
                    onClose={() => setEditingPerson(null)}
                />
            )}
        </div>
    );
}
