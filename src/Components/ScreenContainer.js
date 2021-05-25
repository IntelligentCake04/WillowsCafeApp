import React from "react";
import { View } from "react-native";
import GlobalStyles from "../Styles/GlobalStyles";

export default ScreenContainer = ({ children }) => {
  return <View style={GlobalStyles.container}>{children}</View>;
};
