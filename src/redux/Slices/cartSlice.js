import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  product: [],
  cartProducts: [],
  quantity: { quantity: 0, id: "" },
  idOfItemAddedToCart: "",
  selectedProduct: "",
  productsInCart: "",
  cartPriceTotal: "",
  cartQuantityTotal: "",
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
      state.cartProducts = amountIncreased;
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
      // console.log(" sort sort ssort", amountIncreased);
      state.product = amountIncreased;
      state.cartProducts = amountIncreased;
      state.cartQuantityTotal = amountIncreased.reduce(
        (a, x) => a + x.amount,
        0
      );
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
      state.cartProducts = amountDecreased;
      state.cartQuantityTotal = amountDecreased.reduce(
        (a, x) => a + x.amount,
        0
      );
    },
    selectProduct: (state, { payload }) => {
      state.selectedProduct = payload;
    },
    addProductToCartOnce: (state, { payload }) => {
      let amountIncreased = [...state.product].map((item) => {
        if (item.id === payload) {
          let am = item.amount;
          return { ...item, amount: 1 };
        } else {
          return item;
        }
      });
      // console.log(' one one one one one', payload)
      state.product = amountIncreased;
      state.cartProducts = amountIncreased;
    },
    cartTotal: (state, { payload }) => {
      console.log("reducer items check here", payload);
      state.cartPriceTotal = payload.reduce(
        (a, x) => a + (x.amount * (x.price * 83)),
        0
      );
      state.cartQuantityTotal = payload.reduce((a, x) => a + x.amount, 0);
    },
  },
});

export const {
  setInitialState,
  addProductToCart,
  cartTotal,
  increaseAmount,
  decreaseAmount,
  selectProduct,
  addProductToCartOnce,
} = cartSlice.actions;
export default cartSlice.reducer;
