import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const UserSlice = createSlice({
    name: 'user',
    initialState: {
        user: ""
    },
    reducers: {
        setData: (state, action) => {
            state.user = action.payload;
            
          }        
    },
})

// Action creators are generated for each case reducer function
export const { setData } = UserSlice.actions

export default UserSlice.reducer