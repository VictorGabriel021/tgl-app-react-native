import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import betReducer from "./betSlice";
import cartReducer from "./cartSlice";
import filterReducer from "./filterSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    bet: betReducer,
    cart: cartReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
