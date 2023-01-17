import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    name: '',
    phone: '',
    email: '',
    dataArray: []
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        logindata: (state, actions) => {
            const { payload } = actions
            console.log('data fetched into the reducer', payload)
            state.dataArray = actions.payload
        }
    }
})

export default loginSlice.reducer
export const { logindata } = loginSlice.actions