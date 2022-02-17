import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import { useSelector } from "react-redux";
import { Colors } from "../../constants";
import LoginScreen from "../../screens/Auth/Login";
import RegisterScreen from "../../screens/Auth/Register";
import ResetScreen from "../../screens/Auth/Reset";
import HomeScreen from "../../screens/Home/Home";
import { RootState } from "../../store/store";
import { RootStackParamList } from "../@types";
import DrawerNavigator from "../DrawerNavigator";

const StackNavigator = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  const screenOptionsDefault = {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primary : "",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
  };

  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);

  return (
    <Stack.Navigator screenOptions={screenOptionsDefault}>
      {!isAuth ? (
        <>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerTitle: "Home" }}
          />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Reset" component={ResetScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </>
      ) : (
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
