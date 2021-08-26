import React from "react";
import { Text, ScrollView, View } from "react-native";
import ScreenContainer from "../../Components/ScreenContainer";
import styles from "../../Styles/GlobalStyles";
import WebView from "react-native-webview";

const PolicyScreen = () => (
  <WebView
    source={{
      uri: "https://www.willowscoffeehouse.com/",
    }}
  />
);

export default PolicyScreen;
