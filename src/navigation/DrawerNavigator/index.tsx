import { createDrawerNavigator } from "@react-navigation/drawer";

import { RootDrawerParamList, RootStackParamList } from "../@types";

import LotteryListScreen from "../../screens/Lottery/List";
import UserScreen from "../../screens/User";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";

const DrawerNav = createDrawerNavigator<RootDrawerParamList>();

const screenOptionsDefault = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

type rootScreenProp = StackNavigationProp<RootStackParamList, "Home">;

type drawerScreenProp = StackNavigationProp<RootDrawerParamList, "User">;

const DrawerNavigator = () => {
  const navigationRoot = useNavigation<rootScreenProp>();
  const navigationDrawer = useNavigation<drawerScreenProp>();

  const dispatch = useDispatch();

  const logoutHandler = async () => {
    await dispatch(logout());
    navigationRoot.navigate("Home");
  };

  return (
    <DrawerNav.Navigator
      screenOptions={{
        ...screenOptionsDefault,
        drawerActiveBackgroundColor: Colors.primary,
        drawerInactiveBackgroundColor: "#ccc",
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: "white",
      }}
      initialRouteName="LotteryList"
    >
      <DrawerNav.Screen
        name="LotteryList"
        component={LotteryListScreen}
        options={{
          drawerLabel: "Recent Games",
          headerRight: () => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigationDrawer.navigate("User")}
            >
              <Ionicons name="add" size={28} color="white" />
            </TouchableOpacity>
          ),
          headerRightContainerStyle: { marginRight: 15 },
        }}
      />
      <DrawerNav.Screen
        name="User"
        component={UserScreen}
        options={{
          drawerLabel: "User",
          headerRight: () => (
            <TouchableOpacity activeOpacity={0.7} onPress={logoutHandler}>
              <Text style={{ color: "white" }}>Logout</Text>
            </TouchableOpacity>
          ),
          headerRightContainerStyle: { marginRight: 15 },
        }}
      />
    </DrawerNav.Navigator>
  );
};

export default DrawerNavigator;
