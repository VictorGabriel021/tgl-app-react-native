import { Platform } from "react-native";

import { HeaderButton } from "react-navigation-header-buttons";

import { Ionicons } from "@expo/vector-icons";

import { Colors } from "@constants/index";

const CustomHeaderButton: React.FC = (props) => {
  return (
    <HeaderButton
      title="TGL"
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === "android" ? "white" : Colors.primary}
    />
  );
};

export default CustomHeaderButton;
