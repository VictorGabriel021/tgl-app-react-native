import { ActivityIndicator } from "react-native";

import { LoadingContainer } from "./styles";

import { Colors } from "@constants/index";

const LoadingInfo = () => {
  return (
    <LoadingContainer>
      <ActivityIndicator size="small" color={Colors.secondary} />
    </LoadingContainer>
  );
};

export default LoadingInfo;
