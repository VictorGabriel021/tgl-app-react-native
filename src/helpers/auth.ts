import AsyncStorage from "@react-native-async-storage/async-storage";

import { ILoginResponse } from "../shared/interfaces";

export const getUserData = async () => {
  const userAuth = (await AsyncStorage.getItem("userData")) || "{}";
  const parsedUserAuth: ILoginResponse = JSON.parse(userAuth);

  return parsedUserAuth;
};

const isTokenValid = (expires_at: string) => {
  const expirationDate = new Date(expires_at);
  return Date.now() <= expirationDate.getTime();
};

export const isAuthenticated = async () => {
  const userData = await getUserData();
  return (
    !!userData.token &&
    !!userData.token.token &&
    !!isTokenValid(userData.token.expires_at)
  );
};
