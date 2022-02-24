import styled from "styled-components/native";

import { Colors } from "@constants/index";

export const ProfileContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin: 25px;
  border-radius: 10px;
`;

export const ProfileImg = styled.Image`
  height: 230px;
  width: 230px;
  border-radius: 230px;
  margin-bottom: 20px;
  border: 7px solid ${Colors.primary};
`;

export const ProfileInfo = styled.View`
  margin-bottom: 20px;
  align-items: center;
`;

export const ProfileText = styled.Text`
  color: #707070;
  font-size: 14px;
  line-height: 22px;
`;
