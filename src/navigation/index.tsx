import { Platform } from "react-native";

import Colors from "../constants";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { RootStackParamList } from "./@types";

import LoginScreen from "../screens/Auth/Login";

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primary : "",
          },
          headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
