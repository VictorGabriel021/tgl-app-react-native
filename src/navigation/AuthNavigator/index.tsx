import { Platform } from "react-native";

import { Colors } from "../../constants";

import { AuthParamList } from "../@types";

import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../../screens/Home/Home";
import LoginScreen from "../../screens/Auth/Login";
import RegisterScreen from "../../screens/Auth/Register";
import ResetScreen from "../../screens/Auth/Reset";
import ChangePasswordScreen from "../../screens/Auth/ChangePassword";

const screenOptionsDefault = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const AuthNavigator = () => {
  const Stack = createStackNavigator<AuthParamList>();

  return (
    <Stack.Navigator screenOptions={screenOptionsDefault}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerTitle: "TGL" }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Reset" component={ResetScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
