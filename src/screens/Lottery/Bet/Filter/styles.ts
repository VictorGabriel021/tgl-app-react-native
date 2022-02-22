import styled from "styled-components/native";

export const LotteryBetFilterContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const LotteryBetFilterBtn = styled.TouchableOpacity<{
  color: string;
  active: boolean;
}>`
  width: 30%;
  padding: 0 10px;
  margin-top: 10px;
  background-color: ${(props) => (props.active ? props.color : "white")};
  border: 1px solid ${(props) => props.color};
  border-radius: 30px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const LotteryBetFilterBtnText = styled.Text<{
  color: string;
  active: boolean;
}>`
  color: ${(props) => (props.active ? "white" : props.color)};
`;
