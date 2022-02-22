import styled from "styled-components/native";

import { Colors } from "@constants/index";

export const LotteryBetActionButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const LotteryBetActionButton = styled.View`
  background-color: white;
  border: 1px solid ${Colors.primary};
  border-radius: 10px;
  height: 40px;
  padding: 0 10px;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

export const LotteryBetActionButtonText = styled.Text`
  color: ${Colors.primary};
`;

export const LotteryBetBtnAddToCart = styled(LotteryBetActionButton)`
  width: 100%;
  background-color: ${Colors.primary};
  flex-direction: row;
`;

export const LotteryBetBtnAddToCartText = styled.Text`
  margin-left: 10px;
  color: white;
`;
