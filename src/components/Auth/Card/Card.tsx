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
} from "./styles";

import { AntDesign } from "@expo/vector-icons";

type Props = {
  children: React.ReactNode;
  title: string;
  titleRedirect: string;
  onNavigation: () => void;
};

const AuthCard = ({ children, title, titleRedirect, onNavigation }: Props) => {
  return (
    <KeyboardAvoidingView behavior="height" keyboardVerticalOffset={120}>
      <ScrollView>
        <AuthContainer>
          <AuthContainerText>
            <AuthText>{title}</AuthText>
          </AuthContainerText>
          <CardContainer>
            <CardContent>{children}</CardContent>
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
