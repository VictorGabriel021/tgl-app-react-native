import { useEffect } from "react";

import { ActivityIndicator } from "react-native";

import { LoadingContainer } from "./styles";

import { useDispatch } from "react-redux";

import { Colors } from "../../constants";

import { getUserData, isAuthenticated } from "../../helpers/auth";

import { login, setDidTryAutoLogin } from "../../store/authSlice";

const StartupScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const tryLogin = async () => {
      const userData = await getUserData();
      const isAuth = await isAuthenticated();

      if (isAuth) {
        dispatch(login(userData));
        return;
      }
      dispatch(setDidTryAutoLogin());
    };
    tryLogin();
  }, [dispatch]);

  return (
    <LoadingContainer>
      <ActivityIndicator size="large" color={Colors.primary} />
    </LoadingContainer>
  );
};

export default StartupScreen;
