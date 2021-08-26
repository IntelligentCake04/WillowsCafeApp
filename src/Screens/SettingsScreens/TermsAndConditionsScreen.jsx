import React from "react";
import WebView from "react-native-webview";

const TermsAndConditionsScreen = () => (
  <WebView
    source={{
      uri: "https://www.willowscoffeehouse.com/",
    }}
  />
);

export default TermsAndConditionsScreen;
