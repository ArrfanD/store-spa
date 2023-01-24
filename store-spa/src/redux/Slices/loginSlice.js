import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    name: '',
    phone: '',
    email: '',
    isLoginBoolean: false,
    dataArray: []
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        logindata: (state, actions) => {
            const { payload } = actions
            // console.log('what is this payload? ',payload )
        },
        isLogin: (state,{payload}) => {
            // console.log('action inside the isLogin reducer', payload)
            state.isLoginBoolean = payload
        }
    }
})

export default loginSlice.reducer
export const { logindata, isLogin } = loginSlice.actions