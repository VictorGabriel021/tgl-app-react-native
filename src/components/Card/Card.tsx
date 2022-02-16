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

import { Colors } from "../../constants";

type Props = {
  children: React.ReactNode;
  buttonText: string;
  title: string;
  titleRedirect: string;
  onNavigation: () => void;
  onSumbit: () => void;
};

const AuthCard = ({
  children,
  buttonText,
  title,
  titleRedirect,
  onNavigation,
  onSumbit,
}: Props) => {
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
          <TouchableOpacity activeOpacity={0.4} onPress={onNavigation}>
            <AuthContainerText>
              {titleRedirect === "Back" && (
                <AntDesign name="arrowleft" size={24} color="#707070" />
              )}
              <AuthText>{titleRedirect}</AuthText>
              {titleRedirect !== "Back" && (
                <AntDesign name="arrowright" size={24} color="#707070" />
              )}
            </AuthContainerText>
          </TouchableOpacity>
        </AuthContainer>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AuthCard;
