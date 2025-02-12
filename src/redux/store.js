import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../redux/categorySlice.js";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice.js";

export const store = configureStore({
  reducer: {
    categories: categorySlice,
    products: productSlice,
    carts: cartSlice,
  },
});
