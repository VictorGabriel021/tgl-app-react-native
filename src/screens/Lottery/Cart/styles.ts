import styled from "styled-components/native";

import { Colors } from "@constants/index";

export const CardContainer = styled.View`
  background-color: white;
  border-radius: 10px;
  margin: 20px;
  overflow: hidden;
`;

export const CardContent = styled.View`
  padding: 20px 15px;
`;

export const ListContainer = styled.View`
  margin: 10px 0;
  flex-direction: row;
  align-items: center;
`;

export const ListBar = styled.View<{ color: string }>`
  height: 100%;
  width: 5px;
  background-color: ${(props) => props.color};
  border-radius: 50px;
  margin: 0 5px;
`;

export const ListInfo = styled.View`
  flex: 1;
  padding: 2px 0;
`;

export const ListItemText = styled.Text<{ color?: string }>`
  font-family: "helvetica-neue-bold-italic";
  color: ${(props) => (props.color ? props.color : "#707070")};
  line-height: 18px;
  margin-left: 5px;
`;

export const ListItemContainer = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;

export const ListItemPrice = styled(ListItemText)`
  font-family: "helvetica-neue-bold";
`;

export const TotalCartContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TotalCart = styled.Text`
  color: #707070;
  font-size: 18px;
  margin-right: 4px;
`;

export const CartTitle = styled(TotalCart)`
  font-family: "helvetica-neue-bold-italic";
  margin: 10px 5px 10px 0;
`;

export const SaveContainer = styled.TouchableOpacity`
  background-color: #f4f4f4;
  height: 80px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SaveText = styled.Text`
  color: ${Colors.primary};
  font-size: 28px;
  font-family: "helvetica-neue-bold-italic";
  margin-right: 5px;
`;

export const ErrorContainer = styled.View`
  background-color: #f1baba;
  height: 60px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

export const ErrorText = styled.Text`
  color: red;
  font-size: 16px;
`;
