import { Platform } from "react-native";

import { Colors } from "@constants/index";

import { UserParamList } from "@navigation/@types";

import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

import { DrawerActions, useNavigation } from "@react-navigation/native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "@components/UI/HeaderButton";

import { UserProfileScreen, UserEditScreen } from "@screens/User";

const screenOptionsDefault = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const UserNavigator = () => {
  const Stack = createStackNavigator<UserParamList>();

  type drawerScreenProp = StackNavigationProp<UserParamList, "UserProfile">;
  const navigationDrawer = useNavigation<drawerScreenProp>();

  return (
    <Stack.Navigator screenOptions={screenOptionsDefault}>
      <Stack.Screen
        name="UserProfile"
        component={UserProfileScreen}
        options={{
          title: "User Profile",
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Menu"
                iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
                onPress={() => {
                  navigationDrawer.dispatch(DrawerActions.toggleDrawer());
                }}
              />
            </HeaderButtons>
          ),
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="New Bet"
                iconName={
                  Platform.OS === "android" ? "md-create" : "ios-create"
                }
                onPress={() => {
                  navigationDrawer.navigate("UserEdit");
                }}
              />
            </HeaderButtons>
          ),
        }}
      />
      <Stack.Screen
        name="UserEdit"
        component={UserEditScreen}
        options={{ title: "Edit User" }}
      />
    </Stack.Navigator>
  );
};

export default UserNavigator;
