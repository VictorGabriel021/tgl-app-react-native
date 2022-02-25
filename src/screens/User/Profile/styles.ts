import styled from "styled-components/native";

import { Colors } from "@constants/index";

export const ProfileContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin: 20px;
  border-radius: 10px;
`;

export const ProfileImg = styled.Image`
  height: 120px;
  width: 120px;
  border-radius: 120px;
  margin: 10px 0;
  border-color: ${Colors.primary};
  border-width: 7px;
`;

export const ProfileInfo = styled.View`
  margin-bottom: 20px;
  align-items: center;
`;

export const ProfileText = styled.Text`
  color: #707070;
  font-size: 14px;
`;
