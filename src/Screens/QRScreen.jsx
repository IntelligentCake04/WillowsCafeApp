import React, { useState, useEffect } from "react";
import { Text, View, Image, AsyncStorage } from "react-native";
import GlobalStyles from "../Styles/GlobalStyles";
import QRCode from "react-native-qrcode-svg";

const QRScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    const _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem("phoneNumber");
        console.log(value.toString());
        setPhoneNumber(value.toString());
      } catch (error) {
        console.log(error);
      }
    };

    _retrieveData();
  }, []);

  return (
    <QRCode
      value={"tell: " + phoneNumber}
      size={150}
      backgroundColor="#e3e8ce"
    />
  );
};

export default QRScreen;
