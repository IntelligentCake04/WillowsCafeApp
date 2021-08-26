import React from "react";
import { View } from "react-native";
import GlobalStyles from "../Styles/GlobalStyles";

const ScreenContainer = ({ children }) => {
  return <View style={GlobalStyles.container}>{children}</View>;
};

export default ScreenContainer;
