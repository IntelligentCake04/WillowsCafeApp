import React, { useState, useEffect } from "react";
import { Text, View, Image } from "react-native";
import GlobalStyles from "../Styles/GlobalStyles";
import QRCode from "react-native-qrcode-svg";
import AsyncStorage from "@react-native-async-storage/async-storage";

const QRScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    const _retrieveData = async () => {
      try {
        AsyncStorage.getItem("phoneNumber")
          .then(value => JSON.parse(value))
          .then(phone => setPhoneNumber(phone))
      } catch (error) {
        console.log(error);
      }
    };

    _retrieveData();
  }, []);

  return (
    (phoneNumber) ?
    <QRCode
      value={phoneNumber}
      size={150}
      backgroundColor="#e3e8ce"
    /> : null
  );
};

export default QRScreen;
