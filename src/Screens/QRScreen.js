import React from "react";
import { Text, View, Image } from "react-native";
import GlobalStyles from "../Styles/GlobalStyles";
import QRCode from "react-native-qrcode-svg";

const QRScreen = () => {
  return <QRCode value="Random String" />;
};

export default QRScreen;
