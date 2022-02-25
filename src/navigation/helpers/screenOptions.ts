import { Platform } from "react-native";

import { Colors } from "@constants/index";

export const screenOptionsDefault = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};
