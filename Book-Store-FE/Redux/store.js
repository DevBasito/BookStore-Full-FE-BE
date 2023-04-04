import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./Books";
import userReducer from "./User"


export default configureStore({
    reducer: {
        books: bookReducer,
        user: userReducer

    }
})