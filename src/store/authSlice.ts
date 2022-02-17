import { createSlice } from "@reduxjs/toolkit";

import {
  defaultValuesILoginResponse,
  User,
} from "../shared/interfaces/AuthInterfaces";

import AsyncStorage from "@react-native-async-storage/async-storage";

type Auth = {
  user: User;
  token: string;
  isAuthenticated: boolean;
};

const defaultValuesAuth = {
  user: {
    id: 0,
    email: "",
    is_admin: 0,
    name: "",
    token: "",
    token_created_at: "",
    created_at: "",
    updated_at: "",
    picture: "",
  },
  token: "",
  isAuthenticated: false,
};

const initialStateLogin: Auth = defaultValuesAuth;

export const authSlice = createSlice({
  name: "auth",
  initialState: initialStateLogin,
  reducers: {
    authenticated: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = action.payload.isAuthenticated;
    },
    login: (state, action) => {
      state.token = action.payload.token.token;
      state.user = action.payload.user;
      state.isAuthenticated = true;
      AsyncStorage.setItem("userData", JSON.stringify(action.payload));
    },
    logout: (state) => {
      const userAuth = defaultValuesILoginResponse;
      state.user = userAuth.user;
      state.token = userAuth.token.token;
      state.isAuthenticated = false;
      AsyncStorage.removeItem("userData");
    },
  },
});

export const { login, logout, authenticated } = authSlice.actions;

export default authSlice.reducer;
