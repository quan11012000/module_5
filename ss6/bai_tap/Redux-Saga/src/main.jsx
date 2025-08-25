import React from 'react';
import { createRoot } from 'react-dom/client';
import store from './store/store';
import App from './App.jsx';
import './index.css'
import {Provider} from "react-redux";



const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
