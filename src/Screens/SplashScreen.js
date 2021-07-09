import React, { useEffect } from "react";
import { AsyncStorage, View } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem("isLoggedIn");
        console.log(value.toString());
        if (value == "true") {
          navigation.replace("LoyaltyCardScreen");
        } else {
          navigation.replace("LoginScreen");
        }
      } catch (error) {
        console.log(error);
      }
    };

    _retrieveData();
  }, []);

  return <View></View>;
};

export default SplashScreen;
