import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

import {
  AuthContainer,
  AuthTitle,
  AuthTitleLottery,
  ButtonContainer,
  Button,
  ButtonText,
} from "./styles";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { RootStackParamList } from "../../navigation/@types";

type rootScreenProp = StackNavigationProp<RootStackParamList, "Login">;

const HomeScreen = () => {
  const navigation = useNavigation<rootScreenProp>();

  let CustomButton: any = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    CustomButton = TouchableNativeFeedback;
  }

  const navigateToLoginHandler = () => {
    navigation.navigate("Login");
  };

  return (
    <AuthContainer>
      <AuthTitle>The Greatest App</AuthTitle>
      <ButtonContainer>
        <CustomButton activeOpacity={0.7} onPress={navigateToLoginHandler}>
          <Button>
            <ButtonText>for</ButtonText>
          </Button>
        </CustomButton>
      </ButtonContainer>
      <AuthTitleLottery>LOTTERY</AuthTitleLottery>
    </AuthContainer>
  );
};

export default HomeScreen;
