import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./Slices/loginSlice";
import cartSlice from "./Slices/cartSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, REGISTER, REHYDRATE } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  login: loginSlice,
  cart: cartSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REHYDRATE, ]
      },
    }),
});
