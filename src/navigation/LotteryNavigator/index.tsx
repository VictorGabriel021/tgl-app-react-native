import { Platform } from "react-native";

import { Colors } from "@constants/index";

import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { DrawerActions, useNavigation } from "@react-navigation/native";

import { LotteryParamList } from "@navigation/@types";

import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

import {
  LotteryListScreen,
  LotteryBetScreen,
  LotteryCartScreen,
} from "@screens/Lottery";

import CustomHeaderButton from "@components/UI/HeaderButton";

const screenOptionsDefault = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const LotteryNavigator = () => {
  const Stack = createStackNavigator<LotteryParamList>();

  type drawerScreenProp = StackNavigationProp<LotteryParamList, "LotteryList">;
  const navigationDrawer = useNavigation<drawerScreenProp>();

  return (
    <Stack.Navigator screenOptions={screenOptionsDefault}>
      <Stack.Screen
        name="LotteryList"
        component={LotteryListScreen}
        options={{
          title: "Recent Games",
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
                iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
                onPress={() => {
                  navigationDrawer.navigate("LotteryBet");
                }}
              />
            </HeaderButtons>
          ),
        }}
      />
      <Stack.Screen
        name="LotteryBet"
        component={LotteryBetScreen}
        options={{
          title: "Lottery Bet",
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Cart"
                iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
                onPress={() => {
                  navigationDrawer.navigate("LotteryCart");
                }}
              />
            </HeaderButtons>
          ),
        }}
      />
      <Stack.Screen
        name="LotteryCart"
        component={LotteryCartScreen}
        options={{
          title: "Cart",
        }}
      />
    </Stack.Navigator>
  );
};

export default LotteryNavigator;
