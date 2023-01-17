import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    product: {},
    quantity: ''
};

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers : {
        addToCart: (state,actions) => {
            const { payload } = actions;
            console.log('payload data available at reducer', payload)
            state.product +=  payload
        }
    }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;