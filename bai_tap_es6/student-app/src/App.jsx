// src/App.jsx
import React from "react";
import AddPersonForm from "./components/Create";
import PersonList from "./components/List";

export default function App() {
    return (
        <div>
            <h1>CRUD Person App</h1>
            <AddPersonForm />
            <PersonList />
        </div>
    );
}
