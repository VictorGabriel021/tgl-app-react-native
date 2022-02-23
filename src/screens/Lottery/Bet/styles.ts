import styled from "styled-components/native";

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
  text-transform: uppercase;
  font-family: "helvetica-neue-italic";
  font-size: 18px;
  color: #707070;
`;

export const LotteryBetTitleTextBold = styled(LotteryBetTitleText)`
  text-transform: none;
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
  margin: 10px 0;
`;

export const LotteryBetDescription = styled(LotteryBetText)`
  font-family: "helvetica-neue-italic";
`;
