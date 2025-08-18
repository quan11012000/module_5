// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import personReducer from "../features/personSlice";

export const store = configureStore({
    reducer: {
        person: personReducer,
    },
});
