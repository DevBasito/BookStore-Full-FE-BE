import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const BookSlice = createSlice({
    name: 'books',
    initialState: {
        books: "",
        bookById: ""
    },
    reducers: {
        setData: (state, action) => {
            state.books = action.payload;

        },
        setBookById: (state, action) => {
            state.bookById = action.payload;

        },
        fetchBooks: (state) => async (dispatch) => {

            //    fetch("http://localhost:5000/books/all")
            //         .then((res) => res.json())
            //         .then((data) => {
            //            console.log(data);
            //            state.books =   data

            //                     })  


            //     const response = await fetch('http://localhost:5000/books/all');
            //     const data = await response.json();
            //     console.log(data);
            //    dispatch(setData(data)) ;




        }
    },
})

// Action creators are generated for each case reducer function
export const { setData, setBookById, fetchBooks } = BookSlice.actions

export default BookSlice.reducer