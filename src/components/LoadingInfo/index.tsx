import { ActivityIndicator } from "react-native";

import { LoadingContainer } from "./styles";

import { Colors } from "@constants/index";

type Props = {
  size?: number | "small" | "large" | undefined;
  color?: string;
};

const LoadingInfo = ({ size = "small", color }: Props) => {
  return (
    <LoadingContainer>
      <ActivityIndicator size={size} color={color ? color : Colors.secondary} />
    </LoadingContainer>
  );
};

export default LoadingInfo;
