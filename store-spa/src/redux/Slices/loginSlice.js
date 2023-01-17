import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    name: '',
    phone: '',
    email: '',
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        logindata: (state, actions) => {
            state = actions.payload
        }
    }
})

export default loginSlice.reducer