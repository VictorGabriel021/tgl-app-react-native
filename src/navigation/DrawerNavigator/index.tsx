import { Button, Platform, TouchableOpacity } from "react-native";

import { useDispatch } from "react-redux";

import {
  ContainerButton,
  DrawerContainer,
  DrawerUserContainer,
  DrawerUserText,
} from "./styles";

import { Colors } from "@constants/index";

import {
  Entypo,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";

import { DrawerParamList } from "@navigation/@types";

import { logout } from "@store/authSlice";

import {
  LotteryListScreen,
  LotteryBetScreen,
  LotteryCartScreen,
  UserProfileScreen,
} from "@screens/index";

const screenOptionsDefault = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const DrawerNav = createDrawerNavigator<DrawerParamList>();

type drawerScreenProp = StackNavigationProp<DrawerParamList, "User">;

const DrawerNavigator = () => {
  const navigationDrawer = useNavigation<drawerScreenProp>();
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    await dispatch(logout());
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
      drawerContent={(props) => {
        return (
          <DrawerContainer>
            <DrawerItemList {...props} />
            <ContainerButton>
              <Button
                title="Logout"
                color={Colors.primary}
                onPress={logoutHandler}
              />
            </ContainerButton>
          </DrawerContainer>
        );
      }}
      detachInactiveScreens={false}
    >
      <DrawerNav.Screen
        name="LotteryList"
        component={LotteryListScreen}
        options={{
          headerTitle: "TGL",
          drawerLabel: "Recent Games",
          drawerIcon: (props) => (
            <Entypo
              style={{ width: 25 }}
              name="ticket"
              size={props.size}
              color={props.color}
            />
          ),
          headerRight: () => (
            <TouchableOpacity
              activeOpacity={0.7}
              style={{ marginRight: 15 }}
              onPress={() => navigationDrawer.navigate("LotteryBet")}
            >
              <DrawerUserContainer>
                <DrawerUserText>New Bet</DrawerUserText>
                <Ionicons name="add" size={28} color="white" />
              </DrawerUserContainer>
            </TouchableOpacity>
          ),
        }}
      />
      <DrawerNav.Screen name="LotteryBet" component={LotteryBetScreen} />
      <DrawerNav.Screen name="LotteryCart" component={LotteryCartScreen} />
      <DrawerNav.Screen
        name="User"
        component={UserProfileScreen}
        options={{
          drawerLabel: "User",
          drawerIcon: (props) => (
            <FontAwesome
              style={{ width: 25 }}
              name={"user"}
              size={props.size}
              color={props.color}
            />
          ),
          headerRight: () => (
            <TouchableOpacity
              activeOpacity={0.7}
              style={{ marginRight: 15 }}
              onPress={logoutHandler}
            >
              <DrawerUserContainer>
                <DrawerUserText>Logout</DrawerUserText>
                <MaterialCommunityIcons name="logout" size={20} color="white" />
              </DrawerUserContainer>
            </TouchableOpacity>
          ),
        }}
      />
    </DrawerNav.Navigator>
  );
};

export default DrawerNavigator;
