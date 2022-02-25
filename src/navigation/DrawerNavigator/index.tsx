import { Button, SafeAreaView } from "react-native";

import { useDispatch } from "react-redux";

import { ContainerButton, DrawerContainer } from "./styles";

import { Colors } from "@constants/index";

import { Entypo, FontAwesome } from "@expo/vector-icons";

import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";

import { DrawerParamList } from "@navigation/@types";

import { logout } from "@store/authSlice";

import LotteryNavigator from "@navigation/LotteryNavigator";
import UserNavigator from "@navigation/UserNavigator";

import { screenOptionsDefault } from "@navigation/helpers/screenOptions";

const DrawerNav = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator = () => {
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
        headerShown: false,
      }}
      drawerContent={(props) => {
        return (
          <DrawerContainer>
            <SafeAreaView>
              <DrawerItemList {...props} />
              <ContainerButton>
                <Button
                  title="Logout"
                  color={Colors.primary}
                  onPress={logoutHandler}
                />
              </ContainerButton>
            </SafeAreaView>
          </DrawerContainer>
        );
      }}
      detachInactiveScreens={false}
    >
      <DrawerNav.Screen
        name="Lottery"
        component={LotteryNavigator}
        options={{
          drawerIcon: (props) => (
            <Entypo
              style={{ width: 25 }}
              name="ticket"
              size={props.size}
              color={props.color}
            />
          ),
        }}
      />
      <DrawerNav.Screen
        name="User"
        component={UserNavigator}
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
        }}
      />
    </DrawerNav.Navigator>
  );
};

export default DrawerNavigator;
