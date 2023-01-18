import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  product: [],
  quantity: { quantity: 0, id: "" },
  idOfItemAddedToCart: "",
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    setInitialState: (state, actions) => {
      // console.log('what is this payload? ',payload )
      state.product = actions.payload;
    },
    addProductToCart: (state, { payload }) => {
      // console.log('hello hello', payload[0].id)
      let amountIncreased = [...state.product].map((item) => {
        if (item.id === payload[0].id) {
          let am = item.amount;
          return { ...item, amount: am + 1 };
        } else {
          return item;
        }
      });
      // console.log(' sort sort ssort', amountIncreased)
      state.product = amountIncreased;
    },
    increaseAmount: (state, { payload }) => {
      //   console.log("ID ID ID ===== >", payload);
      let amountIncreased = [...state.product].map((item) => {
        if (item.id === payload) {
          let am = item.amount;
          return { ...item, amount: am + 1 };
        } else {
          return item;
        }
      });
      // console.log(' sort sort ssort', amountIncreased)
      state.product = amountIncreased;
    },
    decreaseAmount: (state, { payload }) => {
      let amountDecreased = [...state.product].map((item) => {
        if (item.id === payload) {
          let am = item.amount;
          return { ...item, amount: am - 1 };
        } else {
          return item;
        }
      });
      // console.log(' sort sort ssort', amountIncreased)
      state.product = amountDecreased;
    },
  },
});

export const { setInitialState, addProductToCart, increaseAmount, decreaseAmount } =
  cartSlice.actions;
export default cartSlice.reducer;
