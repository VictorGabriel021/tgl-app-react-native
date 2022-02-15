import styled from "styled-components/native";

import Colors from "../../constants";

export const AuthContainer = styled.View`
  height: 100%;
  padding: 20px 0;
`;

export const AuthContainerText = styled.View`
  align-items: center;
`;

export const AuthText = styled.Text`
  font-family: "helvetica-neue-bold-italic";
  color: #707070;
  font-size: 28px;
`;

export const CardContainer = styled.View`
  flex: 1;
  background-color: white;
  margin: 10px 20px;
  border-radius: 20px;
  padding: 20px;
`;

export const CardContent = styled.View`
  height: 70%;
`;

export const CardTextActionContainer = styled.View`
  height: 30%;
  align-items: center;
  justify-content: flex-end;
`;

export const CardTextAction = styled(AuthText)`
  color: ${Colors.secondary};
`;
