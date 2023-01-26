import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    userProfile: {},
    isLoginBoolean: false,
    onlineUserId: '',
    isRegisterSuccess: false,
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
        },
        regBoolean: (state, {payload}) => {
            state.isRegisterSuccess = payload
        }
    }
});

export default loginSlice.reducer
export const { logindata, isLogin, regBoolean } = loginSlice.actions