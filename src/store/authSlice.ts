import { createSlice } from "@reduxjs/toolkit";

import { ILoginResponse } from "../shared/interfaces";

import { defaultValuesILoginResponse } from "../shared/interfaces/AuthInterfaces";

import AsyncStorage from "@react-native-async-storage/async-storage";

const initialStateLogin: ILoginResponse = defaultValuesILoginResponse;

export const authSlice = createSlice({
  name: "auth",
  initialState: initialStateLogin,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      AsyncStorage.setItem("userData", JSON.stringify(action.payload));
    },
    logout: (state) => {
      const userAuth = { user: {}, token: {} } as ILoginResponse;
      state.user = userAuth.user;
      state.token = userAuth.token;
      AsyncStorage.removeItem("userData");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
