import { ActivityIndicator } from "react-native";

import { LoadingContainer } from "./styles";

import { Colors } from "@constants/index";

type Props = {
  size?: number | "small" | "large" | undefined;
};

const LoadingInfo = ({ size = "small" }: Props) => {
  return (
    <LoadingContainer>
      <ActivityIndicator size={size} color={Colors.secondary} />
    </LoadingContainer>
  );
};

export default LoadingInfo;
