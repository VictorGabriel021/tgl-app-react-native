import { Platform } from "react-native";

import { UserParamList } from "@navigation/@types";

import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

import { DrawerActions, useNavigation } from "@react-navigation/native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "@components/UI/HeaderButton";

import { UserProfileScreen, UserEditScreen } from "@screens/User";

import { screenOptionsDefault } from "@navigation/helpers/screenOptions";

type drawerScreenProp = StackNavigationProp<UserParamList, "UserProfile">;

const UserNavigator = () => {
  const Stack = createStackNavigator<UserParamList>();
  const navigation = useNavigation<drawerScreenProp>();

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
                  navigation.dispatch(DrawerActions.toggleDrawer());
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
                  navigation.navigate("UserEdit");
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
