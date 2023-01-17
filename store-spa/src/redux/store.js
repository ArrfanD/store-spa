import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './Slices/loginSlice'
import cartSlice from './Slices/cartSlice'

export const store = configureStore({
    reducer: {
        login: loginSlice,
        cart: cartSlice
    }
});

