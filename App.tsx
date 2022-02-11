import { useState } from "react";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import Navigation from "./src/navigation";

const fetchFonts = () => {
  return Font.loadAsync({
    "helvetica-neue-regular": require("./src/assets/fonts/HelveticaNeue-Regular.ttf"),
    "helvetica-neue-italic": require("./src/assets/fonts/HelveticaNeueItalic.ttf"),
    "helvetica-neue-bold": require("./src/assets/fonts/HelveticaNeueBold.ttf"),
    "helvetica-neue-light": require("./src/assets/fonts/HelveticaNeueLight.ttf"),
    "helvetica-neue-bold-italic": require("./src/assets/fonts/HelveticaNeueBoldItalic.ttf"),
    "helvetica-neue-light-italic": require("./src/assets/fonts/HelveticaNeueLightItalic.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(error) => console.log(error)}
      />
    );
  }
  return <Navigation />;
}
