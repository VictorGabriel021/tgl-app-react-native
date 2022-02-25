import { useSelector } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";

import { AuthNavigator, DrawerNavigator } from "@navigation/index";

import { RootState } from "@store/store";

import StartupScreen from "@screens/Startup";

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
