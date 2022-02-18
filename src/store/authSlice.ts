import { createSlice } from "@reduxjs/toolkit";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { Auth, defaultValuesAuth } from "./@types/AuthTypes";

const initialStateLogin: Auth = defaultValuesAuth;

export const authSlice = createSlice({
  name: "auth",
  initialState: initialStateLogin,
  reducers: {
    setDidTryAutoLogin: (state) => {
      state.didTryAutoLogin = true;
    },
    login: (state, action) => {
      state.token = action.payload.token.token;
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.didTryAutoLogin = true;
      AsyncStorage.setItem("userData", JSON.stringify(action.payload));
    },
    logout: (state) => {
      const userAuth = initialStateLogin;
      state.user = userAuth.user;
      state.token = userAuth.token;
      state.isAuthenticated = false;
      state.didTryAutoLogin = true;
      AsyncStorage.removeItem("userData");
    },
  },
});

export const { login, logout, setDidTryAutoLogin } = authSlice.actions;

export default authSlice.reducer;
