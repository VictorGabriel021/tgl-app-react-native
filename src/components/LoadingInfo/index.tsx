import { ActivityIndicator } from "react-native";

import { LoadingContainer } from "./styles";

import { Colors } from "../../constants";

const LoadingInfo = () => {
  return (
    <LoadingContainer>
      <ActivityIndicator size="small" color={Colors.secondary} />
    </LoadingContainer>
  );
};

export default LoadingInfo;
