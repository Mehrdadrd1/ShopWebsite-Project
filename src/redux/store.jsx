import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import { userReducer } from "./UserSlice";

export const store = configureStore({
  reducer: cartReducer,
  userReducer,
});
