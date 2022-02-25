import { AuthParamList } from "@navigation/@types";

import { createStackNavigator } from "@react-navigation/stack";

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ResetScreen,
  ChangePasswordScreen,
} from "@screens/Auth";

import { screenOptionsDefault } from "@navigation/helpers/screenOptions";

const AuthNavigator = () => {
  const Stack = createStackNavigator<AuthParamList>();

  return (
    <Stack.Navigator screenOptions={screenOptionsDefault}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Reset" component={ResetScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
