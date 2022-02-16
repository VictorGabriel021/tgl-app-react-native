import { Platform } from "react-native";

import { Colors } from "../constants";

import { RootStackParamList } from "./@types";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import DrawerNavigator from "./DrawerNavigator";

import AuthPresentationScreen from "../components/Auth/AuthPresentation";
import LoginScreen from "../screens/Auth/Login";
import ResetScreen from "../screens/Auth/Reset";
import RegisterScreen from "../screens/Auth/Register";

const Stack = createStackNavigator<RootStackParamList>();

const screenOptionsDefault = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptionsDefault}>
        <Stack.Screen
          name="AuthPresentation"
          component={AuthPresentationScreen}
          options={{ headerTitle: "Home" }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Reset" component={ResetScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
