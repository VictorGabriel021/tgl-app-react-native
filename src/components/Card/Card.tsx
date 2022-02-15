import {
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

import {
  AuthContainer,
  AuthContainerText,
  AuthText,
  CardContainer,
  CardContent,
  CardTextActionContainer,
  CardTextAction,
} from "./styles";

import { AntDesign } from "@expo/vector-icons";

import Colors from "../../constants";

type Props = {
  children: React.ReactNode;
  buttonText: string;
  title: string;
  onSumbit: () => void;
};

const AuthCard = ({ children, buttonText, title, onSumbit }: Props) => {
  return (
    <KeyboardAvoidingView behavior="height" keyboardVerticalOffset={120}>
      <ScrollView>
        <AuthContainer>
          <AuthContainerText>
            <AuthText>{title}</AuthText>
          </AuthContainerText>
          <CardContainer>
            <CardContent>{children}</CardContent>
            <CardTextActionContainer>
              <TouchableOpacity activeOpacity={0.4} onPress={onSumbit}>
                <CardTextAction>
                  {buttonText}
                  <AntDesign
                    name="arrowright"
                    size={24}
                    color={Colors.secondary}
                  />
                </CardTextAction>
              </TouchableOpacity>
            </CardTextActionContainer>
          </CardContainer>
        </AuthContainer>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AuthCard;
