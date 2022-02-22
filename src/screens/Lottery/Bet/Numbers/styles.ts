import styled from "styled-components/native";

import { Colors } from "@constants/index";

export const LotteryBetNumberContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const LotteryBetNumberContent = styled.View<{ active: boolean }>`
  background: ${(props) => (props.active ? Colors.primary : "#adc0c4")};
  height: 50px;
  width: 50px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  margin: 7px;
`;

export const LotteryBetNumber = styled.Text`
  color: white;
`;
