import React from "react";
import { Text, View, Image } from "react-native";
import GlobalStyles from "../Styles/GlobalStyles";
import QRCode from "react-native-qrcode-svg";

const QRScreen = () => {
  return <QRCode
     value="Random String"
     size={150}
     backgroundColor="#e3e8ce"
  />;
};

export default QRScreen;
