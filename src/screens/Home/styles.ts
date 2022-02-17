import styled from "styled-components/native";

import { Colors } from "../../constants";

export const AuthContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow: hidden;
  height: 100%;
`;

export const AuthTitle = styled.Text`
  font-family: "helvetica-neue-bold-italic";
  color: #707070;
  font-size: 35px;
`;

export const AuthTitleLottery = styled(AuthTitle)`
  font-size: 45px;
`;

export const ButtonContainer = styled.View`
  border-radius: 25px;
  overflow: hidden;
  margin: 10px 0;
`;

export const Button = styled.View`
  background-color: ${Colors.secondary};
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 40px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: "helvetica-neue-bold-italic";
`;
