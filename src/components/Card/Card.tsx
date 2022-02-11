import { TouchableOpacity } from "react-native";

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
};

const AuthCard = ({ children, buttonText }: Props) => {
  return (
    <AuthContainer>
      <AuthContainerText>
        <AuthText>Authentication</AuthText>
      </AuthContainerText>
      <CardContainer>
        <CardContent>{children}</CardContent>
        <CardTextActionContainer>
          <TouchableOpacity activeOpacity={0.4}>
            <CardTextAction>
              {buttonText}
              <AntDesign name="arrowright" size={24} color={Colors.secondary} />
            </CardTextAction>
          </TouchableOpacity>
        </CardTextActionContainer>
      </CardContainer>
    </AuthContainer>
  );
};

export default AuthCard;
