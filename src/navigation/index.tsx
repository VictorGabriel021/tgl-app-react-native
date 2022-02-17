import { NavigationContainer } from "@react-navigation/native";

import { useDispatch } from "react-redux";

import { getUserData, isAuthenticated } from "../helpers/auth";

import { authenticated } from "../store/authSlice";

import { useEffect } from "react";
import StackNavigator from "./StackNavigator";

const Navigation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUserData();
      const getAuthenticated = await isAuthenticated();
      dispatch(
        authenticated({ ...userData, isAuthenticated: getAuthenticated })
      );
    };
    fetchData();
  }, []);

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
