// src/features/personSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// GET all
export const fetchPersons = createAsyncThunk("persons/fetchAll", async () => {
    const res = await fetch("http://localhost:3000/person");
    return res.json();
});

// ADD
export const addPerson = createAsyncThunk("persons/add", async (person) => {
    const res = await fetch("http://localhost:3000/person", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(person),
    });
    return res.json();
});

// UPDATE
export const updatePerson = createAsyncThunk("persons/update", async (person) => {
    const res = await fetch(`http://localhost:3000/person/${person.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(person),
    });
    return res.json();
});

// DELETE
export const deletePerson = createAsyncThunk("persons/delete", async (id) => {
    await fetch(`http://localhost:3000/person/${id}`, { method: "DELETE" });
    return id;
});

const personSlice = createSlice({
    name: "persons",
    initialState: { persons: [], loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPersons.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPersons.fulfilled, (state, action) => {
                state.loading = false;
                state.persons = action.payload;
            })
            .addCase(addPerson.fulfilled, (state, action) => {
                state.persons.push(action.payload);
            })
            .addCase(updatePerson.fulfilled, (state, action) => {
                const index = state.persons.findIndex((p) => p.id === action.payload.id);
                if (index !== -1) state.persons[index] = action.payload;
            })
            .addCase(deletePerson.fulfilled, (state, action) => {
                state.persons = state.persons.filter((p) => p.id !== action.payload);
            });
    },
});

export default personSlice.reducer;
