import { Entypo } from "@expo/vector-icons";

import { Platform } from "react-native";

import Colors from "../../constants";

import { RootBottomTabParamList } from "../@types";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AuthPresentation from "../../components/Auth/AuthPresentation";
import LoginScreen from "../../screens/Auth/Login";
import RecoverScreen from "../../screens/Auth/Recover";
import RegisterScreen from "../../screens/Auth/Register";

const BottomTab = createBottomTabNavigator<RootBottomTabParamList>();

const screenOptionsDefault = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: Colors.primaryDark,
        tabBarInactiveBackgroundColor: Colors.primary,
        tabBarInactiveTintColor: "white",
        tabBarActiveTintColor: "white",
        ...screenOptionsDefault,
        tabBarLabelStyle: {
          fontFamily: "helvetica-neue-bold",
          fontSize: 10,
          paddingVertical: 4,
        },
        tabBarStyle: { height: 55 },
      }}
    >
      <BottomTab.Screen
        name="AuthPresentation"
        component={AuthPresentation}
        options={{
          title: "Home",
          tabBarIcon: () => {
            return <Entypo name="home" size={24} color="white" />;
          },
        }}
      />
      <BottomTab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarIcon: () => {
            return <Entypo name="login" size={24} color="white" />;
          },
        }}
      />
      <BottomTab.Screen
        name="Recover"
        component={RecoverScreen}
        options={{
          tabBarIcon: () => {
            return <Entypo name="forward" size={24} color="white" />;
          },
          title: "Reset password",
        }}
      />
      <BottomTab.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          tabBarIcon: () => {
            return <Entypo name="user" size={24} color="white" />;
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
