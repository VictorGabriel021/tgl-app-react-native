import { useEffect } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useDispatch, useSelector } from "react-redux";
import { Colors } from "../../constants";
import { getUserData, isAuthenticated } from "../../helpers/auth";
import { authenticated } from "../../store/authSlice";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/@types";
import { useNavigation } from "@react-navigation/native";
import { RootState } from "../../store/store";

type rootScreenProp = StackNavigationProp<RootStackParamList, "AuthNavigator">;

const StartupScreen = () => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);

  const dispatch = useDispatch();
  const navigation = useNavigation<rootScreenProp>();

  useEffect(() => {
    const tryLogin = async () => {
      const userData = await getUserData();
      const getAuthenticated = await isAuthenticated();
      if (userData && getAuthenticated) {
        dispatch(
          authenticated({ ...userData, isAuthenticated: getAuthenticated })
        );
        navigation.navigate("DrawerNavigator");
      } else {
        navigation.navigate("AuthNavigator");
      }
    };
    tryLogin();
  }, [dispatch, isAuth]);

  return (
    <View style={styles.screen}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StartupScreen;
