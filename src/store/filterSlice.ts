import { createSlice } from "@reduxjs/toolkit";

import { IGamesResponse } from "@shared/interfaces";

const initialStateFilter: IGamesResponse = {
  min_cart_value: 0,
  types: [],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState: initialStateFilter,
  reducers: {
    saveFilterInfo: (state, action) => {
      state.min_cart_value = action.payload.min_cart_value;
      state.types.push(action.payload.types);
    },
  },
});

export const { saveFilterInfo } = filterSlice.actions;

export default filterSlice.reducer;
