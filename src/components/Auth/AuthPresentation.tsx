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

const AuthPresentation = () => {
  let CustomButton: any = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    CustomButton = TouchableNativeFeedback;
  }

  return (
    <AuthContainer>
      <AuthTitle>The Greatest App</AuthTitle>
      <ButtonContainer>
        <CustomButton activeOpacity={0.7}>
          <Button>
            <ButtonText>for</ButtonText>
          </Button>
        </CustomButton>
      </ButtonContainer>
      <AuthTitleLottery>LOTTERY</AuthTitleLottery>
    </AuthContainer>
  );
};

export default AuthPresentation;
