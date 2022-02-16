import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";

import { RootDrawerParamList, RootStackParamList } from "../@types";

import LotteryListScreen from "../../screens/Lottery/List";
import ResetScreen from "../../screens/Auth/Reset";
import UserScreen from "../../screens/User";
import { Platform, Text, TouchableOpacity } from "react-native";
import { Colors } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

const DrawerNav = createDrawerNavigator<RootDrawerParamList>();

const screenOptionsDefault = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

type rootScreenProp = StackNavigationProp<
  RootStackParamList,
  "AuthPresentation"
>;

type drawerScreenProp = StackNavigationProp<RootDrawerParamList, "User">;

const DrawerNavigator = () => {
  const navigationRoot = useNavigation<rootScreenProp>();
  const navigationDrawer = useNavigation<drawerScreenProp>();

  const logoutHandler = () => {
    navigationRoot.navigate("AuthPresentation");
  };

  return (
    <DrawerNav.Navigator screenOptions={screenOptionsDefault}>
      <DrawerNav.Screen
        name="LotteryList"
        component={LotteryListScreen}
        options={{
          drawerLabel: "Recent Games",
          headerRightContainerStyle: { marginRight: 15 },
          headerRight: () => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigationDrawer.navigate("User")}
            >
              <Ionicons name="add" size={28} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
      <DrawerNav.Screen
        name="User"
        component={UserScreen}
        options={{
          drawerLabel: "User",
          headerRightContainerStyle: { marginRight: 15 },
          headerRight: () => (
            <TouchableOpacity activeOpacity={0.7} onPress={logoutHandler}>
              <Text style={{ color: "white" }}>Logout</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <DrawerNav.Screen
        name="Reset"
        component={ResetScreen}
        options={{ drawerLabel: "Reset password" }}
      />
    </DrawerNav.Navigator>
  );
};

export default DrawerNavigator;
