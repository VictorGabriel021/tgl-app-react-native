import styled from "styled-components/native";

import { Colors } from "@constants/index";

export const CardTextActionContainer = styled.View`
  align-items: center;
  justify-content: flex-end;
  padding: 10px 0;
`;

export const CardTextAction = styled.Text`
  font-family: "helvetica-neue-bold-italic";
  font-size: 28px;
  color: ${Colors.secondary};
`;
