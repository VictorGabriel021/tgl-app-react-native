import Toast from "react-native-tiny-toast";

export const toastShowSuccess = (message: string) => {
  Toast.showSuccess(message, {
    position: Toast.position.BOTTOM,
    containerStyle: { backgroundColor: "green" },
    textStyle: { color: "white", fontSize: 16 },
    imgStyle: { tintColor: "white", height: 35, width: 35 },
  });
};

export const toastShowError = (message: string) => {
  Toast.showSuccess(message, {
    position: Toast.position.BOTTOM,
    containerStyle: { backgroundColor: "red" },
    textStyle: { color: "white", fontSize: 16 },
    imgSource: require("../assets/images/error-icon.png"),
    imgStyle: { tintColor: "white", height: 35, width: 35 },
  });
};
