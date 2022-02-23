import { createSlice } from "@reduxjs/toolkit";

import { Cart, defaultValuesCart } from "./@types/CartTypes";

const initialStateCart: Cart = defaultValuesCart;

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialStateCart,
  reducers: {
    addToCart: (state, action) => {
      state.games.push(action.payload.betItem);
      state.totalCart += action.payload.price;
    },
    removeFromCart: (state, action) => {},
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
