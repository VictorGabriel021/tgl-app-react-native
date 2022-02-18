import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

import {
  AuthContainer,
  AuthContent,
  AuthTitle,
  AuthTitleLottery,
  ButtonContainer,
  Button,
  ButtonText,
  ButtonRegister,
  ButtonRegisterText,
  ButtonLoginText,
} from "./styles";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { AuthParamList } from "../../navigation/@types";

type rootScreenProp = StackNavigationProp<AuthParamList, "Login">;

const HomeScreen = () => {
  const navigation = useNavigation<rootScreenProp>();

  let CustomButton: any = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    CustomButton = TouchableNativeFeedback;
  }

  const navigateToLoginHandler = () => {
    navigation.navigate("Login");
  };

  const navigateToRegisterHandler = () => {
    navigation.navigate("Register");
  };

  return (
    <AuthContainer>
      <AuthContent>
        <AuthTitle>The Greatest App</AuthTitle>
        <ButtonContainer>
          <CustomButton activeOpacity={0.7} onPress={navigateToLoginHandler}>
            <Button>
              <ButtonText>for</ButtonText>
            </Button>
          </CustomButton>
        </ButtonContainer>
        <AuthTitleLottery>LOTTERY</AuthTitleLottery>
      </AuthContent>
      <AuthContent>
        <CustomButton activeOpacity={0.7} onPress={navigateToRegisterHandler}>
          <ButtonRegister>
            <ButtonRegisterText>Sign Up</ButtonRegisterText>
          </ButtonRegister>
        </CustomButton>
        <TouchableOpacity activeOpacity={0.4} onPress={navigateToLoginHandler}>
          <ButtonLoginText>Sign In</ButtonLoginText>
        </TouchableOpacity>
      </AuthContent>
    </AuthContainer>
  );
};

export default HomeScreen;
