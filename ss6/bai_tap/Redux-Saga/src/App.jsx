import React from 'react';
import UserList from './component/UserList.jsx';


export default function App() {
    return (
        <div style={{ padding: 20, fontFamily: 'system-ui, sans-serif' }}>
            <h1 style={{ marginTop: 0 }}>User list</h1>
            <UserList />
        </div>
    );
}