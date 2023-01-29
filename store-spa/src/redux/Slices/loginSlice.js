import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  userProfile: {},
  isLoginBoolean: false,
  dashboardSelectedUser: "",
  isRegisterSuccess: false,
  dataArray: [],
  isAlreadyRegistered: false,
  isUserLoggedIn: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logindata: (state, actions) => {
      const { payload } = actions;
      // console.log('what is this payload? ',payload )
    },
    isLogin: (state, { payload }) => {
      // console.log('action inside the isLogin reducer', payload)
      state.isLoginBoolean = payload;
    },
    regBoolean: (state, { payload }) => {
      state.isRegisterSuccess = payload;
    },
    alreadyRegistered: (state, { payload }) => {
      state.isAlreadyRegistered = payload;
    },
    userLoggedIn: (state, { payload }) => {
      state.isUserLoggedIn = payload;
    },
    userDashboardModal: (state, { payload }) => {
      state.isUserDashboardDetailOpen = payload;
    },
    dashboardSelectedUser: (state, { payload }) => {
      state.dashboardSelectedUser = payload;
    },
    fetchUserList: (state, { payload }) => {
      state.dataArray = payload;
    },
  },
});

export default loginSlice.reducer;
export const {
  logindata,
  isLogin,
  regBoolean,
  alreadyRegistered,
  userLoggedIn,
  userDashboardModal,
  dashboardSelectedUser,
  fetchUserList,
} = loginSlice.actions;
