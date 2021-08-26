import React from "react";
import { View, Text } from "react-native";
import { ScreenContainer } from "react-native-screens";
import styles from "../../Styles/GlobalStyles";
import { WebView } from "react-native-webview";

const AboutScreen = () => (
  <WebView
    source={{
      uri: "https://www.willowscoffeehouse.com/#bgLayers_comp-kovo93qu1",
    }}
  />
);

export default AboutScreen;
