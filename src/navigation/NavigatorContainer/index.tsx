import { useSelector } from "react-redux";

import { RootState } from "@store/store";

import { NavigationContainer } from "@react-navigation/native";

import StartupScreen from "@screens/Startup";

import { AuthNavigator, DrawerNavigator } from "@navigation/index";

const Navigation = () => {
  const { isAuthenticated, didTryAutoLogin } = useSelector(
    (state: RootState) => state.auth
  );

  return (
    <NavigationContainer>
      {isAuthenticated && <DrawerNavigator />}
      {!isAuthenticated && didTryAutoLogin && <AuthNavigator />}
      {!isAuthenticated && !didTryAutoLogin && <StartupScreen />}
    </NavigationContainer>
  );
};

export default Navigation;
