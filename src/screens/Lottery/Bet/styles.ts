import styled from "styled-components/native";

import { Colors } from "@constants/index";

export const LotteryBetContainerScroll = styled.View`
  height: 100%;
`;

export const LotteryBetContainer = styled.View`
  padding: 20px;
  justify-content: space-between;
`;

export const LotteryBetTitleContainer = styled.View`
  flex-direction: row;
`;

export const LotteryBetTitleText = styled.Text`
  font-family: "helvetica-neue-italic";
  font-size: 18px;
  color: #707070;
`;

export const LotteryBetTitleTextBold = styled(LotteryBetTitleText)`
  font-family: "helvetica-neue-bold-italic";
  margin-right: 5px;
`;

export const LotteryBetChooseGame = styled.View`
  margin: 25px 0 5px 0;
`;

export const LotteryBetText = styled(LotteryBetTitleTextBold)`
  font-size: 14px;
`;

export const LotteryBetDescriptionContainer = styled.View`
  margin: 15px 0;
`;

export const LotteryBetDescription = styled(LotteryBetText)`
  font-family: "helvetica-neue-italic";
`;

export const LotteryBetNumberContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const LotteryBetNumberContent = styled.View`
  background: #adc0c4;
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

export const LotteryBetFilterContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const LotteryBetFilterBtn = styled.View`
  width: 30%;
  padding: 0 10px;
  margin-top: 10px;
  background-color: white;
  border: 1px solid ${Colors.primary};
  border-radius: 30px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const LotteryBetFilterBtnText = styled.Text`
  color: ${Colors.primary};
`;
